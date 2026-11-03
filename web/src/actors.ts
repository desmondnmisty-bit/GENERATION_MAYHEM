import * as THREE from 'three';
import { makeCharacter, setFlash, type CharKey, type CharModel } from './assets';
import { X_EDGE, X_MIN, boxTop, type Box } from './world';

const V = () => new THREE.Vector3();
const _v1 = V(), _v2 = V();
export const MODEL_YAW = 0; // GLBs face +Z

export function angleLerp(a: number, b: number, t: number) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
export function angleDiff(a: number, b: number) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}
export function dirFromYaw(yaw: number, out = V()) { return out.set(Math.sin(yaw), 0, Math.cos(yaw)); }

// ---------------- animation helper: manual weight blending ----------------
export class Anim {
  cm: CharModel;
  base = 'Idle_Skate';
  baseSpeed = 1;
  private w: Record<string, number> = {};
  private one: { name: string; t: number; dur: number } | null = null;
  private rest: [THREE.Bone, THREE.Quaternion][] = [];
  constructor(cm: CharModel) {
    this.cm = cm;
    for (const b of Object.values(cm.bones)) this.rest.push([b, b.quaternion.clone()]);
    for (const [n, a] of Object.entries(cm.actions)) { this.w[n] = 0; a.enabled = true; a.setEffectiveWeight(0); }
    const idle = cm.actions['Idle_Skate'];
    if (idle) { idle.play(); this.w['Idle_Skate'] = 1; idle.setEffectiveWeight(1); }
  }
  has(n: string) { return !!this.cm.actions[n]; }
  setBase(n: string, speed = 1) { if (this.cm.actions[n]) { this.base = n; this.baseSpeed = speed; } }
  once(n: string, dur: number) {
    const a = this.cm.actions[n];
    if (!a) return;
    a.reset();
    a.setLoop(THREE.LoopOnce, 1);
    a.clampWhenFinished = true;
    a.timeScale = a.getClip().duration / Math.max(0.05, dur);
    a.play();
    this.one = { name: n, t: 0, dur };
  }
  get busy() { return !!this.one; }
  update(dt: number) {
    const mixer = this.cm.mixer;
    if (!mixer) return;
    let oneW = 0;
    if (this.one) {
      this.one.t += dt;
      const k = this.one.t / this.one.dur;
      oneW = k < 0.15 ? k / 0.15 : k > 0.8 ? Math.max(0, (1 - k) / 0.2) : 1;
      if (k >= 1) { const a = this.cm.actions[this.one.name]; if (a) { a.stop(); this.w[this.one.name] = 0; } this.one = null; oneW = 0; }
    }
    // Reset to rest pose first: the procedural arm layer edits bones after the mixer, and the
    // mixer blends partial weights against a saved "original" pose, so this keeps it from drifting.
    for (const [b, q] of this.rest) b.quaternion.copy(q);
    const rate = Math.min(1, dt * 10);
    for (const [n, a] of Object.entries(this.cm.actions)) {
      if (this.one && n === this.one.name) { a.setEffectiveWeight(oneW); continue; }
      const target = n === this.base ? 1 - oneW : 0;
      const w = this.w[n] + (target - this.w[n]) * rate;
      this.w[n] = w;
      if (w < 0.01 && target === 0) { if (a.isRunning()) a.stop(); continue; }
      if (!a.isRunning()) { a.reset(); a.setLoop(THREE.LoopRepeat, Infinity); a.play(); }
      if (n === this.base) a.timeScale = this.baseSpeed;
      a.setEffectiveWeight(w);
    }
    mixer.update(dt);
  }
}

export type Team = 'hero' | 'enemy';
export interface HitOpts { stagger?: number; up?: number; source: 'vixen' | 'kailee' | 'brianna' | 'payton' | 'enemy' | 'hazard' | 'sling' | 'water'; heavy?: boolean; color?: number }

export class Actor {
  pos = V(); vel = V(); heading = 0; y = 0; vy = 0;
  radius = 0.45; hp = 100; maxHp = 100; alive = true; team: Team = 'enemy';
  cm: CharModel; anim: Anim;
  flashT = 0; staggerT = 0; hazardCd = 0; invulnT = 0; stunT = 0;
  lean = 0; squash = 0; bob = 0;
  armDown = 1.05; punchL = 0; punchR = 0; armSpread = 0;
  grounded = true;
  key: CharKey;
  constructor(key: CharKey, scene: THREE.Scene, tint?: number, emissiveBoost?: number) {
    this.key = key;
    this.cm = makeCharacter(key, { tint, emissiveBoost });
    this.cm.pivot.rotation.y = MODEL_YAW;
    this.anim = new Anim(this.cm);
    scene.add(this.cm.root);
  }
  get speed() { return Math.hypot(this.vel.x, this.vel.z); }
  forward(out = V()) { return dirFromYaw(this.heading, out); }
  flash(color = 0xffffff, t = 0.1) { this.flashT = t; setFlash(this.cm, 0.75, new THREE.Color(color)); }
  dispose(scene: THREE.Scene) { scene.remove(this.cm.root); this.cm.mixer?.stopAllAction(); }

