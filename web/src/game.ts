import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import handgunUrl from './assets/models/vixen_handgun.glb?url';
import kaileeGunUrl from './assets/models/kailee_40cal.glb?url';
import * as THREE from 'three';
import { Actor, Enemy, ProjectilePool, angleDiff, angleLerp, dirFromYaw, type HitOpts , ENEMY_FINISHERS } from './actors';
import { Assets } from './assets';
import { sfx } from './audio';
import { Beam, DamageNumbers, Particles, Transients } from './fx';
import { Input } from './input';
import { GATE_Z, World, X_EDGE, X_MIN, ZONES } from './world';

const C = (h: number) => new THREE.Color(h);
const COL = { blu: C(0x2a7bff), mag: C(0xff1fcf), grn: C(0x39ff14), org: C(0xff8a2b), red: C(0xff2040), cyan: C(0x80e0ff), white: C(0xffffff), yel: C(0xffd040) };
const UP = new THREE.Vector3(0, 1, 0), EMER = C(0x1fd18a);
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), tmp3 = new THREE.Vector3();

type Spawn = 'v' | 'e' | 'f';
interface WaveDef { title: string; sub: string; batches: { list: Spawn[]; when: number }[] } // when: spawn when alive <= n (first batch: -1 = at start)
const WAVES: WaveDef[] = [
  { title: 'WAVE 1', sub: 'PINK VIPERS', batches: [{ list: ['v', 'v', 'v', 'v'], when: -1 }, { list: ['v', 'v', 'v'], when: 1 }] },
  { title: 'WAVE 2', sub: 'IRON ROSE ENFORCERS', batches: [{ list: ['v', 'v', 'v', 'e'], when: -1 }, { list: ['v', 'v', 'e', 'e'], when: 2 }] },
  { title: 'WAVE 3', sub: 'FLOODED LOT', batches: [{ list: ['v', 'v', 'v', 'v', 'e'], when: -1 }, { list: ['v', 'v', 'v', 'e', 'e'], when: 2 }] },
  { title: 'WAVE 4', sub: 'FALCON — FACE OF THE IRON ROSE', batches: [{ list: ['f', 'v', 'v'], when: -1 }] },
];
// LEVEL 2 — Soft Hyperdrive (Apex Hyperdrive army arena). Pink Vipers squads: Swarm=Scar Swarm, Cobra=Hood Strike, Fang=Jet Fang, Hive=Hex Nest.
const WAVES_L2: WaveDef[] = [
  { title: 'HYPERDRIVE · APPROACH', sub: 'SWARM — SCAR SWARM INCOMING', batches: [{ list: ['v', 'v', 'v', 'v', 'v'], when: -1 }, { list: ['v', 'v', 'v', 'v'], when: 2 }] },
  { title: 'HYPERDRIVE · RING HALL', sub: 'COBRA — HOOD STRIKE + IRON ROSE', batches: [{ list: ['v', 'v', 'v', 'e', 'e'], when: -1 }, { list: ['v', 'v', 'v', 'e'], when: 2 }] },
  { title: 'HYPERDRIVE · CORRIDOR', sub: 'FANG — JET FANG DIVES', batches: [{ list: ['v', 'v', 'v', 'v', 'e'], when: -1 }, { list: ['v', 'v', 'v', 'v', 'e', 'e'], when: 2 }] },
  { title: 'HYPERDRIVE · COCKPIT CORE', sub: 'HIVE — HEX NEST + FALCON', batches: [{ list: ['f', 'v', 'v', 'v'], when: -1 }, { list: ['v', 'v', 'e'], when: 2 }] },
];
const VIPER_SQUADS = [
  { squad: 'SWARM', fin: 'SCAR SWARM' }, { squad: 'COBRA', fin: 'HOOD STRIKE' }, { squad: 'FANG', fin: 'JET FANG' }, { squad: 'HIVE', fin: 'HEX NEST' },
];
const L2_ZONE_NAMES = ['APPROACH LANE', 'RING HALL', 'CORRIDOR VIEWPORT', 'COCKPIT CORE'];

export type GameState = 'title' | 'playing' | 'paused' | 'win' | 'lose' | 'cutscene';

interface Pickup { mesh: THREE.Mesh; pos: THREE.Vector3; t: number; active: boolean }

interface Ally { a: Actor; key: 'brianna' | 'payton'; name: string; col: number; role: 'melee' | 'ranged'; side: number; back: number; downed: boolean; downT: number; atkCd: number; shootCd: number; lastDmg: number; target: Enemy | null; retarget: number; recoverT: number; swing: number; sigCd: number; sigT: number; sigShot: number }

export class Game {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  world: World;
  input: Input;
  particles: Particles;
  trans: Transients;
  dmg: DamageNumbers;
  beam: Beam;
  proj: ProjectilePool;
  vixen: Actor;
  kailee: Actor;
  allies: Ally[] = [];
  enemies: Enemy[] = [];
  pickups: Pickup[] = [];
  state: GameState = 'title';
  runId = 0;
  time = 0;
  // wave flow
  wave = 0; waveActive = false; batch = 0; waveCleared = false; gateOpen = false; introT = 0; lastBannerT = 0;
  chaos = 0; chaosReadyAnnounced = false;
  // Mom's Frenzy (the 'chaos' meter, renamed Misty 11-03) + RAGE skate power + level
  level: 1 | 2 = 1; frenzyReason = ''; frenzyReasonT = 0; rageT = 0; rageCd = 0; lastGirlHurtT = -99; viperSeq = 0;
  private voiceQ: Promise<void> = Promise.resolve(); voiceGen = 0;
  hushVoice() { this.voiceGen++; this.voiceQ = Promise.resolve(); sfx.stopVoice(); }
  private gatling: THREE.Group | null = null; private seekerCd = 3; private kLabelT = 0;
  get waves() { return this.level === 2 ? WAVES_L2 : WAVES; }
  zoneName(i: number) { return this.level === 2 ? L2_ZONE_NAMES[i] : ZONES[i].name; }
  // player state
  p = { combo: 0, comboT: 0, atkT: 0, atkDur: 0, atkHit: false, coneCd: 0, spaceT: 0, lastSafe: new THREE.Vector3(), braking: false, brakeSfxT: 0, fwdSpeed: 0, turn: 0, aimYaw: 0, invuln: 0 };
  slingAimYaw = 0;
  sling = { phase: 'none' as 'none' | 'tether' | 'launch' | 'land', t: 0, dir: new THREE.Vector3(), dist: 0, hit: new Set<Enemy>(), firstHit: false };
  k = { downed: false, downT: 0, atkCd: 0, shootCd: 0, lastDmg: -99, target: null as Enemy | null, retarget: 0, swing: 0, recoverT: 0, slideCd: 4, slideT: 0, slideHits: 0, slideDir: new THREE.Vector3(), slideTgt: null as Enemy | null };
  camYaw = 0; camPitch = 0.18; trauma = 0; hitstop = 0; worldScale = 1; fovKick = 0;
  stats = { time: 0, kos: 0, slingKos: 0, splashKos: 0, maxCombo: 0, slings: 0, combo: 0, comboT: 0 };
  aimRing: THREE.Mesh;
  slingLine: THREE.Mesh;
  telegraphs: THREE.Mesh[] = [];
  onStateChange: (s: GameState) => void = () => {};
  hud: Record<string, HTMLElement> = {};
  private hudCache: Record<string, string | number> = {};

  constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, input: Input) {
    this.scene = scene; this.camera = camera; this.input = input;
    this.world = new World(scene, renderer);
    this.particles = new Particles(scene);
    this.trans = new Transients(scene);
    this.dmg = new DamageNumbers();
    this.beam = new Beam(scene);
    this.proj = new ProjectilePool(scene);
    this.vixen = new Actor('vixen', scene);
    this.addVixenKit(this.vixen);
    this.vixen.team = 'hero'; this.vixen.radius = 0.45;
    this.kailee = new Actor('kailee', scene);
    this.addKaileeKit(this.kailee);
    this.kailee.team = 'hero'; this.kailee.radius = 0.4; this.kailee.maxHp = this.kailee.hp = 120;
    // Brianna (deep emerald, gauntlet brawler) + Payton (purple, ranged) — AI allies, Kailee pattern
    for (const [key, name, col, role, side, back] of [['brianna', 'BRIANNA', 0x0f9a5a, 'melee', -2.4, 1.6], ['payton', 'PAYTON', 0x9a4cff, 'ranged', 2.6, 3.6]] as const) {
      const a = new Actor(key, scene); a.team = 'hero'; a.radius = 0.4; a.maxHp = a.hp = role === 'melee' ? 130 : 100;
      this.allies.push({ a, key, name, col, role, side, back, downed: false, downT: 0, atkCd: 0, shootCd: 0, lastDmg: -99, target: null, retarget: 0, recoverT: 0, swing: 0, sigCd: 4 + Math.random() * 2, sigT: 0, sigShot: 0 });
    }
    for (const al of this.allies) this.addAllyKit(al);
    this.vixen.onLand = () => { sfx.land(); this.vixen.squash = 0.6; this.particles.burst(tmp.copy(this.vixen.pos).setY(0.1), 6, COL.grn, 2, 0.12, 0.3, -3, 0.2); };
    this.vixen.onWallHit = (imp) => { if (imp > 6) { this.shake(0.25); sfx.clang(); this.vixen.squash = 0.5; } };
    // aim ring + slingshot aim line
    this.aimRing = new THREE.Mesh(new THREE.RingGeometry(0.35, 0.5, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xff1fcf, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    scene.add(this.aimRing);
    const lg = new THREE.PlaneGeometry(1.6, 28).rotateX(-Math.PI / 2).translate(0, 0, 14);
    this.slingLine = new THREE.Mesh(lg, new THREE.MeshBasicMaterial({ color: 0xff1fcf, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.slingLine.visible = false;
    scene.add(this.slingLine);
    for (const id of ['hp-vixen', 'hp-kailee', 'kailee-status', 'hp-brianna', 'brianna-status', 'hp-payton', 'payton-status', 'wave-label', 'enemy-count', 'objective', 'chaos-wrap', 'chaos-fill', 'frenzy-reason', 'ab-cone', 'ab-sling', 'banner', 'fx-vignette', 'fx-flash', 'boss', 'hp-boss'])
      this.hud[id] = document.getElementById(id)!;
    this.resetRun();
  }

  // ------------------------------------------------------------------ run control
  private clearDynamic() {
    this.runId++;
    for (const e of this.enemies) e.dispose(this.scene);
    this.enemies = [];
    for (const pk of this.pickups) { this.scene.remove(pk.mesh); }
    this.pickups = [];
    for (const t of this.telegraphs) this.scene.remove(t);
    this.telegraphs = [];
    this.proj.clear(); this.particles.clear(); this.trans.clear(); this.dmg.clear(); this.beam.hide();
    this.sling.phase = 'none'; this.worldScale = 1; this.hitstop = 0; this.trauma = 0;
  }
  private placeHeroes(z: number) {
    const v = this.vixen, k = this.kailee;
    v.cm.pivot.rotation.x = 0; v.cm.pivot.position.y = 0;
    v.pos.set(0, 0, z); v.vel.set(0, 0, 0); v.heading = 0; v.y = 0; v.vy = 0; v.grounded = true; v.alive = true;
    k.pos.set(2, 0, z - 2.5); k.vel.set(0, 0, 0); k.heading = 0; k.y = 0; k.vy = 0; k.grounded = true; k.alive = true;
    k.cm.pivot.rotation.x = 0; k.cm.pivot.position.y = 0;
    for (const al of this.allies) { const a = al.a; a.pos.set(al.side, 0, z - al.back); a.vel.set(0, 0, 0); a.heading = 0; a.y = 0; a.vy = 0; a.grounded = true; a.alive = true; a.cm.pivot.rotation.x = 0; a.cm.pivot.position.y = 0; }
    this.p.fwdSpeed = 0; this.p.lastSafe.copy(v.pos); this.camYaw = 0;
    this.camera.position.set(0, 3, z - 7);
  }
  resetRun() {
    this.clearDynamic();
    this.world.reset();
    this.wave = 0; this.waveActive = false; this.batch = 0; this.waveCleared = false; this.gateOpen = false; this.introT = 1.2;
    this.chaos = 0; this.chaosReadyAnnounced = false;
    this.vixen.hp = this.vixen.maxHp; this.kailee.hp = this.kailee.maxHp;
    for (const al of this.allies) { al.a.hp = al.a.maxHp; Object.assign(al, { downed: false, downT: 0, atkCd: 0, shootCd: 0, lastDmg: -99, target: null, recoverT: 0 }); }
    Object.assign(this.k, { downed: false, downT: 0, atkCd: 0, shootCd: 0, lastDmg: -99, target: null, recoverT: 0, slideCd: 4, slideT: 0, slideHits: 0, slideTgt: null });
    Object.assign(this.p, { combo: 0, comboT: 0, atkT: 0, coneCd: 0, invuln: 0 });
    this.stats = { time: 0, kos: 0, slingKos: 0, splashKos: 0, maxCombo: 0, slings: 0, combo: 0, comboT: 0 }; this.trickScore = 0; this.trickChain = 0;
    this.placeHeroes(-4);
    this.comsCd = {}; this.lowHpCd = 0;
    setTimeout(() => this.coms('COM_KAM_01'), 1500); setTimeout(() => this.coms('COM_LIL_01'), 5600);
    this.hushVoice(); this.lastGirlHurtT = -99;
    this.level = 1; this.world.setArena('dock'); this.spawnMines(); // after arena swap: Hyperdrive colliders off before Dock mines check placement this.rageT = 0; this.rageCd = 0; this.frenzyReason = ''; this.viperSeq = 0;
    sfx.setArena('dock');
    this.setObjective('Skate the green rail north — clear Berth 1');
    this.hud['boss'].classList.add('hidden');
  }
  retryWave() {
    this.clearDynamic();
    const w = this.wave;
    this.world.closeBarriersFrom(w);
    this.world.setGateActive(false);
    this.gateOpen = false; this.waveActive = false; this.batch = 0; this.waveCleared = false; this.introT = 0.8;
    this.vixen.hp = this.vixen.maxHp; this.kailee.hp = this.kailee.maxHp; this.k.downed = false;
    for (const al of this.allies) { al.a.hp = al.a.maxHp; al.downed = false; al.downT = 0; }
    this.chaos = Math.max(this.chaos, 50); this.chaosReadyAnnounced = this.chaos >= 100;
    this.placeHeroes(ZONES[w].z0 + (w === 0 ? 4 : 3));
    this.hud['boss'].classList.add('hidden');
    this.rageT = 0;
    this.setObjective(`Retry: ${this.zoneName(w)}`);
  }
  setState(s: GameState) { this.state = s; this.onStateChange(s); }

  // ------------------------------------------------------------------ land mines (Misty 11-03)
  private grinding = false;
  private grindT = 0; private airT = 0; private airFromRamp = false; trickScore = 0; private trickChain = 0; private trickChainT = 0;
  private trick(name: string, pts: number) {
    this.trickChain++; this.trickChainT = 3; const mult = Math.min(5, this.trickChain); const got = pts * mult; this.trickScore += got;
    this.stats.combo++; this.stats.comboT = 2.5; this.stats.maxCombo = Math.max(this.stats.maxCombo, this.stats.combo);
    this.dmg.spawn(tmp.copy(this.vixen.pos).setY(this.vixen.y + 2.8), `${name} +${got}${mult > 1 ? ` x${mult}` : ''}`, 'heal');
  }
  mines: { x: number; z: number; mesh: THREE.Group; armT: number; live: boolean }[] = [];
  private craters: THREE.Mesh[] = [];
  private spawnMines() {
    for (const m of this.mines) this.scene.remove(m.mesh);
    for (const c of this.craters) this.scene.remove(c);
    this.mines = []; this.craters = [];
    const rust = new THREE.MeshStandardMaterial({ color: 0x5a4a22, roughness: 0.9, metalness: 0.4 });
    const ox = new THREE.MeshStandardMaterial({ color: 0x7a3a14, roughness: 1, metalness: 0.2 });
    const red = new THREE.MeshStandardMaterial({ color: 0xff2200, emissive: 0xff2200, emissiveIntensity: 1.5 });
    for (let zi = 0; zi < ZONES.length; zi++) {
      const zone = ZONES[zi], n = this.level === 2 ? 5 + Math.floor(Math.random() * 3) : 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < n; i++) {
        const x = X_MIN + 3 + Math.random() * (X_EDGE - X_MIN - 6);
        const z = zone.z0 + 8 + Math.random() * (zone.z1 - zone.z0 - 12);
        if (Math.abs(x) < 3 && z < 6) continue; // keep spawn clear
        if (this.world.colliders.some((b) => b.active && x > b.minX - 0.8 && x < b.maxX + 0.8 && z > b.minZ - 0.8 && z < b.maxZ + 0.8)) continue;
        const g = new THREE.Group();
        const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.14, 14), rust); disk.position.y = 0.07;
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.04, 6, 14), ox); ring.rotation.x = Math.PI / 2; ring.position.y = 0.14;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.22, 6), ox); spike.position.y = 0.25;
        const led = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), red); led.position.set(0.22, 0.16, 0);
        g.add(disk, ring, spike, led); g.position.set(x, 0, z); g.rotation.y = Math.random() * 6;
        this.scene.add(g);
        this.mines.push({ x, z, mesh: g, armT: -1, live: true });
      }
    }
  }
  private updateMines(dt: number) {
    const actors: Actor[] = [this.vixen, this.kailee, ...this.enemies.filter((e) => e.state !== 'dead')];
    for (const m of this.mines) {
      if (!m.live) continue;
      if (m.armT < 0) {
        for (const a of actors) if (a.y < 0.4 && Math.hypot(a.pos.x - m.x, a.pos.z - m.z) < 0.9) { m.armT = 0.25; sfx.mineClick(); break; }
        continue;
      }
      m.armT -= dt;
      if (m.armT > 0) continue;
      m.live = false; this.scene.remove(m.mesh);
      const c = new THREE.Mesh(new THREE.CircleGeometry(1.3, 16), new THREE.MeshBasicMaterial({ color: 0x0a0806, transparent: true, opacity: 0.75 }));
      c.rotation.x = -Math.PI / 2; c.position.set(m.x, 0.02, m.z); this.scene.add(c); this.craters.push(c);
      const at = tmp2.set(m.x, 0.6, m.z);
      this.particles.burst(at, 30, COL.yel, 9, 0.2, 0.6); this.particles.burst(at, 18, COL.org, 6, 0.25, 0.9);
      sfx.mine(); if (Math.hypot(this.vixen.pos.x - m.x, this.vixen.pos.z - m.z) < 20) this.shake(0.6);
      for (const a of actors) {
        const d = Math.hypot(a.pos.x - m.x, a.pos.z - m.z);
        if (d > 3.6) continue;
        const f = 1 - d / 3.6;
        const dir = tmp.set(a.pos.x - m.x || 0.01, 0, a.pos.z - m.z).normalize();
        const hero = a === this.vixen || a === this.kailee;
        this.hurt(a, Math.round((hero ? 30 : 70) * f + 8), dir, 20 * f + 6, { source: 'hazard', stagger: 1.2, up: 7, heavy: true, color: 0xffa040 });
        a.vy = Math.max(a.vy, 6 * f); a.grounded = false; a.y = Math.max(a.y, 0.01);
      }
    }
  }
  // ------------------------------------------------------------------ Kamyrn + Lili coms (DOCK_DIALOGUE_PACK §C, text radio — no VO clips exist yet)
  private comsT = 0; private comsCd: Record<string, number> = {}; private lowHpCd = 0;
  /** Show a coms line AND speak it (stub TTS until real VO clips exist), queued so lines never talk over each other. */
  comsLine(who: string, line: string) {
    const gen = this.voiceGen;
    this.voiceQ = this.voiceQ.then(() => {
      if (gen !== this.voiceGen || this.state === 'cutscene') return;
      const el = document.getElementById('coms');
      if (el) { el.className = who === 'LILI' ? 'lili' : who === 'PAYTON' ? 'payton' : who === 'VIXEN' ? 'vixen' : ''; el.innerHTML = `<b>📻 ${who}:</b>${line}`; el.style.opacity = '1'; }
      this.comsT = 99; sfx.radio();
      return sfx.say(who, line).then(() => { this.comsT = 1.2; });
    });
  }
  coms(id: string) {
    const L: Record<string, [string, string]> = {
      COM_L2_0: ['KAMYRN', 'Swarm on the approach — Scar Swarm. Stay tight.'], COM_L2_1: ['LILI', 'Cobra in the Ring Hall. Hood Strike — watch the hood.'],
      COM_L2_2: ['KAMYRN', 'Jet Fang diving the corridor. Hop it.'], COM_L2_3: ['LILI', "Hive's nest is in the core. Bring everybody home, Grandma."],
      COM_KAM_01: ['KAMYRN', "Vixen on coms. Berth's hot — keep skating."], COM_LIL_01: ['LILI', "Grandma you got this. Don't stop."],
      COM_KAM_02: ['KAMYRN', 'IRS on your six. Check left.'], COM_LIL_02: ['LILI', "Kailee's with you — stay loud."],
      COM_KAM_03: ['KAMYRN', "Slither's nest ahead. End him."], COM_LIL_03: ['LILI', 'Grandma? Please get up.'],
      COM_KAM_04: ['KAMYRN', "Berth cleared. Next room. Don't freeze."], COM_LIL_04: ['LILI', "You're almost home. Bring Mom back."],
    };
    const l = L[id]; if (!l) return;
    if ((this.comsCd[id] ?? -99) > this.time - 8) return;
    this.comsCd[id] = this.time;
    this.comsLine(l[0], l[1]);
  }
  private updateComs(dt: number) {
    if (this.comsT > 0) { this.comsT -= dt; if (this.comsT <= 0) { const el = document.getElementById('coms'); if (el) el.style.opacity = '0'; } }
    this.lowHpCd -= dt;
    if (this.vixen.hp < this.vixen.maxHp * 0.3 && this.lowHpCd <= 0) { this.lowHpCd = 25; this.coms('COM_LIL_03'); }
  }
  // ------------------------------------------------------------------ helpers
  shake(a: number) { this.trauma = Math.min(1, this.trauma + a); }
  banner(big: string, small = '', dur = 2.2) {
    const b = this.hud['banner'];
    b.innerHTML = `${big}${small ? `<small>${small}</small>` : ''}`;
    b.style.opacity = '1';
    this.lastBannerT = Math.min(dur, 1.8);
  }
  setObjective(t: string) { this.hud['objective'].textContent = t; }
  // TEMP web stand-in until concept/3D redo: oversized skate wheels + chunky Sophisticated-Brutality cannon.
  addVixenKit(a: Actor) {
    const root = a.cm.root, kit = new THREE.Group(); kit.name = 'vixen-kit';
    const tire = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5, metalness: 0.3 });
    const hub = new THREE.MeshStandardMaterial({ color: 0xff1fcf, emissive: 0xff1fcf, emissiveIntensity: 1.6, metalness: 0.8, roughness: 0.25 });
    const red = new THREE.MeshStandardMaterial({ color: 0xc8102e, emissive: 0x500010, metalness: 0.7, roughness: 0.3 });
    const steel = new THREE.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.9, roughness: 0.35 });
    // BIG BRIGHT ELECTRIC wheels (Misty pt114u): same mount, ~2x size, neon hubs + glowing rim rings + sparks light.
    const tireGlow = new THREE.MeshStandardMaterial({ color: 0x1a0830, emissive: 0x6a00ff, emissiveIntensity: 0.9, roughness: 0.4, metalness: 0.5 });
    const neon = new THREE.MeshStandardMaterial({ color: 0x00f6ff, emissive: 0x00f6ff, emissiveIntensity: 3.2, toneMapped: false });
    const hubHot = new THREE.MeshStandardMaterial({ color: 0xff1fcf, emissive: 0xff1fcf, emissiveIntensity: 3.0, metalness: 0.6, roughness: 0.2, toneMapped: false });
    const wg = new THREE.TorusGeometry(0.24, 0.1, 12, 28), hg = new THREE.CylinderGeometry(0.15, 0.15, 0.16, 18), rg = new THREE.TorusGeometry(0.3, 0.025, 8, 32);
    const spokeG = new THREE.BoxGeometry(0.17, 0.03, 0.42);
    for (const sx of [-0.2, 0.2]) for (const z of [-0.3, 0, 0.3]) {
      const w = new THREE.Mesh(wg, tireGlow); w.rotation.y = Math.PI / 2; w.position.set(sx, 0.17, z); kit.add(w);
      const h = new THREE.Mesh(hg, hubHot); h.rotation.z = Math.PI / 2; h.position.copy(w.position); kit.add(h);
      const r = new THREE.Mesh(rg, neon); r.rotation.y = Math.PI / 2; r.position.copy(w.position); r.position.x += sx > 0 ? 0.06 : -0.06; kit.add(r);
      for (const a of [0, Math.PI / 2]) { const sp = new THREE.Mesh(spokeG, neon); sp.rotation.x = a; sp.position.copy(w.position); kit.add(sp); }
    }
    for (const sx of [-0.2, 0.2]) { const l = new THREE.PointLight(0x00f6ff, 2.5, 2.2); l.position.set(sx, 0.2, 0); kit.add(l); }
    // Misty-stamped Soft HANDGUN (3D 1102, LOD1) in right hand; replaces procedural cannon.
    const gun = new THREE.Group(); gun.name = 'vixen-handgun'; gun.position.set(0.42, 1.0, 0.2); kit.add(gun);
    new GLTFLoader().load(handgunUrl, (g) => {
      const m = g.scene; const bb = new THREE.Box3().setFromObject(m); const sz = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3());
      const s = 0.32 / Math.max(sz.x, sz.y, sz.z); m.position.sub(c).multiplyScalar(s); m.scale.setScalar(s);
      const holder = new THREE.Group(); holder.add(m); holder.rotation.y = -Math.PI / 2; // barrel (+X) -> forward (+Z)
      holder.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true; });
      gun.add(holder);
    });
    kit.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true; });
    root.add(kit);
  }
  gatlingSpin = 0;
  /** Web stand-ins until Soft models: Brianna thermal arm gauntlets + chest plate + BB shoulder seeker pod; Payton Gatling + big amp wheels (Vixen pattern). */
  addAllyKit(al: Ally) {
    const root = al.a.cm.root, kit = new THREE.Group(); kit.name = al.key + '-kit';
    const steel = new THREE.MeshStandardMaterial({ color: 0x23252a, metalness: 0.9, roughness: 0.35 });
    if (al.key === 'brianna') {
      const coil = new THREE.MeshStandardMaterial({ color: 0x1fd18a, emissive: 0x1fd18a, emissiveIntensity: 2.4, toneMapped: false });
      for (const sx of [-0.36, 0.36]) {
        const g = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.36, 10), steel); g.rotation.x = Math.PI / 2; g.position.set(sx, 1.0, 0.16); kit.add(g);
        for (const dz of [-0.1, 0, 0.1]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.016, 6, 14), coil); r.position.set(sx, 1.0, 0.16 + dz); kit.add(r); }
      }
      const chest = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), new THREE.MeshStandardMaterial({ color: 0xff8a2b, emissive: 0xff8a2b, emissiveIntensity: 2.5, toneMapped: false })); chest.position.set(0, 1.28, 0.17); kit.add(chest);
      const pod = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.2), steel); pod.position.set(0.2, 1.52, -0.02); kit.add(pod);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff2040, toneMapped: false })); eye.position.set(0.2, 1.52, 0.09); kit.add(eye);
    } else {
      const gun = new THREE.Group(); gun.position.set(0.36, 1.0, 0.25); kit.add(gun); this.gatling = gun;
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.24), steel); body.position.z = -0.06; gun.add(body);
      const barrels = new THREE.Group(); barrels.name = 'barrels'; gun.add(barrels);
      const pur = new THREE.MeshStandardMaterial({ color: 0x9a4cff, emissive: 0x6a20ff, emissiveIntensity: 1.6 });
      for (let i = 0; i < 6; i++) { const ang = i / 6 * Math.PI * 2; const b = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.46, 6), i % 2 ? steel : pur); b.rotation.x = Math.PI / 2; b.position.set(Math.cos(ang) * 0.05, Math.sin(ang) * 0.05, 0.22); barrels.add(b); }
      // big amp wheels like Vixen (purple neon)
      const tire = new THREE.MeshStandardMaterial({ color: 0x1a0830, emissive: 0x6a00ff, emissiveIntensity: 0.9, roughness: 0.4, metalness: 0.5 });
      const neon = new THREE.MeshStandardMaterial({ color: 0xc08bff, emissive: 0xb070ff, emissiveIntensity: 3, toneMapped: false });
      const wg = new THREE.TorusGeometry(0.2, 0.085, 10, 24), rg = new THREE.TorusGeometry(0.25, 0.02, 6, 24);
      for (const sx of [-0.18, 0.18]) for (const z of [-0.26, 0, 0.26]) {
        const w = new THREE.Mesh(wg, tire); w.rotation.y = Math.PI / 2; w.position.set(sx, 0.15, z); kit.add(w);
        const r = new THREE.Mesh(rg, neon); r.rotation.y = Math.PI / 2; r.position.copy(w.position); r.position.x += sx > 0 ? 0.05 : -0.05; kit.add(r);
      }
    }
    kit.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true; });
    root.add(kit);
  }
  // Kailee pearl .40 (3D 1103, LOD1) in right hand + thin red underbarrel laser. Replaces stand-in K pistol.
  kaileeMuzzle = new THREE.Object3D();
  addKaileeKit(a: Actor) {
    const gun = new THREE.Group(); gun.name = 'kailee-40cal';
    const hand = a.cm.bones['hand_r'];
    // root-space hang (same pattern as Vixen handgun); bone scale on these rigs is unreliable
    gun.position.set(0.36, 0.98, 0.22); a.cm.root.add(gun); void hand;
    const L = 0.28; // m, longest axis
    new GLTFLoader().load(kaileeGunUrl, (g) => {
      const m = g.scene; const bb = new THREE.Box3().setFromObject(m); const sz = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3());
      const sc = L / Math.max(sz.x, sz.y, sz.z); m.position.sub(c).multiplyScalar(sc); m.scale.setScalar(sc);
      const holder = new THREE.Group(); holder.add(m); holder.rotation.y = -Math.PI / 2; // barrel +X -> forward +Z
      holder.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true; });
      gun.add(holder);
    });
    this.kaileeMuzzle.position.set(0, 0.01, L * 0.5); gun.add(this.kaileeMuzzle);
    const laser = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 1.2, 4).rotateX(Math.PI / 2).translate(0, 0, 0.6),
      new THREE.MeshBasicMaterial({ color: 0xff1010, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    laser.position.set(0, -0.035, L * 0.5); laser.name = 'kailee-laser'; gun.add(laser);
  }
  addChaos(n: number, reason?: string) {
    if (this.sling.phase !== 'none') return;
    if (reason) { this.frenzyReason = reason; this.frenzyReasonT = 2.2; }
    else if (this.frenzyReasonT <= 0) { this.frenzyReason = 'FIGHTING FOR THEM'; this.frenzyReasonT = 1.0; }
    const before = this.chaos;
    this.chaos = Math.min(100, this.chaos + n);
    if (before < 100 && this.chaos >= 100 && !this.chaosReadyAnnounced) {
      this.chaosReadyAnnounced = true;
      this.shake(0.55); sfx.chaosReady();
      const f = this.hud['fx-flash']; f.style.transition = 'none'; f.style.opacity = '1';
      requestAnimationFrame(() => { f.style.transition = 'opacity 0.9s'; f.style.opacity = '0'; });
      this.banner("MOM'S FRENZY FULL", 'SLINGSHOT READY — PRESS E', 1.2);
      this.trans.ring(this.vixen.pos, 0xff1fcf, 0.5, 6, 0.6);
    }
  }
  heroes() { return [this.vixen, this.kailee, ...this.allies.filter((al) => !al.downed).map((al) => al.a)]; }
  allyOf(a: Actor) { return this.allies.find((al) => al.a === a); }

  /** central damage routine */
  hurt(target: Actor, amount: number, dir: THREE.Vector3, knock: number, o: HitOpts) {
    if (!target.alive) return;
    if (target === this.vixen) {
      if (this.p.invuln > 0 || this.state !== 'playing') return;
      target.hp -= amount; this.p.invuln = 0.45;
      target.flash(0xff3050, 0.12); sfx.playerHurt(); this.shake(0.18 + amount * 0.012);
      if (this.rageT > 0) this.dmg.spawn(tmp.copy(target.pos).setY(target.y + 2.6), 'PROTECT MODE', 'v');
      else { target.vel.addScaledVector(dir, knock); this.p.fwdSpeed *= 0.6; }
      this.dmg.spawn(tmp.copy(target.pos).setY(target.y + 2), '-' + Math.round(amount), 'v');
      const vg = this.hud['fx-vignette']; vg.style.opacity = '1'; setTimeout(() => { vg.style.opacity = '0'; }, 120);
      if (target.anim.has('HitReact_Light') && this.p.atkT <= 0) target.anim.once('HitReact_Light', 0.35);
      this.stats.combo = 0;
      if (target.hp <= 0) { target.hp = 0; this.lose(); }
      return;
    }
    const al = this.allyOf(target);
    if (al) {
      if (al.downed) return;
      target.hp -= amount; target.flash(al.col, 0.1); sfx.kaileeHurt();
      target.vel.addScaledVector(dir, knock * 0.7);
      this.dmg.spawn(tmp.copy(target.pos).setY(target.y + 1.9), '-' + Math.round(amount), 'k');
      al.lastDmg = this.time; this.lastGirlHurtT = this.time; this.addChaos(Math.min(amount, 20) * 1.3, 'PROTECT — ' + al.name + ' HIT');
      if (target.hp <= 0) {
        target.hp = 0; al.downed = true; al.downT = al.key === 'payton' ? 9 : 8; sfx.kaileeDown(); this.addChaos(25, al.name + ' DOWN — PROTECT HER');
        this.banner(al.name + ' DOWN', al.key === 'payton' ? 'COVER HER — SHE GETS UP SLOW' : 'BACK UP IN 8 SECONDS', 1.4);
        if (al.key === 'payton') this.paytonDownComs();
      }
      else if (target.anim.has('HitReact_Light')) target.anim.once('HitReact_Light', 0.3);
      return;
    }
    if (target === this.kailee) {
      if (this.k.downed || this.sling.phase !== 'none') return;
      const dealt = Math.min(amount, target.hp);
      target.hp -= amount; target.flash(0xffa060, 0.1); sfx.kaileeHurt();
      target.vel.addScaledVector(dir, knock * 0.7);
      this.dmg.spawn(tmp.copy(target.pos).setY(target.y + 1.9), '-' + Math.round(amount), 'k');
      this.k.lastDmg = this.time; this.lastGirlHurtT = this.time;
      this.addChaos(dealt * 1.6, 'PROTECT — KAILEE HIT');
      if (target.hp <= 0) {
        target.hp = 0; this.k.downed = true; this.k.downT = 8; sfx.kaileeDown();
        this.addChaos(20, 'KAILEE DOWN — PROTECT HER');
        this.banner('KAILEE DOWN', 'SHE\'S BACK UP IN 8 SECONDS', 1.6);
      } else if (target.anim.has('HitReact_Light')) target.anim.once('HitReact_Light', 0.3);
      return;
    }
    // enemy
    const e = target as Enemy;
    if (e.state === 'dead') return;
    if (o.source === 'vixen' && this.rageT > 0) amount = Math.round(amount * 1.5);
    if (o.source === 'vixen') { const g = this.girlNear(e.pos, 5); if (g) this.addChaos(3, 'VIXEN PROTECTS ' + g); }
    e.hp -= amount;
    e.lastHitSource = o.source;
    e.flash(o.color ?? 0xffffff, o.heavy ? 0.14 : 0.08);
    e.squash = Math.min(1, e.squash + (o.heavy ? 0.9 : 0.5));
    const poiseOk = e.def.poise === 0 || o.heavy || (o.source === 'sling');
    const kb = e.def.kind === 'falcon' ? knock * 0.35 : e.def.kind === 'enforcer' ? knock * 0.6 : knock;
    e.vel.addScaledVector(dir, kb);
    if (o.up && poiseOk && e.def.kind !== 'falcon') { e.vy = o.up; e.grounded = false; e.y = Math.max(e.y, 0.01); }
    if (o.stagger && poiseOk) {
      e.state = 'stagger'; e.stateT = e.def.kind === 'falcon' ? Math.min(0.5, o.stagger) : o.stagger;
      if (e.telegraph) { e.telegraph.visible = false; }
      if (e.state === 'stagger') this.hidePounceFx(e);
      if (e.anim.has('HitReact_Light')) e.anim.once('HitReact_Light', Math.min(0.5, e.stateT));
    }
    const big = amount >= 40;
    this.dmg.spawn(tmp.copy(e.pos).setY(e.y + e.cm.height + 0.2), String(Math.round(amount)), big ? 'big' : '');
    this.particles.burst(tmp.copy(e.pos).setY(e.y + 1.1), big ? 22 : 9, o.source === 'kailee' ? COL.org : COL.mag, big ? 9 : 5, big ? 0.25 : 0.16, 0.35, -8);
    if (o.source !== 'sling' && o.source !== 'hazard') this.addChaos(Math.min(6, amount * 0.22)); // hero hits build chaos too
    if (o.source !== 'hazard') { this.stats.combo++; this.stats.comboT = 2.5; this.stats.maxCombo = Math.max(this.stats.maxCombo, this.stats.combo); }
    if (e.hp <= 0) this.killEnemy(e, o.source);
    else sfx.hit();
  }

  killEnemy(e: Enemy, src: HitOpts['source']) {
    if (e.state === 'dead') return;
    e.state = 'dead'; e.deadT = 0; e.hp = 0;
    if (e.telegraph) { this.scene.remove(e.telegraph); e.telegraph = null; }
    if (e.finisherFx) { this.scene.remove(e.finisherFx); e.finisherFx = null; }
    e.pinTarget = null;
    this.stats.kos++;
    if (src !== 'sling') this.addChaos(e.def.kind === 'enforcer' ? 14 : 8);
    if (src === 'sling') this.stats.slingKos++;
    if (src === 'water') this.stats.splashKos++;
    sfx.enemyDie();
    this.particles.burst(tmp.copy(e.pos).setY(e.y + 1), 26, e.def.kind === 'viper' ? COL.mag : COL.red, 8, 0.22, 0.6, -6, 1);
    this.trans.ring(e.pos, e.def.kind === 'viper' ? 0xff1fcf : 0xff2040, 0.3, 2.5, 0.4);
    if (e.def.kind !== 'falcon') { e.vy = Math.max(e.vy, 5); e.grounded = false; e.y = Math.max(0.01, e.y); }
    const dropChance = e.def.kind === 'enforcer' ? 0.6 : e.def.kind === 'falcon' ? 0 : 0.22;
    if (Math.random() < dropChance && src !== 'water') this.spawnPickup(e.pos);
    if (e.def.kind === 'falcon') { this.hud['boss'].classList.add('hidden'); this.shake(0.8); this.banner('FALCON BROKEN', '', 2); for (const o of this.enemies) if (o !== e && o.state !== 'dead') this.hurt(o, 999, tmp.set(0, 0, 1), 5, { source: 'vixen', stagger: 1 }); }
  }

  spawnPickup(at: THREE.Vector3) {
    let pk = this.pickups.find((p) => !p.active);
    if (!pk) {
      const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.28), new THREE.MeshBasicMaterial({ color: 0x5aff40, fog: false }));
      pk = { mesh, pos: new THREE.Vector3(), t: 0, active: false };
      this.scene.add(mesh); this.pickups.push(pk);
    }
    pk.active = true; pk.t = 0; pk.pos.copy(at).setY(0.8); pk.mesh.visible = true;
    pk.pos.x = Math.min(pk.pos.x, X_EDGE - 1);
  }

  spawnEnemy(type: Spawn, pos?: THREE.Vector3) {
    const zone = ZONES[this.wave];
    const p = pos ? pos.clone() : new THREE.Vector3(-10 + Math.random() * 20, 0, Math.min(zone.z1 - 3, Math.max(zone.z0 + 6, this.vixen.pos.z + 14 + Math.random() * 14)));
    // keep spawns off colliders
    for (let tries = 0; tries < 8; tries++) {
      if (!this.world.colliders.some((b) => b.active && p.x > b.minX - 1 && p.x < b.maxX + 1 && p.z > b.minZ - 1 && p.z < b.maxZ + 1)) break;
      p.x = -10 + Math.random() * 20;
    }
    const key = type === 'v' ? ['viper01', 'viper02', 'viper03'][Math.floor(Math.random() * 3)] : type === 'e' ? 'enforcer' : 'falcon';
    const e = new Enemy(key, this.scene, p);
    e.heading = Math.PI;
    this.enemies.push(e);
    this.trans.ring(p, 0x39ff14, 0.2, 2.2, 0.5);
    this.trans.flash(tmp.copy(p).setY(1.2), 0x39ff14, 0.2, 1.0, 0.3);
    this.particles.burst(tmp.copy(p).setY(0.3), 14, COL.grn, 5, 0.2, 0.6, 4, 1);
    if (this.level === 2 && type === 'v') {
      const sq = VIPER_SQUADS[Math.min(3, this.wave)] ?? VIPER_SQUADS[this.viperSeq++ % 4];
      (e as any).squad = sq.squad; (e as any).fin = sq.fin;
      if (this.viperSeq++ % 3 === 0) this.dmg.spawn(tmp.copy(p).setY(2.4), sq.squad, 'big');
    }
    if (type === 'f') {
      this.hud['boss'].classList.remove('hidden');
      e.cm.root.scale.setScalar(1);
    }
    return e;
  }

  // ------------------------------------------------------------------ main update
  update(rawDt: number) {
    if (this.state !== 'playing') { this.updateCamera(rawDt, true); return; }
    const dt = Math.min(rawDt, 1 / 30);
    this.time += dt; this.stats.time += dt;
    if (this.hitstop > 0) { this.hitstop -= dt; this.updateCamera(dt, false); this.input.endFrame(); return; }
    const wdt = dt * this.worldScale;
    this.updatePlayer(dt);
    this.updateSling(dt);
    if (this.sling.phase === 'none') this.updateKailee(wdt);
    for (const al of this.allies) this.updateAlly(al, wdt);
    for (const e of this.enemies) this.updateEnemy(e, wdt);
    this.separate();
    this.updateProjectiles(wdt);
    this.updateHazards(dt);
    this.updateMines(dt);
    this.updateComs(dt);
    this.updateFrenzy(dt);
    this.updatePickups(dt);
    this.updateWaves(dt);
    // visuals
    this.vixen.syncVisual(dt, this.p.turn);
    this.kailee.syncVisual(wdt, 0);
    for (const al of this.allies) al.a.syncVisual(wdt, 0);
    for (const e of this.enemies) e.syncVisual(wdt, 0);
    this.enemies = this.enemies.filter((e) => { if (e.state === 'dead' && e.deadT > 1.4) { e.dispose(this.scene); return false; } return true; });
    this.world.update(dt, this.time, this.vixen.pos);
    this.particles.update(dt);
    this.trans.update(dt);
    if (this.stats.comboT > 0) { this.stats.comboT -= dt; if (this.stats.comboT <= 0) this.stats.combo = 0; }
    if (this.lastBannerT > 0) { this.lastBannerT -= dt; if (this.lastBannerT <= 0) this.hud['banner'].style.opacity = '0'; }
    sfx.intensity = this.waveActive ? (this.wave >= 3 ? 1 : 0.7) : 0.25;
    sfx.updateMusic();
    sfx.setSkate(this.vixen.speed / 11, this.vixen.grounded);
    this.updateCamera(dt, false);
    this.updateHud();
    this.input.endFrame();
  }

  // ------------------------------------------------------------------ player
  private aimAssist(baseYaw: number, range: number, cone: number) {
    let best: Enemy | null = null, bestScore = Infinity;
    for (const e of this.enemies) {
      if (e.state === 'dead') continue;
      const dx = e.pos.x - this.vixen.pos.x, dz = e.pos.z - this.vixen.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > range) continue;
      const a = Math.abs(angleDiff(baseYaw, Math.atan2(dx, dz)));
      if (a > cone) continue;
      const s = d * (1 + a * 2);
      if (s < bestScore) { bestScore = s; best = e; }
    }
    return best ? Math.atan2(best.pos.x - this.vixen.pos.x, best.pos.z - this.vixen.pos.z) : baseYaw;
  }

  private updatePlayer(dt: number) {
    const v = this.vixen, p = this.p, inp = this.input;
    p.invuln = Math.max(0, p.invuln - dt);
    p.coneCd = Math.max(0, p.coneCd - dt);
    p.comboT = Math.max(0, p.comboT - dt);
    v.stunT = Math.max(0, v.stunT - dt);
    v.hazardCd = Math.max(0, v.hazardCd - dt);
    // input → wish dir (camera relative)
    let ix = (inp.down('KeyD') ? 1 : 0) - (inp.down('KeyA') ? 1 : 0) + inp.touchMove.x;
    let iz = (inp.down('KeyW') ? 1 : 0) - (inp.down('KeyS') ? 1 : 0) + inp.touchMove.y;
    const il = Math.hypot(ix, iz); if (il > 1) { ix /= il; iz /= il; }
    const f = dirFromYaw(this.camYaw, tmp);
    const wx = f.x * iz - f.z * ix, wz = f.z * iz + f.x * ix; // right = (-f.z, 0, f.x)
    const wishLen = Math.hypot(wx, wz);
    const sling = this.sling.phase !== 'none' && this.sling.phase !== 'land';
    const rage = this.rageT > 0;
    const MAX = rage ? 11.8 : 8.0, ACC = rage ? 24 : 14.5; // pace pass: was 11.5 / 21; RAGE = protect burst
    let turn = 0;
    if (inp.down('Space')) p.spaceT += dt; else p.spaceT = 0;
    p.braking = (inp.down('ShiftLeft', 'ShiftRight') || p.spaceT > 0.2) && v.grounded;
    if (wishLen > 0.1 && !sling && p.atkT <= 0) {
      const desired = Math.atan2(wx, wz);
      const d = angleDiff(v.heading, desired);
      const spd01 = Math.min(1, p.fwdSpeed / MAX);
      const rate = p.fwdSpeed < 2.5 ? 11 : THREE.MathUtils.lerp(7.5, 3.6, spd01);
      const step = THREE.MathUtils.clamp(d, -rate * dt, rate * dt);
      v.heading += step; turn = step / dt;
      const align = Math.cos(d);
      if (align > 0) p.fwdSpeed += ACC * dt * align * wishLen * (v.grounded ? 1 : 0.3);
      else p.fwdSpeed -= 14 * dt * -align; // reversing = carve-brake
    } else {
      p.fwdSpeed -= (v.grounded ? 1.5 : 0.2) * dt; // long glide
    }
    if (p.braking) {
      p.fwdSpeed -= 28 * dt;
      if (v.speed > 3) {
        p.brakeSfxT -= dt; if (p.brakeSfxT <= 0) { sfx.brake(); p.brakeSfxT = 0.25; }
        const b = v.forward(tmp2).multiplyScalar(-2);
        this.particles.emit(tmp3.copy(v.pos).setY(0.1), b.add(new THREE.Vector3((Math.random() - 0.5) * 3, 2, (Math.random() - 0.5) * 3)), COL.yel, 0.12, 0.3, -9, 1);
      }
    }
    if (this.pinnedBy(v)) { p.fwdSpeed = 0; v.vel.set(0, 0, 0); v.vy = Math.min(v.vy, 0); }
    const stunMul = v.stunT > 0 ? 0.45 : 1;
    p.fwdSpeed = THREE.MathUtils.clamp(p.fwdSpeed, 0, MAX * stunMul + 4);
    if (p.fwdSpeed > MAX * stunMul) p.fwdSpeed -= 12 * dt;
    p.turn = turn;
    // velocity tracks heading with finite grip (drift) — knockback decays through this too
    const grip = v.grounded ? 7 : 1.2;
    const tvx = Math.sin(v.heading) * p.fwdSpeed, tvz = Math.cos(v.heading) * p.fwdSpeed;
    if (!sling) {
      v.vel.x += (tvx - v.vel.x) * Math.min(1, grip * dt);
      v.vel.z += (tvz - v.vel.z) * Math.min(1, grip * dt);
    }
    // hop
    if (inp.hit('Space') && v.grounded && !sling && !this.pinnedBy(v)) { v.vy = 7.2; v.grounded = false; v.y = 0.01; sfx.hop(); v.squash = 0.3; }
    // aim
    const baseAim = inp.locked ? this.camYaw : v.heading;
    p.aimYaw = this.aimAssist(baseAim, 9, inp.locked ? 0.45 : 0.9);
    // attacks
    if (p.atkT > 0) p.atkT -= dt;
    if (!sling && inp.hit('Mouse0', 'KeyJ') && p.atkT <= 0) {
      const kp = this.pinnedBy(this.kailee);
      if (kp && v.pos.distanceTo(kp.pos) < 10) this.partnerCheck(kp); // silent close-range CHECK on Fang
      else this.startShoot();
    }
    if (!sling && inp.hit('Mouse2', 'KeyK') && p.coneCd <= 0) this.sonicCone();
    if (inp.hit('KeyE', 'KeyL')) this.tryShatter();
    // Soft rail hop assist: in the air near an orange rail, drift onto it
    if (!v.grounded && !sling) {
      let best: any = null, bd = 2.6;
      for (const b of this.world.colliders) { if (b.ride !== 'rail' || !b.active || v.pos.z < b.minZ - 1.5 || v.pos.z > b.maxZ) continue; const cx = (b.minX + b.maxX) / 2, d = Math.abs(cx - v.pos.x); if (d < bd && v.y > b.h - 0.4) { bd = d; best = cx; } }
      if (best !== null) v.pos.x += (best - v.pos.x) * Math.min(1, dt * 6);
    }
    if (!sling && this.sling.phase !== 'land') v.integrate(dt, this.world.colliders);
    // GRIND (Soft Hyperdrive rails): lock to the bar, keep speed up, sparks
    if (v.grindBox && v.grounded) {
      const gb = v.grindBox, cx = (gb.minX + gb.maxX) / 2; v.pos.x += (cx - v.pos.x) * Math.min(1, dt * 12);
      p.fwdSpeed = Math.max(p.fwdSpeed, 7.5); if (!this.grinding) { this.grinding = true; this.grindT = 0; sfx.hop(); }
      this.grindT += dt;
      // grind sparks: hot orange/yellow showers off the trucks
      for (let i = 0; i < 3; i++) this.particles.emit(tmp3.set(v.pos.x + (Math.random() - 0.5) * 0.3, v.y + 0.05, v.pos.z), tmp2.set((Math.random() - 0.5) * 3, 1 + Math.random() * 2.5, -Math.cos(v.heading) * (1 + Math.random() * 2)), Math.random() < 0.5 ? COL.org : COL.yel, 0.07, 0.35, -12);
    } else {
      if (this.grinding) { const pts = Math.round(50 + this.grindT * 120); this.trick(this.grindT > 1.5 ? 'LONG GRIND' : 'GRIND', pts); }
      this.grinding = false;
    }
    // air tracking (kickers / funbox lands)
    if (!v.grounded) { if (this.airT === 0) this.airFromRamp = v.vy > 7.3 || v.y > 0.6; this.airT += dt; }
    else if (this.airT > 0) {
      if (!this.grinding && this.airT > 0.55) { if (v.y > 0.3) this.trick('FUNBOX LAND', 150); else this.trick(this.airFromRamp ? 'KICKER AIR' : 'AIR', Math.round(this.airT * 160)); }
      this.airT = 0;
    }
    if (this.trickChainT > 0) { this.trickChainT -= dt; if (this.trickChainT <= 0) this.trickChain = 0; }
    // water
    if (v.overWater && v.y < 0.2) this.fallInWater(v);
    else if (v.grounded && v.pos.x < X_EDGE - 1.2) p.lastSafe.copy(v.pos);
    // animation base
    if (!v.anim.busy) {
      if (p.braking && v.speed > 2) v.anim.setBase('Brake');
      else if (Math.abs(turn) > 1.6 && v.speed > 3) v.anim.setBase(turn > 0 ? 'Locomotion_TurnL' : 'Locomotion_TurnR', 1);
      else if (v.speed > 1.2) v.anim.setBase('Locomotion_Fwd', 0.6 + v.speed / MAX * 0.8);
      else v.anim.setBase('Idle_Skate');
    }
    // skate sparks at speed
    if (v.grounded && v.speed > 6.5 && Math.random() < 0.4) this.particles.emit(tmp3.copy(v.pos).setY(0.05), new THREE.Vector3((Math.random() - 0.5), 0.8, (Math.random() - 0.5)), COL.mag, 0.08, 0.25, -4);
    // aim ring
    const ad = dirFromYaw(p.aimYaw, tmp2);
    this.aimRing.position.set(v.pos.x + ad.x * 3.2, 0.05, v.pos.z + ad.z * 3.2);
    this.aimRing.scale.setScalar(1 + Math.sin(this.time * 6) * 0.08);
    const ready = this.chaos >= 100 && this.sling.phase === 'none' && !this.k.downed;
    this.slingLine.visible = ready;
    if (ready) { this.slingLine.position.set(v.pos.x, 0.04, v.pos.z); this.slingLine.rotation.y = p.aimYaw; (this.slingLine.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(this.time * 8) * 0.08; }
  }

  private startShoot() {
    const p = this.p, v = this.vixen;
    p.atkDur = 0.3; p.atkT = p.atkDur; p.atkHit = true;
    v.heading = angleLerp(v.heading, p.aimYaw, 0.85);
    p.combo = (p.combo + 1) % 2;
    if (v.anim.has('Check_R')) v.anim.once('Check_R', 0.2);
    v.punchR = 1;
    const dir = dirFromYaw(p.aimYaw, new THREE.Vector3()).normalize();
    const from = new THREE.Vector3().copy(v.pos).setY(v.y + 1.3).addScaledVector(dir, 0.5);
    this.proj.fire('pistol', from, dir, 55, 14, 'hero', 'vixen');
    sfx.pistol(); this.shake(0.06);
    this.particles.burst(from.clone().addScaledVector(dir, 0.3), 5, COL.mag, 3, 0.1, 0.15, 0, 0.2);
  }
  private sonicCone() {
    const p = this.p, v = this.vixen;
    p.coneCd = 1.5;
    v.heading = p.aimYaw;
    const origin = tmp3.copy(v.pos).setY(v.y + 1.25);
    this.trans.cone(origin, p.aimYaw, 7.0, 0.38, 0xff1fcf, 0.3);
    const cdir = dirFromYaw(p.aimYaw, new THREE.Vector3());
    for (let i = 1; i <= 3; i++) this.trans.vring(origin.clone().addScaledVector(cdir, i * 2.1), cdir, i === 2 ? 0xffffff : 0xff1fcf, 0.15, 0.4 + i * 0.55, 0.16 + i * 0.06);
    sfx.cone(); this.shake(0.2);
    if (v.anim.has('Slingshot_Release')) v.anim.once('Slingshot_Release', 0.4);
    v.punchL = 1; v.punchR = 1;
    const fx = dirFromYaw(p.aimYaw, tmp2.clone());
    for (const e of this.enemies) {
      if (e.state === 'dead') continue;
      const dx = e.pos.x - v.pos.x, dz = e.pos.z - v.pos.z, d = Math.hypot(dx, dz);
      if (d > 7.5 + e.radius) continue;
      if (Math.abs(angleDiff(p.aimYaw, Math.atan2(dx, dz))) > 0.62) continue;
      const dir = new THREE.Vector3(dx, 0, dz).normalize().lerp(fx, 0.4).normalize();
      this.hurt(e, 16, dir, 14 * (1 - d / 10), { source: 'vixen', stagger: 0.9, up: 3, heavy: e.def.kind === 'enforcer', color: 0xff60e0 });
    }
    // sonic cone also shatters incoming bolts
    for (const pr of this.proj.list) {
      if (!pr.active || pr.team !== 'enemy') continue;
      const dx = pr.pos.x - v.pos.x, dz = pr.pos.z - v.pos.z;
      if (Math.hypot(dx, dz) < 7.5 && Math.abs(angleDiff(p.aimYaw, Math.atan2(dx, dz))) < 0.7) { pr.active = false; pr.mesh.visible = false; this.particles.burst(pr.pos, 6, COL.mag, 3, 0.12, 0.2); }
    }
  }

  private fallInWater(a: Actor) {
    sfx.splash();
    this.particles.burst(tmp.copy(a.pos).setY(-0.6), 30, COL.cyan, 6, 0.2, 0.8, -9, 1.5);
    this.trans.ring(tmp.copy(a.pos).setY(-1.05), 0x80e0ff, 0.3, 3, 0.7, 0.8, -1.05);
    if (a === this.vixen) {
      a.pos.copy(this.p.lastSafe); a.pos.x = Math.min(a.pos.x, X_EDGE - 2.5); a.vel.set(0, 0, 0); this.p.fwdSpeed = 0; a.y = 0; a.vy = 0; a.grounded = true;
      this.p.invuln = 0;
      this.hurt(a, 15, tmp.set(-1, 0, 0), 0, { source: 'water' });
      this.p.invuln = 1.2;
      this.banner('SPLASH!', 'THE WATER BITES — STAY ON THE QUAY', 1.2);
    } else if (a === this.kailee || this.allyOf(a)) {
      a.pos.copy(this.vixen.pos).add(tmp.set(-1.5, 0, -1.5)); a.vel.set(0, 0, 0); a.y = 0; a.vy = 0; a.grounded = true;
      this.hurt(a, 10, tmp.set(-1, 0, 0), 0, { source: 'water' });
    } else {
      const e = a as Enemy;
      this.dmg.spawn(tmp.copy(e.pos).setY(1.5), 'SPLASH KO', 'big');
      this.killEnemy(e, 'water');
      e.cm.root.visible = false;
      e.deadT = 1.4;
    }
  }

  // ------------------------------------------------------------------ SHATTER-SLINGSHOT
  tryShatter(force = false) {
    if (this.sling.phase !== 'none') return false;
    if (!force && this.chaos < 100) { this.dmg.spawn(tmp.copy(this.vixen.pos).setY(2.4), 'CHAOS ' + Math.floor(this.chaos) + '% — HIT & KO TO FILL', 'k'); this.banner('SLINGSHOT NOT READY', 'CHAOS ' + Math.floor(this.chaos) + '% — SHOOT, KO, OR LET KAILEE TANK', 1.0); return false; }
    if (this.k.downed) { this.banner('KAILEE IS DOWN', 'WAIT FOR HER TO RECOVER', 1.2); return false; }
    const s = this.sling;
    s.phase = 'tether'; s.t = 0; s.hit.clear(); s.dist = 0; s.firstHit = false;
    s.dir.copy(dirFromYaw(this.p.aimYaw));
    this.vixen.heading = this.p.aimYaw;
    this.vixen.vel.multiplyScalar(0.2); this.p.fwdSpeed = 0;
    this.worldScale = 0.25;
    this.stats.slings++;
    sfx.tether();
    this.banner('VIXEN PLANTS — AIM KAILEE', 'MOUSE / A·D TO AIM · RELEASE E/L OR CLICK TO FIRE', 1.4);
    this.slingAimYaw = this.p.aimYaw;
    this.trans.ring(this.vixen.pos, 0xff1fcf, 0.4, 3, 0.5);
    if (this.vixen.anim.has('Slingshot_Charge')) this.vixen.anim.once('Slingshot_Charge', 0.55);
    this.chaos = 0; this.chaosReadyAnnounced = false;
    return true;
  }
  private updateSling(dt: number) {
    const s = this.sling, v = this.vixen, k = this.kailee;
    if (s.phase === 'none') { this.beam.hide(); return; }
    s.t += dt;
    if (s.phase === 'tether') {
      // reel Kailee in front of Vixen
      const goal = tmp.copy(v.pos).addScaledVector(s.dir, 1.3);
      k.pos.lerp(goal, Math.min(1, dt * 9));
      k.y += (0.9 - k.y) * Math.min(1, dt * 9);
      k.heading = Math.atan2(s.dir.x, s.dir.z);
      const a = tmp2.copy(v.pos).setY(v.y + 1.3), b = tmp3.copy(k.pos).setY(k.y + 1.0);
      this.beam.set(a, b, 1 + Math.sin(this.time * 60) * 0.5);
      this.fovKick = -6;
      if (Math.random() < 0.6) this.particles.emit(b, new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2), COL.mag, 0.2, 0.3);
      // BULLET-TIME AIM: world crawls, player steers Kailee, release to fire
      this.worldScale = 0.12;
      const inp = this.input;
      if (inp.locked) this.slingAimYaw = this.camYaw;
      if (inp.down('KeyA', 'ArrowLeft')) this.slingAimYaw += dt * 2.6;
      if (inp.down('KeyD', 'ArrowRight')) this.slingAimYaw -= dt * 2.6;
      if (inp.touchMove && Math.abs(inp.touchMove.x) > 0.2) this.slingAimYaw -= inp.touchMove.x * dt * 2.6;
      const aimed = this.aimAssist(this.slingAimYaw, 26, 0.3);
      s.dir.copy(dirFromYaw(aimed)); v.heading = aimed;
      this.slingLine.visible = true; this.slingLine.position.set(v.pos.x, 0.05, v.pos.z); this.slingLine.rotation.y = aimed;
      this.slingLine.scale.set(2.2, 1, 1); (this.slingLine.material as THREE.MeshBasicMaterial).opacity = 0.55 + Math.sin(this.time * 20) * 0.2;
      const released = s.t > 0.18 && (!inp.down('KeyE', 'KeyL') || inp.hit('Mouse0', 'Space', 'KeyJ'));
      if (released || s.t > 1.6) {
        this.slingLine.visible = false; this.slingLine.scale.set(1, 1, 1);
        s.phase = 'launch'; s.t = 0;
        sfx.scream(); sfx.slingshotLaunch();
        this.hud['banner'].style.opacity = '0'; this.lastBannerT = 0;
        this.trans.flash(tmp.copy(v.pos).addScaledVector(s.dir, 0.8).setY(v.y + 1.3), 0xff40e0, 0.2, 1.1, 0.2);
        this.trans.ring(v.pos, 0xff1fcf, 0.5, 4.5, 0.5);
        this.shake(0.7);
        const muzzle = tmp.copy(v.pos).addScaledVector(s.dir, 0.7).setY(v.y + 1.3);
        this.trans.vring(muzzle, s.dir, 0xff1fcf, 0.3, 2.0, 0.35);
        this.trans.vring(muzzle.clone().addScaledVector(s.dir, 2.5), s.dir, 0xffffff, 0.2, 1.4, 0.3);
        this.trans.cone(muzzle, Math.atan2(s.dir.x, s.dir.z), 6, 0.22, 0xff40e0, 0.3);
        this.worldScale = 1;
        this.fovKick = 12;
        if (v.anim.has('Slingshot_Release')) v.anim.once('Slingshot_Release', 0.6);
        if (k.anim.has('Check_R')) k.anim.once('Check_R', 0.8);
        k.vel.copy(s.dir).multiplyScalar(42); this.hitstop = 0.05;
        k.punchL = 1.5; k.punchR = 1.5; v.punchL = 1.2; v.punchR = 1.2;
      }
      return;
    }
    if (s.phase === 'launch') {
      this.beam.hide();
      const step = 42 * dt;
      k.pos.addScaledVector(s.dir, step); s.dist += step;
      k.y = 0.9 + Math.sin(Math.min(1, s.dist / 26) * Math.PI) * 0.8;
      k.heading = Math.atan2(s.dir.x, s.dir.z);
      k.cm.pivot.rotation.x = 0.9; // superman pose lean
      // fiery trail
      for (let i = 0; i < 4; i++) this.particles.emit(tmp.copy(k.pos).setY(k.y + 0.8 + Math.random() * 0.6), tmp2.set((Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3).addScaledVector(s.dir, -6), i % 2 ? COL.org : COL.mag, 0.35, 0.45, 1);
      // hit everything along the path
      for (const e of this.enemies) {
        if (e.state === 'dead' || s.hit.has(e)) continue;
        const d = Math.hypot(e.pos.x - k.pos.x, e.pos.z - k.pos.z);
        if (d < 2.4 + e.radius) {
          s.hit.add(e);
          const side = tmp.set(e.pos.x - k.pos.x, 0, e.pos.z - k.pos.z).normalize().multiplyScalar(0.5).add(s.dir).normalize();
          this.hurt(e, e.def.kind === 'falcon' ? 170 : 110, side, 28, { source: 'sling', stagger: 1.5, up: 7, heavy: true, color: 0xff60e0 });
          this.shake(0.35);
          if (!s.firstHit) { s.firstHit = true; this.hitstop = 0.12; sfx.impact(); this.dmg.spawn(tmp.copy(e.pos).setY(e.y + 3), 'SMACK!', 'big'); }
        }
      }
      // stop on walls / range / water edge
      const blocked = this.world.colliders.some((b) => b.active && k.pos.x > b.minX - 0.4 && k.pos.x < b.maxX + 0.4 && k.pos.z > b.minZ - 0.4 && k.pos.z < b.maxZ + 0.4 && b.h > 1);
      if (k.pos.x > X_EDGE - 0.6) { k.pos.x = X_EDGE - 0.6; }
      if (k.pos.x < X_MIN + 0.6) { k.pos.x = X_MIN + 0.6; }
      if (s.dist > 27 || blocked) {
        if (blocked) k.pos.addScaledVector(s.dir, -0.8);
        s.phase = 'land'; s.t = 0;
        k.y = 0; k.vel.copy(s.dir).multiplyScalar(5);
        sfx.impact(); this.shake(0.5);
        this.trans.ring(k.pos, 0xff8a2b, 0.5, 5, 0.5);
        this.trans.ring(k.pos, 0xff1fcf, 0.3, 4, 0.4);
        this.particles.burst(tmp.copy(k.pos).setY(0.3), 30, COL.org, 9, 0.25, 0.5, -8, 0.8);
        this.trans.flash(tmp.copy(k.pos).setY(0.8), 0xff8a2b, 0.4, 3.5, 0.3);
        for (const e of this.enemies) {
          if (e.state === 'dead') continue;
          const dx = e.pos.x - k.pos.x, dz = e.pos.z - k.pos.z, d = Math.hypot(dx, dz);
          if (d < 4.5) this.hurt(e, 35, tmp.set(dx, 0, dz).normalize(), 14, { source: 'sling', stagger: 1.0, up: 5, heavy: true });
        }
      }
      return;
    }
    if (s.phase === 'land') {
      k.cm.pivot.rotation.x *= 0.85;
      k.vel.multiplyScalar(0.9);
      k.pos.addScaledVector(k.vel, dt);
      this.fovKick *= 0.9;
      if (s.t > 0.45) { s.phase = 'none'; k.cm.pivot.rotation.x = 0; this.fovKick = 0; }
    }
  }

  // ------------------------------------------------------------------ Brianna + Payton (AI allies, Kailee pattern: follow / engage / down 8s + revive)
  private updateAlly(al: Ally, dt: number) {
    const a = al.a, v = this.vixen;
    a.hazardCd = Math.max(0, a.hazardCd - dt);
    if (al.downed) {
      al.downT -= dt; a.vel.multiplyScalar(0.9); a.integrate(dt, this.world.colliders);
      a.cm.pivot.rotation.x += (-1.35 - a.cm.pivot.rotation.x) * Math.min(1, dt * 6); a.cm.pivot.position.y = 0.25;
      if (al.downT <= 0) {
        al.downed = false; a.hp = a.maxHp * 0.3; sfx.kaileeUp(); a.cm.pivot.rotation.x = 0; a.cm.pivot.position.y = 0;
        if (a.anim.has('Knockdown_Recover')) a.anim.once('Knockdown_Recover', 0.9);
        this.trans.ring(a.pos, al.col, 0.3, 3, 0.5); this.dmg.spawn(tmp.copy(a.pos).setY(2), al.name + ' BACK UP', 'heal'); al.recoverT = al.key === 'payton' ? 2.2 : 0.8;
        if (al.key === 'payton') { this.comsLine('PAYTON', "I'm up girls… I'm up."); this.comsLine('PAYTON', "Mom — what's your 6?"); }
      }
      return;
    }
    if (al.recoverT > 0) { al.recoverT -= dt; a.integrate(dt, this.world.colliders); return; }
    if (this.pinnedBy(a)) { a.vel.set(0, 0, 0); a.anim.setBase('Idle_Skate', 1); return; }
    al.atkCd = Math.max(0, al.atkCd - dt); al.shootCd = Math.max(0, al.shootCd - dt); al.sigCd = Math.max(0, al.sigCd - dt);
    if (al.sigT > 0 && (!al.target || al.target.state === 'dead')) { al.sigT = Math.max(0, al.sigT - dt); }
    if (this.time - al.lastDmg > 5 && a.hp < a.maxHp) a.hp = Math.min(a.maxHp, a.hp + 4 * dt);
    al.retarget -= dt;
    if (al.retarget <= 0 || (al.target && al.target.state === 'dead')) {
      al.retarget = 0.45; al.target = null; let best = 15;
      for (const e of this.enemies) {
        if (e.state === 'dead' || e.state === 'spawn') continue;
        const dv = e.pos.distanceTo(v.pos), da = e.pos.distanceTo(a.pos), score = Math.min(dv, da * 0.9);
        if (dv < 16 && score < best) { best = score; al.target = e; }
      }
    }
    const goal = tmp; let maxSpd = al.role === 'melee' ? 11 : 9.5; const t = al.target; let distT = 99;
    const keep = al.role === 'melee' ? 1.5 : 7;
    if (t) {
      distT = Math.hypot(t.pos.x - a.pos.x, t.pos.z - a.pos.z);
      const nx = (t.pos.x - a.pos.x) / Math.max(distT, 0.1), nz = (t.pos.z - a.pos.z) / Math.max(distT, 0.1);
      goal.set(t.pos.x - nx * keep - nz * al.side * 0.3, 0, t.pos.z - nz * keep + nx * al.side * 0.3);
    } else {
      const fwd = v.forward(tmp2);
      goal.set(v.pos.x - fwd.x * al.back + fwd.z * al.side, 0, v.pos.z - fwd.z * al.back - fwd.x * al.side);
      if (goal.x > X_EDGE - 1.5) goal.x = X_EDGE - 1.5;
      maxSpd = Math.max(6, v.speed + 2);
    }
    const dx = goal.x - a.pos.x, dz = goal.z - a.pos.z, dg = Math.hypot(dx, dz), want = Math.min(maxSpd, dg * 2.6);
    a.vel.x += ((dg > 0.05 ? dx / dg * want : 0) - a.vel.x) * Math.min(1, dt * 5);
    a.vel.z += ((dg > 0.05 ? dz / dg * want : 0) - a.vel.z) * Math.min(1, dt * 5);
    if (a.pos.x > X_EDGE - 1.2 && a.vel.x > 0) a.vel.x -= 30 * dt;
    const faceYaw = t && distT < 14 ? Math.atan2(t.pos.x - a.pos.x, t.pos.z - a.pos.z) : (a.speed > 0.8 ? Math.atan2(a.vel.x, a.vel.z) : a.heading);
    a.heading = angleLerp(a.heading, faceYaw, Math.min(1, dt * 10));
    if (t && t.state !== 'dead' && t.state !== 'spawn') {
      const dir = tmp2.set(t.pos.x - a.pos.x, 0, t.pos.z - a.pos.z).normalize();
      if (al.sigT > 0) { this.updateAllySig(al, t, dir, dt); }
      else if (al.sigCd <= 0 && (al.role === 'melee' ? distT < 4.5 : distT < 15)) { this.startAllySig(al); }
      else if (al.role === 'melee' && distT < 2.4 && al.atkCd <= 0) {
        // Brianna: thermal-coil gauntlet haymakers, every 3rd is a heavy
        al.atkCd = 0.6; al.swing++; const heavy = al.swing % 3 === 0;
        a.anim.once(heavy ? 'Attack_Elbow' : (al.swing % 2 ? 'Attack_Kick_L' : 'Attack_Kick_R'), 0.4);
        if (al.swing % 2) a.punchL = 1; else a.punchR = 1;
        sfx.blade();
        this.hurt(t, heavy ? 16 : 9, dir.clone(), heavy ? 10 : 4, { source: 'brianna', stagger: heavy ? 0.9 : 0.3, heavy, color: al.col });
        const hand = tmp3.copy(a.pos).addScaledVector(dir, 0.8).setY(1.2);
        this.particles.burst(hand, heavy ? 14 : 7, new THREE.Color(al.col), heavy ? 5 : 3, 0.2, 0.3);
      } else if (al.role === 'ranged' && distT < 15 && al.shootCd <= 0) {
        al.shootCd = 0.7 + Math.random() * 0.2;
        const from = tmp3.copy(a.pos).setY(1.1).addScaledVector(dir, 0.5);
        for (let i = 0; i < 4; i++) { const d = dir.clone().applyAxisAngle(UP, (Math.random() - 0.5) * 0.1); this.proj.fire('pistol', from, d, 55, 3, 'hero', 'payton'); }
        sfx.pistol(); setTimeout(() => sfx.pistol(), 60); this.gatlingSpin = 0.5;
        this.particles.emit(from.clone().addScaledVector(dir, 0.6), dir.clone().multiplyScalar(2), new THREE.Color(al.col), 0.3, 0.08);
      } else if (al.role === 'melee' && distT >= 2.4 && distT < 10 && al.shootCd <= 0) {
        al.shootCd = 1.3; const from = tmp3.copy(a.pos).setY(1.3);
        this.proj.fire('pistol', from, dir, 40, 4, 'hero', 'brianna');
      }
    }
    if (al.key === 'brianna' && t && t.state !== 'dead') {
      this.seekerCd -= dt;
      if (this.seekerCd <= 0 && distT < 16) {
        this.seekerCd = 3.2 + Math.random();
        const from = tmp3.copy(a.pos).setY(1.6); const d = new THREE.Vector3(t.pos.x - from.x, 0, t.pos.z - from.z).normalize();
        this.proj.fire('bolt', from, d, 30, 14, 'hero', 'brianna'); sfx.bolt();
        this.particles.burst(from, 8, COL.red, 3, 0.15, 0.2, 0, 0); this.dmg.spawn(tmp.copy(a.pos).setY(2.3), 'BB SEEKER', 'k');
      }
    }
    if (al.key === 'payton' && this.gatling) { this.gatlingSpin = Math.max(0, this.gatlingSpin - dt); const b = this.gatling.getObjectByName('barrels'); if (b) b.rotation.z += dt * (al.sigT > 0 || this.gatlingSpin > 0 ? 40 : 1.5); }
    if (Math.random() < 0.2) this.particles.emit(tmp3.copy(a.pos).setY(0.1), tmp2.set(0, 0.6, 0), new THREE.Color(al.col), 0.12, 0.25);
    if (a.pos.distanceTo(v.pos) > 30) { a.pos.copy(v.pos).add(tmp.set(al.side, 0, -al.back)); this.trans.ring(a.pos, al.col, 0.2, 2, 0.4); }
    a.integrate(dt, this.world.colliders);
    if (a.overWater && a.y < 0.2) this.fallInWater(a);
    if (!a.anim.busy) a.anim.setBase(a.speed > 1.2 ? 'Locomotion_Fwd' : 'Idle_Skate', 0.7 + a.speed / 14);
  }

  // Ally signatures. Brianna: THERMAL COIL LASH (green burn zone). Payton: HUNDRED COUNT (purple Gatling spin-up + burst).
  static SIG = { brianna: { cd: 8, jitter: 2, dur: 1.8 }, payton: { cd: 9, jitter: 2, dur: 2.4, spin: 0.6, rate: 0.06 } };
  private startAllySig(al: Ally) {
    const S = Game.SIG[al.key]; al.sigT = S.dur; al.sigShot = 0; al.sigCd = S.cd + Math.random() * S.jitter;
    const a = al.a;
    if (al.key === 'brianna') { al.swing++; (al as any).chest = !(al as any).chest; }
    if (al.key === 'brianna' && (al as any).chest) {
      this.banner('CHEST-BUSTER', 'BRIANNA · THERMAL CORE BLAST', 1.0); sfx.cone(); this.shake(0.3);
    } else if (al.key === 'brianna') {
      this.banner('THERMAL COIL LASH', 'BRIANNA · BURN ZONE', 1.0);
      if (a.anim.has('Attack_Punch_R')) a.anim.once('Attack_Punch_R', 0.5); a.punchR = 1;
      sfx.blade(); sfx.zap(); this.shake(0.2);
      this.trans.ring(a.pos, al.col, 0.4, 3.6, 0.45); this.trans.ring(a.pos, 0x3dff9a, 0.2, 3.0, 1.6, 0.5);
    } else {
      this.banner('HUNDRED COUNT', 'PAYTON · GATLING SPIN-UP', 1.0);
      sfx.tether();
    }
  }
  private updateAllySig(al: Ally, t: Enemy | null, dir: THREE.Vector3, dt: number) {
    const a = al.a, col = new THREE.Color(al.col); dir = dir.clone();
    al.sigT -= dt;
    if (al.key === 'brianna' && (al as any).chest) {
      // CHEST-BUSTER: forward thermal cone from her chest plate
      a.vel.multiplyScalar(0.8);
      const from = tmp3.copy(a.pos).setY(1.3);
      for (let i = 0; i < 6; i++) this.particles.emit(from, dir.clone().applyAxisAngle(UP, (Math.random() - 0.5) * 0.5).multiplyScalar(10 + Math.random() * 6), i % 2 ? COL.org : EMER, 0.3, 0.35, 0, 1);
      al.sigShot += dt;
      if (al.sigShot >= 0.25) {
        al.sigShot = 0;
        for (const e of this.enemies) {
          if (e.state === 'dead' || e.state === 'spawn') continue;
          const dx = e.pos.x - a.pos.x, dz = e.pos.z - a.pos.z, d = Math.hypot(dx, dz);
          if (d < 8 && (dx * dir.x + dz * dir.z) / Math.max(d, 0.1) > 0.8) this.hurt(e, 9, tmp2.set(dx, 0, dz).normalize().clone(), 6, { source: 'brianna', stagger: 0.5, color: 0xff8a2b });
        }
      }
    } else if (al.key === 'brianna') {
      // burn area around Brianna: green coil arcs + ticking damage
      for (let i = 0; i < 4; i++) { const ang = Math.random() * Math.PI * 2, r = Math.random() * 3; this.particles.emit(tmp3.set(a.pos.x + Math.cos(ang) * r, 0.15, a.pos.z + Math.sin(ang) * r), tmp.set(0, 1.5 + Math.random(), 0), i % 2 ? col : EMER, 0.22, 0.45, 1); }
      al.sigShot += dt;
      if (al.sigShot >= 0.3) {
        al.sigShot = 0;
        for (const e of this.enemies) {
          if (e.state === 'dead' || e.state === 'spawn') continue;
          if (Math.hypot(e.pos.x - a.pos.x, e.pos.z - a.pos.z) < 3.2) { const d = tmp2.set(e.pos.x - a.pos.x, 0, e.pos.z - a.pos.z).normalize(); this.hurt(e, 5, d.clone(), 2, { source: 'brianna', stagger: 0.25, color: al.col }); }
        }
        this.trans.ring(a.pos, al.col, 2.6, 3.3, 0.3, 0.6);
      }
    } else {
      const S = Game.SIG.payton, el = S.dur - al.sigT;
      a.vel.multiplyScalar(0.85);
      const from = tmp3.copy(a.pos).addScaledVector(dir, 0.6).setY(1.2);
      if (el < S.spin) { if (Math.random() < 0.5) this.particles.emit(from, tmp.set((Math.random() - 0.5), Math.random(), (Math.random() - 0.5)), col, 0.15, 0.15); if (Math.random() < 0.15) sfx.telegraph(); }
      else {
        al.sigShot -= dt;
        while (al.sigShot <= 0 && t) {
          al.sigShot += S.rate;
          const d = dir.clone().applyAxisAngle(UP, (Math.random() - 0.5) * 0.12);
          this.proj.fire('pistol', from, d.clone(), 60, 2.5, 'hero', 'payton');
          this.particles.emit(from, d.clone().multiplyScalar(3), Math.random() < 0.5 ? col : COL.white, 0.3, 0.05);
          if (Math.random() < 0.5) sfx.pistol();
        }
      }
    }
    if (al.sigT <= 0) al.sigT = 0;
  }
  // ------------------------------------------------------------------ Kailee (AI ally)
  private updateKailee(dt: number) {
    const k = this.kailee, v = this.vixen, ks = this.k;
    k.hazardCd = Math.max(0, k.hazardCd - dt);
    if (ks.downed) {
      ks.downT -= dt;
      k.vel.multiplyScalar(0.9);
      k.integrate(dt, this.world.colliders);
      k.cm.pivot.rotation.x += (-1.35 - k.cm.pivot.rotation.x) * Math.min(1, dt * 6);
      k.cm.pivot.position.y = 0.25;
      if (Math.random() < 0.15) this.particles.emit(tmp.copy(k.pos).setY(0.4), tmp2.set(0, 1.2, 0), COL.org, 0.2, 0.6);
      if (ks.downT <= 0) {
        ks.downed = false; k.hp = k.maxHp * 0.25; sfx.kaileeUp();
        k.cm.pivot.rotation.x = 0; k.cm.pivot.position.y = 0;
        if (k.anim.has('Knockdown_Recover')) k.anim.once('Knockdown_Recover', 0.9);
        this.trans.ring(k.pos, 0xff8a2b, 0.3, 3, 0.5);
        this.dmg.spawn(tmp.copy(k.pos).setY(2), 'KAILEE BACK UP', 'heal');
        ks.recoverT = 0.8;
      }
      return;
    }
    if (ks.recoverT > 0) { ks.recoverT -= dt; k.integrate(dt, this.world.colliders); return; }
    if (this.pinnedBy(k)) { k.vel.set(0, 0, 0); k.anim.setBase('Idle_Skate', 1); return; } // pinned: grounded, Vixen must Check the Viper off
    ks.atkCd = Math.max(0, ks.atkCd - dt);
    ks.slideCd = Math.max(0, ks.slideCd - dt);
    if (ks.slideT > 0) { this.updateSlideUnder(dt); return; }
    ks.shootCd = Math.max(0, ks.shootCd - dt);
    // regen out of combat
    if (this.time - ks.lastDmg > 5 && k.hp < k.maxHp) k.hp = Math.min(k.maxHp, k.hp + 4 * dt);
    // targeting
    ks.retarget -= dt;
    if (ks.retarget <= 0 || (ks.target && ks.target.state === 'dead')) {
      ks.retarget = 0.4; ks.target = null; let best = 15;
      for (const e of this.enemies) {
        if (e.state === 'dead' || e.state === 'spawn') continue;
        const dv = e.pos.distanceTo(v.pos), dk = e.pos.distanceTo(k.pos);
        const score = Math.min(dv, dk * 0.9);
        if (dv < 16 && score < best) { best = score; ks.target = e; }
      }
    }
    const goal = tmp;
    let maxSpd = 10.5;
    const t = ks.target;
    let distT = 99;
    if (t) {
      distT = Math.hypot(t.pos.x - k.pos.x, t.pos.z - k.pos.z);
      const side = (Math.sin(this.time * 0.7) > 0 ? 1 : -1) * 0.8;
      goal.set(t.pos.x - (t.pos.x - k.pos.x) / Math.max(distT, 0.1) * 1.5 + side * 0.2, 0, t.pos.z - (t.pos.z - k.pos.z) / Math.max(distT, 0.1) * 1.5);
    } else {
      const fwd = v.forward(tmp2);
      goal.set(v.pos.x - fwd.x * 2.4 + fwd.z * 2.0, 0, v.pos.z - fwd.z * 2.4 - fwd.x * 2.0);
      if (goal.x > X_EDGE - 1.5) goal.x = v.pos.x - fwd.z * 2.0;
      maxSpd = Math.max(6, v.speed + 2);
    }
    const dx = goal.x - k.pos.x, dz = goal.z - k.pos.z, dg = Math.hypot(dx, dz);
    const want = Math.min(maxSpd, dg * 2.6);
    const dvx = dg > 0.05 ? dx / dg * want : 0, dvz = dg > 0.05 ? dz / dg * want : 0;
    k.vel.x += (dvx - k.vel.x) * Math.min(1, dt * 5);
    k.vel.z += (dvz - k.vel.z) * Math.min(1, dt * 5);
    if (k.pos.x > X_EDGE - 1.2 && k.vel.x > 0) k.vel.x -= 30 * dt;
    // facing
    const faceYaw = t && distT < 13 ? Math.atan2(t.pos.x - k.pos.x, t.pos.z - k.pos.z) : (k.speed > 0.8 ? Math.atan2(k.vel.x, k.vel.z) : k.heading);
    k.heading = angleLerp(k.heading, faceYaw, Math.min(1, dt * 10));
    // attacks
    if (t && t.state !== 'dead') {
      if (distT < 2.4 && ks.atkCd <= 0 && ks.slideCd <= 0 && t.state !== 'spawn') {
        this.startSlideUnder(t, distT);
      } else if (distT < 2.4 && ks.atkCd <= 0) {
        ks.atkCd = 0.55; ks.swing = 1 - ks.swing;
        k.anim.once(ks.swing ? 'Check_L' : 'Check_R', 0.4);
        if (ks.swing) k.punchL = 1; else k.punchR = 1;
        sfx.blade();
        const dir = tmp2.set(t.pos.x - k.pos.x, 0, t.pos.z - k.pos.z).normalize();
        this.hurt(t, 8, dir.clone(), 4, { source: 'kailee', stagger: 0.3, color: 0xffa040 });
        const hand = tmp3.copy(k.pos).addScaledVector(dir, 0.8).setY(1.2);
        for (let i = 0; i < 10; i++) this.particles.emit(hand, new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 3, (Math.random() - 0.5) * 3), i % 3 ? COL.org : COL.yel, 0.22, 0.35, 2, 2);
      } else if (distT >= 2.4 && distT < 13 && ks.shootCd <= 0) {
        ks.shootCd = 0.6 + Math.random() * 0.2;
        const from = tmp3.copy(k.pos).setY(1.3);
        const dir = tmp2.set(t.pos.x - k.pos.x, 0, t.pos.z - k.pos.z).normalize();
        this.kaileeMuzzle.getWorldPosition(from);
        this.proj.fire('pistol', from, dir, 45, 5, 'hero', 'kailee');
        sfx.pistol();
        if (this.time > this.kLabelT) { this.kLabelT = this.time + 5; this.dmg.spawn(tmp.copy(k.pos).setY(2.3), 'KAILEE .40', 'k'); }
        this.particles.burst(from, 6, COL.yel, 3, 0.16, 0.08, 0, 0); this.particles.emit(from, dir.clone().multiplyScalar(2), COL.white, 0.35, 0.06);
      }
    }
    // flaming wrist blades idle flicker
    if (Math.random() < 0.35) {
      const hand = k.cm.bones['hand_r'] || k.cm.bones['hand_l'];
      if (hand) { hand.getWorldPosition(tmp3); this.particles.emit(tmp3, tmp2.set((Math.random() - 0.5) * 0.4, 1.5, (Math.random() - 0.5) * 0.4), Math.random() < 0.5 ? COL.org : COL.yel, 0.14, 0.3, 1); }
    }
    // leash
    if (k.pos.distanceTo(v.pos) > 30) { k.pos.copy(v.pos).add(tmp.set(-1.5, 0, -2)); this.trans.ring(k.pos, 0xff8a2b, 0.2, 2, 0.4); }
    k.integrate(dt, this.world.colliders);
    if (k.overWater && k.y < 0.2) this.fallInWater(k);
    if (!k.anim.busy) k.anim.setBase(k.speed > 1.2 ? 'Locomotion_Fwd' : 'Idle_Skate', 0.7 + k.speed / 14);
  }

  // ------------------------------------------------------------------ Kailee finisher: SLIDE UNDER SLICE (blue, Misty lock 2026-11-02)
  // phases: approach (normal AI) -> under (0.0-0.32s duck dash through target) -> slice (blue blade hits) -> recover
  static SLIDE = { cooldown: 5.5, cdJitter: 2, dur: 0.6, speed: 15, hit1: 22, hit2: 18, hitAt1: 0.2, hitAt2: 0.36 };
  private startSlideUnder(t: Enemy, dist: number) {
    const ks = this.k, k = this.kailee, S = Game.SLIDE;
    ks.slideT = S.dur; ks.slideHits = 0; ks.slideTgt = t;
    ks.slideCd = S.cooldown + Math.random() * S.cdJitter; ks.atkCd = 0.8;
    ks.slideDir.set(t.pos.x - k.pos.x, 0, t.pos.z - k.pos.z).normalize();
    k.heading = Math.atan2(ks.slideDir.x, ks.slideDir.z);
    sfx.blade(); this.trans.ring(k.pos, 0x2a7bff, 0.25, 2.5, 0.35);
    void dist;
  }
  private updateSlideUnder(dt: number) {
    const ks = this.k, k = this.kailee, t = ks.slideTgt, S = Game.SLIDE;
    ks.slideT -= dt;
    const el = S.dur - ks.slideT;
    const dashing = el < 0.42;
    const sp = dashing ? S.speed : S.speed * 0.25;
    k.vel.set(ks.slideDir.x * sp, k.vel.y, ks.slideDir.z * sp);
    // duck low: lean back + drop pivot
    const duck = Math.min(1, el / 0.08) * Math.min(1, Math.max(0, ks.slideT) / 0.15);
    k.cm.pivot.position.y = -0.55 * duck;
    k.cm.pivot.rotation.x = -0.7 * duck;
    // blue blade trail
    for (let i = 0; i < 3; i++) this.particles.emit(tmp3.copy(k.pos).setY(0.35 + Math.random() * 0.4), tmp2.set((Math.random() - 0.5) * 1.5, Math.random() * 1.2, (Math.random() - 0.5) * 1.5), i % 2 ? COL.blu : COL.cyan, 0.2, 0.3, 1);
    const hitAt = ks.slideHits === 0 ? S.hitAt1 : S.hitAt2;
    if (ks.slideHits < 2 && el >= hitAt && t && t.state !== 'dead') {
      const dmg = ks.slideHits === 0 ? S.hit1 : S.hit2;
      ks.slideHits++;
      const dir = tmp2.copy(ks.slideDir).setY(ks.slideHits === 2 ? 0.6 : 0.2).normalize();
      this.hurt(t, dmg, dir.clone(), 7, { source: 'kailee', stagger: 0.8, color: 0x4aa8ff });
      const at = tmp3.copy(t.pos).setY(0.9);
      this.particles.burst(at, 26, COL.cyan, 7, 0.18, 0.45, -4, 1.2);
      this.particles.burst(at, 18, COL.blu, 5, 0.25, 0.5, -4, 1.2);
      this.particles.burst(at, 6, COL.white, 3, 0.3, 0.15, 0, 1);
      this.trans.ring(at, 0x4aa8ff, 0.3, 3.2, 0.3);
      sfx.blade(); this.shake(0.3); this.hitstop = 0.07;
      if (ks.slideHits === 1) this.dmg.spawn(tmp3.copy(t.pos).setY(2.4), 'SLIDE UNDER', 'heal'); if (ks.slideHits === 1) this.banner('SLIDE UNDER', 'KAILEE · THERMAL BLADE SLICE', 0.9);
    } else if (ks.slideHits < 2 && (!t || t.state === 'dead')) ks.slideHits = 2;
    k.integrate(dt, this.world.colliders);
    if (ks.slideT <= 0) { ks.slideT = 0; ks.slideTgt = null; k.cm.pivot.position.y = 0; k.cm.pivot.rotation.x = 0; }
  }

  // ------------------------------------------------------------------ enemy finishers: Fang · Pink Pounce
  pinnedBy(h: Actor): Enemy | null { for (const e of this.enemies) if (e.state === 'pin' && e.pinTarget === h) return e; return null; }
  startPinkPounce(e: Enemy, t: Actor) {
    const PP = ENEMY_FINISHERS.pink_pounce;
    e.state = 'windup'; e.stateT = PP.windup; e.attackKind = 'pounce'; e.target = t;
    e.pounceTo.set(t.pos.x, 0, t.pos.z);
    e.finisherCd = PP.cooldown + Math.random() * 3;
    sfx.telegraph(); sfx.tether();
    if (e.pos.distanceTo(this.vixen.pos) < 22) this.banner((e as any).fin ?? 'PINK POUNCE', t === this.kailee ? 'FANG IS LEAPING AT KAILEE — DODGE / CHECK' : 'FANG IS LEAPING — HOP OR SKATE OUT', 1.1);
  }
  private ensurePounceFx(e: Enemy) {
    if (e.finisherFx) return e.finisherFx;
    const col = ENEMY_FINISHERS.pink_pounce.color;
    const mat = () => new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, side: THREE.DoubleSide });
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.15, 1.55, 40).rotateX(-Math.PI / 2), mat()); ring.name = 'ring'; ring.position.y = 0.05; g.add(ring);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.15, 40).rotateX(-Math.PI / 2), mat()); disc.name = 'disc'; disc.position.y = 0.04; g.add(disc);
    const lane = new THREE.Group(); lane.name = 'lane'; g.add(lane);
    const sh = new THREE.Shape(); sh.moveTo(-0.7, 0); sh.lineTo(0, 0.55); sh.lineTo(0.7, 0); sh.lineTo(0.7, 0.28); sh.lineTo(0, 0.83); sh.lineTo(-0.7, 0.28); sh.closePath();
    const chevGeo = new THREE.ShapeGeometry(sh).rotateX(-Math.PI / 2);
    for (let i = 0; i < 6; i++) { const c = new THREE.Mesh(chevGeo, mat()); c.name = 'chev' + i; c.position.y = 0.06; lane.add(c); }
    const eye = new THREE.PointLight(col, 0, 6, 2); eye.name = 'eye'; g.add(eye);
    this.scene.add(g); e.finisherFx = g; return g;
  }
  private pounceWindupFx(e: Enemy, t: Actor, dt: number) {
    const PP = ENEMY_FINISHERS.pink_pounce;
    // soft-track the landing point for the first 60% of the coil, then lock (fair dodge window)
    if (e.stateT > PP.windup * 0.4) e.pounceTo.lerp(tmp.set(t.pos.x, 0, t.pos.z), Math.min(1, dt * 3));
    const g = this.ensurePounceFx(e); g.visible = true;
    const k = 1 - Math.max(0, e.stateT) / PP.windup; // 0→1 over windup
    const strobe = Math.sin(this.time * 34) > 0;
    g.position.set(e.pounceTo.x, 0, e.pounceTo.z);
    const ring = g.getObjectByName('ring') as THREE.Mesh, disc = g.getObjectByName('disc') as THREE.Mesh;
    ring.scale.setScalar(1.6 - k * 0.6); (ring.material as THREE.MeshBasicMaterial).opacity = 0.55 + (strobe ? 0.4 : 0.15);
    (disc.material as THREE.MeshBasicMaterial).opacity = 0.12 + k * 0.38;
    const lane = g.getObjectByName('lane') as THREE.Group; lane.visible = true;
    const ddx = e.pos.x - e.pounceTo.x, ddz = e.pos.z - e.pounceTo.z, d = Math.hypot(ddx, ddz) || 1;
    lane.rotation.y = Math.atan2(ddx, ddz); // local +Z → Fang; chevron tips point at the landing
    lane.children.forEach((c, i) => {
      const f = ((i / 6) + this.time * 1.4) % 1; // marching from Fang to the landing ring
      c.position.set(0, 0.06, d - f * Math.max(0, d - 1.3));
      ((c as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = (0.35 + 0.6 * Math.sin(f * Math.PI)) * (0.6 + k * 0.4);
    });
    const eye = g.getObjectByName('eye') as THREE.PointLight; eye.position.set(e.pos.x - g.position.x, 1.6, e.pos.z - g.position.z); eye.intensity = strobe ? 14 : 2;
    // coil: crouch squash + pink eye strobe on the Viper itself
    e.squash = Math.max(e.squash, 0.55 * k + 0.2); e.cm.pivot.position.y = -0.12 * k;
    if (strobe) e.flash(PP.color, 0.04);
  }
  private beginPin(e: Enemy, h: Actor) {
    const PP = ENEMY_FINISHERS.pink_pounce;
    e.state = 'pin'; e.stateT = PP.pinTime; e.pinTarget = h; e.pinTickT = 0.12; e.y = 0; e.vy = 0; e.grounded = true; e.cm.pivot.position.y = 0;
    h.vel.set(0, 0, 0);
    if (h === this.vixen) this.p.fwdSpeed = 0;
    this.shake(0.35); sfx.impact(); this.trans.ring(h.pos, PP.color, 0.4, 3.5, 0.45);
    this.banner('PINNED!', h === this.vixen ? 'PRESS F — KAILEE CHECKS FANG OFF' : 'SHOOT (J) NEAR FANG — CHECK HER OFF KAILEE', 1.4);
  }
  private pinFx(e: Enemy, h: Actor) {
    const g = this.ensurePounceFx(e); g.visible = true; g.position.set(h.pos.x, 0, h.pos.z);
    (g.getObjectByName('lane') as THREE.Group).visible = false;
    const ring = g.getObjectByName('ring') as THREE.Mesh; ring.scale.setScalar(0.75 + Math.sin(this.time * 18) * 0.05);
    (ring.material as THREE.MeshBasicMaterial).opacity = 0.9;
    (g.getObjectByName('disc') as THREE.Mesh).scale.setScalar(0.75); ((g.getObjectByName('disc') as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.35;
    const eye = g.getObjectByName('eye') as THREE.PointLight; eye.position.set(0, 1.2, 0); eye.intensity = 6;
  }
  hidePounceFx(e: Enemy) { if (e.finisherFx) e.finisherFx.visible = false; e.cm.pivot.position.y = 0; if (e.state !== 'pin') e.pinTarget = null; }
  private endPin(e: Enemy, broken: boolean) {
    const h = e.pinTarget; e.pinTarget = null; this.hidePounceFx(e);
    if (broken) return;
    e.state = 'recover'; e.stateT = 0.9;
    if (h) { const away = tmp.set(e.pos.x - h.pos.x, 0, e.pos.z - h.pos.z).normalize(); e.vel.copy(away).multiplyScalar(6); }
  }
  /** Partner Check: the free hero body-checks Fang off the pinned one (pin break). */
  partnerCheck(e: Enemy) {
    const h = e.pinTarget; if (!h) return;
    const partner = h === this.vixen ? this.kailee : this.vixen;
    if (partner === this.kailee && this.k.downed) return;
    if (partner.pos.distanceTo(e.pos) > 10) { this.dmg.spawn(tmp.copy(partner.pos).setY(2), 'TOO FAR', 'k'); return; }
    if (partner === this.kailee) { const dir = tmp2.set(e.pos.x - partner.pos.x, 0, e.pos.z - partner.pos.z).normalize(); partner.pos.copy(e.pos).addScaledVector(dir, -1.0); partner.heading = Math.atan2(dir.x, dir.z); if (partner.anim.has('Check_R')) partner.anim.once('Check_R', 0.4); }
    this.endPin(e, true);
    const dir = tmp3.set(e.pos.x - h.pos.x, 0, e.pos.z - h.pos.z).normalize();
    this.hurt(e, 12, dir, 12, { source: partner === this.kailee ? 'kailee' : 'vixen', stagger: 1.2, up: 3, heavy: true, color: 0xffa040 });
    this.banner('CHECK!', 'PIN BROKEN', 0.9); sfx.punch(true);
  }

  // ------------------------------------------------------------------ enemies
  private pickTarget(e: Enemy): Actor {
    const v = this.vixen, k = this.kailee;
    const up = this.allies.filter((al) => !al.downed);
    if (up.length && Math.random() < 0.3) { let b = up[0]; for (const al of up) if (al.a.pos.distanceTo(e.pos) < b.a.pos.distanceTo(e.pos)) b = al; if (b.a.pos.distanceTo(e.pos) < 14) return b.a; }
    if (this.k.downed || this.sling.phase !== 'none') return v;
    const dk = e.pos.distanceTo(k.pos), dv = e.pos.distanceTo(v.pos);
    if (e.def.kind === 'falcon') return Math.random() < 0.7 ? v : k;
    if (dk < 12 && Math.random() < 0.55) return k;
    return dk < dv * 0.8 ? k : v;
  }
  private makeTelegraph(e: Enemy, len: number, width: number) {
    if (!e.telegraph) {
      const g = new THREE.PlaneGeometry(width, len).rotateX(-Math.PI / 2).translate(0, 0.03, len / 2);
      e.telegraph = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xff2040, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      this.scene.add(e.telegraph);
    }
    e.telegraph.visible = true;
    return e.telegraph;
  }

  private updateEnemy(e: Enemy, dt: number) {
    e.hazardCd = Math.max(0, e.hazardCd - dt);
    if (e.state === 'dead') {
      e.deadT += dt;
      e.vel.multiplyScalar(0.95);
      e.integrate(dt, this.world.colliders);
      const s = Math.max(0.01, 1 - Math.max(0, e.deadT - 0.6) * 1.6);
      e.cm.root.scale.setScalar(s);
      e.cm.pivot.rotation.x = Math.min(1.4, e.deadT * 4);
      return;
    }
    e.stateT -= dt; e.cd -= dt; e.retargetT -= dt;
    if (!e.target || e.retargetT <= 0 || (e.target === this.kailee && this.k.downed) || !!this.allyOf(e.target)?.downed) { e.target = this.pickTarget(e); e.retargetT = 1.5 + Math.random(); }
    const t = e.target;
    const dx = t.pos.x - e.pos.x, dz = t.pos.z - e.pos.z, dist = Math.hypot(dx, dz);
    const yawTo = Math.atan2(dx, dz);
    const def = e.def;
    let wantVX = 0, wantVZ = 0, grip = 4, faceYaw = yawTo;
    const steer = (gx: number, gz: number, spd: number) => { const ddx = gx - e.pos.x, ddz = gz - e.pos.z, d = Math.hypot(ddx, ddz) || 1; wantVX = ddx / d * Math.min(spd, d * 3); wantVZ = ddz / d * Math.min(spd, d * 3); };
    switch (e.state) {
      case 'spawn':
        if (e.stateT <= 0) e.state = 'chase';
        break;
      case 'stagger':
        grip = 1.2; faceYaw = e.heading;
        if (e.stateT <= 0) { e.state = 'chase'; e.cd = Math.max(e.cd, 0.4); }
        break;
      case 'chase': {
        if (def.kind === 'viper') {
          const r = e.cd > 0 ? 3.2 : 1.2;
          e.orbit += dt * 0.9;
          steer(t.pos.x + Math.sin(e.orbit) * r, t.pos.z + Math.cos(e.orbit) * r, def.speed);
          const PP = ENEMY_FINISHERS.pink_pounce;
          e.finisherCd -= dt;
          if (e.cd <= 0 && e.finisherCd <= 0 && dist > PP.minRange && dist < PP.maxRange && t.y < 0.5 && !this.pinnedBy(t) && !this.enemies.some((o) => o !== e && (o.attackKind === 'pounce' && (o.state === 'windup' || o.state === 'pounce' || o.state === 'pin')))) this.startPinkPounce(e, t);
          else if (dist < 2.1 && e.cd <= 0) { e.state = 'windup'; e.stateT = 0.6; e.attackKind = 'melee'; sfx.telegraph(); }
        } else if (def.kind === 'enforcer') {
          const ideal = 8;
          const tang = e.id % 2 ? 1 : -1;
          const nx = dx / (dist || 1), nz = dz / (dist || 1);
          const radial = dist > ideal + 2 ? 1 : dist < ideal - 2 ? -1 : 0;
          wantVX = (nx * radial + -nz * tang * 0.5) * def.speed; wantVZ = (nz * radial + nx * tang * 0.5) * def.speed;
          if (e.cd <= 0) {
            if (dist < 3.2) { e.state = 'windup'; e.stateT = 0.85; e.attackKind = 'slam'; sfx.telegraph(); }
            else if (dist < 17) { e.state = 'windup'; e.stateT = 0.8; e.attackKind = 'shoot'; }
          }
        } else { // falcon
          steer(t.pos.x, t.pos.z, def.speed);
          const hpk = e.hp / e.maxHp;
          if ((hpk < 0.66 && e.summoned === 0) || (hpk < 0.33 && e.summoned === 1)) { e.summoned++; e.state = 'windup'; e.stateT = 0.9; e.attackKind = 'summon'; this.trans.ring(e.pos, 0xff2040, 0.5, 8, 0.8); sfx.scream(); }
          else if (e.cd <= 0 && dist > 5 && dist < 18 && Math.random() < 0.5) { e.state = 'windup'; e.stateT = 1.05; e.attackKind = 'dash'; e.dashDir.set(dx, 0, dz).normalize(); sfx.telegraph(); }
          else if (e.cd <= 0 && dist < 2.8) { e.state = 'windup'; e.stateT = 0.6; e.attackKind = 'melee'; sfx.telegraph(); }
          else if (e.cd <= 0) e.cd = 0.3;
        }
        break;
      }
      case 'windup': {
        grip = 6;
        const pulse = (Math.sin(this.time * 40) > 0) ? 0.6 : 0.15;
        e.flash(e.attackKind === 'shoot' ? 0xff2040 : 0xff40a0, 0.05);
        void pulse;
        if (e.attackKind === 'dash') {
          faceYaw = Math.atan2(e.dashDir.x, e.dashDir.z);
          // track target slightly during windup
          e.dashDir.lerp(tmp.set(dx, 0, dz).normalize(), dt * 2).normalize();
          const tg = this.makeTelegraph(e, 16, 1.6);
          tg.position.set(e.pos.x, 0, e.pos.z); tg.rotation.y = faceYaw;
          (tg.material as THREE.MeshBasicMaterial).opacity = 0.2 + (Math.sin(this.time * 30) > 0 ? 0.25 : 0);
        }
        if (e.attackKind === 'pounce') { faceYaw = Math.atan2(e.pounceTo.x - e.pos.x, e.pounceTo.z - e.pos.z); grip = 8; this.pounceWindupFx(e, t, dt); }
        if (e.attackKind === 'shoot' && Math.random() < 0.5) {
          const hand = e.cm.bones['hand_r'];
          if (hand) { hand.getWorldPosition(tmp3); this.particles.emit(tmp3, tmp2.set(0, 0.5, 0), COL.red, 0.25, 0.2); }
        }
        if (e.stateT <= 0) this.enemyAttack(e, t, dist, yawTo);
        break;
      }
      case 'attack':
        grip = 1.5; faceYaw = e.heading;
        if (e.stateT <= 0) { e.state = 'recover'; e.stateT = def.kind === 'enforcer' ? 0.6 : 0.5; }
        break;
      case 'dash': {
        grip = 0; faceYaw = e.heading;
        e.vel.copy(e.dashDir).multiplyScalar(30);
        for (const h of this.heroes()) {
          if (e.dashHit.has(h)) continue;
          if (Math.hypot(h.pos.x - e.pos.x, h.pos.z - e.pos.z) < 1.6 && h.y < 1) { e.dashHit.add(h); this.hurt(h, 20, e.dashDir, 14, { source: 'enemy' }); }
        }
        this.particles.emit(tmp.copy(e.pos).setY(1), tmp2.set(0, 1, 0), COL.red, 0.4, 0.3);
        if (e.stateT <= 0 || e.pos.x > X_EDGE - 1) { e.state = 'recover'; e.stateT = 0.9; e.vel.multiplyScalar(0.2); }
        break;
      }
      case 'pounce': {
        grip = 0; faceYaw = e.heading;
        for (const h of this.heroes()) {
          if (h === this.kailee && (this.k.downed || this.sling.phase !== 'none')) continue;
          if (h === this.vixen && this.p.invuln > 0.2) continue; // i-frames from a hop/dodge beat the leap
          if (Math.hypot(h.pos.x - e.pos.x, h.pos.z - e.pos.z) < 1.35 && h.y < 0.8) { this.beginPin(e, h); break; }
        }
        if (e.state === 'pounce' && e.stateT <= 0) { // whiff → long punishable recover
          e.state = 'recover'; e.stateT = 1.1; e.vel.multiplyScalar(0.2); this.hidePounceFx(e);
          this.dmg.spawn(tmp.copy(e.pos).setY(2), 'DODGED', 'heal');
        }
        break;
      }
      case 'pin': {
        grip = 0; wantVX = 0; wantVZ = 0;
        const h = e.pinTarget;
        if (!h || !h.alive || (h === this.kailee && this.k.downed)) { this.endPin(e, false); break; }
        faceYaw = Math.atan2(h.pos.x - e.pos.x, h.pos.z - e.pos.z);
        const ang = Math.atan2(e.pos.x - h.pos.x, e.pos.z - h.pos.z);
        e.pos.set(h.pos.x + Math.sin(ang) * 0.75, 0, h.pos.z + Math.cos(ang) * 0.75); e.vel.set(0, 0, 0); e.y = 0;
        e.pinTickT -= dt;
        if (e.pinTickT <= 0) { // claw combo tick: light DoT, ignores i-frames, no knockback
          const PP = ENEMY_FINISHERS.pink_pounce; e.pinTickT = PP.tick;
          if (Math.random() < 0.5) e.punchL = 1; else e.punchR = 1;
          if (h === this.vixen) this.p.invuln = 0;
          this.hurt(h, PP.tickDmg, tmp.set(0, 0, 0), 0, { source: 'enemy' });
          sfx.blade(); this.particles.burst(tmp.copy(h.pos).setY(1.1), 6, COL.mag, 4, 0.14, 0.25, -6);
        }
        this.pinFx(e, h);
        if (h === this.vixen && this.input.hit('KeyF', 'KeyQ')) this.partnerCheck(e);
        else if (h === this.vixen && this.kailee.pos.distanceTo(e.pos) < 7 && e.stateT < ENEMY_FINISHERS.pink_pounce.pinTime - 0.7) this.partnerCheck(e); // AI partner reacts
        if (e.state === 'pin' && e.stateT <= 0) this.endPin(e, false);
        break;
      }
      case 'recover':
        grip = 3; wantVX = 0; wantVZ = 0;
        if (e.stateT <= 0) { e.state = 'chase'; e.cd = def.kind === 'viper' ? 1.2 + Math.random() * 1.0 : def.kind === 'enforcer' ? 2.2 + Math.random() : 1.0 + Math.random() * 0.8; }
        break;
    }
    // avoid water edge unless being knocked
    if (e.state !== 'stagger' && e.state !== 'dash' && e.state !== 'pounce' && e.state !== 'pin' && e.pos.x > X_EDGE - 1.6 && wantVX > -2) wantVX = -4;
    if (e.state !== 'dash' && e.state !== 'pounce' && e.state !== 'pin') {
      e.vel.x += (wantVX - e.vel.x) * Math.min(1, grip * dt);
      e.vel.z += (wantVZ - e.vel.z) * Math.min(1, grip * dt);
    }
    if (e.state !== 'stagger') e.heading = angleLerp(e.heading, faceYaw, Math.min(1, dt * 8));
    e.integrate(dt, this.world.colliders);
    if (e.overWater && e.y < 0.2) { this.fallInWater(e); return; }
    if (!e.anim.busy) e.anim.setBase(e.speed > 1.5 ? 'Locomotion_Fwd' : 'Idle_Skate', 0.7 + e.speed / 12);
    if (e.cm.procedural || def.kind === 'falcon') e.bob = Math.sin(this.time * 6 + e.id) * 0.05 * Math.min(1, e.speed / 4);
  }

  private enemyAttack(e: Enemy, t: Actor, dist: number, yawTo: number) {
    const dir = new THREE.Vector3(Math.sin(yawTo), 0, Math.cos(yawTo));
    if (e.telegraph) e.telegraph.visible = false;
    switch (e.attackKind) {
      case 'pounce': {
        const PP = ENEMY_FINISHERS.pink_pounce;
        e.state = 'pounce'; e.stateT = PP.leapTime;
        const ddx = e.pounceTo.x - e.pos.x, ddz = e.pounceTo.z - e.pos.z, d = Math.hypot(ddx, ddz) || 1;
        e.heading = Math.atan2(ddx, ddz);
        e.vel.set(ddx / d, 0, ddz / d).multiplyScalar(Math.min(26, (d + 1.2) / PP.leapTime));
        e.vy = 5.5; e.grounded = false; e.y = 0.01; e.squash = 0;
        if (e.anim.has('Check_L')) e.anim.once('Check_L', 0.45);
        sfx.scream();
        return;
      }
      case 'melee': {
        e.state = 'attack'; e.stateT = 0.3;
        e.heading = yawTo;
        e.vel.copy(dir).multiplyScalar(e.def.kind === 'falcon' ? 10 : 8);
        if (e.anim.has('Check_L')) e.anim.once(Math.random() < 0.5 ? 'Check_L' : 'Check_R', 0.4);
        if (Math.random() < 0.5) e.punchL = 1; else e.punchR = 1;
        const reach = e.def.kind === 'falcon' ? 3.0 : 2.3;
        for (const h of this.heroes()) {
          const hd = Math.hypot(h.pos.x - e.pos.x, h.pos.z - e.pos.z);
          if (hd < reach && Math.abs(angleDiff(yawTo, Math.atan2(h.pos.x - e.pos.x, h.pos.z - e.pos.z))) < 1.1 && h.y < 1.2 && (h === t || hd < 1.6))
            this.hurt(h, e.def.kind === 'falcon' ? 14 : 8, dir, e.def.kind === 'falcon' ? 9 : 5, { source: 'enemy' });
        }
        this.particles.burst(tmp.copy(e.pos).addScaledVector(dir, 1).setY(1.1), 5, COL.red, 3, 0.12, 0.2, 0, 0.3);
        break;
      }
      case 'shoot': {
        e.state = 'attack'; e.stateT = 0.25;
        const lead = tmp.copy(t.pos).addScaledVector(t.vel, Math.min(0.6, dist / 15));
        const d2 = tmp2.set(lead.x - e.pos.x, 0, lead.z - e.pos.z).normalize();
        const hand = e.cm.bones['hand_r'];
        const from = new THREE.Vector3(); if (hand) hand.getWorldPosition(from); else from.copy(e.pos).setY(1.4);
        from.y = 1.3;
        this.proj.fire('bolt', from, d2, 15, 10, 'enemy', 'enemy');
        e.punchR = 1;
        sfx.bolt();
        break;
      }
      case 'slam': {
        e.state = 'attack'; e.stateT = 0.4;
        this.trans.ring(e.pos, 0xff2040, 0.5, 3.4, 0.4);
        this.shake(0.15); sfx.impact();
        for (const h of this.heroes()) { const hd = h.pos.distanceTo(e.pos); if (hd < 3.4 && h.y < 0.8) this.hurt(h, 15, tmp.set(h.pos.x - e.pos.x, 0, h.pos.z - e.pos.z).normalize(), 10, { source: 'enemy' }); }
        break;
      }
      case 'dash': {
        e.state = 'dash'; e.stateT = 0.55; e.dashHit.clear(); e.heading = Math.atan2(e.dashDir.x, e.dashDir.z);
        sfx.slingshotLaunch();
        break;
      }
      case 'summon': {
        e.state = 'recover'; e.stateT = 0.6;
        for (let i = 0; i < 3; i++) {
          const a = (i / 3) * Math.PI * 2;
          const p = new THREE.Vector3(THREE.MathUtils.clamp(e.pos.x + Math.sin(a) * 4, X_MIN + 2, X_EDGE - 2.5), 0, e.pos.z + Math.cos(a) * 4);
          this.spawnEnemy('v', p);
        }
        this.banner('FALCON CALLS THE VIPERS', '', 1.4);
        break;
      }
    }
  }

  private separate() {
    const all: Actor[] = [this.vixen, ...this.enemies.filter((e) => e.state !== 'dead')];
    if (this.sling.phase === 'none' && !this.k.downed) all.push(this.kailee);
    for (const al of this.allies) if (!al.downed) all.push(al.a);
    for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
      const a = all[i], b = all[j];
      const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, r = a.radius + b.radius;
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r && d2 > 1e-6) {
        const d = Math.sqrt(d2), push = (r - d) * 0.5, nx = dx / d, nz = dz / d;
        a.pos.x -= nx * push; a.pos.z -= nz * push; b.pos.x += nx * push; b.pos.z += nz * push;
      }
    }
  }

  private updateProjectiles(dt: number) {
    for (const pr of this.proj.list) {
      if (!pr.active) continue;
      pr.life -= dt;
      pr.pos.addScaledVector(pr.vel, dt);
      pr.mesh.position.copy(pr.pos);
      if (pr.kind === 'bolt' && Math.random() < 0.5) this.particles.emit(pr.pos, tmp.set(0, 0.3, 0), COL.red, 0.25, 0.25);
      let done = pr.life <= 0;
      if (!done && this.world.colliders.some((b) => b.active && b.h > 1.3 && pr.pos.x > b.minX && pr.pos.x < b.maxX && pr.pos.z > b.minZ && pr.pos.z < b.maxZ)) done = true;
      if (!done) {
        const targets: Actor[] = pr.team === 'enemy' ? this.heroes() : this.enemies.filter((e) => e.state !== 'dead');
        for (const t of targets) {
          if (Math.hypot(t.pos.x - pr.pos.x, t.pos.z - pr.pos.z) < t.radius + 0.3 && Math.abs(t.y + 1.2 - pr.pos.y) < 1.2) {
            const dir = tmp.copy(pr.vel).setY(0).normalize();
            this.hurt(t, pr.dmg, dir, pr.kind === 'bolt' ? 6 : 1.5, { source: pr.src, stagger: pr.kind === 'pistol' ? 0.15 : 0 });
            done = true; break;
          }
        }
      }
      if (done) { pr.active = false; pr.mesh.visible = false; this.particles.burst(pr.pos, 5, pr.kind === 'bolt' ? COL.red : COL.org, 2.5, 0.1, 0.2, 0, 0.3); }
    }
  }

  private updateHazards(dt: number) {
    void dt;
    const actors: Actor[] = [this.vixen, ...this.enemies.filter((e) => e.state !== 'dead')];
    if (this.sling.phase === 'none' && !this.k.downed) actors.push(this.kailee);
    for (const al of this.allies) if (!al.downed) actors.push(al.a);
    const h = this.world.hook;
    const lx = h.load.position.x, ly = h.load.position.y, lz = h.load.position.z;
    for (const a of actors) {
      if (a.hazardCd > 0) continue;
      // crane load (Dock only)
      if (this.level !== 2 && Math.abs(a.pos.x - lx) < 1.7 + a.radius && Math.abs(a.pos.z - lz) < 1.1 + a.radius && ly - 0.9 < a.y + 1.8) {
        a.hazardCd = 1.0;
        const dir = tmp.set(Math.sign(h.vx) || 1, 0, (a.pos.z - lz) * 0.3).normalize();
        this.hurt(a, a === this.vixen ? 22 : 30, dir, 18, { source: 'hazard', stagger: 1.0, up: 6, heavy: true });
        a.vy = Math.max(a.vy, 5); a.grounded = false; a.y = Math.max(a.y, 0.01);
        sfx.clang(); this.shake(0.4);
        this.particles.burst(tmp2.copy(a.pos).setY(1.2), 14, COL.yel, 6, 0.15, 0.4);
        continue;
      }
      // electrified puddles
      if (a.y < 0.05) for (const p of this.world.puddles) {
        if (!p.on) continue;
        if (Math.hypot(a.pos.x - p.x, a.pos.z - p.z) < p.r - 0.1) {
          a.hazardCd = 0.5; a.stunT = 0.4;
          this.hurt(a, a === this.vixen ? 7 : 10, tmp.set(0, 0, 0), 0, { source: 'hazard', stagger: 0.4, color: 0x80e0ff });
          a.flash(0x80e0ff, 0.15);
          sfx.zap();
          this.particles.burst(tmp2.copy(a.pos).setY(0.8), 10, COL.cyan, 4, 0.12, 0.3, -2, 1);
          break;
        }
      }
    }
  }

  private updatePickups(dt: number) {
    for (const pk of this.pickups) {
      if (!pk.active) continue;
      pk.t += dt;
      const d = pk.pos.distanceTo(tmp.copy(this.vixen.pos).setY(0.8));
      if (d < 3.5) pk.pos.lerp(tmp, Math.min(1, dt * 8));
      pk.mesh.position.set(pk.pos.x, pk.pos.y + Math.sin(pk.t * 4) * 0.15, pk.pos.z);
      pk.mesh.rotation.y += dt * 3;
      if (d < 0.9) {
        pk.active = false; pk.mesh.visible = false; sfx.pickup();
        const heal = Math.min(15, this.vixen.maxHp - this.vixen.hp);
        this.vixen.hp += heal;
        this.dmg.spawn(tmp.copy(this.vixen.pos).setY(2.2), heal >= 1 ? '+' + Math.round(heal) : 'MAX HP', 'heal');
      }
      if (pk.t > 20) { pk.active = false; pk.mesh.visible = false; }
    }
  }

  // ------------------------------------------------------------------ waves
  private updateWaves(dt: number) {
    const zone = ZONES[this.wave];
    if (this.introT > 0) { this.introT -= dt; return; }
    if (!this.waveActive && !this.waveCleared) {
      const trigger = this.wave === 0 ? -999 : zone.z0 + 3;
      if (this.vixen.pos.z > trigger) {
        this.waveActive = true; this.batch = 0;
        const w = this.waves[this.wave];
        this.banner(w.title, w.sub, 1.6); sfx.waveStart();
        if (this.level === 2) this.coms('COM_L2_' + this.wave); else if (this.wave === 1) this.coms('COM_KAM_02'); else if (this.wave === 2) this.coms('COM_LIL_02'); else if (this.wave === 3) this.coms('COM_KAM_03');
        this.setObjective(this.wave === 3 ? (this.level === 2 ? 'Cockpit Core: break Falcon + the Hive' : 'Break Falcon and the Iron Rose escort') : `Clear ${this.zoneName(this.wave)} — then the gate opens`);
      }
      return;
    }
    if (this.waveActive) {
      const w = this.waves[this.wave];
      const alive = this.enemies.filter((e) => e.state !== 'dead').length;
      if (this.batch < w.batches.length) {
        const b = w.batches[this.batch];
        if (b.when < 0 || alive <= b.when) {
          const run = this.runId;
          b.list.forEach((s, i) => setTimeout(() => { if (run === this.runId && this.waveActive && this.state !== 'title') this.spawnEnemy(s); }, i * 220));
          this.batch++;
          return;
        }
      }
      if (this.batch >= w.batches.length && alive === 0 && this.enemies.length === 0) {
        this.waveActive = false; this.waveCleared = true;
        sfx.waveClear();
        this.vixen.hp = Math.min(this.vixen.maxHp, this.vixen.hp + 30);
        if (this.k.downed) { this.k.downed = false; this.k.downT = 0; this.kailee.cm.pivot.rotation.x = 0; this.kailee.cm.pivot.position.y = 0; }
        this.kailee.hp = this.kailee.maxHp;
        for (const al of this.allies) { al.downed = false; al.downT = 0; al.a.cm.pivot.rotation.x = 0; al.a.cm.pivot.position.y = 0; al.a.hp = al.a.maxHp; }
        if (this.wave < 3) {
          this.world.openBarrier(this.wave);
          this.banner('BERTH CLEARED', '+30 HP · FENCE DOWN — SKATE NORTH', 1.8); this.coms('COM_KAM_04');
          this.setObjective(`Gate open! Follow the rail north to ${this.zoneName(this.wave + 1)}`);
        } else {
          this.gateOpen = true; this.world.setGateActive(true); sfx.gateOpen();
          this.banner('GATE OPEN', 'EXTRACT — REACH THE MAGENTA GATE', 2); this.coms('COM_LIL_04');
          this.setObjective('EXTRACT: skate into the magenta gate');
        }
      }
      return;
    }
    // cleared: wait for player to move to next zone
    if (this.waveCleared && this.wave < 3 && this.vixen.pos.z > ZONES[this.wave + 1].z0 + 1) { this.wave++; this.waveCleared = false; }
    if (this.gateOpen && this.vixen.pos.z > GATE_Z - 2.5 && Math.abs(this.vixen.pos.x) < 4) this.win();
  }

  win() {
    if (this.state !== 'playing') return;
    sfx.win(); this.banner('', '', 0.01);
    // Dock cleared -> Dock→Hyperdrive cutscene -> Level 2 (main.ts plays the cutscene, then calls startLevel2)
    this.hushVoice(); this.rageT = 0;
    this.setState(this.level === 1 ? 'cutscene' : 'win');
  }
  /** LEVEL 2: Soft Hyperdrive army arena (same game). */
  startLevel2() {
    this.clearDynamic();
    this.world.reset();
    this.hushVoice(); this.lastGirlHurtT = -99;
    this.level = 2; this.world.setArena('hyperdrive'); sfx.setArena('hyperdrive');
    this.wave = 0; this.waveActive = false; this.batch = 0; this.waveCleared = false; this.gateOpen = false; this.introT = 2.0;
    this.chaos = Math.max(this.chaos, 30); this.chaosReadyAnnounced = false; this.rageT = 0; this.rageCd = 0; this.viperSeq = 0;
    this.vixen.hp = this.vixen.maxHp; this.kailee.hp = this.kailee.maxHp;
    for (const al of this.allies) { al.a.hp = al.a.maxHp; Object.assign(al, { downed: false, downT: 0, atkCd: 0, shootCd: 0, lastDmg: -99, target: null, recoverT: 0 }); }
    Object.assign(this.k, { downed: false, downT: 0, atkCd: 0, shootCd: 0, lastDmg: -99, target: null, recoverT: 0, slideCd: 4, slideT: 0, slideHits: 0, slideTgt: null });
    this.placeHeroes(-4);
    this.spawnMines(); this.comsCd = {}; this.lowHpCd = 0;
    this.comsLine('KAMYRN', "You're in Hyperdrive. Whole base is crawling with Vipers.");
    this.comsLine('LILI', "Skate fast. Don't stop. Watch the mines.");
    this.banner('LEVEL 2 — HYPERDRIVE', 'APEX HYPERDRIVE · ARMY ARENA', 2.4);
    this.setObjective('Skate the approach lane — clear the Scar Swarm');
    this.hud['boss'].classList.add('hidden');
  }
  // ------------------------------------------------------------------ Mom's Frenzy + RAGE (protect-mode, Misty 11-03: "even if it kills her")
  private girls(): [Actor, string][] {
    const out: [Actor, string][] = [];
    if (!this.k.downed && this.sling.phase === 'none') out.push([this.kailee, 'KAILEE']);
    for (const al of this.allies) if (!al.downed) out.push([al.a, al.name]);
    return out;
  }
  girlNear(p: THREE.Vector3, r: number) { for (const [a, n] of this.girls()) if (Math.hypot(a.pos.x - p.x, a.pos.z - p.z) < r) return n; return null; }
  private updateFrenzy(dt: number) {
    this.frenzyReasonT -= dt; this.rageCd -= dt;
    let threatened: string | null = null;
    for (const [a, n] of this.girls()) {
      for (const e of this.enemies) { if (e.state === 'dead' || e.state === 'spawn') continue; if (Math.hypot(e.pos.x - a.pos.x, e.pos.z - a.pos.z) < 3.2) { threatened = n; break; } }
      if (threatened) break;
    }
    const anyDown = this.k.downed || this.allies.some((al) => al.downed);
    if (threatened) this.addChaos(dt * 5, threatened + ' THREATENED');
    if (anyDown) this.addChaos(dt * 4, 'A GIRL IS DOWN — GET TO HER');
    const protecting = threatened || anyDown || this.time - this.lastGirlHurtT < 3;
    if (this.rageT > 0) {
      this.rageT -= dt;
      if (Math.random() < 0.7) this.particles.emit(tmp3.copy(this.vixen.pos).setY(0.3 + Math.random() * 1.4), tmp.set((Math.random() - 0.5) * 2, 1.5, (Math.random() - 0.5) * 2), Math.random() < 0.5 ? COL.mag : COL.red, 0.28, 0.4);
      if (this.rageT <= 0) { this.rageCd = 6; this.banner('RAGE FADES', '', 0.8); }
    } else if (protecting && this.chaos >= 60 && this.rageCd <= 0 && this.state === 'playing') {
      this.rageT = 6; sfx.rage(); this.shake(0.5);
      this.banner('RAGE', 'PROTECT MODE — EVEN IF IT KILLS HER', 1.6);
      this.trans.ring(this.vixen.pos, 0xff1f4f, 0.5, 7, 0.6);
      const lines: [string, string][] = [['VIXEN', "They're my girls. They are me."], ['LILI', 'Grandma\'s in RAGE — nobody touches her girls.'], ['KAMYRN', "That's Mom's Frenzy. Generation Mayhem."], ['VIXEN', 'Get behind me, baby. Mama\'s here.']];
      const l = lines[Math.floor(Math.random() * lines.length)]; this.comsLine(l[0], l[1]);
    }
  }
  private paytonDownComs() {
    this.comsLine('KAMYRN', 'Mom get up! Get up!');
    this.comsLine('LILI', 'Mom get up, get up!');
  }
  lose() {
    if (this.state !== 'playing') return;
    sfx.lose();
    this.vixen.cm.pivot.rotation.x = -1.2;
    this.setState('lose');
  }

  // ------------------------------------------------------------------ camera
  updateCamera(dt: number, idle: boolean) {
    const v = this.vixen, inp = this.input, cam = this.camera;
    if (idle) {
      // title / pause: slow orbit around the heroes
      if (this.state === 'title') {
        const t = performance.now() * 0.00012;
        cam.position.set(Math.sin(t) * 9 + v.pos.x, 3.4, Math.cos(t) * 9 + v.pos.z + 4);
        cam.lookAt(v.pos.x, 1.4, v.pos.z + 4);
        this.world.update(dt, performance.now() / 1000, v.pos);
        this.vixen.syncVisual(dt, 0); this.kailee.syncVisual(dt, 0);
        for (const al of this.allies) al.a.syncVisual(dt, 0);
      }
      return;
    }
    if (inp.locked) {
      this.camYaw -= inp.mouseDX * 0.0024;
      this.camPitch = THREE.MathUtils.clamp(this.camPitch + inp.mouseDY * 0.0018, -0.15, 0.7);
    }
    let manual = false;
    if (inp.down('ArrowLeft')) { this.camYaw += 2.4 * dt; manual = true; }
    if (inp.down('ArrowRight')) { this.camYaw -= 2.4 * dt; manual = true; }
    if (inp.down('ArrowUp')) this.camPitch = Math.max(-0.15, this.camPitch - dt);
    if (inp.down('ArrowDown')) this.camPitch = Math.min(0.7, this.camPitch + dt);
    if (!inp.locked && !manual && v.speed > 2 && this.sling.phase === 'none') this.camYaw = angleLerp(this.camYaw, v.heading, Math.min(1, dt * 1.8));
    const fwd = dirFromYaw(this.camYaw, tmp);
    const dist = 8.2 + Math.min(8, v.speed) * 0.12;
    const hgt = 3.6 + this.camPitch * 4.5;
    const target = tmp2.set(v.pos.x - fwd.x * dist, v.y * 0.5 + hgt, v.pos.z - fwd.z * dist);
    target.x = Math.max(target.x, X_MIN + 0.8);
    cam.position.lerp(target, Math.min(1, dt * 9));
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    const sh = this.trauma * this.trauma;
    const look = tmp3.set(v.pos.x + fwd.x * 4.5, 1.0 + v.y * 0.5, v.pos.z + fwd.z * 4.5);
    cam.lookAt(look);
    if (sh > 0) { cam.position.x += (Math.random() - 0.5) * sh * 0.9; cam.position.y += (Math.random() - 0.5) * sh * 0.9; cam.rotation.z += (Math.random() - 0.5) * sh * 0.08; }
    const fov = 64 + Math.min(8, v.speed) * 0.6 + this.fovKick;
    if (Math.abs(cam.fov - fov) > 0.05) { cam.fov += (fov - cam.fov) * Math.min(1, dt * 6); cam.updateProjectionMatrix(); }
  }

  // ------------------------------------------------------------------ HUD
  private setW(id: string, pct: number) {
    const v = Math.round(pct * 1000) / 10;
    if (this.hudCache[id] === v) return;
    this.hudCache[id] = v; this.hud[id].style.width = v + '%';
  }
  private setT(id: string, text: string) {
    if (this.hudCache[id] === text) return;
    this.hudCache[id] = text; this.hud[id].textContent = text;
  }
  updateHud() {
    this.setW('hp-vixen', this.vixen.hp / this.vixen.maxHp);
    this.setW('hp-kailee', this.k.downed ? 1 - this.k.downT / 8 : this.kailee.hp / this.kailee.maxHp);
    this.hud['hp-kailee'].classList.toggle('down', this.k.downed);
    this.setT('kailee-status', this.k.downed ? `DOWN ${Math.ceil(this.k.downT)}s` : this.sling.phase !== 'none' ? 'LAUNCHED!' : '');
    for (const al of this.allies) {
      this.setW('hp-' + al.key, al.downed ? 1 - al.downT / 8 : al.a.hp / al.a.maxHp);
      this.hud['hp-' + al.key].classList.toggle('down', al.downed);
      this.setT(al.key + '-status', al.downed ? `DOWN ${Math.ceil(al.downT)}s` : '');
    }
    this.setW('chaos-fill', this.chaos / 100);
    this.setT('frenzy-reason', this.rageT > 0 ? `RAGE ${Math.ceil(this.rageT)}s — PROTECT MODE` : this.frenzyReasonT > 0 ? '▲ ' + this.frenzyReason : 'RISES WHEN THE GIRLS ARE HIT OR THREATENED');
    this.hud['chaos-wrap'].classList.toggle('rage', this.rageT > 0);
    const full = this.chaos >= 100;
    this.hud['chaos-wrap'].classList.toggle('full', full);
    this.hud['ab-sling'].classList.toggle('ready', full);
    (this.hud['ab-sling'].querySelector('i') as HTMLElement).style.transform = `scaleX(${(1 - this.chaos / 100).toFixed(2)})`;
    (this.hud['ab-cone'].querySelector('i') as HTMLElement).style.transform = `scaleX(${(this.p.coneCd / 1.5).toFixed(2)})`;
    this.setT('wave-label', (this.level === 2 ? 'L2 · ' : '') + (this.gateOpen ? 'EXTRACT' : `WAVE ${this.wave + 1}/4`));
    const alive = this.enemies.filter((e) => e.state !== 'dead').length;
    this.setT('enemy-count', this.waveActive ? `HOSTILES ${alive}${this.stats.combo > 2 ? `  ·  COMBO x${this.stats.combo}` : ''}${this.trickScore ? `  ·  TRICKS ${this.trickScore}` : ''}` : this.waveCleared ? 'ALL CLEAR' : 'STAND BY');
    const boss = this.enemies.find((e) => e.def.kind === 'falcon' && e.state !== 'dead');
    if (boss) this.setW('hp-boss', boss.hp / boss.maxHp);
  }
  statsHtml() {
    const s = this.stats;
    const m = Math.floor(s.time / 60), sec = Math.floor(s.time % 60).toString().padStart(2, '0');
    return `TIME ${m}:${sec}<br>KOs ${s.kos} · SLINGSHOT KOs ${s.slingKos} · SPLASH KOs ${s.splashKos}<br>BEST COMBO x${s.maxCombo} · SLINGSHOTS FIRED ${s.slings}`;
  }

  // ------------------------------------------------------------------ debug API (used by headless tests)
  debugApi() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const g = this;
    return {
      game: g,
      get state() { return g.state; },
      get wave() { return g.wave; },
      get chaos() { return g.chaos; },
      get slingPhase() { return g.sling.phase; },
      get enemyCount() { return g.enemies.filter((e) => e.state !== 'dead').length; },
      vixen: () => ({ x: g.vixen.pos.x, z: g.vixen.pos.z, speed: g.vixen.speed, hp: g.vixen.hp }),
      squad: () => [g.vixen, g.kailee, ...g.allies.map((al) => al.a)].map((a) => ({ key: a.key, x: a.pos.x, z: a.pos.z, hp: a.hp, visible: a.cm.root.visible, mesh: !a.cm.procedural, downed: !!g.allyOf(a)?.downed })),
      damageAlly: (key: string, n: number) => { const al = g.allies.find((x) => x.key === key); if (al) g.hurt(al.a, n, new THREE.Vector3(0, 0, -1), 0, { source: 'enemy' }); },
      kailee: () => ({ x: g.kailee.pos.x, z: g.kailee.pos.z, hp: g.kailee.hp, downed: g.k.downed }),
      enemies: () => g.enemies.map((e) => ({ kind: e.def.kind, hp: e.hp, x: e.pos.x, z: e.pos.z, state: e.state })),
      damageKailee: (n: number) => g.hurt(g.kailee, n, new THREE.Vector3(0, 0, -1), 0, { source: 'enemy' }),
      setChaos: (n: number) => { g.chaos = 0; g.chaosReadyAnnounced = false; g.addChaos(n); },
      fireSling: () => g.tryShatter(),
      spawn: (t: Spawn, dx = 0, dz = 4) => { const e = g.spawnEnemy(t, new THREE.Vector3(g.vixen.pos.x + dx, 0, g.vixen.pos.z + dz)); e.stateT = 0.1; return g.enemies.length; },
      sandbox: () => { g.introT = 1e9; for (const e of g.enemies) e.dispose(g.scene); g.enemies = []; g.runId++; },
      forcePinkPounce: (onKailee = false) => { const t = onKailee ? g.kailee : g.vixen; const e = g.enemies.find((x) => x.def.kind === 'viper' && x.state !== 'dead'); if (!e) return false; e.cd = 0; g.startPinkPounce(e, t); return true; },
      pinState: () => g.enemies.filter((e) => e.attackKind === 'pounce').map((e) => ({ state: e.state, t: e.stateT, target: e.pinTarget === g.vixen ? 'vixen' : e.pinTarget === g.kailee ? 'kailee' : null })),
      freezeEnemies: () => { for (const e of g.enemies) { e.state = 'spawn'; e.stateT = 999; } },
      killAll: () => { for (const e of g.enemies) if (e.state !== 'dead') g.hurt(e, 9999, new THREE.Vector3(0, 0, 1), 1, { source: 'vixen' }); },
      teleport: (x: number, z: number) => { g.vixen.pos.set(x, 0, z); g.p.lastSafe.set(x, 0, z); },
      setInvuln: (s: number) => { g.p.invuln = s; },
      get level() { return g.level; },
      get rage() { return g.rageT; },
      get frenzyReason() { return g.frenzyReason; },
      skipToL2: () => { g.startLevel2(); g.setState('playing'); },
      winDock: () => { g.gateOpen = true; g.win(); },
      downPayton: () => { const al = g.allies.find((x) => x.key === 'payton'); if (al) g.hurt(al.a, 9999, new THREE.Vector3(0, 0, -1), 0, { source: 'enemy' }); },
      assets: () => ({ loaded: Object.keys(Assets.gltf), failed: Assets.failed, clips: Object.keys(Assets.clips) }),
    };
  }
}
