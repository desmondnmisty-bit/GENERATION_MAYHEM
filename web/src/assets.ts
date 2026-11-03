import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

import vixenUrl from './assets/models/vixen.glb?url';
import kaileeUrl from './assets/models/kailee.glb?url';
import briannaUrl from './assets/models/brianna.glb?url';
import paytonUrl from './assets/models/payton.glb?url';
import viper01Url from './assets/models/viper01.glb?url';
import viper02Url from './assets/models/viper02.glb?url';
import viper03Url from './assets/models/viper03.glb?url';
import enforcerUrl from './assets/models/enforcer.glb?url';
import falconUrl from './assets/models/falcon.glb?url';
import animsUrl from './assets/models/anims.glb?url';
import dockUrl from './assets/models/dockmood.glb?url';

import asphaltNormalUrl from './assets/tex/asphalt_normal.webp?url';
import hazardUrl from './assets/tex/hazard_stripe.webp?url';
import rustUrl from './assets/tex/rust.webp?url';
import serialsUrl from './assets/tex/serials.png?url';
import gateEnergyUrl from './assets/tex/gate_energy.webp?url';
import billboardUrl from './assets/tex/brand_billboard.webp?url';
import markUrl from './assets/tex/brand_mark.webp?url';
export { default as lockupUrl } from './assets/tex/brand_lockup.webp?url';

export type CharKey = 'vixen' | 'kailee' | 'brianna' | 'payton' | 'viper01' | 'viper02' | 'viper03' | 'enforcer' | 'falcon';
const MODEL_URLS: Record<CharKey | 'anims' | 'dock', string> = {
  vixen: vixenUrl, kailee: kaileeUrl, brianna: briannaUrl, payton: paytonUrl, viper01: viper01Url, viper02: viper02Url, viper03: viper03Url,
  enforcer: enforcerUrl, falcon: falconUrl, anims: animsUrl, dock: dockUrl,
};
const TEX_URLS = {
  asphaltNormal: asphaltNormalUrl, hazard: hazardUrl, rust: rustUrl, serials: serialsUrl,
  gateEnergy: gateEnergyUrl, billboard: billboardUrl, mark: markUrl,
};
export type TexKey = keyof typeof TEX_URLS;

export const Assets = {
  gltf: {} as Partial<Record<CharKey | 'anims' | 'dock', GLTF>>,
  tex: {} as Partial<Record<TexKey, THREE.Texture>>,
  clips: {} as Record<string, THREE.AnimationClip>,
  failed: [] as string[],
};

export async function loadAll(onProgress: (done: number, total: number, label: string) => void) {
  const loader = new GLTFLoader();
  const texLoader = new THREE.TextureLoader();
  const modelKeys = Object.keys(MODEL_URLS) as (keyof typeof MODEL_URLS)[];
  const texKeys = Object.keys(TEX_URLS) as TexKey[];
  const total = modelKeys.length + texKeys.length;
  let done = 0;
  const tick = (l: string) => { done++; onProgress(done, total, l); };
  await Promise.all([
    ...modelKeys.map(async (k) => {
      try { Assets.gltf[k] = await loader.loadAsync(MODEL_URLS[k]); }
      catch (e) { console.warn('[GM] model failed, using procedural fallback:', k, e); Assets.failed.push(k); }
      tick(k);
    }),
    ...texKeys.map(async (k) => {
      try {
        const t = await texLoader.loadAsync(TEX_URLS[k]);
        t.colorSpace = k === 'asphaltNormal' ? THREE.NoColorSpace : THREE.SRGBColorSpace;
        Assets.tex[k] = t;
      } catch (e) { console.warn('[GM] texture failed:', k, e); Assets.failed.push(k); }
      tick(k);
    }),
  ]);
  // The Viper source meshes carry stray fragments skinned to the upper arms, floating well above
  // the head (about y 2.0-2.9 m in bind pose, head bone at 1.6 m). Drop those triangles once; clones share the geometry.
  for (const k of ['viper01', 'viper02', 'viper03'] as const) {
    Assets.gltf[k]?.scene.traverse((o) => {
      const m = o as THREE.SkinnedMesh;
      if (!m.isSkinnedMesh || !/Body/i.test(m.name)) return;
      const g = m.geometry, pos = g.attributes.position;
      const idx = g.index ? Array.from(g.index.array as ArrayLike<number>) : Array.from({ length: pos.count }, (_, i) => i);
      const bad = (i: number) => pos.getY(i) > 1.92 || Math.abs(pos.getX(i)) > 1.0;
      const keep: number[] = [];
      for (let t = 0; t < idx.length; t += 3) if (!bad(idx[t]) && !bad(idx[t + 1]) && !bad(idx[t + 2])) keep.push(idx[t], idx[t + 1], idx[t + 2]);
      if (keep.length < idx.length) { g.setIndex(keep); console.info('[GM] cleaned', m.name, (idx.length - keep.length) / 3, 'stray tris'); }
    });
  }
  // Animation clips (ChaosWheelSkate rig). Keep rotations only: every hero/enemy is
  // skinned to the same rig, but bone lengths differ, so translation/scale tracks are dropped.
  const anims = Assets.gltf.anims;
  if (anims) {
    for (const clip of anims.animations) {
      const c = clip.clone();
      c.tracks = c.tracks.filter((t) => t.name.endsWith('.quaternion') && !t.name.startsWith('root.'));
      const key = clip.name.replace('AS_Chaos_', '');
      c.name = key;
      Assets.clips[key] = c;
    }
  }
}

