import './style.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { loadAll, lockupUrl } from './assets';
import { sfx } from './audio';
import { Game, type GameState } from './game';
import { Input } from './input';

const $ = (id: string) => document.getElementById(id)!;
const canvas = $('c') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.info.autoReset = false;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 16 / 9, 0.1, 400);
const input = new Input(canvas);

// PERF: phones / low-core machines start on LOW so Carl/Jessica don't hit the mid-game auto-downgrade hitch
const lowEnd = (navigator.maxTouchPoints > 0 && /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)) || (navigator.hardwareConcurrency || 8) <= 4;
let quality: 'HIGH' | 'LOW' = lowEnd ? 'LOW' : 'HIGH';
renderer.shadowMap.enabled = quality === 'HIGH';
let composer: EffectComposer | null = null;
let bloom: UnrealBloomPass | null = null;

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  const pr = quality === 'HIGH' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;
  renderer.setPixelRatio(pr);
  renderer.setSize(w, h, false);
  camera.aspect = w / Math.max(1, h);
  camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(pr); composer.setSize(w, h); }
  if (bloom) bloom.resolution.set(w / 2, h / 2);
  game?.particles.setScale(h);
}
function setupComposer() {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(640, 360), 0.85, 0.55, 0.62);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
}
/** soft=true: runtime auto-fallback — drop bloom + pixel ratio + freeze shadow updates WITHOUT recompiling every shader (that recompile was a multi-second freeze). */
function applyQuality(soft = false) {
  if (soft) { renderer.shadowMap.autoUpdate = quality === 'HIGH'; renderer.shadowMap.needsUpdate = true; $('btn-quality').textContent = 'GRAPHICS: ' + quality; resize(); return; }
  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.enabled = quality === 'HIGH';
  scene.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.Material | undefined; if (m) m.needsUpdate = true; });
  $('btn-quality').textContent = 'GRAPHICS: ' + quality;
  resize();
}

let game: Game | null = null;
const screens = ['screen-title', 'screen-howto', 'screen-credits', 'screen-pause', 'screen-win', 'screen-lose'];
let creditsBackTo = 'screen-title';
function show(id: string | null) {
  for (const s of screens) $(s).classList.toggle('hidden', s !== id);
}
function onState(s: GameState) {
  $('hud').classList.toggle('hidden', s === 'title');
  if (s === 'playing') { show(null); sfx.startMusic(); }
  if (s === 'paused') { show('screen-pause'); input.exitLock(); }
  if (s === 'win') { show('screen-win'); $('win-stats').innerHTML = game!.statsHtml(); input.exitLock(); sfx.stopMusic(); }
  if (s === 'lose') { show('screen-lose'); $('lose-stats').innerHTML = game!.statsHtml(); input.exitLock(); sfx.stopMusic(); }
  if (s === 'title') { show('screen-title'); input.exitLock(); sfx.stopMusic(); }
  if (s === 'cutscene') { try { localStorage.setItem('gm_l2_unlocked', '1'); } catch { /* */ } show(null); input.exitLock(); playDockToHyperdrive().then(() => { if (!game) return; game.startLevel2(); game.setState('playing'); input.requestLock(); canvas.focus(); }); }
}

