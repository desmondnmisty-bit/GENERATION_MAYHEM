import medicBotUrl from './assets/models/medic_bot.glb?url';
import dockNightSkyUrl from './assets/sky/GM_Sky_DockNight_Equirect_PoleFade.png';
import * as THREE from 'three';
import { Assets, dockPiece } from './assets';

export const X_MIN = -14;      // west container wall face
export const X_EDGE = 14.2;    // quay edge (water beyond)
export const Z_START = -6;
export const ZONES = [
  { z0: -8, z1: 40, barrier: 42, name: 'BERTH 1' },
  { z0: 42, z1: 86, barrier: 88, name: 'BERTH 2 — CRANE YARD' },
  { z0: 88, z1: 132, barrier: 134, name: 'BERTH 3 — FLOODED LOT' },
  { z0: 134, z1: 176, barrier: -1, name: 'EXTRACTION BERTH' },
];
export const GATE_Z = 172;
export const Z_END = 178;

export interface Box { minX: number; maxX: number; minZ: number; maxZ: number; h: number; active: boolean; ride?: 'top' | 'ramp' | 'rail'; rampDir?: 1 | -1 }
/** Soft Hyperdrive rideables: surface height of a rideable box at (x,z); ramps rise along +z (rampDir 1) or -z (-1). */
export function boxTop(b: Box, z: number) {
  if (b.ride !== 'ramp') return b.h;
  const t = (z - b.minZ) / (b.maxZ - b.minZ); return b.h * Math.max(0, Math.min(1, b.rampDir === -1 ? 1 - t : t));
}
export interface Puddle { x: number; z: number; r: number; phase: number; on: boolean; warn: boolean; mesh: THREE.Mesh; arcs: THREE.LineSegments; mat: THREE.MeshStandardMaterial }
export interface Barrier { z: number; box: Box; mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; open: number }

function canvasTex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, srgb = true) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d')!);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
function rng(seed: number) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