/** Shader patch: adds a per-material hit-flash uniform (mix toward a colour). */
export interface FlashMat extends THREE.Material { userData: { flash: { value: number }; flashColor: { value: THREE.Color } } }
export function addFlash(mat: THREE.Material) {
  const flash = { value: 0 };
  const flashColor = { value: new THREE.Color(1, 1, 1) };
  mat.userData.flash = flash;
  mat.userData.flashColor = flashColor;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uFlash = flash;
    sh.uniforms.uFlashColor = flashColor;
    sh.fragmentShader = 'uniform float uFlash;\nuniform vec3 uFlashColor;\n' + sh.fragmentShader.replace(
      '#include <dithering_fragment>',
      '#include <dithering_fragment>\n gl_FragColor.rgb = mix(gl_FragColor.rgb, uFlashColor, uFlash);'
    );
  };
  mat.customProgramCacheKey = () => 'gmflash';
}

const HEAD_TARGET: Record<CharKey, number> = {
  vixen: 1.78, kailee: 1.62, brianna: 1.66, payton: 1.64, viper01: 1.74, viper02: 1.74, viper03: 1.74, enforcer: 2.0, falcon: 2.5,
};

export interface CharModel {
  root: THREE.Group;        // positioned/rotated by the entity
  pivot: THREE.Group;       // procedural lean / squash
  model: THREE.Object3D;    // the GLB clone (or fallback)
  mats: THREE.Material[];
  mixer: THREE.AnimationMixer | null;
  actions: Record<string, THREE.AnimationAction>;
  bones: Record<string, THREE.Bone>;
  procedural: boolean;
  height: number;
}

function fallbackModel(color: number, height: number): THREE.Object3D {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.3, emissive: color, emissiveIntensity: 0.15 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, height * 0.5, 4, 10), mat);
  body.position.y = height * 0.5; g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), mat);
  head.position.y = height * 0.92; g.add(head);
  const skate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.7), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xff00cc, emissiveIntensity: 0.6 }));
  skate.position.y = 0.06; g.add(skate);
  g.traverse((o) => { if ((o as THREE.Mesh).isMesh) { o.castShadow = true; } });
  return g;
}

const FALLBACK_COLOR: Record<CharKey, number> = {
  vixen: 0xff1fcf, kailee: 0xff8a2b, brianna: 0x0f7a4a, payton: 0x8a3cff, viper01: 0xff4fa0, viper02: 0xff4fa0, viper03: 0xff4fa0, enforcer: 0x8a2be2, falcon: 0xd01030,
};