// ---- Dock → Hyperdrive cutscene (storyboard v001 plates; P04/P05/P08 re-done v003: Soft small handgun, blue blades, readable wing).
// Spoken lines = stub TTS (sfx.say) under music; party/fast beat drops to suspense at the skate-out.
type Beat = { img: string; who?: string; line?: string; card?: string; sub?: string; music?: 'dock' | 'hyperdrive'; hold?: number };
const CUTSCENE: Beat[] = [
  { img: 'P01', who: 'VIXEN', line: "Contract's paid. Breathe, babies.", music: 'dock' },
  { img: 'P01', who: 'KAILEE', line: 'Everybody good? Payton?' },
  { img: 'P02', who: 'PAYTON', line: "I'm good, Mom. Guns are hot." },
  { img: 'P02', who: 'BRIANNA', line: "Next one's HyperDrive. Pink Viper den. Their turf." },
  { img: 'P03', who: 'KAMYRN', line: "Hyperdrive's crawling with Vipers." },
  { img: 'P03', who: 'LILI', line: "Skate fast. Don't stop. Come home." },
  { img: 'P04', who: 'KAILEE', line: 'Smells like burnt metal.', music: 'hyperdrive' },
  { img: 'P04', who: 'VIXEN', line: "Stay on my wheels. Nobody touches my girls." },
  { img: 'P05', who: 'VIXEN', line: "Hyperdrive Base. Sophisticated Brutality. Let's go." },
  { img: 'P06', card: 'PINK VIPERS', sub: 'SWARM — SCAR SWARM  ·  COBRA — HOOD STRIKE', who: 'COBRA', line: 'Sssso the old lady brought her babies.' },
  { img: 'P07', card: 'PINK VIPERS', sub: 'FANG — JET FANG  ·  HIVE — HEX NEST', who: 'FANG', line: 'Fresh meat on wheels.' },
  { img: 'P08', card: 'LEVEL 2 — HYPERDRIVE', sub: 'GENERATION MAYHEM', hold: 2200 },
];
function playDockToHyperdrive(): Promise<void> {
  return new Promise((resolve) => {
    sfx.init(); sfx.setArena('dock'); sfx.startMusic();
    const wrap = document.createElement('div'); wrap.id = 'cutscene';
    const imgs: Record<string, HTMLImageElement> = {};
    for (const b of CUTSCENE) if (!imgs[b.img]) { const im = new Image(); im.src = `cutscene/${b.img}.jpg`; wrap.appendChild(im); imgs[b.img] = im; }
    const card = document.createElement('div'); card.className = 'card';
    const cap = document.createElement('div'); cap.className = 'cap'; cap.style.opacity = '0'; cap.style.display = 'none';
    const skip = document.createElement('div'); skip.className = 'skip'; skip.textContent = 'CLICK / ANY KEY TO SKIP';
    wrap.append(card, cap, skip); document.body.appendChild(wrap);
    let done = false;
    const finish = () => { if (done) return; done = true; sfx.stopVoice(); window.removeEventListener('keydown', onKey); wrap.remove(); resolve(); };
    const onKey = () => finish();
    wrap.addEventListener('click', finish); setTimeout(() => window.addEventListener('keydown', onKey), 600);
    (async () => {
      let cur = '';
      for (const b of CUTSCENE) {
        if (done) return;
        if (b.img !== cur) { for (const k in imgs) imgs[k].classList.toggle('on', k === b.img); cur = b.img; }
        if (b.music) sfx.setArena(b.music);
        card.innerHTML = b.card ? `${b.card}<small>${b.sub ?? ''}</small>` : '';
        if (b.card) sfx.impact();
        if (b.line) { cap.innerHTML = `<b>${b.who}:</b>${b.line}`; cap.style.opacity = '1'; await sfx.say(b.who!, b.line); await new Promise((r) => setTimeout(r, 350)); }
        else { cap.style.opacity = '0'; await new Promise((r) => setTimeout(r, b.hold ?? 1500)); }
      }
      finish();
    })();
  });
}

function startPlaying(kind: 'new' | 'retry' | 'resume') {
  if (!game) return;
  sfx.init(); sfx.ui();
  if (kind === 'new') game.resetRun();
  if (kind === 'retry') game.retryWave();
  game.setState('playing');
  input.requestLock();
  canvas.focus();
}
function toggleMute() { sfx.setMuted(!sfx.muted); $('btn-mute').textContent = sfx.muted ? '🔇 MUTED [M]' : '🔊 SOUND [M]'; }
$('btn-mute').addEventListener('click', (e) => { e.stopPropagation(); toggleMute(); });
$('btn-pause').addEventListener('click', (e) => { e.stopPropagation(); pause(); });
function pause() { if (game && game.state === 'playing') game.setState('paused'); }

// ---- button wiring (bound exactly once) ----
$('btn-play').addEventListener('click', () => startPlaying('new'));
$('btn-howto').addEventListener('click', () => { sfx.init(); sfx.ui(); show('screen-howto'); });
$('btn-howto-back').addEventListener('click', () => { sfx.ui(); show('screen-title'); });
$('btn-credits').addEventListener('click', () => { sfx.init(); sfx.ui(); creditsBackTo = 'screen-title'; show('screen-credits'); });
$('btn-credits-w').addEventListener('click', () => { sfx.ui(); creditsBackTo = 'screen-win'; show('screen-credits'); });
$('btn-credits-back').addEventListener('click', () => { sfx.ui(); show(creditsBackTo); });
$('btn-resume').addEventListener('click', () => startPlaying('resume'));
$('btn-replay-p').addEventListener('click', () => startPlaying('new'));
$('btn-replay-w').addEventListener('click', () => startPlaying('new'));
$('btn-replay-l').addEventListener('click', () => startPlaying('new'));
$('btn-retry-l').addEventListener('click', () => startPlaying('retry'));
for (const id of ['btn-menu-p', 'btn-menu-w', 'btn-menu-l']) $(id).addEventListener('click', () => { sfx.ui(); game?.resetRun(); game?.setState('title'); });
$('btn-quality').addEventListener('click', () => { quality = quality === 'HIGH' ? 'LOW' : 'HIGH'; applyQuality(); });
window.addEventListener('keydown', (e) => {
  if (!game) return;
  if (e.code === 'KeyM') { toggleMute(); return; }
  if ((e.code === 'Escape' || e.code === 'KeyP') && game.state === 'playing') pause();
  else if ((e.code === 'KeyP' || e.code === 'Escape') && game.state === 'paused' && $('screen-pause').classList.contains('hidden') === false) startPlaying('resume');
});
canvas.addEventListener('mousedown', () => { if (game?.state === 'playing' && !input.locked) input.requestLock(); });
let lockedOnce = false;
input.onLockChange = (locked) => { if (locked) lockedOnce = true; else if (lockedOnce && game?.state === 'playing') pause(); };
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
window.addEventListener('resize', resize);
($('lockup') as HTMLImageElement).src = lockupUrl;