export class World {
  scene: THREE.Scene;
  colliders: Box[] = [];
  barriers: Barrier[] = [];
  puddles: Puddle[] = [];
  lightAnchors: { pos: THREE.Vector3; color: number; intensity: number; dist: number }[] = [];
  pointLights: THREE.PointLight[] = [];
  moon: THREE.DirectionalLight;
  hook = { pivot: new THREE.Vector3(0, 17, 66), len: 15.2, angle: 0, prevX: 0, group: new THREE.Group(), load: new THREE.Mesh(), cable: new THREE.Mesh(), vx: 0, light: new THREE.Mesh() };
  gate = { group: new THREE.Group(), energy: null as THREE.MeshBasicMaterial | null, strips: [] as THREE.MeshStandardMaterial[], active: false, light: 0 };
  private fogMats: THREE.Material[] = [];
  private fogCols: THREE.Group[] = [];
  private scrollTex: THREE.Texture[] = [];
  private blinkers: THREE.MeshBasicMaterial[] = [];
  waterMat!: THREE.MeshStandardMaterial;
  private dust!: THREE.Points;
  private sky!: THREE.Mesh;
  hemi!: THREE.HemisphereLight;
  arena: 'dock' | 'hyperdrive' = 'dock';
  private dockSkyMap: THREE.Texture | null = null;
  private hdSkyMap: THREE.Texture | null = null;
  private hdGroup: THREE.Group | null = null;
  /** Level 2 (Soft Hyperdrive, Misty 11-03): war-dusk sky + olive/amber light + greybox_v001 ring/tower/approach walls beyond the lane. Walkable greybox lane with real colliders (buildHyperdriveWalk); ring GLB stays as backdrop. */
  setArena(a: 'dock' | 'hyperdrive') {
    this.arena = a;
    const hd = a === 'hyperdrive';
    const m = this.sky.material as THREE.MeshBasicMaterial;
    if (!this.dockSkyMap && m.map) this.dockSkyMap = m.map;
    const fog = this.scene.fog as THREE.FogExp2;
    fog.color.set(hd ? 0x3a2c1c : 0x101c22); fog.density = hd ? 0.0062 : 0.0075;
    this.hemi.color.set(hd ? 0xd6a060 : 0x5a7f96); this.hemi.groundColor.set(hd ? 0x2a2614 : 0x1a1020);
    this.moon.color.set(hd ? 0xffb070 : 0xb4d2ea);
    for (const c of this.fogCols) c.visible = !hd; // no toxic-green dock fog in the army base
    for (const fm of this.fogMats) (fm as THREE.MeshBasicMaterial).color.set(hd ? 0xffa040 : 0x3cff5a);
    for (const pl of this.pointLights) pl.color.set(hd ? 0xff9a3a : 0x39ff14);
    this.scene.environmentIntensity = hd ? 0.8 : 0.55;
    if (hd) {
      if (this.hdSkyMap) { m.map = this.hdSkyMap; m.needsUpdate = true; }
      else new THREE.TextureLoader().load('hyperdrive/sky.jpg', (t) => {
        t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.MirroredRepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping; t.repeat.set(2, 1); t.offset.y = -0.12;
        this.hdSkyMap = t; if (this.arena === 'hyperdrive') { m.map = t; m.needsUpdate = true; }
      });
      if (!this.hdGroup) {
        const g = new THREE.Group(); g.name = 'hyperdrive-greybox'; this.hdGroup = g;
        // Blender -Y approach -> rotate PI so the approach lane runs north along our lane; ring centre lands past the extraction gate.
        g.rotation.y = Math.PI; g.position.set(0, -0.05, 222); g.scale.set(1.9, 1, 1);
        this.scene.add(g);
        import('three/examples/jsm/loaders/GLTFLoader.js').then(({ GLTFLoader }) => new GLTFLoader().load('hyperdrive/greybox.glb', (gl) => {
          gl.scene.traverse((o) => {
            const me = o as THREE.Mesh; if (!me.isMesh) return;
            if (/ZONE_Ground|Ground/i.test(me.name) || /Ground/i.test(me.parent?.name ?? '')) { me.visible = false; return; }
            me.receiveShadow = true; me.castShadow = false; me.matrixAutoUpdate = false; me.updateMatrix();
          });
          g.add(gl.scene); this.skinHyperdrive(gl.scene);
        }, undefined, (e) => console.warn('[GM] hyperdrive greybox failed', e)));
      }
      this.hdGroup.visible = true;
    }
    for (const o of this.dockDress) o.visible = !hd;
    if (this.dockPockets) this.dockPockets.visible = !hd;
    for (const b of this.pocketBoxes) b.active = !hd;
    for (const b of this.dockColliders) b.active = !hd;
    for (const b of this.hdColliders) b.active = hd;
    this.hdWalk.visible = hd;
    for (const p of this.puddles) { p.on = false; p.warn = false; }
    if (hd) {} else {
      if (this.dockSkyMap) { m.map = this.dockSkyMap; m.needsUpdate = true; }
      if (this.hdGroup) this.hdGroup.visible = false;
    }
  }
  private dockDress: THREE.Object3D[] = [];
  private dockColliders: Box[] = [];
  private hdColliders: Box[] = [];
  private hdWalk = new THREE.Group();
  hdRails: Box[] = [];
  private hdSkins: { mesh: THREE.Mesh; key: string; sx: number; sz: number; h: number; ry: number }[] = [];
  private hdSkinned = false;
  /** Swap plain greybox boxes for real greybox.glb piece meshes (kicker/funbox/sandbag/ring wall/facade), scaled to each collider footprint. */
  private skinHyperdrive(glb: THREE.Object3D) {
    if (this.hdSkinned) return; this.hdSkinned = true;
    const tpl: Record<string, THREE.Mesh> = {};
    glb.traverse((o) => { const me = o as THREE.Mesh; if (!me.isMesh) return; for (const k of ['DECK_Kicker', 'DECK_FunBox', 'DECK_SandbagLip', 'RH_OuterWall', 'RING_Facade']) if (!tpl[k] && me.name.startsWith(k)) tpl[k] = me; });
    let n = 0;
    for (const sk of this.hdSkins) {
      const t = tpl[sk.key]; if (!t) continue;
      const geo = t.geometry.clone(); geo.computeBoundingBox(); const bb = geo.boundingBox!; const sz = new THREE.Vector3(); bb.getSize(sz);
      const c = new THREE.Vector3(); bb.getCenter(c); geo.translate(-c.x, -bb.min.y, -c.z);
      // Blender Y-up export: longest horizontal axis -> along piece x
      if (sz.z > sz.x !== sk.sz > sk.sx) { geo.rotateY(Math.PI / 2); const t2 = sz.x; sz.x = sz.z; sz.z = t2; }
      geo.scale(sk.sx / Math.max(0.01, sz.x), sk.h / Math.max(0.01, sz.y), sk.sz / Math.max(0.01, sz.z));
      if (sk.key === 'DECK_Kicker') continue; // wedge collider shape must match exactly; keep authored wedge
      const old = sk.mesh; old.geometry.dispose(); old.geometry = geo; old.position.y = 0; n++;
    }
    console.info('[GM] hyperdrive skins', n, Object.keys(tpl));
  }
  /** Soft Hyperdrive WALKABLE greybox (L2): greybox_v001 piece vocabulary (APP sandbags/crates, RH ring walls + console banks, COR ribs, CPK console ring)
   *  laid along the skate lane in lane space, every piece with a real collider. Dock containers/cranes/water/hook/puddles are hidden + their colliders off in L2. */
  private buildHyperdriveWalk() {
    const g = this.hdWalk; g.name = 'hyperdrive-walkable'; g.visible = false; this.scene.add(g);
    const conc = new THREE.MeshStandardMaterial({ color: 0x6b6450, roughness: 0.9, metalness: 0.05 });
    const olive = new THREE.MeshStandardMaterial({ color: 0x4a4a2a, roughness: 0.85, metalness: 0.2 });
    const sand = new THREE.MeshStandardMaterial({ color: 0x8a7650, roughness: 1 });
    const steel = new THREE.MeshStandardMaterial({ color: 0x3a3c40, roughness: 0.5, metalness: 0.7 });
    const amber = new THREE.MeshStandardMaterial({ color: 0x221408, emissive: 0xff8a2a, emissiveIntensity: 2.2 });
    const pink = new THREE.MeshStandardMaterial({ color: 0x220812, emissive: 0xff1f9f, emissiveIntensity: 2.4 });
    const piece = (mat: THREE.Material, cx: number, cz: number, sx: number, sz: number, h: number, ry = 0, trim?: THREE.Material, skin?: string, ride?: Box['ride']) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(sx, h, sz), mat); if (skin) this.hdSkins.push({ mesh: m, key: skin, sx, sz, h, ry }); m.position.set(cx, h / 2, cz); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true; g.add(m);
      if (trim) { const t = new THREE.Mesh(new THREE.BoxGeometry(sx + 0.04, 0.12, sz + 0.04), trim); t.position.set(cx, h - 0.25, cz); t.rotation.y = ry; g.add(t); }
      // AABB collider of the (possibly rotated) footprint
      const c = Math.abs(Math.cos(ry)), s = Math.abs(Math.sin(ry)); const ex = (sx * c + sz * s) / 2, ez = (sx * s + sz * c) / 2;
      const b: Box = { minX: cx - ex, maxX: cx + ex, minZ: cz - ez, maxZ: cz + ez, h, active: false, ride }; this.colliders.push(b); this.hdColliders.push(b);
      return b;
    };
    // RIDEABLES: kicker = wedge rising north (+z), launch off the lip; rail = thin grind bar; box = funbox/ledge you land on top of.
    const wedge = (cx: number, cz: number, w: number, len: number, h: number, dir: 1 | -1 = 1) => {
      const geo = new THREE.BufferGeometry(); const x0 = -w / 2, x1 = w / 2, z0 = -len / 2, z1 = len / 2;
      const lo = dir === 1 ? z0 : z1, hi = dir === 1 ? z1 : z0;
      const v = [x0,0,lo, x1,0,lo, x1,h,hi, x0,0,lo, x1,h,hi, x0,h,hi, x0,0,hi, x0,h,hi, x1,h,hi, x0,0,hi, x1,h,hi, x1,0,hi, x0,0,lo, x0,h,hi, x0,0,hi, x1,0,lo, x1,0,hi, x1,h,hi];
      geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, kick); m.material.side = THREE.DoubleSide; m.position.set(cx, 0, cz); m.castShadow = m.receiveShadow = true; g.add(m);
      this.hdSkins.push({ mesh: m, key: 'DECK_Kicker', sx: w, sz: len, h, ry: dir === 1 ? 0 : Math.PI });
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, 0.18), amber); stripe.position.set(cx, h, cz + (hi)); g.add(stripe);
      const b: Box = { minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - len / 2, maxZ: cz + len / 2, h, active: false, ride: 'ramp', rampDir: dir }; this.colliders.push(b); this.hdColliders.push(b);
    };
    const rail = (cx: number, z0: number, z1: number, h = 0.75) => {
      const len = z1 - z0, cz = (z0 + z1) / 2;
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, len, 8), railMat); bar.rotation.x = Math.PI / 2; bar.position.set(cx, h, cz); g.add(bar);
      for (let z = z0 + 0.3; z <= z1; z += 3) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, h, 0.1), steel); post.position.set(cx, h / 2, z); g.add(post); }
      const b: Box = { minX: cx - 0.12, maxX: cx + 0.12, minZ: z0, maxZ: z1, h, active: false, ride: 'rail' }; this.colliders.push(b); this.hdColliders.push(b); this.hdRails.push(b);
    };
    const kick = new THREE.MeshStandardMaterial({ color: 0x5a5440, roughness: 0.8, metalness: 0.1 });
    const railMat = new THREE.MeshStandardMaterial({ color: 0xffb070, emissive: 0xff7a1a, emissiveIntensity: 1.2, metalness: 0.9, roughness: 0.25 });
    // perimeter: base walls (west + east, no quay water in Hyperdrive) + end caps
    for (let z = -10; z < 182; z += 8) { piece(conc, X_MIN - 1, z + 4, 2, 8, 7, 0, amber); piece(conc, X_EDGE + 0.9, z + 4, 1.6, 8, 7, 0, amber); }
    piece(conc, 0, -11, 32, 2.6, 7); piece(conc, 0, Z_END + 1.5, 32, 2.6, 7);
    // APPROACH (-8..40): sandbag nests + crates, zig-zag line
    const bags: [number, number, number][] = [[-7, 8, 0], [7, 16, 0], [-4, 24, 0.3], [8, 30, -0.3], [-9, 35, 0]];
    for (const [x, z, r] of bags) piece(sand, x, z, 5, 1.2, 0.9, r, undefined, 'DECK_SandbagLip', 'top');
    wedge(0, 4, 3, 4, 1.1); piece(conc, 0, 8.5, 3, 5, 1.1, 0, amber, 'DECK_FunBox', 'top'); wedge(0, 13, 3, 4, 1.1, -1);
    rail(-3, 18, 32); rail(3.5, 40, 47); wedge(3.5, 37, 2.4, 3.5, 0.8);
    for (const [x, z] of [[-11, 12], [11, 4], [10.8, 22], [-11, 28], [7, 33]]) piece(olive, x, z, 1.6, 1.6, 1.5, 0.2);
    // RING HALL (42..86): inner ring wall arcs around a central core pillar, console banks on the outer ring
    const rc = 64;
    piece(steel, 0, rc, 6, 6, 6, Math.PI / 4, pink, 'RING_Facade');
    // skateable ring path: funbox ledges ride the ring E/W of the core, kicker in + out through the N/S openings
    piece(conc, -6.2, rc, 2.2, 7, 0.9, 0, amber, 'DECK_FunBox', 'top'); piece(conc, 6.2, rc, 2.2, 7, 0.9, 0, amber, 'DECK_FunBox', 'top');
    wedge(-6.2, rc - 4.75, 2.2, 1.5, 0.9); wedge(6.2, rc - 4.75, 2.2, 1.5, 0.9); wedge(-6.2, rc + 4.75, 2.2, 1.5, 0.9, -1); wedge(6.2, rc + 4.75, 2.2, 1.5, 0.9, -1);
    wedge(0, 51, 3, 3.5, 0.9); rail(-7, 44, 53); rail(7, 75, 85);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2; if (i === 0 || i === 5) continue; // N/S openings = the skate line
      piece(conc, Math.sin(a) * 9.5, rc + Math.cos(a) * 9.5, 5.2, 0.9, 2.4, a, amber, 'RH_OuterWall');
    }
    for (const [x, z] of [[-11.5, 50], [11.5, 50], [-11.5, 78], [11.5, 78]]) piece(olive, x, z, 1.4, 4, 1.2, 0, amber);
    // CORRIDOR (88..132): structural ribs pinch the lane, debris scrap in the gaps
    for (let z = 94; z < 132; z += 9) { piece(steel, -10.5, z, 5, 1.2, 5.5, 0, pink); piece(steel, 10.5, z, 5, 1.2, 5.5, 0, pink); }
    for (const [x, z] of [[-5, 99], [5, 108], [-6, 116], [5, 125]]) piece(olive, x, z, 2.2, 1.4, 0.9, 0.5, undefined, 'DECK_FunBox', 'top');
    rail(0, 92, 120, 0.8); wedge(0, 90.5, 2.2, 3, 0.85); wedge(2.5, 128, 3, 4, 1.2);
    // COCKPIT CORE (134..176): console ring round the Hive with four gaps + cockpit walls
    const cc = 156;
    for (let i = 0; i < 12; i++) { if (i % 3 === 0) continue; const a = (i / 12) * Math.PI * 2; piece(steel, Math.sin(a) * 7, cc + Math.cos(a) * 7, 3.4, 0.8, 1.0, a, amber, 'DECK_FunBox', 'top'); }
    for (const [x, z] of [[-9, 140], [9, 140], [-10, 170], [10, 170]]) piece(conc, x, z, 4, 1.2, 3, 0, pink, 'RH_OuterWall');
    rail(-4, 138, 146, 0.8); rail(4, 166, 174, 0.8); wedge(0, 143, 3, 3.5, 1.0);
  }
  private railChev!: THREE.Texture;
  private groundChev!: THREE.Texture;

  constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    scene.background = new THREE.Color(0x0b1418);
    scene.fog = new THREE.FogExp2(0x101c22, 0.0075);
    this.buildSky();

    // environment map: tiny neon room -> PMREM, gives wet surfaces coloured reflections
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x020403);
    const strip = (c: number, x: number, y: number, z: number, w: number, h: number, d: number) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color: c }));
      m.position.set(x, y, z); envScene.add(m);
    };
    strip(0x30ff40, -9, 3, 0, 0.5, 1.2, 30); strip(0x30ff40, 9, 5, 4, 0.5, 0.6, 20);
    strip(0xff10d0, 0, 4, 12, 8, 6, 0.5); strip(0xff10d0, 0, 2, -12, 4, 1, 0.5);
    strip(0x335577, 0, 14, 0, 30, 0.5, 30); strip(0xff8a2b, 6, 2, -8, 2, 0.6, 0.5);
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(envScene, 0.02).texture;
    scene.environmentIntensity = 0.55;
    pm.dispose();

    // lights
    this.hemi = new THREE.HemisphereLight(0x5a7f96, 0x1a1020, 1.7); scene.add(this.hemi);
    const moon = new THREE.DirectionalLight(0xb4d2ea, 2.3);
    moon.position.set(-12, 30, -10);
    moon.castShadow = true;
    moon.shadow.mapSize.set(1024, 1024);
    const sc = moon.shadow.camera; sc.left = -26; sc.right = 26; sc.top = 26; sc.bottom = -26; sc.near = 1; sc.far = 90;
    moon.shadow.bias = -0.0008; moon.shadow.normalBias = 0.03;
    scene.add(moon); scene.add(moon.target);
    this.moon = moon;
    for (let i = 0; i < 7; i++) { const pl = new THREE.PointLight(0x39ff14, 0, 14, 1.6); scene.add(pl); this.pointLights.push(pl); }

    this.buildGround();
    const kids0 = new Set(scene.children), col0 = this.colliders.length;
    this.buildWater();
    this.buildContainers();
    this.buildCranes();
    this.buildFog();
    this.buildBrand();
    this.dockColliders = this.colliders.slice(col0);
    const kids1 = new Set(scene.children);
    this.buildBarriers();
    const kids2 = new Set(scene.children);
    this.buildPuddles();
    this.buildBreathePockets();
    this.buildHook();
    for (const o of scene.children) if (!kids0.has(o) && (kids1.has(o) || !kids2.has(o))) this.dockDress.push(o);
    this.buildHyperdriveWalk();
    this.buildGate();
    this.buildDust();
    this.buildReadability();
    this.buildAerialRails();
  }

  // Night-dock skybox: inverted gradient sphere with stars, moon and city glow (fog-free so rails silhouette against it).
  private buildSky() {
    const tex = canvasTex(1024, 512, (c) => {
      const g = c.createLinearGradient(0, 0, 0, 512);
      g.addColorStop(0, '#02030a'); g.addColorStop(0.35, '#0a1430'); g.addColorStop(0.47, '#3a1846'); g.addColorStop(0.5, '#ff4fb0'); g.addColorStop(0.53, '#1a0f1c'); g.addColorStop(1, '#05070a');
      c.fillStyle = g; c.fillRect(0, 0, 1024, 512);
      const r = rng(7);
      for (let i = 0; i < 700; i++) { c.fillStyle = `rgba(255,255,255,${0.3 + r() * 0.7})`; const s = r() < 0.08 ? 2 : 1; c.fillRect(r() * 1024, r() * 230, s, s); }
      // city skyline silhouette on horizon
      c.fillStyle = '#070509';
      for (let x = 0; x < 1024; x += 6 + r() * 14) { const h = 6 + r() * 30; c.fillRect(x, 256 - h, 5 + r() * 12, h); }
      c.fillStyle = 'rgba(255,200,120,0.7)';
      for (let i = 0; i < 160; i++) c.fillRect(r() * 1024, 228 + r() * 26, 1, 1);
      const m = c.createRadialGradient(300, 110, 4, 300, 110, 60); m.addColorStop(0, '#f4f8ff'); m.addColorStop(0.18, '#cfe0ff'); m.addColorStop(0.3, 'rgba(120,160,255,0.25)'); m.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = m; c.fillRect(220, 30, 160, 160);
    });
    tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping;
    const sky = new THREE.Mesh(new THREE.SphereGeometry(320, 48, 24), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false }));
    sky.name = 'skybox'; sky.renderOrder = -1; sky.frustumCulled = false;
    this.sky = sky; this.scene.add(sky);
    // Soft Dock Night equirect (v001). Knobs: ?skyYaw=deg rotates, ?skyV=0..0.3 lifts skyline (raises plate on screen).
    const q = new URLSearchParams(location.search);
    const yaw = parseFloat(q.get('skyYaw') ?? '0') * Math.PI / 180;
    const vOff = parseFloat(q.get('skyV') ?? '0.15');
    sky.rotation.y = yaw;
    new THREE.TextureLoader().load(dockNightSkyUrl, (t) => {
      t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
      t.offset.y = -vOff; t.anisotropy = 4;
      const m = sky.material as THREE.MeshBasicMaterial; m.map = t; m.needsUpdate = true;
    });
  }

  // Aerial grind rails: twin gantry rails overhead the skate lane, chevrons scroll north = the route.
  private buildAerialRails() {
    const z0 = Z_START, z1 = GATE_Z, len = z1 - z0, cz = (z0 + z1) / 2;
    const railMat = new THREE.MeshStandardMaterial({ color: 0x22262e, metalness: 0.8, roughness: 0.35, emissive: 0x39ff14, emissiveIntensity: 0.35 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x39ff14, fog: false });
    const legMat = new THREE.MeshStandardMaterial({ color: 0x3a3f48, metalness: 0.6, roughness: 0.5 });
    const H = 7.5;
    for (const x of [-3.2, 3.2]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, len), railMat); rail.position.set(x, H, cz); this.scene.add(rail);
      const lip = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, len), glowMat); lip.position.set(x, H + 0.22, cz); this.scene.add(lip);
    }
    // gantry portals every berth-ish
    for (let z = z0 + 4; z < z1; z += 14) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(X_EDGE - X_MIN - 1, 0.5, 0.5), legMat); beam.position.set((X_MIN + X_EDGE) / 2, H + 0.6, z); this.scene.add(beam);
      for (const x of [X_MIN + 0.6, X_EDGE - 0.6]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.4, H + 0.6, 0.4), legMat); leg.position.set(x, (H + 0.6) / 2, z); this.scene.add(leg); }
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 0.3), new THREE.MeshBasicMaterial({ color: 0xff1fcf, fog: false })); lamp.position.set(0, H + 0.3, z); this.scene.add(lamp);
    }
    // scrolling chevron ribbon between the rails, pointing north (+Z)
    const chev = canvasTex(128, 128, (c) => {
      c.clearRect(0, 0, 128, 128); c.strokeStyle = '#39ff14'; c.lineWidth = 14; c.lineCap = 'round';
      c.beginPath(); c.moveTo(24, 40); c.lineTo(64, 90); c.lineTo(104, 40); c.stroke();
    });
    chev.repeat.set(1, len / 4);
    const rib = new THREE.Mesh(new THREE.PlaneGeometry(2.2, len), new THREE.MeshBasicMaterial({ map: chev, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    rib.rotation.x = -Math.PI / 2; rib.rotation.z = Math.PI; rib.position.set(0, H + 0.05, cz); this.scene.add(rib);
    this.railChev = chev;
    // matching ground ribbon under the rails = the skate line
    const gchev = chev.clone(); gchev.needsUpdate = true; gchev.repeat.set(1, len / 4);
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(1.6, len), new THREE.MeshBasicMaterial({ map: gchev, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
    gr.rotation.x = -Math.PI / 2; gr.rotation.z = Math.PI; gr.position.set(0, 0.035, cz); this.scene.add(gr);
    this.groundChev = gchev;
  }

  // Readability pass: sodium quay lamps, magenta lane neon, lit berth gates per wave zone.
  private buildReadability() {
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.6, roughness: 0.5 });
    const headMat = new THREE.MeshBasicMaterial({ color: 0xffb347 });
    const poolMat = new THREE.MeshBasicMaterial({ color: 0xff9a30, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false });
    const pole = new THREE.CylinderGeometry(0.09, 0.12, 6, 8), head = new THREE.BoxGeometry(0.9, 0.18, 0.4), pool = new THREE.CircleGeometry(4.2, 24);
    for (let z = 4; z < 176; z += 18) {
      const x = X_EDGE - 0.9;
      const p = new THREE.Mesh(pole, poleMat); p.position.set(x, 3, z); p.castShadow = true; this.scene.add(p);
      const h = new THREE.Mesh(head, headMat); h.position.set(x - 0.4, 6, z); this.scene.add(h);
      const g = new THREE.Mesh(pool, poolMat); g.rotation.x = -Math.PI / 2; g.position.set(x - 1.5, 0.03, z); this.scene.add(g);
      this.lightAnchors.push({ pos: new THREE.Vector3(x - 0.6, 5.6, z), color: 0xffa040, intensity: 22, dist: 18 });
    }
    // magenta neon edge strips along the skate lane
    const neon = new THREE.MeshBasicMaterial({ color: 0xff2bd6 });
    for (const x of [-6.5, 6.5]) for (let z = 0; z < 176; z += 12) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 7), neon); m.position.set(x, 0.03, z + 3.5); this.scene.add(m);
    }
    // berth gates: lit arch + numbered floor band at each zone boundary
    const archMat = new THREE.MeshBasicMaterial({ color: 0x40e0ff });
    const bandMat = new THREE.MeshBasicMaterial({ color: 0x40e0ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const z of [30, 70, 110, 150]) {
      for (const x of [X_MIN + 1.2, X_EDGE - 0.4]) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.25, 5, 0.25), archMat); post.position.set(x, 2.5, z); this.scene.add(post); }
      const top = new THREE.Mesh(new THREE.BoxGeometry(X_EDGE - X_MIN - 1.6, 0.2, 0.25), archMat); top.position.set((X_MIN + X_EDGE) / 2 + 0.4, 5, z); this.scene.add(top);
      const band = new THREE.Mesh(new THREE.PlaneGeometry(X_EDGE - X_MIN - 1.6, 1.2), bandMat); band.rotation.x = -Math.PI / 2; band.position.set((X_MIN + X_EDGE) / 2 + 0.4, 0.025, z); this.scene.add(band);
      this.lightAnchors.push({ pos: new THREE.Vector3(0, 4.5, z), color: 0x40e0ff, intensity: 16, dist: 16 });
    }
  }

  /** Dockyards breathe (Misty 1104): each berth gets a split container wall ~2/3 up the berth with 3 wide gaps,
   *  so there's a front fight floor + a rear "pocket" to escape, reload, and plan. Plus low crate cover in the pocket. */
  buildBreathePockets() {
    const mat = new THREE.MeshStandardMaterial({ color: 0x2b3a4a, roughness: 0.7, metalness: 0.3 });
    const trim = new THREE.MeshStandardMaterial({ color: 0x39ff14, emissive: 0x39ff14, emissiveIntensity: 1.2 });
    const crate = new THREE.MeshStandardMaterial({ color: 0x6a4a2a, roughness: 0.9 });
    const g = new THREE.Group(); g.name = 'dock-breathe-pockets'; this.dockPockets = g;
    for (const zone of ZONES) {
      const z = zone.z0 + (zone.z1 - zone.z0) * 0.62;
      for (const [x0, x1] of [[-11, -4], [3, 10]]) {
        const cx = (x0 + x1) / 2, sx = x1 - x0;
        const m = new THREE.Mesh(new THREE.BoxGeometry(sx, 2.6, 2.4), mat); m.position.set(cx, 1.3, z); m.castShadow = m.receiveShadow = true; g.add(m);
        const t = new THREE.Mesh(new THREE.BoxGeometry(sx, 0.08, 2.45), trim); t.position.set(cx, 2.62, z); g.add(t);
        this.pocketBoxes.push(this.addBox(cx, z, sx, 2.4, 2.6));
      }
      for (const [dx, dz] of [[-7, 6], [6.5, 8], [0, 11]]) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.2, 1.4), crate); c.position.set(dx, 0.6, z + dz); c.castShadow = true; g.add(c);
        this.pocketBoxes.push(this.addBox(dx, z + dz, 1.4, 1.4, 1.2));
      }
    }
    // heal station in each pocket: glowing emerald med crate (one charge per berth, recharges on run reset)
    const medMat = new THREE.MeshStandardMaterial({ color: 0x1fd18a, emissive: 0x1fd18a, emissiveIntensity: 1.6 });
    for (const zone of ZONES) {
      const z = zone.z0 + (zone.z1 - zone.z0) * 0.62 + 5;
      const m = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.9, 1.1), medMat); m.position.set(-9.5, 0.45, z); g.add(m);
      const cross = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: 0xffffff })); cross.position.set(-9.5, 1.0, z); g.add(cross);
      const c2 = cross.clone(); c2.rotation.y = Math.PI / 2; g.add(c2);
      const light = new THREE.PointLight(0x1fd18a, 6, 7); light.position.set(-9.5, 2, z); g.add(light);
      const hs = { x: -9.5, z, used: false, mesh: m, mat: medMat, bot: null as THREE.Object3D | null, extras: [cross, c2] };
      this.healSpots.push(hs);
    }
    this.scene.add(g);
    // VEH_MED_BOT (lil 4-leg medic, charcoal/gunmetal + neon-pink crosses) replaces the stand-in crate once loaded
    import('three/examples/jsm/loaders/GLTFLoader.js').then(({ GLTFLoader }) => new GLTFLoader().load(medicBotUrl, (gl) => {
      const src = gl.scene; const bb = new THREE.Box3().setFromObject(src); const sz = bb.getSize(new THREE.Vector3());
      const k = 1.15 / Math.max(0.001, sz.y);
      for (const h of this.healSpots) {
        const b = src.clone(true); b.scale.setScalar(k); b.position.set(h.x, -bb.min.y * k, h.z); b.rotation.y = Math.PI / 2;
        b.traverse((o: any) => { if (o.isMesh) o.castShadow = true; });
        g.add(b); h.bot = b; h.mesh.visible = false; for (const e of h.extras) e.visible = false;
        (h.extras[0].parent as THREE.Object3D).children.forEach((c) => { if ((c as any).isPointLight && c.position.z === h.z) (c as THREE.PointLight).color.set(0xff3fb0); });
        if (h.used) b.visible = false;
      }
    }, undefined, (e) => console.warn('[GM] medic bot failed', e)));
  }
  healSpots: { x: number; z: number; used: boolean; mesh: THREE.Mesh; mat: THREE.MeshStandardMaterial; bot: THREE.Object3D | null; extras: THREE.Object3D[] }[] = [];
  resetHeals() { for (const h of this.healSpots) { h.used = false; if (h.bot) h.bot.visible = true; else h.mesh.visible = true; } }
  useHeal(h: World['healSpots'][number]) { h.used = true; h.mesh.visible = false; if (h.bot) h.bot.visible = false; for (const e of h.extras) e.visible = false; }
  dockPockets?: THREE.Group;
  pocketBoxes: Box[] = [];
  addBox(cx: number, cz: number, sx: number, sz: number, h = 3) {
    const b: Box = { minX: cx - sx / 2, maxX: cx + sx / 2, minZ: cz - sz / 2, maxZ: cz + sz / 2, h, active: true };
    this.colliders.push(b); return b;
  }

  private buildGround() {
    const r = rng(7);
    const albedo = canvasTex(1024, 1024, (c) => {
      c.fillStyle = '#0d0e10'; c.fillRect(0, 0, 1024, 1024);
      for (let i = 0; i < 26000; i++) { const v = 8 + r() * 26; c.fillStyle = `rgb(${v},${v},${v + 2})`; c.fillRect(r() * 1024, r() * 1024, 2, 2); }
      for (let i = 0; i < 40; i++) { c.fillStyle = `rgba(0,0,0,${0.15 + r() * 0.3})`; c.beginPath(); c.ellipse(r() * 1024, r() * 1024, 30 + r() * 120, 20 + r() * 60, r() * 3, 0, 7); c.fill(); }
      c.strokeStyle = 'rgba(40,40,44,0.8)'; c.lineWidth = 3;
      for (let i = 0; i < 18; i++) { c.beginPath(); let x = r() * 1024, y = r() * 1024; c.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 120; y += (r() - 0.5) * 120; c.lineTo(x, y); } c.stroke(); }
    });
    albedo.repeat.set(4, 22);
    const rough = canvasTex(512, 512, (c) => {
      c.fillStyle = '#b4b4b4'; c.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 6; i++) { const g = c.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, '#2a2a2a'); g.addColorStop(0.6, '#4a4a4a'); g.addColorStop(1, 'rgba(180,180,180,0)');
        c.save(); c.translate(r() * 512, r() * 512); c.scale(60 + r() * 90, 30 + r() * 50); c.fillStyle = g; c.beginPath(); c.arc(0, 0, 1, 0, 7); c.fill(); c.restore(); }
    }, false);
    rough.repeat.set(2, 10);
    const nrm = Assets.tex.asphaltNormal;
    if (nrm) { nrm.wrapS = nrm.wrapT = THREE.RepeatWrapping; nrm.repeat.set(6, 30); }
    const mat = new THREE.MeshStandardMaterial({ map: albedo, roughnessMap: rough, roughness: 1, metalness: 0.15, normalMap: nrm || null, normalScale: new THREE.Vector2(0.25, 0.25), envMapIntensity: 0.55 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(36, 200), mat);
    ground.rotation.x = -Math.PI / 2; ground.position.set(-3.8, 0, 85);
    ground.receiveShadow = true;
    this.scene.add(ground);

    // lane markings, quay-edge hazard curb, bollards
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xffd21a, roughness: 0.6, emissive: 0x8a6400 });
    const lines = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.25, 3), lineMat, 60);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    let n = 0;
    for (let z = -6; z < 176 && n < 60; z += 6) { m4.compose(new THREE.Vector3(0, 0.012, z), q, new THREE.Vector3(1, 1, 1)); lines.setMatrixAt(n++, m4); }
    lines.count = n; lines.receiveShadow = true; this.scene.add(lines);
    const hz = Assets.tex.hazard;
    if (hz) { hz.wrapS = hz.wrapT = THREE.RepeatWrapping; hz.repeat.set(1, 120); }
    const curbMat = new THREE.MeshStandardMaterial({ color: hz ? 0xffffff : 0xe6be14, map: hz || null, roughness: 0.7, emissive: 0x5a4400, emissiveMap: hz || null });
    const curb = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.18, 190), curbMat);
    curb.position.set(X_EDGE + 0.1, 0.09, 85); curb.receiveShadow = true; this.scene.add(curb);
    const quayFace = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3, 190), new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.9 }));
    quayFace.position.set(X_EDGE + 0.15, -1.5, 85); this.scene.add(quayFace);
    const bollardGeo = new THREE.CylinderGeometry(0.22, 0.28, 0.7, 10);
    const bollards = new THREE.InstancedMesh(bollardGeo, new THREE.MeshStandardMaterial({ color: 0x222226, metalness: 0.7, roughness: 0.4 }), 20);
    for (let i = 0; i < 20; i++) { m4.makeTranslation(X_EDGE - 0.3, 0.35, -4 + i * 9.3); bollards.setMatrixAt(i, m4); }
    bollards.castShadow = true; this.scene.add(bollards);
  }

  private buildWater() {
    const nrm = Assets.tex.asphaltNormal ? Assets.tex.asphaltNormal.clone() : null;
    if (nrm) { nrm.wrapS = nrm.wrapT = THREE.RepeatWrapping; nrm.repeat.set(20, 60); nrm.needsUpdate = true; this.scrollTex.push(nrm); }
    this.waterMat = new THREE.MeshStandardMaterial({ color: 0x021510, roughness: 0.08, metalness: 0.85, normalMap: nrm, normalScale: new THREE.Vector2(0.35, 0.35), envMapIntensity: 1.6, emissive: 0x001a08, transparent: true, opacity: 0.94 });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(120, 260), this.waterMat);
    water.rotation.x = -Math.PI / 2; water.position.set(X_EDGE + 60, -1.1, 85);
    this.scene.add(water);
    // distant freighter silhouette with deck lights
    const hull = new THREE.Mesh(new THREE.BoxGeometry(14, 9, 110), new THREE.MeshStandardMaterial({ color: 0x07090b, roughness: 0.9 }));
    hull.position.set(48, 3, 90); this.scene.add(hull);
    const tower = new THREE.Mesh(new THREE.BoxGeometry(10, 12, 12), hull.material); tower.position.set(48, 13, 50); this.scene.add(tower);
    const lightGeo = new THREE.SphereGeometry(0.25, 6, 4);
    const lm = new THREE.MeshBasicMaterial({ color: 0xffb060 });
    const lights = new THREE.InstancedMesh(lightGeo, lm, 40);
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < 40; i++) { m4.makeTranslation(41 + (i % 2) * 0.2, 7.7 + (i % 3) * 0.1, 40 + i * 2.6); lights.setMatrixAt(i, m4); }
    this.scene.add(lights);
  }

  private containerMats() {
    const r = rng(3);
    const ribs = canvasTex(512, 256, (c) => {
      c.fillStyle = '#bdbdbd'; c.fillRect(0, 0, 512, 256);
      for (let x = 0; x < 512; x += 16) { const g = c.createLinearGradient(x, 0, x + 16, 0); g.addColorStop(0, '#8a8a8a'); g.addColorStop(0.5, '#dcdcdc'); g.addColorStop(1, '#7a7a7a'); c.fillStyle = g; c.fillRect(x, 0, 16, 256); }
      c.fillStyle = '#555'; c.fillRect(0, 0, 512, 10); c.fillRect(0, 246, 512, 10);
      for (let i = 0; i < 90; i++) { c.fillStyle = `rgba(60,30,10,${r() * 0.35})`; c.fillRect(r() * 512, r() * 256, 2 + r() * 8, 10 + r() * 80); }
      c.fillStyle = 'rgba(255,255,255,0.75)'; c.font = 'bold 22px monospace';
      c.fillText('DLSU ' + Math.floor(100000 + r() * 899999), 30, 50); c.font = 'bold 14px monospace'; c.fillText('MAX GR 30480 KG', 30, 72);
    });
    return ribs;
  }

  private buildContainers() {
    const ribs = this.containerMats();
    const geo = new THREE.BoxGeometry(2.44, 2.59, 6.06);
    const colors = [0x8c1c16, 0x1d3b4a, 0x2a2f36, 0x6a3a12, 0x184030, 0x5a1030];
    const mat = new THREE.MeshStandardMaterial({ map: ribs, roughness: 0.65, metalness: 0.45, envMapIntensity: 0.6 });
    const placements: { x: number; y: number; z: number; ry: number; c: number }[] = [];
    const r = rng(11);
    // west wall: stacks along z (long axis along z)
    for (let z = -12; z < 182; z += 6.2) {
      const hgt = 2 + Math.floor(r() * 2.2);
      for (let lvl = 0; lvl < hgt; lvl++) placements.push({ x: X_MIN - 1.3 - (lvl % 2) * 0.05, y: 1.3 + lvl * 2.6, z: z + (r() - 0.5) * 0.3, ry: 0, c: Math.floor(r() * colors.length) });
      placements.push({ x: X_MIN - 4.0, y: 1.3, z, ry: 0, c: Math.floor(r() * colors.length) });
      placements.push({ x: X_MIN - 4.0, y: 3.9, z, ry: 0, c: Math.floor(r() * colors.length) });
    }
    this.addBox(X_MIN - 3, 85, 6, 210, 8);
    // back + end walls (long axis along x)
    for (let x = -12; x < 15; x += 6.2) {
      for (let lvl = 0; lvl < 3; lvl++) placements.push({ x, y: 1.3 + lvl * 2.6, z: -11, ry: Math.PI / 2, c: Math.floor(r() * colors.length) });
      for (let lvl = 0; lvl < 3; lvl++) placements.push({ x, y: 1.3 + lvl * 2.6, z: Z_END + 1.5, ry: Math.PI / 2, c: Math.floor(r() * colors.length) });
    }
    this.addBox(0, -11, 30, 2.6, 8);
    this.addBox(0, Z_END + 1.5, 30, 2.6, 8);
    // cover containers inside the lanes
    const cover: [number, number, number, number][] = [ // x, z, ry, stack
      [-6, 14, 0, 1], [6.5, 28, Math.PI / 2, 1], [-8, 52, Math.PI / 2, 2], [7, 78, 0, 1],
      [-5, 102, 0, 1], [8, 118, Math.PI / 2, 1], [-9, 150, 0, 2], [8.5, 156, 0, 1],
    ];
    for (const [x, z, ry, st] of cover) {
      for (let l = 0; l < st; l++) placements.push({ x, y: 1.3 + l * 2.6, z, ry: ry + l * 0.08, c: Math.floor(r() * colors.length) });
      if (ry === 0) this.addBox(x, z, 2.5, 6.1, 2.6 * st); else this.addBox(x, z, 6.1, 2.5, 2.6 * st);
    }
    const inst = new THREE.InstancedMesh(geo, mat, placements.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), col = new THREE.Color();
    placements.forEach((p, i) => {
      q.setFromEuler(new THREE.Euler(0, p.ry, 0));
      m4.compose(new THREE.Vector3(p.x, p.y, p.z), q, new THREE.Vector3(1, 1, 1));
      inst.setMatrixAt(i, m4);
      inst.setColorAt(i, col.setHex(colors[p.c]));
    });
    inst.castShadow = true; inst.receiveShadow = true;
    this.scene.add(inst);

    // crates / barrels as small cover & dressing
    const crateMat = new THREE.MeshStandardMaterial({ color: 0x3a2c1c, roughness: 0.8 });
    const crates = new THREE.InstancedMesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), crateMat, 10);
    const cp = [[-11, 33], [-11.5, 35], [10, 60], [-10.5, 92], [11, 128], [-11, 128.5], [4, 140], [-3, 164], [11, 6], [-11, 70]];
    cp.forEach(([x, z], i) => { m4.compose(new THREE.Vector3(x, 0.6, z), q.setFromEuler(new THREE.Euler(0, i, 0)), new THREE.Vector3(1, 1, 1)); crates.setMatrixAt(i, m4); this.addBox(x, z, 1.3, 1.3, 1.2); });
    crates.castShadow = true; crates.receiveShadow = true; this.scene.add(crates);

    // green hangar strips on the wall (dock mood kit pieces, with procedural fallback)
    const stripSrc = dockPiece('DK_Mood_HangarStrip_Segmented_4m') || dockPiece('DK_Mood_HangarStrip_4m');
    for (let z = 0; z < 176; z += 12.4) {
      let s: THREE.Object3D;
      if (stripSrc) { s = stripSrc.clone(); s.rotation.y = Math.PI / 2; }
      else { s = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 4), new THREE.MeshBasicMaterial({ color: 0x39ff14 })); }
      s.position.set(X_MIN + 0.05, 3.2, z);
      s.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial; if (m && m.emissive && m.emissive.g > 0.1) { m.emissiveIntensity = 3; } });
      this.scene.add(s);
      if (z % 24.8 < 1) this.lightAnchors.push({ pos: new THREE.Vector3(X_MIN + 1.5, 3, z), color: 0x39ff14, intensity: 9, dist: 12 });
    }
  }

  private buildCranes() {
    const yellow = new THREE.MeshStandardMaterial({ color: 0xc9a012, roughness: 0.55, metalness: 0.5 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1b1b1e, roughness: 0.6, metalness: 0.6 });
    const red = new THREE.MeshBasicMaterial({ color: 0xff1020 });
    this.blinkers.push(red);
    const gantry = (z: number) => {
      const g = new THREE.Group();
      for (const x of [X_MIN - 2, X_EDGE - 0.8]) for (const dz of [-3.5, 3.5]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.9, 18, 0.9), yellow); leg.position.set(x, 9, z + dz); g.add(leg);
      }
      for (const x of [X_MIN - 2, X_EDGE - 0.8]) { const t = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 8.2), yellow); t.position.set(x, 1, z); g.add(t); this.addBox(x, z, 1.4, 8.4, 2); }
      for (const dz of [-3.5, 3.5]) { const beam = new THREE.Mesh(new THREE.BoxGeometry(32, 1.4, 1.1), yellow); beam.position.set(-1, 18.5, z + dz); g.add(beam); }
      const trolley = new THREE.Mesh(new THREE.BoxGeometry(3, 1.6, 8.2), dark); trolley.position.set(0, 17.6, z); g.add(trolley);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2, 2.2), dark); cab.position.set(X_EDGE - 3, 16.2, z + 4.2); g.add(cab);
      for (const x of [X_MIN - 2, X_EDGE - 0.8]) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), red); l.position.set(x, 19.5, z); g.add(l); }
      g.traverse((o) => { if ((o as THREE.Mesh).isMesh) { o.castShadow = true; } });
      this.scene.add(g);
    };
    gantry(66); gantry(146);
    // ship-to-shore cranes standing in the water (silhouettes)
    for (const z of [20, 105, 165]) {
      const g = new THREE.Group();
      for (const dx of [0, 9]) for (const dz of [-4, 4]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(1, 26, 1), yellow); leg.position.set(22 + dx, 12, z + dz); g.add(leg); }
      const boom = new THREE.Mesh(new THREE.BoxGeometry(46, 1.6, 2), yellow); boom.position.set(18, 25, z); g.add(boom);
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.45, 8, 6), red); l.position.set(-4, 26, z); g.add(l);
      this.scene.add(g);
    }
  }

  private fogTextures() {
    const r = rng(21);
    const noise = canvasTex(128, 256, (c) => {
      c.clearRect(0, 0, 128, 256);
      for (let i = 0; i < 70; i++) {
        const x = 64 + (r() - 0.5) * 70, y = r() * 256, rad = 14 + r() * 30;
        for (const yy of [y, y - 256, y + 256]) { // tile vertically
          const g = c.createRadialGradient(x, yy, 0, x, yy, rad);
          g.addColorStop(0, `rgba(255,255,255,${0.12 + r() * 0.2})`); g.addColorStop(1, 'rgba(255,255,255,0)');
          c.fillStyle = g; c.fillRect(x - rad, yy - rad, rad * 2, rad * 2);
        }
      }
    });
    const fade = canvasTex(64, 128, (c) => {
      const img = c.createImageData(64, 128);
      for (let y = 0; y < 128; y++) for (let x = 0; x < 64; x++) {
        const hx = Math.exp(-Math.pow((x - 31.5) / 15, 2));
        const v = y / 127; // canvas y=0 is the top of the column
        const vy = Math.min(1, (1 - v) * 6) * Math.pow(v, 0.8);
        const a = Math.round(255 * hx * vy);
        const i = (y * 64 + x) * 4; img.data[i] = img.data[i + 1] = img.data[i + 2] = a; img.data[i + 3] = 255;
      }
      c.putImageData(img, 0, 0);
    }, false);
    fade.wrapS = fade.wrapT = THREE.ClampToEdgeWrapping;
    return { noise, fade };
  }

  private buildFog() {
    // Procedural volumetric-style plumes (crossed additive planes with scrolling noise).
    // The kit's DK_Mood_FogColumn_* meshes are placement proxies (per the mood notes), so their
    // positions/scales drive the plumes rather than shipping the proxy geometry itself.
    const { noise, fade } = this.fogTextures();
    const proxyH = (() => { const p = dockPiece('DK_Mood_FogColumn_Green_A'); if (!p) return 5.6; const b = new THREE.Box3().setFromObject(p); return b.max.y - b.min.y; })();
    const spots: [number, number, number][] = [[-12.5, 8, 1], [-12.8, 31, 1.3], [-12.2, 58, 1], [-12.6, 84, 1.2], [-12.3, 110, 1.1], [-12.5, 138, 1.3], [11.8, 46, 0.8], [12, 96, 0.9], [-12, 162, 1.2], [10, 168, 1]];
    const geo = new THREE.PlaneGeometry(3.2, proxyH * 1.35).translate(0, proxyH * 0.675, 0);
    spots.forEach(([x, z, s], i) => {
      const n = noise.clone(); n.needsUpdate = true; n.offset.y = i * 0.37; this.scrollTex.push(n);
      const mat = new THREE.MeshBasicMaterial({ color: 0x3cff5a, map: n, alphaMap: fade, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
      this.fogMats.push(mat);
      const col = new THREE.Group();
      for (let k = 0; k < 3; k++) { const m = new THREE.Mesh(geo, mat); m.rotation.y = (k / 3) * Math.PI; m.renderOrder = 5; col.add(m); }
      col.scale.setScalar(s); col.position.set(x, 0, z);
      col.userData.spin = 0.05 + (i % 3) * 0.03;
      this.fogCols.push(col);
      this.scene.add(col);
      const grate = new THREE.Mesh(new THREE.CircleGeometry(1.1 * s, 20), new THREE.MeshBasicMaterial({ color: 0x1aff40, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false }));
      grate.rotation.x = -Math.PI / 2; grate.position.set(x, 0.02, z); this.scene.add(grate);
      this.lightAnchors.push({ pos: new THREE.Vector3(x, 1.2, z), color: 0x39ff14, intensity: 14, dist: 13 });
    });
  }

  private buildBrand() {
    const bb = Assets.tex.billboard;
    for (const z of [24, 96, 160]) {
      const g = new THREE.Group();
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4.6, 8.6), new THREE.MeshStandardMaterial({ color: 0x111114, metalness: 0.7, roughness: 0.4 }));
      g.add(frame);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 4.1), new THREE.MeshBasicMaterial({ map: bb || null, color: bb ? 0xffffff : 0xff1fcf, transparent: true, fog: false }));
      face.position.x = 0.17; face.rotation.y = Math.PI / 2;
      const back = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 4.1), new THREE.MeshBasicMaterial({ color: 0x050106 }));
      back.position.x = 0.16; back.rotation.y = Math.PI / 2;
      g.add(back); g.add(face);
      g.position.set(X_MIN - 1.0, 10.4, z);
      this.scene.add(g);
      this.lightAnchors.push({ pos: new THREE.Vector3(X_MIN + 2, 8, z), color: 0xff1fcf, intensity: 18, dist: 18 });
    }
    // container stamps: brand mark decals on the wall containers
    const mk = Assets.tex.mark;
    if (mk) {
      const mat = new THREE.MeshBasicMaterial({ map: mk, transparent: true, depthWrite: false, color: 0xffb0f0, polygonOffset: true, polygonOffsetFactor: -2 });
      for (const z of [3, 45, 72, 115, 140]) {
        const d = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.0), mat);
        d.rotation.y = Math.PI / 2; d.position.set(X_MIN + 0.02, 1.4, z); this.scene.add(d);
      }
    }
  }

  private buildBarriers() {
    const tex = canvasTex(256, 64, (c) => {
      c.clearRect(0, 0, 256, 64);
      for (let y = 4; y < 64; y += 12) { c.fillStyle = 'rgba(255,40,220,0.95)'; c.fillRect(0, y, 256, 3); }
      c.fillStyle = 'rgba(255,40,220,0.25)'; c.fillRect(0, 0, 256, 64);
    });
    tex.repeat.set(6, 1);
    this.scrollTex.push(tex);
    for (const zone of ZONES) {
      if (zone.barrier < 0) continue;
      const mat = new THREE.MeshBasicMaterial({ map: tex, color: 0xffffff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(X_EDGE - X_MIN + 2, 3.2), mat);
      mesh.position.set((X_MIN + X_EDGE) / 2, 1.6, zone.barrier);
      this.scene.add(mesh);
      for (const x of [X_MIN, X_EDGE]) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.4, 3.6, 0.4), new THREE.MeshStandardMaterial({ color: 0x111, emissive: 0xff1fcf, emissiveIntensity: 1.5 })); post.position.set(x, 1.8, zone.barrier); this.scene.add(post); }
      const box = this.addBox((X_MIN + X_EDGE) / 2, zone.barrier, X_EDGE - X_MIN + 4, 0.8, 3);
      this.barriers.push({ z: zone.barrier, box, mesh, mat, open: 0 });
    }
  }

  private buildPuddles() {
    const spots: [number, number, number][] = [[3, 20, 2.6], [-4, 98, 3], [5, 108, 2.8], [-1, 122, 3.2], [-6, 112, 2.4], [2, 158, 2.6]];
    for (const [x, z, r] of spots) {
      const mat = new THREE.MeshStandardMaterial({ color: 0x041218, roughness: 0.05, metalness: 0.9, emissive: 0x40c8ff, emissiveIntensity: 0.05, transparent: true, opacity: 0.92, envMapIntensity: 2 });
      const mesh = new THREE.Mesh(new THREE.CircleGeometry(r, 28), mat);
      mesh.rotation.x = -Math.PI / 2; mesh.position.set(x, 0.015, z); mesh.receiveShadow = true;
      this.scene.add(mesh);
      // lightning arc lines (regenerated while active)
      const arcs = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xa0f0ff, transparent: true, blending: THREE.AdditiveBlending, fog: false }));
      arcs.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(24 * 6), 3));
      arcs.position.set(x, 0.05, z); arcs.visible = false; this.scene.add(arcs);
      // exposed cable feeding the puddle
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, r * 1.6, 6), new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xff8a2b, emissiveIntensity: 0.4 }));
      cable.rotation.z = Math.PI / 2; cable.rotation.y = 0.6; cable.position.set(x - r * 0.9, 0.06, z + r * 0.4); this.scene.add(cable);
      this.puddles.push({ x, z, r, phase: Math.random() * 5, on: false, warn: false, mesh, arcs, mat });
    }
  }

  private buildHook() {
    const h = this.hook;
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 6), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 }));
    cable.geometry.translate(0, -0.5, 0);
    h.cable = cable;
    const loadMat = new THREE.MeshStandardMaterial({ color: 0x8c1c16, roughness: 0.6, metalness: 0.5, map: this.containerMats() });
    const load = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.8, 2.0), loadMat);
    load.castShadow = true;
    h.load = load;
    const hookMesh = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.08, 6, 12, Math.PI * 1.4), new THREE.MeshStandardMaterial({ color: 0xc9a012, metalness: 0.7 }));
    hookMesh.position.y = 1.2; load.add(hookMesh);
    const warn = new THREE.MeshBasicMaterial({ color: 0xff2020 });
    this.blinkers.push(warn);
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), warn); l.position.set(0, 0.95, 1.05); load.add(l);
    h.light = l;
    this.scene.add(cable); this.scene.add(load);
    // floor warning stripes along the swing path
    const hz = Assets.tex.hazard ? Assets.tex.hazard.clone() : null;
    if (hz) { hz.wrapS = hz.wrapT = THREE.RepeatWrapping; hz.repeat.set(10, 1); hz.needsUpdate = true; }
    const path = new THREE.Mesh(new THREE.PlaneGeometry(26, 2.6), new THREE.MeshStandardMaterial({ map: hz, color: hz ? 0xffffff : 0xe6be14, transparent: true, opacity: 0.45, roughness: 0.6, depthWrite: false }));
    path.rotation.x = -Math.PI / 2; path.position.set(0, 0.013, h.pivot.z); this.scene.add(path);
    this.lightAnchors.push({ pos: new THREE.Vector3(0, 6, h.pivot.z), color: 0xff8a2b, intensity: 14, dist: 16 });
  }

  private buildGate() {
    const g = this.gate.group;
    g.position.set(0, 0, GATE_Z);
    const stripMat = new THREE.MeshStandardMaterial({ color: 0x220018, emissive: 0xff10d0, emissiveIntensity: 0.4, roughness: 0.4 });
    this.gate.strips.push(stripMat);
    const housing = new THREE.MeshStandardMaterial({ color: 0x18181c, metalness: 0.7, roughness: 0.4 });
    for (const x of [-4.2, 4.2]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.9, 7, 0.9), housing); p.position.set(x, 3.5, 0); p.castShadow = true; g.add(p);
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.25, 6.6, 0.25), stripMat); s.position.set(x + (x < 0 ? 0.5 : -0.5), 3.5, 0); g.add(s);
    }
    const top = new THREE.Mesh(new THREE.BoxGeometry(9.3, 0.9, 0.9), housing); top.position.set(0, 7.2, 0); g.add(top);
    const ts = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.22, 0.25), stripMat); ts.position.set(0, 6.6, 0); g.add(ts);
    // kit piece: triple strip header (if present)
    const kit = dockPiece('DK_Mood_ExtractGate_TripleStrip_4m');
    if (kit) { kit.position.set(0, 8.0, 0); kit.scale.setScalar(1.6); kit.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial; if (m && m.emissive) { const c = m.clone(); c.emissive.setHex(0xff10d0); c.emissiveIntensity = 1.2; (o as THREE.Mesh).material = c; this.gate.strips.push(c); } }); g.add(kit); }
    const et = Assets.tex.gateEnergy ? Assets.tex.gateEnergy.clone() : null;
    if (et) { et.wrapS = et.wrapT = THREE.RepeatWrapping; et.needsUpdate = true; this.scrollTex.push(et); }
    const em = new THREE.MeshBasicMaterial({ map: et, color: 0xff30e0, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    this.gate.energy = em;
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(7.6, 6.4), em); plane.position.set(0, 3.3, 0); g.add(plane);
    const pad = new THREE.Mesh(new THREE.RingGeometry(2.5, 3.2, 40), new THREE.MeshBasicMaterial({ color: 0xff10d0, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    pad.rotation.x = -Math.PI / 2; pad.position.set(0, 0.03, -2.5); g.add(pad);
    this.scene.add(g);
    this.lightAnchors.push({ pos: new THREE.Vector3(0, 3, GATE_Z - 2), color: 0xff10d0, intensity: 10, dist: 20 });
  }

  private buildDust() {
    const n = 500, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * 40; pos[i * 3 + 1] = Math.random() * 10; pos[i * 3 + 2] = (Math.random() - 0.5) * 40; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0x7dff9a, size: 0.06, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.dust.frustumCulled = false;
    this.scene.add(this.dust);
  }

  setGateActive(on: boolean) {
    this.gate.active = on;
    for (const s of this.gate.strips) s.emissiveIntensity = on ? 3.5 : 0.4;
    if (this.gate.energy) this.gate.energy.opacity = on ? 0.75 : 0.12;
    const a = this.lightAnchors.find((l) => l.color === 0xff10d0);
    if (a) a.intensity = on ? 40 : 10;
  }

  reset() {
    for (const b of this.barriers) { b.open = 0; b.box.active = true; b.mesh.visible = true; b.mat.opacity = 0.9; }
    this.setGateActive(false);
  }
  openBarrier(i: number) { const b = this.barriers[i]; if (b) { b.box.active = false; b.open = 0.0001; } }
  closeBarriersFrom(i: number) { this.barriers.forEach((b, k) => { if (k >= i) { b.open = 0; b.box.active = true; b.mesh.visible = true; b.mat.opacity = 0.9; } else { b.box.active = false; b.mesh.visible = false; } }); }

  update(dt: number, t: number, focus: THREE.Vector3) {
    // scrolling textures
    for (const tx of this.scrollTex) { tx.offset.y -= dt * 0.08; }
    this.sky.position.set(focus.x, 0, focus.z);
    this.railChev.offset.y -= dt * 1.2; this.groundChev.offset.y -= dt * 1.2;
    for (const m of this.fogMats) (m as THREE.MeshBasicMaterial).opacity = 0.5 + Math.sin(t * 0.7 + m.id) * 0.1;
    for (const c of this.fogCols) c.rotation.y += dt * (c.userData.spin as number);
    const blink = (Math.sin(t * 3) > 0.2) ? 1 : 0.15;
    for (const b of this.blinkers) b.color.setRGB(blink, 0.05 * blink, 0.08 * blink);
    // barriers fade when opened
    for (const b of this.barriers) if (b.open > 0 && b.mesh.visible) { b.open += dt; b.mat.opacity = Math.max(0, 0.9 - b.open * 1.5); if (b.mat.opacity <= 0) b.mesh.visible = false; }
    // hook pendulum
    const h = this.hook;
    h.angle = Math.sin(t * 0.95) * 0.82;
    const hx = h.pivot.x + Math.sin(h.angle) * h.len, hy = h.pivot.y - Math.cos(h.angle) * h.len;
    h.vx = (hx - h.prevX) / Math.max(dt, 1e-4); h.prevX = hx;
    h.load.position.set(hx, hy - 0.2, h.pivot.z); h.load.rotation.z = h.angle;
    h.cable.position.copy(h.pivot); h.cable.rotation.z = h.angle; h.cable.scale.y = h.len - 1.2;
    // puddles: 5 s cycle; 0.7 s warning flicker then 2.6 s live
    if (this.arena !== 'hyperdrive') for (const p of this.puddles) {
      const c = (t + p.phase) % 5.2;
      p.warn = c > 1.9 && c < 2.6; p.on = c >= 2.6;
      const fl = p.on ? 0.9 + Math.random() * 1.6 : p.warn ? (Math.random() > 0.5 ? 0.8 : 0.05) : 0.05;
      p.mat.emissiveIntensity = fl;
      p.arcs.visible = p.on;
      if (p.on && Math.random() < 0.5) {
        const a = p.arcs.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < 24; i++) {
          const ang = Math.random() * Math.PI * 2, rr = Math.random() * p.r;
          const x0 = Math.cos(ang) * rr, z0 = Math.sin(ang) * rr;
          a.setXYZ(i * 2, x0, Math.random() * 0.3, z0);
          a.setXYZ(i * 2 + 1, x0 + (Math.random() - 0.5) * 0.9, Math.random() * 0.6, z0 + (Math.random() - 0.5) * 0.9);
        }
        a.needsUpdate = true;
      }
    }
    // gate shimmer
    if (this.gate.active && this.gate.energy) this.gate.energy.opacity = 0.6 + Math.sin(t * 6) * 0.15;
    // light pool: assign point lights to the anchors nearest the focus point
    const sorted = this.lightAnchors.map((a) => ({ a, d: a.pos.distanceToSquared(focus) })).sort((x, y) => x.d - y.d);
    this.pointLights.forEach((pl, i) => {
      const s = sorted[i];
      if (!s) { pl.intensity = 0; return; }
      pl.position.copy(s.a.pos); pl.color.setHex(this.arena === 'hyperdrive' && s.a.color === 0x39ff14 ? 0xff9a3a : s.a.color); pl.distance = s.a.dist;
      const flick = s.a.color === 0x39ff14 ? 0.85 + Math.sin(t * 7 + i) * 0.1 : 1;
      pl.intensity = s.a.intensity * flick;
    });
    // shadow camera follows the focus
    this.moon.position.set(focus.x - 12, 30, focus.z - 10);
    this.moon.target.position.set(focus.x, 0, focus.z + 2);
    // dust drifts with the camera
    this.dust.position.set(focus.x, 0, focus.z);
    this.dust.rotation.y = t * 0.02;
  }
}
