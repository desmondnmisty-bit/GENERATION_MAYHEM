// LOCKSTEP 2026-11-07 — Three.js side of the Unity wire/play-debug pass (gm-wire-debug/REPORT.md).
// Same change, same proportion: Prepared review war-rigs, Dock portal, planted Hyperdrive buildings,
// HD loot chests, HD named Viper slots + six-part Slither, per-part solid colliders for hung props.
// Everything here loads from web/public at runtime (multi-asset Vite build; nothing is inlined).
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { addFlash } from './assets';
import type { Box } from './world';

const loader = new GLTFLoader();
const cache = new Map<string, Promise<GLTF>>();
/** One fetch per URL; callers clone. */
export function loadGlb(url: string): Promise<GLTF> {
  let p = cache.get(url);
  if (!p) { p = loader.loadAsync(url); cache.set(url, p); p.catch(() => cache.delete(url)); }
  return p;
}

// ---------------------------------------------------------------- Prepared review war-rigs
/** Review hang (NOT AAA approval). Known defects kept as requested: Vixen hollow bicycle-spoke wheels,
 *  Kailee glove/hip + shoulder/hair stretch, Vixen Shatter_Plant torso stretch. Never swaps back to Soft. */
export const PREPARED_WARRIG_URLS: Record<string, string> = {
  vixen: 'warrigs/prepared/GM_Vixen_WarRig_Prepared.glb',
  payton: 'warrigs/prepared/GM_Payton_WarRig_Prepared.glb',
  brianna: 'warrigs/prepared/GM_Brianna_WarRig_Prepared.glb',
  kailee: 'warrigs/prepared/GM_Kailee_WarRig_Prepared.glb',
};

export interface PreparedRig { key: string; mixer: THREE.AnimationMixer; actions: Record<string, THREE.AnimationAction>; state: string; speedOf: () => number }

/** Root motion off (Unity: applyRootMotion=false) — keep the Root bone's vertical bob, drop horizontal drift. */
export function inPlaceClip(clip: THREE.AnimationClip) {
  const c = clip.clone();
  for (const t of c.tracks) {
    if (t.name !== 'Root.position') continue;
    const v = t.values; const x0 = v[0], z0 = v[2];
    for (let i = 0; i < v.length; i += 3) { v[i] = x0; v[i + 2] = z0; }
  }
  return c;
}

/** Mirrors Unity PreparedWarRigAnimator: speed > 1.2 m/s -> Locomotion_Fwd else Idle_Skate, 0.15 s crossfade. */
export function tickPreparedRig(r: PreparedRig, dt: number) {
  const want = r.speedOf() > 1.2 ? 'Locomotion_Fwd' : 'Idle_Skate';
  if (want !== r.state && r.actions[want]) {
    const next = r.actions[want], prev = r.actions[r.state];
    next.reset().play();
    if (prev) next.crossFadeFrom(prev, 0.15, false);
    r.state = want;
  }
  r.mixer.update(dt);
}

// ---------------------------------------------------------------- generic prop hang
export interface Hung { holder: THREE.Group; model: THREE.Object3D; parts: THREE.Mesh[] }
/** Unity WorldPropHang.Fit.Height: uniform scale so the prop is `height` tall, min Y planted on y=0, centred on (x,z). */
export function hangProp(src: THREE.Object3D, x: number, z: number, yawDeg: number, height: number, name: string, opts: { cloneMats?: boolean; flash?: boolean } = {}): Hung {
  const model = src.clone(true);
  const parts: THREE.Mesh[] = [];
  model.traverse((o) => {
    const m = o as THREE.Mesh; if (!m.isMesh) return;
    m.castShadow = true; m.receiveShadow = true; parts.push(m);
    if (opts.cloneMats) {
      const arr = Array.isArray(m.material) ? m.material : [m.material];
      const cl = arr.map((mm) => { const c = mm.clone(); if (opts.flash) addFlash(c); return c; });
      m.material = Array.isArray(m.material) ? cl : cl[0];
    }
  });
  const holder = new THREE.Group(); holder.name = name; holder.add(model);
  const bb = new THREE.Box3().setFromObject(model); const sz = bb.getSize(new THREE.Vector3()); const c = bb.getCenter(new THREE.Vector3());
  const s = height / Math.max(1e-4, sz.y);
  model.scale.multiplyScalar(s); model.position.set(-c.x * s, -bb.min.y * s, -c.z * s);
  holder.position.set(x, 0, z); holder.rotation.y = THREE.MathUtils.degToRad(yawDeg);
  holder.updateMatrixWorld(true);
  return { holder, model, parts };
}