// ---- boot ----
async function boot() {
  const status = $('load-status');
  await loadAll((d, t, l) => { status.textContent = `Loading ${l}… ${Math.round((d / t) * 100)}%`; });
  game = new Game(scene, camera, renderer, input);
  game.onStateChange = onState;
  if (input.isTouch) input.bindTouch(pause);
  setupComposer();
  resize();
  // warm up shaders so the first frame of play doesn't hitch
  game.prewarm(renderer);
  renderer.compile(scene, camera);
  status.textContent = '';
  const btn = $('btn-play') as HTMLButtonElement;
  btn.disabled = false; btn.textContent = 'PLAY';
  (window as any).__gm = game.debugApi();
  (window as any).__gm.ready = true;
  (window as any).__gm.quality = () => quality;
  (window as any).__gm.renderInfo = () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures });
  (window as any).__gm.setQuality = (q: 'HIGH' | 'LOW') => { quality = q; applyQuality(); };
}

// ---- main loop with automatic quality fallback ----
const clock = new THREE.Clock();
let fpsAcc = 0, fpsFrames = 0, slowSecs = 0;
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.1);
  if (!game) return;
  game.update(dt);
  renderer.info.reset();
  if (game.state !== 'title') game.dmg.update(dt, camera, window.innerWidth, window.innerHeight);
  if (quality === 'HIGH' && composer) composer.render(dt); else renderer.render(scene, camera);
  fpsAcc += dt; fpsFrames++;
  if (fpsAcc >= 1) {
    const fps = fpsFrames / fpsAcc; fpsAcc = 0; fpsFrames = 0;
    (window as any).__gmFps = fps;
    if (game.state === 'playing' && quality === 'HIGH' && fps < 38 && !(window as any).__gmNoAutoQuality) { slowSecs++; if (slowSecs >= 4) { quality = 'LOW'; applyQuality(true); slowSecs = 0; } }
    else slowSecs = 0;
  }
}
boot().catch((e) => { console.error(e); $('load-status').textContent = 'Failed to load: ' + e; });
frame();

// ---- cold-open: movie ONLY from start (Misty 1105 — no cards; black while loading, muted autoplay) ----
(() => {
  const wrap = document.createElement('div');
  wrap.id = 'cold-open';
  wrap.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;cursor:pointer';
  const v = document.createElement('video');
  v.src = 'intro/GM_ColdOpen_Full_v004_nocrawl.mp4';
  v.muted = true; // autoplay-safe; unmute on first gesture
  v.playsInline = true;
  v.preload = 'auto';
  v.setAttribute('playsinline', '');
  v.style.cssText = 'width:100%;height:100%;object-fit:contain;display:block;background:#000';
  const hint = document.createElement('div');
  hint.textContent = 'CLICK OR ANY KEY TO SKIP';
  hint.style.cssText = 'position:absolute;right:24px;top:20px;color:#fff8;font:700 16px sans-serif;letter-spacing:1px;padding:8px 14px;z-index:3';
  wrap.append(v, hint); document.body.appendChild(wrap);
  let donePhase = false;
  const done = () => {
    if (donePhase) return;
    donePhase = true;
    window.removeEventListener('keydown', onKey);
    v.pause();
    wrap.remove();
  };
  const unmute = () => { try { v.muted = false; v.volume = 1; } catch {} };
  const onKey = (e: KeyboardEvent) => { e.preventDefault(); unmute(); done(); };
  wrap.addEventListener('click', () => { unmute(); done(); });
  window.addEventListener('keydown', onKey);
  v.addEventListener('ended', () => done());
  v.addEventListener('playing', () => { wrap.style.background = '#000'; });
  const tryPlay = () => { v.play().catch(() => {}); };
  if (v.readyState >= 2) tryPlay();
  else { v.addEventListener('loadeddata', tryPlay, { once: true }); v.load(); }
})();


// Global first-gesture audio unlock (phones keep AudioContext suspended until a tap)
const __unlock = () => { sfx.unlock(); (window as any).__gmAudio = () => sfx.ctx?.state; };
['pointerdown', 'touchend', 'keydown', 'click'].forEach((ev) => window.addEventListener(ev, __unlock, { capture: true, passive: true }));