  /** integrate velocity + vertical, resolve against boxes */
  grindBox: Box | null = null;
  private rampVy = 0;
  integrate(dt: number, boxes: Box[]) {
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt;
    // rideable floor (Soft Hyperdrive ramps / kickers / funbox tops / grind rails)
    let fl = 0; this.grindBox = null;
    for (const b of boxes) {
      if (!b.active || !b.ride) continue;
      const m = b.ride === 'rail' ? 0.35 : 0.05;
      if (this.pos.x < b.minX - m || this.pos.x > b.maxX + m || this.pos.z < b.minZ || this.pos.z > b.maxZ) continue;
      const top = boxTop(b, this.pos.z);
      if (this.y >= top - (b.ride === 'ramp' ? 0.7 : 0.3) && top > fl) { fl = top; this.grindBox = b.ride === 'rail' ? b : null; }
    }
    const wasG = this.grounded;
    if (this.grounded && this.vy <= 0 && this.y <= fl + 0.3 && this.y >= fl - 0.75) { this.rampVy = dt > 0 ? (fl - this.y) / dt : 0; this.y = fl; }
    else if (!this.grounded || this.y > fl || this.vy > 0) {
      if (wasG && this.vy <= 0 && this.rampVy > 0.5) this.vy = Math.min(9, this.rampVy * 1.15); // kicker launch off the lip
      this.rampVy = 0;
      this.vy -= 22 * dt; this.y += this.vy * dt;
      if (this.y <= fl && (fl > 0 || this.pos.x < X_EDGE + 0.3)) { this.y = fl; this.vy = 0; if (!this.grounded) { this.grounded = true; this.onLand(); } }
      else if (this.y > fl) this.grounded = false;
    }
    if (this.y > 0.02 && this.y > fl + 0.05) this.grounded = false;
    for (const b of boxes) {
      if (!b.active || this.y > b.h) continue;
      if (b.ride && this.y >= boxTop(b, this.pos.z) - (b.ride === 'ramp' ? 0.75 : 0.35)) continue;
      const cx = Math.max(b.minX, Math.min(this.pos.x, b.maxX));
      const cz = Math.max(b.minZ, Math.min(this.pos.z, b.maxZ));
      const dx = this.pos.x - cx, dz = this.pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < this.radius * this.radius) {
        if (d2 > 1e-6) {
          const d = Math.sqrt(d2), push = this.radius - d;
          const nx = dx / d, nz = dz / d;
          this.pos.x += nx * push; this.pos.z += nz * push;
          const vn = this.vel.x * nx + this.vel.z * nz;
          if (vn < 0) { this.vel.x -= vn * nx * 1.3; this.vel.z -= vn * nz * 1.3; this.onWallHit(-vn); }
        } else {
          // centre inside box: push out along the shallowest axis
          const l = this.pos.x - b.minX, r = b.maxX - this.pos.x, f = this.pos.z - b.minZ, k = b.maxZ - this.pos.z;
          const m = Math.min(l, r, f, k);
          if (m === l) this.pos.x = b.minX - this.radius; else if (m === r) this.pos.x = b.maxX + this.radius;
          else if (m === f) this.pos.z = b.minZ - this.radius; else this.pos.z = b.maxZ + this.radius;
        }
      }
    }
    if (this.pos.x < X_MIN + this.radius) { this.pos.x = X_MIN + this.radius; if (this.vel.x < 0) this.vel.x *= -0.3; }
  }
  onLand() {}
  onWallHit(_impact: number) {}
  get overWater() { return this.pos.x > X_EDGE + 0.25; }

  syncVisual(dt: number, turnRate: number) {
    const r = this.cm.root;
    r.position.set(this.pos.x, this.y + this.bob, this.pos.z);
    r.rotation.y = this.heading;
    this.lean += (THREE.MathUtils.clamp(-turnRate * this.speed * 0.035, -0.4, 0.4) - this.lean) * Math.min(1, dt * 8);
    this.cm.pivot.rotation.z = this.lean;
    this.squash = Math.max(0, this.squash - dt * 5);
    const s = 1 - this.squash * 0.18;
    this.cm.pivot.scale.set(1 + this.squash * 0.12, s, 1 + this.squash * 0.12);
    if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0) setFlash(this.cm, 0); }
    if (this.cm.procedural) { this.cm.pivot.position.y = Math.abs(Math.sin(performance.now() * 0.008)) * 0.05 * Math.min(1, this.speed / 5); }
    this.anim.update(dt);
    this.poseArms(dt);
  }

  /** Procedural arm layer on top of the clips: the source rig rests in a T-pose, so arms are
   *  lowered into a skater guard, and punches swing the arm forward toward the aim. */
  poseArms(dt: number) {
    const b = this.cm.bones;
    const L = b['upperarm_l'], R = b['upperarm_r'];
    if (!L || !R) return;
    this.punchL = Math.max(0, this.punchL - dt * 4.5);
    this.punchR = Math.max(0, this.punchR - dt * 4.5);
    this.cm.root.updateMatrixWorld(true);
    const yawQ = _q1.setFromAxisAngle(_up, this.heading);
    const fwd = _v1.set(0, 0, 1).applyQuaternion(yawQ);
    for (const side of [1, -1]) { // 1 = left (+X), -1 = right
      const bone = side === 1 ? L : R;
      const pk = side === 1 ? this.punchL : this.punchR;
      const e = pk > 0 ? Math.sin(Math.min(1, pk) * Math.PI * 0.5) : 0;
      const down = (this.armDown - this.armSpread) * (1 - e * 0.9);
      _q2.setFromAxisAngle(fwd, -side * down);
      _q3.setFromAxisAngle(_up, -side * 1.45 * e);
      _q2.premultiply(_q3);
      bone.parent!.getWorldQuaternion(_q4);
      _q5.copy(_q4).multiply(bone.quaternion); // bone world
      _q5.premultiply(_q2);
      bone.quaternion.copy(_q4.invert().multiply(_q5));
      const low = b[side === 1 ? 'lowerarm_l' : 'lowerarm_r'];
      if (low) { _q3.setFromAxisAngle(_up, -side * 0.5 * (1 - e)); low.parent!.getWorldQuaternion(_q4); _q5.copy(_q4).multiply(low.quaternion).premultiply(_q3); low.quaternion.copy(_q4.invert().multiply(_q5)); }
    }
  }
}
const _up = new THREE.Vector3(0, 1, 0);
const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion(), _q4 = new THREE.Quaternion(), _q5 = new THREE.Quaternion();

