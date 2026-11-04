// Full headless test: screens/navigation, movement, punch, chaos, slingshot, pause/replay, lose, win.
import puppeteer from 'puppeteer-core';
const URL = process.argv[2] || 'http://localhost:4181/';
const SHOTS = process.argv[3] !== 'noshots';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
const errs = [];
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
await page.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
const results = [];
const check = (name, ok, info = '') => { results.push({ name, ok: !!ok, info }); console.log((ok ? 'PASS' : 'FAIL') + '  ' + name + (info ? '  — ' + info : '')); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = (fn, ...a) => page.evaluate(fn, ...a);
const gt = () => ev(() => window.__gm.game.time);
const waitGame = async (sec) => { const t0 = await gt(); await page.waitForFunction((t) => window.__gm.game.time >= t, { timeout: 120000, polling: 100 }, t0 + sec).catch(() => {}); };
const shot = async (n) => { if (SHOTS) await page.screenshot({ path: 'shots/' + n }); };
const visible = (id) => ev((id) => { const e = document.getElementById(id); return !!e && !e.classList.contains('hidden') && getComputedStyle(e).display !== 'none'; }, id);

await page.goto(URL, { waitUntil: 'load', timeout: 120000 });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
await sleep(1500);
const a = await ev(() => window.__gm.assets());
check('loads, all GLBs decoded', a.failed.length === 0, `models=${a.loaded.length} clips=${a.clips.length}`);
check('title screen visible with PLAY/HOW TO PLAY/CREDITS', await visible('screen-title') && await ev(() => ['btn-play', 'btn-howto', 'btn-credits'].every((i) => !!document.getElementById(i))));
check('title lockup text', await ev(() => document.querySelector('.studio-name').textContent.trim() === 'Dark Logic Studios ™' && document.querySelector('.gm-sub').textContent.includes('DOCK CONTRACTS')));
await shot('01_title.png');

// --- how to play
await page.click('#btn-howto'); await sleep(300);
check('HOW TO PLAY opens', await visible('screen-howto') && !(await visible('screen-title')));
const howto = await ev(() => document.getElementById('screen-howto').innerText);
check('HOW TO PLAY covers goal/chaos/slingshot/hazards/touch', ['EXTRACTION GATE', 'CHAOS', 'SHATTER-SLINGSHOT', 'CRANE HOOK', 'ELECTRIFIED', 'WATER', 'TOUCH'].every((k) => howto.toUpperCase().includes(k)));
await shot('02_howto.png');
await page.click('#btn-howto-back'); await sleep(300);
check('HOW TO PLAY BACK returns to title', await visible('screen-title') && !(await visible('screen-howto')));

// --- credits
await page.click('#btn-credits'); await sleep(300);
const DED = "Carl Mitchell, Jessica Greene & Glenda Smith without yalls love, support, and backing nothing I've done would have been possible. Love you guys!";
const cr = await ev(() => ({ ded: document.getElementById('dedication').textContent, h: document.querySelector('#screen-credits h3').textContent, end: document.querySelector('.cr-end').textContent, all: document.getElementById('screen-credits').innerText }));
check('CREDITS opens', await visible('screen-credits'));
check('CREDITS dedication verbatim', cr.ded === DED, JSON.stringify(cr.ded));
check('CREDITS has SPECIAL THANKS heading + ends with Dark Logic Studios ™', cr.h === 'SPECIAL THANKS' && cr.end === 'Dark Logic Studios ™' && cr.all.includes('Created by Misty McDaniel Breeden'));
await shot('03_credits.png');
await page.click('#btn-credits-back'); await sleep(300);
check('CREDITS BACK returns to title', await visible('screen-title') && !(await visible('screen-credits')));

// --- play
await page.click('#btn-play');
await page.waitForFunction(() => window.__gm.state === 'playing', { timeout: 10000 });
check('PLAY starts the game, HUD visible', await visible('hud') && !(await visible('screen-title')));
await ev(() => window.__gm.setInvuln(9999));
await sleep(800);
const p0 = await ev(() => window.__gm.vixen());
await page.keyboard.down('KeyW'); await waitGame(1.0); await page.keyboard.up('KeyW');
const p1 = await ev(() => window.__gm.vixen());
check('W skates forward (momentum)', p1.z - p0.z > 1.5, `dz=${(p1.z - p0.z).toFixed(2)} speed=${p1.speed.toFixed(2)}`);
await waitGame(0.3);
const p2 = await ev(() => window.__gm.vixen());
check('glides after releasing W', p2.z > p1.z + 0.05, `glide=${(p2.z - p1.z).toFixed(2)}`);
await page.keyboard.down('KeyD'); await page.keyboard.down('KeyW'); await waitGame(0.8); await page.keyboard.up('KeyD'); await page.keyboard.up('KeyW');
const p3 = await ev(() => window.__gm.vixen());
check('A/D carves (lateral movement)', Math.abs(p3.x - p2.x) > 0.5, `dx=${(p3.x - p2.x).toFixed(2)}`);
await page.keyboard.down('Space'); await waitGame(0.8); await page.keyboard.up('Space');
check('Space: hop then hold-to-brake slows Vixen', (await ev(() => window.__gm.vixen().speed)) < p3.speed, `speed ${p3.speed.toFixed(2)} -> ${(await ev(() => window.__gm.vixen().speed)).toFixed(2)}`);

// --- punch (sandbox: wave flow paused so only test enemies exist)
await ev(() => { window.__gm.sandbox(); });
await sleep(300);
await ev(() => { const g = window.__gm.game; g.vixen.heading = 0; g.vixen.vel.set(0, 0, 0); g.p.fwdSpeed = 0; g.camYaw = 0; });
await ev(() => window.__gm.spawn('v', 0, 2.0));
await ev(() => window.__gm.freezeEnemies());
await sleep(400);
const hpBefore = await ev(() => window.__gm.enemies().filter((e) => e.state !== 'dead').map((e) => e.hp));
await page.keyboard.press('KeyJ'); await waitGame(0.3);
const hpAfter = await ev(() => window.__gm.enemies().filter((e) => e.state !== 'dead').map((e) => e.hp));
const totalB = hpBefore.reduce((s, x) => s + x, 0), totalA = hpAfter.reduce((s, x) => s + x, 0);
check('punch (J) damages an enemy', totalA < totalB, `enemy HP ${totalB.toFixed(0)} -> ${totalA.toFixed(0)}`);
await waitGame(0.4); await page.mouse.click(640, 360, { button: 'left' }); await waitGame(0.3);
const hpAfter2 = await ev(() => window.__gm.enemies().filter((e) => e.state !== 'dead').reduce((s, e) => s + e.hp, 0));
check('left-click punch also damages', hpAfter2 < totalA || (await ev(() => window.__gm.game.stats.kos)) > 0, `HP ${totalA.toFixed(0)} -> ${hpAfter2.toFixed(0)}`);
// sonic cone
await ev(() => { window.__gm.spawn('v', -0.8, 4); window.__gm.spawn('e', 0.8, 4.5); window.__gm.freezeEnemies(); });
await sleep(300);
const coneB = await ev(() => window.__gm.enemies().filter((e) => e.state !== 'dead').reduce((s, e) => s + e.hp, 0));
await waitGame(0.2); await page.keyboard.press('KeyK'); await waitGame(0.1);
await shot('04_combat.png');
await waitGame(0.1);
const coneA = await ev(() => window.__gm.enemies().filter((e) => e.state !== 'dead').reduce((s, e) => s + e.hp, 0));
check('sonic cone (K) damages enemies in front', coneA < coneB, `HP ${coneB.toFixed(0)} -> ${coneA.toFixed(0)}`);

// --- chaos meter
await ev(() => { window.__gm.killAll(); const g = window.__gm.game; g.chaos = 0; g.chaosReadyAnnounced = false; });
await sleep(1600);
await ev(() => window.__gm.damageKailee(20));
const c1 = await ev(() => window.__gm.chaos);
check('Chaos meter fills when Kailee is damaged', c1 > 0, `20 dmg -> chaos ${c1.toFixed(1)}`);
await ev(() => { window.__gm.game.kailee.hp = 120; window.__gm.damageKailee(60); });
await waitGame(0.05);
const c2 = await ev(() => ({ c: window.__gm.chaos, full: document.getElementById('chaos-wrap').classList.contains('full'), trauma: window.__gm.game.trauma, banner: document.getElementById('banner').innerText }));
check('Chaos full: HUD flash + shake + prompt', c2.c >= 100 && c2.full && c2.banner.includes('CHAOS FULL'), JSON.stringify(c2).slice(0, 120));
await shot('05_hud_chaos_full.png');

// --- slingshot
await ev(() => { const g = window.__gm.game; g.kailee.hp = 120; g.k.downed = false; g.vixen.heading = 0; g.camYaw = 0; g.vixen.vel.set(0, 0, 0); g.p.fwdSpeed = 0; });
await ev(() => { window.__gm.spawn('v', 0, 6); window.__gm.spawn('v', 0.6, 10); window.__gm.spawn('e', -0.5, 14); window.__gm.freezeEnemies(); });
await sleep(500);
const sB = await ev(() => window.__gm.enemies().filter((e) => e.state !== 'dead').reduce((s, e) => s + e.hp, 0));
await page.keyboard.press('KeyE');
await waitGame(0.03);
check('E triggers Shatter-Slingshot tether', (await ev(() => window.__gm.game.stats.slings)) === 1 && (await ev(() => window.__gm.slingPhase)) !== 'none', 'phase=' + (await ev(() => window.__gm.slingPhase)));
await page.waitForFunction(() => window.__gm.slingPhase === 'launch', { timeout: 30000, polling: 50 }).catch(() => {});
await waitGame(0.12);
await shot('06_slingshot.png');
await page.waitForFunction(() => window.__gm.slingPhase === 'none', { timeout: 20000 }).catch(() => {});
const sA = await ev(() => ({ hp: window.__gm.enemies().filter((e) => e.state !== 'dead').reduce((s, e) => s + e.hp, 0), kos: window.__gm.game.stats.slingKos, chaos: window.__gm.chaos }));
check('slingshot launches Kailee through the enemy line', sA.hp < sB && sA.chaos === 0, `HP ${sB.toFixed(0)} -> ${sA.hp.toFixed(0)}, sling KOs ${sA.kos}`);
await waitGame(0.6);
await shot('07_hud_combat.png');

// --- pause + replay
await page.keyboard.press('Escape'); await sleep(300);
check('Esc pauses', (await ev(() => window.__gm.state)) === 'paused' && await visible('screen-pause'));
await shot('08_pause.png');
await ev(() => window.__gm.spawn('v', 3, 5));
await page.click('#btn-replay-p'); await sleep(500);
const r1 = await ev(() => ({ s: window.__gm.state, n: window.__gm.game.enemies.length, w: window.__gm.wave, z: window.__gm.vixen().z, chaos: window.__gm.chaos, kos: window.__gm.game.stats.kos }));
check('pause REPLAY restarts cleanly (no leaked enemies)', r1.s === 'playing' && r1.n === 0 && r1.w === 0 && r1.chaos === 0 && r1.kos === 0, JSON.stringify(r1));

// --- lose
await ev(() => { const g = window.__gm.game; g.p.invuln = 0; g.vixen.hp = 1; g.hurt(g.vixen, 50, g.vixen.pos.clone().set(0, 0, -1), 0, { source: 'enemy' }); });
await sleep(400);
check('lose screen appears when Vixen dies', (await ev(() => window.__gm.state)) === 'lose' && await visible('screen-lose'));
await shot('09_lose.png');
await page.click('#btn-replay-l'); await sleep(500);
check('lose REPLAY restarts', (await ev(() => window.__gm.state)) === 'playing' && (await ev(() => window.__gm.vixen().hp)) === 100);
await ev(() => { const g = window.__gm.game; g.p.invuln = 0; g.vixen.hp = 1; g.hurt(g.vixen, 50, g.vixen.pos.clone().set(0, 0, -1), 0, { source: 'enemy' }); });
await sleep(300);
await page.click('#btn-menu-l'); await sleep(400);
check('lose MAIN MENU returns to title', (await ev(() => window.__gm.state)) === 'title' && await visible('screen-title') && !(await visible('hud')));

// --- win
await page.click('#btn-play'); await sleep(400);
await ev(() => { const g = window.__gm.game; g.wave = 3; g.introT = 0; g.waveActive = false; g.waveCleared = true; g.gateOpen = true; g.world.setGateActive(true); g.world.closeBarriersFrom(9); window.__gm.teleport(0, 160); });
await sleep(600);
await shot('10_gate.png');
await ev(() => window.__gm.teleport(0, 171));
await page.waitForFunction(() => window.__gm.state === 'win', { timeout: 10000 }).catch(() => {});
check('win screen when reaching the open extraction gate', (await ev(() => window.__gm.state)) === 'win' && await visible('screen-win'));
await shot('11_win.png');
await page.click('#btn-credits-w'); await sleep(300);
check('credits reachable after a win', await visible('screen-credits'));
await page.click('#btn-credits-back'); await sleep(300);
check('credits BACK returns to win screen', await visible('screen-win'));
await page.click('#btn-replay-w'); await sleep(500);
check('win REPLAY restarts', (await ev(() => window.__gm.state)) === 'playing' && (await ev(() => window.__gm.game.enemies.length)) === 0);
await page.keyboard.press('Escape'); await sleep(300);
await page.click('#btn-menu-p'); await sleep(300);
check('pause MAIN MENU returns to title', (await ev(() => window.__gm.state)) === 'title');

// --- real wave flow smoke: start, let wave 1 spawn naturally
await page.click('#btn-play');
await page.waitForFunction(() => window.__gm.enemyCount > 0, { timeout: 30000 }).catch(() => {});
check('wave 1 spawns enemies naturally', (await ev(() => window.__gm.enemyCount)) > 0, 'enemies=' + (await ev(() => window.__gm.enemyCount)));
await waitGame(1.5);
await shot('12_wave1.png');
console.log('render info (wave 1, HIGH):', JSON.stringify(await ev(() => window.__gm.renderInfo())));
// --- full wave progression: forced kills, but natural spawning / barriers / boss / gate
await ev(() => window.__gm.setInvuln(99999));
for (let w = 0; w < 4; w++) {
  await page.waitForFunction((w) => window.__gm.wave === w && window.__gm.game.waveActive && window.__gm.enemyCount > 0, { timeout: 90000, polling: 200 }, w).catch(() => {});
  if (w === 3) check('wave 4: Falcon boss spawns + boss bar', (await ev(() => window.__gm.enemies().some((e) => e.kind === 'falcon'))) && await visible('boss'));
  if (w === 3) { await waitGame(0.6); await shot('13_falcon.png'); }
  for (let i = 0; i < 8 && !(await ev(() => window.__gm.game.waveCleared)); i++) { await ev(() => window.__gm.killAll()); await waitGame(1.7); }
  check(`wave ${w + 1} clears`, await ev(() => window.__gm.game.waveCleared));
  if (w < 3) {
    check(`barrier ${w + 1} opens after clear`, await ev((w) => !window.__gm.game.world.barriers[w].box.active, w));
    await ev((w) => { const Z = [-8, 42, 88, 134]; window.__gm.teleport(0, Z[w + 1] + 6); }, w);
    await waitGame(0.3);
  }
}
check('extraction gate opens after wave 4', await ev(() => window.__gm.game.gateOpen));
await ev(() => window.__gm.teleport(0, 171));
await page.waitForFunction(() => window.__gm.state === 'win', { timeout: 20000 }).catch(() => {});
check('full run reaches win screen', (await ev(() => window.__gm.state)) === 'win');
const fps = await ev(() => window.__gmFps);
check('no console errors', errs.length === 0, errs.slice(0, 5).join(' | '));
console.log('swiftshader fps (software GL, not representative):', fps && fps.toFixed(1));
console.log(JSON.stringify({ passed: results.filter((r) => r.ok).length, failed: results.filter((r) => !r.ok).length }));
await browser.close();
process.exit(results.some((r) => !r.ok) ? 1 : 0);