/** Unity WorldStructureCollision analog: one static solid box per visual part (not one giant hull).
 *  Elevated parts get minY so you can still skate underneath; tiny trim parts are skipped. */
export function partColliders(h: Hung, out: Box[], opts: { minSize?: number; clipMinX?: number; clipMaxX?: number } = {}) {
  const made: Box[] = []; const bb = new THREE.Box3();
  h.holder.updateMatrixWorld(true);
  for (const p of h.parts) {
    bb.setFromObject(p);
    if (bb.isEmpty()) continue;
    const sx = bb.max.x - bb.min.x, sz = bb.max.z - bb.min.z, sy = bb.max.y - bb.min.y;
    if (Math.max(sx, sz, sy) < (opts.minSize ?? 0.35)) continue;
    const b: Box = { minX: bb.min.x, maxX: bb.max.x, minZ: bb.min.z, maxZ: bb.max.z, h: bb.max.y, active: false };
    if (bb.min.y > 0.5) b.minY = bb.min.y;
    out.push(b); made.push(b);
  }
  return made;
}

/** Unity PlantHyperdriveBuildings.EnsurePad: deck-connected floor pad from the building footprint to the lane floor edge (+1 m margin). */
export function floorPad(h: Hung, connectToX: number, mat: THREE.Material) {
  const bb = new THREE.Box3().setFromObject(h.model);
  const minX = Math.min(bb.min.x, connectToX) - 1, maxX = Math.max(bb.max.x, connectToX) + 1;
  const minZ = bb.min.z - 1, maxZ = bb.max.z + 1;
  const pad = new THREE.Mesh(new THREE.BoxGeometry(maxX - minX, 1, maxZ - minZ), mat);
  pad.position.set((minX + maxX) / 2, -0.5 + 0.012, (minZ + maxZ) / 2); // top flush with deck (+12 mm vs z-fight)
  pad.receiveShadow = true; pad.name = h.holder.name + '_Pad';
  return { pad, bounds: bb, padX: [minX, maxX], padZ: [minZ, maxZ] };
}

// ---------------------------------------------------------------- Hyperdrive named Viper slots (HD only)
export type ViperSlot = 'SWARM' | 'COBRA' | 'FANG' | 'HIVE';
/** Existing named slots only. HIVE = 56-part redsuit (not the older 6-part Hive). Pink-and-black full-helmet brute = SWARM. */
export const VIPER_SLOT_URLS: Record<ViperSlot, string> = {
  SWARM: 'hyperdrive/vipers/GM_Viper_Swarm_Parts.glb',
  COBRA: 'hyperdrive/vipers/GM_Viper_Cobra_Parts.glb', // Hood Strike (not Tail-Strike)
  FANG: 'hyperdrive/vipers/GM_Viper_Fang_Parts.glb',
  HIVE: 'hyperdrive/vipers/GM_Viper_Hive_redsuit_Parts.glb',
};
/** Six-part pink lizard Slither (HD only). */
export const SLITHER_PARTS_URL = 'hyperdrive/vipers/GM_Slither_Parts.glb';
export const LOOT_URLS = { gold: 'hyperdrive/loot/GM_Chest_WoodGold_raw.glb', lava: 'hyperdrive/loot/GM_Chest_LavaGlyph_raw.glb' };
export const WORLD_PROP_URLS = {
  portal: 'worldprops/GM_Portal_PurpleGate_raw.glb',
  station: 'worldprops/GM_SpaceStation_raw.glb',
  tower: 'worldprops/GM_SciFi_Tower_raw.glb',
  // staged for a later lockstep slot; not hung in the web berth lane (see REPORT.md)
  magentaRamp: 'worldprops/GM_Roadway_MagentaRamp_raw.glb',
  splitDeck: 'worldprops/GM_Roadway_SplitDeck_raw.glb',
};

/** Hang a named-slot Viper visual over an enemy root (hides the generic skinned body). Per-instance materials so hit-flash stays local. */
export function hangViperSlot(root: THREE.Object3D, mats: THREE.Material[], slot: ViperSlot, height: number) {
  return loadGlb(VIPER_SLOT_URLS[slot]).then((g) => {
    if (!root.parent) return false; // enemy already disposed
    const h = hangProp(g.scene, 0, 0, 0, height, 'viper-slot-' + slot, { cloneMats: true, flash: true });
    root.traverse((o) => { if ((o as THREE.SkinnedMesh).isSkinnedMesh) o.visible = false; });
    for (const p of h.parts) { p.castShadow = false; const arr = Array.isArray(p.material) ? p.material : [p.material]; mats.push(...arr); }
    root.add(h.holder);
    return true;
  }).catch((e) => { console.warn('[GM] viper slot mesh failed, keeping generic Viper body', slot, e); return false; });
}