// ---------------------------------------------------------------------------
export interface EnemyDef { key: CharKey; kind: 'viper' | 'enforcer' | 'falcon'; hp: number; speed: number; accel: number; radius: number; poise: number; score: number; tint?: number }
export const ENEMY_DEFS: Record<string, EnemyDef> = {
  viper01: { key: 'viper01', kind: 'viper', hp: 42, speed: 6.2, accel: 12, radius: 0.45, poise: 0, score: 100, tint: 0xffc4ec },
  viper02: { key: 'viper02', kind: 'viper', hp: 42, speed: 6.2, accel: 12, radius: 0.45, poise: 0, score: 100, tint: 0xffc4ec },
  viper03: { key: 'viper03', kind: 'viper', hp: 42, speed: 6.2, accel: 12, radius: 0.45, poise: 0, score: 100, tint: 0xffc4ec },
  enforcer: { key: 'enforcer', kind: 'enforcer', hp: 120, speed: 4.6, accel: 9, radius: 0.6, poise: 20, score: 250 },
  falcon: { key: 'falcon', kind: 'falcon', hp: 700, speed: 6.0, accel: 12, radius: 0.8, poise: 60, score: 2000 },
};

/** Enemy finisher registry — names/beats locked in design/Enemy_Finishers_v001.md.
 *  `softMesh` is the swap slot for the Ludo/Tripo Soft GLB (CharKey); null = reuse the unit's current mesh/tint. */
export interface EnemyFinisherDef { id: string; name: string; windup: number; leapTime: number; pinTime: number; tick: number; tickDmg: number; minRange: number; maxRange: number; cooldown: number; color: number; softMesh: CharKey | null }
export const ENEMY_FINISHERS: Record<string, EnemyFinisherDef> = {
  pink_pounce: { id: 'pink_pounce', name: 'PINK POUNCE', windup: 0.9, leapTime: 0.5, pinTime: 1.5, tick: 0.3, tickDmg: 3, minRange: 3.5, maxRange: 9, cooldown: 7, color: 0xff2fb4, softMesh: null },
};

