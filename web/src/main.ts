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

let quality: 'HIGH' | 'LOW' = 'HIGH';
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
function applyQuality() {
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
  if ((e.code === 'Escape' || e.code === 'KeyP') && game.state === 'playing') pause();
  else if (e.code === 'KeyP' && game.state === 'paused') startPlaying('resume');
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
    if (game.state === 'playing' && quality === 'HIGH' && fps < 38 && !(window as any).__gmNoAutoQuality) { slowSecs++; if (slowSecs >= 4) { quality = 'LOW'; applyQuality(); slowSecs = 0; } }
    else slowSecs = 0;
  }
}
boot().catch((e) => { console.error(e); $('load-status').textContent = 'Failed to load: ' + e; });
frame();

// ---- cold-open movie: plays once on load over the title screen; click / any key skips ----
(() => {
  const wrap = document.createElement('div');
  wrap.id = 'cold-open';
  wrap.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;cursor:pointer';
  const v = document.createElement('video');
  v.src = 'intro/gm_cold_open.mp4'; v.muted = false; v.autoplay = true; v.playsInline = true;
  v.style.cssText = 'width:100%;height:100%;object-fit:contain';
  const hint = document.createElement('div');
  hint.textContent = 'TAP FOR SOUND · CLICK OR ANY KEY TO SKIP';
  hint.style.cssText = 'position:absolute;right:20px;bottom:14px;color:#fff8;font:600 12px sans-serif;letter-spacing:1px';
  wrap.append(v, hint); document.body.appendChild(wrap);
  let armed = false;
  const done = () => { window.removeEventListener('keydown', onKey); v.pause(); wrap.remove(); };
  const armSound = () => {
    if (armed) return; armed = true;
    v.muted = false; v.volume = 1;
    v.play().catch(() => {});
  };
  const onKey = (_e: KeyboardEvent) => { armSound(); done(); };
  v.addEventListener('ended', done); v.addEventListener('error', done);
  wrap.addEventListener('click', (e: MouseEvent) => {
    if (!armed) { e.stopPropagation(); armSound(); hint.textContent = 'CLICK OR ANY KEY TO SKIP'; return; }
    done();
  });
  window.addEventListener('keydown', onKey);
  // try unmuted first; browsers that block it fall back muted until first tap
  v.play().catch(() => { v.muted = true; v.play().catch(() => {}); });
})();
