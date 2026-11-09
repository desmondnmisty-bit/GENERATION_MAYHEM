// Headless probe: boots the built game, plays Dock, then jumps to HD via the debug API; screenshots + state dump.
import puppeteer from 'puppeteer-core';
const URL = process.argv[2] || 'http://localhost:4190/';
const TAG = process.argv[3] || 'after';
const OUT = '/workspace/gm-threejs-lockstep/shots/';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
const errs = [];
page.on('console', (m) => { const t = m.text(); if (m.type() === 'error' || m.type() === 'warning' || /\[GM\]/.test(t)) errs.push(m.type() + ': ' + t); });
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
await page.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await page.goto(URL, { waitUntil: 'load', timeout: 180000 });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 180000 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const coldOpen = await page.evaluate(() => { const v = document.querySelector('#cold-open video'); return v ? { present: true, src: v.getAttribute('src'), muted: v.muted } : { present: false }; });
await page.mouse.click(640, 360); await sleep(400); // skip cold-open (user gesture -> audio unlock)
await page.click('#btn-play'); await sleep(9000);
const dump = () => page.evaluate(() => {
  const g = window.__gm.game, cam = g.camera, v = g.vixen;
  const sky = g.scene.getObjectByName('skybox');
  const names = []; g.scene.traverse((o) => { if (/warrig-mesh|GM_|portal|loot|viper-slot|slither/i.test(o.name) && o.visible) names.push(o.name); });
  return { level: g.level, state: g.state, cam: { fov: +cam.fov.toFixed(1), near: cam.near, dist: +Math.hypot(cam.position.x - v.pos.x, cam.position.z - v.pos.z).toFixed(2), h: +(cam.position.y - v.y).toFixed(2) },
    sky: sky ? { visible: sky.visible, map: sky.material.map?.image?.src?.split('/').pop() ?? sky.material.map?.image?.constructor?.name } : null,
    audio: { ctx: window.__gm.game && (window.sfxState ? window.sfxState() : null) },
    enemies: g.enemies.map((e) => e.def.kind + (e.squad ? ':' + e.squad : '')), named: [...new Set(names)].slice(0, 40) };
});
console.log('coldOpen', JSON.stringify(coldOpen));
console.log('DOCK', JSON.stringify(await dump()));
console.log('audioDock', JSON.stringify(await page.evaluate(() => window.__gmAudioProbe ? window.__gmAudioProbe() : (window.__gmAudio ? window.__gmAudio() : 'n/a'))));
await page.screenshot({ path: OUT + TAG + '_dock.png' });
await page.evaluate(() => window.__gm.teleport(13, 150)); await sleep(2500);
await page.screenshot({ path: OUT + TAG + '_dock_portal.png' });
await page.evaluate(() => { window.__gm.skipToL2(); }); await sleep(9000);
console.log('HD', JSON.stringify(await dump()));
console.log('audioHD', JSON.stringify(await page.evaluate(() => window.__gmAudioProbe ? window.__gmAudioProbe() : (window.__gmAudio ? window.__gmAudio() : 'n/a'))));
await page.screenshot({ path: OUT + TAG + '_hd.png' });
await page.evaluate(() => { window.__gm.setInvuln(999); window.__gm.teleport(-11, 60); }); await sleep(2500);
await page.screenshot({ path: OUT + TAG + '_hd_station.png' });
await page.evaluate(() => window.__gm.teleport(10, 150)); await sleep(2500);
await page.screenshot({ path: OUT + TAG + '_hd_tower.png' });
console.log(errs.slice(0, 40).join('\n'));
await browser.close();