export function makeCharacter(key: CharKey, opts: { tint?: number; emissiveBoost?: number } = {}): CharModel {
  const root = new THREE.Group();
  const pivot = new THREE.Group();
  root.add(pivot);
  const src = Assets.gltf[key];
  const mats: THREE.Material[] = [];
  const bones: Record<string, THREE.Bone> = {};
  let model: THREE.Object3D;
  let mixer: THREE.AnimationMixer | null = null;
  const actions: Record<string, THREE.AnimationAction> = {};
  let procedural = false;
  const target = HEAD_TARGET[key];
  if (src) {
    model = SkeletonUtils.clone(src.scene);
    const matMap = new Map<THREE.Material, THREE.Material>();
    model.traverse((o) => {
      const m = o as THREE.Mesh;
      if ((o as THREE.Bone).isBone) bones[o.name] = o as THREE.Bone;
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = false;
        m.frustumCulled = false;
        const arr = Array.isArray(m.material) ? m.material : [m.material];
        const newArr = arr.map((mm) => {
          let c = matMap.get(mm);
          if (!c) {
            c = mm.clone();
            const sm = c as THREE.MeshStandardMaterial;
            if (sm.transparent || sm.alphaTest > 0) { sm.transparent = false; sm.alphaTest = 0.5; sm.depthWrite = true; }
            sm.side = THREE.FrontSide;
            if (opts.tint !== undefined && sm.color) sm.color.multiply(new THREE.Color(opts.tint));
            if (opts.emissiveBoost && sm.emissive) { sm.emissiveIntensity = (sm.emissiveIntensity || 1) * opts.emissiveBoost; }
            addFlash(c);
            matMap.set(mm, c); mats.push(c);
          }
          return c;
        });
        m.material = Array.isArray(m.material) ? newArr : newArr[0];
      }
    });
    let biggest: THREE.Mesh | null = null, bigN = 0;
    model.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { const n = m.geometry.attributes.position.count; if (n > bigN) { bigN = n; biggest = m; } } });
    model.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh && m !== biggest) m.castShadow = false; });
    // normalise height by head bone (robust to differing bind poses / armature scale)
    model.updateMatrixWorld(true);
    const head = bones['head'] || bones['Head'];
    let h = 0;
    if (head) { const p = new THREE.Vector3(); head.getWorldPosition(p); h = p.y + 0.12; }
    if (!(h > 0.2)) { const box = new THREE.Box3().setFromObject(model); h = box.max.y - box.min.y; }
    const s = target / Math.max(0.01, h);
    model.scale.multiplyScalar(s);
    pivot.add(model);
    if (key !== 'falcon' && Object.keys(Assets.clips).length) {
      mixer = new THREE.AnimationMixer(model);
      for (const [name, clip] of Object.entries(Assets.clips)) {
        const a = mixer.clipAction(clip);
        actions[name] = a;
      }
    } else if (key === 'falcon' && src.animations.length) {
      // Falcon ships with a short Mixamo clip; use it as an idle loop
      mixer = new THREE.AnimationMixer(model);
      const clip = src.animations[0].clone();
      clip.tracks = clip.tracks.filter((t) => !t.name.endsWith('.position') || t.name.startsWith('Hips'));
      actions['Idle_Skate'] = mixer.clipAction(clip);
    }
  } else {
    procedural = true;
    model = fallbackModel(opts.tint ?? FALLBACK_COLOR[key], target);
    model.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { const mm = (m.material as THREE.Material).clone(); addFlash(mm); m.material = mm; mats.push(mm); } });
    pivot.add(model);
  }
  return { root, pivot, model, mats, mixer, actions, bones, procedural, height: target };
}

export function setFlash(cm: CharModel, v: number, color?: THREE.Color) {
  for (const m of cm.mats) {
    const u = (m as FlashMat).userData;
    if (u.flash) { u.flash.value = v; if (color) u.flashColor.value.copy(color); }
  }
}

/** Returns a named node (first match) from the dock mood kit, cloned. */
export function dockPiece(name: string): THREE.Object3D | null {
  const g = Assets.gltf.dock;
  if (!g) return null;
  const n = g.scene.getObjectByName(name);
  if (!n) return null;
  const c = n.clone(true);
  c.position.set(0, 0, 0); c.rotation.set(0, 0, 0);
  return c;
}
