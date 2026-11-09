import puppeteer from 'puppeteer-core';
const URL = process.argv[2] || 'http://localhost:4191/';
const OUT = '/workspace/gm-threejs-lockstep/shots/';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage(); await page.setViewport({ width: 1280, height: 720 });
const errs = []; page.on('pageerror', (e) => errs.push('pageerror: ' + e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push('err: ' + m.text()); });
await page.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await page.goto(URL, { waitUntil: 'load', timeout: 180000 });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 180000 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await page.mouse.click(640, 360); await sleep(400); await page.click('#btn-play'); await sleep(6000);
const audio = async (tag) => { const s = []; for (let i = 0; i < 12; i++) { s.push(await page.evaluate(() => window.__gmAudioProbe())); await sleep(400); } const mx = (k) => Math.max(...s.map((x) => x[k])); console.log('audio', tag, s[0].state, 'musicMax', mx('music').toFixed(4), 'sfxMax', mx('sfx').toFixed(4)); };
const enemies = () => page.evaluate(() => window.__gm.game.enemies.filter((e) => e.state !== 'dead').map((e) => e.def.kind + ':' + (e.squad || e.key || '') + (() => { let n = ''; e.cm.root.traverse((o) => { if (o.name.startsWith('viper-slot')) n = '+' + o.name; }); return n; })()));
// Dock wave
await page.evaluate(() => { window.__gm.setInvuln(9999); window.__gm.game.introT = 0; }); await sleep(9000);
console.log('dock enemies', JSON.stringify(await enemies()));
console.log('dock spawn v ->', JSON.stringify(await page.evaluate(() => { window.__gm.spawn('v'); const e = window.__gm.game.enemies.at(-1); return e.def.kind; })));
await audio('dock');
await page.screenshot({ path: OUT + 'after2_dock_wave.png' });
await page.evaluate(() => { window.__gm.killAll(); }); await sleep(300); await audio('dock-after-kill');
await page.evaluate(() => { window.__gm.sandbox(); window.__gm.teleport(9, 150); }); await sleep(2500);
await page.screenshot({ path: OUT + 'after2_dock_portal.png' });
// collision: hold D (east) into the gate pillar / tower posts later
await page.evaluate(() => window.__gm.skipToL2()); await sleep(7000);
const info = await page.evaluate(() => { const w = window.__gm.game.world; const hb = w.hdColliders.filter((b) => b.active); const near = (x0, x1, z0, z1) => hb.filter((b) => b.maxX > x0 && b.minX < x1 && b.maxZ > z0 && b.minZ < z1).length;
  let tMinX = 1e9, sMaxX = -1e9; for (const b of hb) { if (b.minZ > 140 && b.minX > 5) tMinX = Math.min(tMinX, b.minX); if (b.maxZ < 80 && b.maxZ > 45 && b.maxX < -5) sMaxX = Math.max(sMaxX, b.maxX); }
  const pb = w.hdPropBoxes; const ext = pb.reduce((a, b) => ({ minX: Math.min(a.minX, b.minX), maxX: Math.max(a.maxX, b.maxX) }), { minX: 1e9, maxX: -1e9 }); const st = pb.filter((b) => b.maxZ < 100), tw = pb.filter((b) => b.minZ > 100); const r = (L) => ({ n: L.length, active: L.filter((b) => b.active).length, minX: Math.min(...L.map((b) => b.minX)).toFixed(1), maxX: Math.max(...L.map((b) => b.maxX)).toFixed(1), minZ: Math.min(...L.map((b) => b.minZ)).toFixed(1), maxZ: Math.max(...L.map((b) => b.maxZ)).toFixed(1) });
  return { station: r(st), tower: r(tw), activeHd: hb.length, towerMinX: tMinX, stationMaxX: sMaxX, laneBlock: near(-6, 6, 30, 170) }; });
console.log('hd colliders', JSON.stringify(info));
await page.evaluate(() => { window.__gm.setInvuln(9999); window.__gm.game.introT = 0; }); await sleep(10000);
console.log('hd enemies', JSON.stringify(await enemies()));
await audio('hd');
await page.screenshot({ path: OUT + 'after2_hd_wave.png' });
// wall test: station side — push west from x=-10, z=62
await page.evaluate(() => { window.__gm.sandbox(); window.__gm.teleport(-10, 62); }); await sleep(500);
await page.keyboard.down('KeyA'); await sleep(3500); await page.keyboard.up('KeyA');
console.log('after pushing west at station', JSON.stringify(await page.evaluate(() => window.__gm.vixen())));
await page.screenshot({ path: OUT + 'after2_hd_station_push.png' });
// chest smash still breaks
console.log('chest', JSON.stringify(await page.evaluate(() => { const w = window.__gm.game.world; const s = w.hdSmashables.find((q) => Math.abs((q.box.minX + q.box.maxX) / 2 - 5) < 0.3 && Math.abs((q.box.minZ + q.box.maxZ) / 2 - 42) < 0.3); return { mesh: s.meshes.map((m) => m.name), broken: s.broken, active: s.box.active }; })));
console.log(errs.slice(0, 20).join('\n'));
await browser.close();
