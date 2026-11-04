import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
await page.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await page.goto('http://localhost:4181/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
await page.click('#btn-play');
await new Promise(r => setTimeout(r, 1000));
const info = await page.evaluate(() => {
  const g = window.__gm.game;
  g.introT = 1e9; // freeze wave flow
  for (const e of g.enemies) e.dispose(g.scene); g.enemies = [];
  const types = ['v', 'v', 'v', 'e', 'f'];
  const out = [];
  types.forEach((t, i) => { const e = g.spawnEnemy(t, g.vixen.pos.clone().add({ x: -5 + i * 2.5, y: 0, z: 5, isVector3: true }).clone ? new g.vixen.pos.constructor(-5 + i * 2.5, 0, 1) : null); });
  g.enemies.forEach((e, i) => { e.state = 'spawn'; e.stateT = 1e9; e.heading = Math.PI; out.push(e.key); });
  // report skate mesh world positions
  const rep = g.enemies.map(e => { const r = []; e.cm.model.traverse(o => { if (o.isSkinnedMesh && /Skate|Wheel_L_01/.test(o.name)) { o.geometry.computeBoundingBox(); const b = o.geometry.boundingBox; r.push(o.name + ' ' + b.min.y.toFixed(2) + '..' + b.max.y.toFixed(2)); } }); return e.key + ': ' + r.join(' | '); });
  g.hud['banner'].style.opacity = 0;
  return rep;
});
console.log(info.join('\n'));
await page.evaluate(() => { const g = window.__gm.game; g.vixen.pos.set(0, 0, -6); g.kailee.pos.set(3, 0, -7); });
{ const t0 = await page.evaluate(() => window.__gm.game.time); await page.waitForFunction((t) => window.__gm.game.time > t, { timeout: 120000 }, t0 + 1.0); }
await page.evaluate(() => { const g = window.__gm.game; g.state = 'paused'; const c = g.camera; c.position.set(0, 2.2, -2.5); c.lookAt(0, 1.0, 1); c.fov = 60; c.updateProjectionMatrix(); });
await new Promise(r => setTimeout(r, 1500));
console.log(await page.evaluate(() => JSON.stringify({ t: window.__gm.game.time, st: window.__gm.state, tr: window.__gm.game.trans.pool.filter(p => p.mesh.visible).map(p => [p.kind, p.t.toFixed(2), p.dur]) })));
await page.screenshot({ path: 'shots/dbg_gallery.png' });
await page.evaluate(() => { const g = window.__gm.game; g.particles.points.visible = false; });
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'shots/dbg_gallery_np.png' });
await page.evaluate(() => { const g = window.__gm.game; g.particles.points.visible = true; g.world.fogCols.forEach(c => c.visible = false); });
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'shots/dbg_gallery_nf.png' });
await browser.close();