export class Enemy extends Actor {
  def: EnemyDef;
  state: 'spawn' | 'chase' | 'windup' | 'attack' | 'recover' | 'stagger' | 'dash' | 'pounce' | 'pin' | 'dead' = 'spawn';
  stateT = 0;
  target: Actor | null = null;
  retargetT = 0;
  cd = 1;
  orbit = Math.random() * Math.PI * 2;
  attackKind: 'melee' | 'shoot' | 'slam' | 'dash' | 'summon' | 'pounce' = 'melee';
  // ---- enemy finisher state (Fang · Pink Pounce) ----
  finisherCd = 4 + Math.random() * 3;
  pounceTo = V();
  pinTarget: Actor | null = null;
  pinTickT = 0;
  finisherFx: THREE.Group | null = null;
  deadT = 0;
  hitBy = new Set<number>();
  telegraph: THREE.Mesh | null = null;
  dashDir = V();
  dashHit = new Set<Actor>();
  summoned = 0;
  id = Math.floor(Math.random() * 1e9);
  lastHitSource: HitOpts['source'] = 'vixen';
  constructor(defKey: string, scene: THREE.Scene, pos: THREE.Vector3) {
    const def = ENEMY_DEFS[defKey];
    super(def.key, scene, def.tint, def.kind === 'viper' ? 4 : def.kind === 'falcon' ? 0.6 : 2.5);
    this.def = def;
    // readability: always-on threat ring + rim light so silhouettes pop at mid range
    const rc = def.kind === 'viper' ? 0xff2a6a : def.kind === 'enforcer' ? 0xffa020 : 0xff2040;
    const rr = def.radius * 2.2;
    const ring = new THREE.Mesh(new THREE.RingGeometry(rr * 0.78, rr, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: rc, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    ring.position.y = 0.04; this.cm.root.add(ring);
    // mid-range silhouette punch: inverted-hull outline in threat colour (shares skeleton, no redesign)
    const hullMat = new THREE.MeshBasicMaterial({ color: rc, side: THREE.BackSide, fog: false });
    hullMat.onBeforeCompile = (sh) => { sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n transformed += normalize(objectNormal) * 0.022;'); };
    const hulls: THREE.SkinnedMesh[] = [];
    this.cm.model.traverse((o) => { const m = o as THREE.SkinnedMesh; if (m.isSkinnedMesh && m.geometry.attributes.normal) { const h = new THREE.SkinnedMesh(m.geometry, hullMat); h.bind(m.skeleton, m.bindMatrix); h.frustumCulled = false; hulls.push(h); (m.parent ?? this.cm.model).add(h); } });
    const rim = new THREE.PointLight(rc, def.kind === 'falcon' ? 2 : 6, 4.5, 2); rim.position.set(0, 1.6, 0); this.cm.root.add(rim);
    this.hp = this.maxHp = def.hp;
    this.radius = def.radius;
    this.pos.copy(pos);
    this.team = 'enemy';
    this.stateT = 0.6;
    this.cd = 0.8 + Math.random() * 1.2;
  }
}

// ---------------------------------------------------------------------------
export class Projectile {
  mesh: THREE.Mesh; pos = V(); vel = V(); team: Team = 'enemy'; dmg = 0; life = 0; kind: 'pistol' | 'bolt' = 'bolt'; active = false; src: HitOpts['source'] = 'enemy';
  constructor(scene: THREE.Scene, geo: THREE.BufferGeometry, mat: THREE.Material) { this.mesh = new THREE.Mesh(geo, mat); this.mesh.visible = false; scene.add(this.mesh); }
}
export class ProjectilePool {
  list: Projectile[] = [];
  private scene: THREE.Scene;
  private boltGeo = new THREE.SphereGeometry(0.22, 10, 8);
  private boltMat = new THREE.MeshBasicMaterial({ color: 0xff2040, fog: false });
  private pGeo = new THREE.CylinderGeometry(0.035, 0.035, 1.1, 5).rotateX(Math.PI / 2);
  private pMat = new THREE.MeshBasicMaterial({ color: 0xffa040, fog: false });
  constructor(scene: THREE.Scene) { this.scene = scene; }
  fire(kind: Projectile['kind'], from: THREE.Vector3, dir: THREE.Vector3, speed: number, dmg: number, team: Team, src: HitOpts['source']) {
    let p = this.list.find((x) => !x.active && x.kind === kind);
    if (!p) { p = new Projectile(this.scene, kind === 'bolt' ? this.boltGeo : this.pGeo, kind === 'bolt' ? this.boltMat : this.pMat); p.kind = kind; this.list.push(p); }
    p.active = true; p.pos.copy(from); p.vel.copy(dir).multiplyScalar(speed); p.dmg = dmg; p.team = team; p.life = kind === 'bolt' ? 2.6 : 0.6; p.src = src;
    p.mesh.visible = true; p.mesh.position.copy(from); p.mesh.lookAt(_v1.copy(from).add(dir));
    return p;
  }
  clear() { for (const p of this.list) { p.active = false; p.mesh.visible = false; } }
}
export { _v2 as tmpV };
