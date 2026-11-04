import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
page.on('requestfailed', (r) => console.log('reqfailed', r.url().slice(0, 100)));
page.on('response', (r) => { if (r.status() >= 400) console.log('http', r.status(), r.url().slice(0, 100)); });
await page.goto('http://localhost:4181/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
const out = await page.evaluate(async () => {
  const g = window.__gm.game;
  const v = g.vixen;
  const b = v.cm.bones;
  const r = {};
  r.bones = Object.keys(b).length;
  r.actions = Object.keys(v.cm.actions);
  const ua = b['upperarm_l'];
  r.q0 = ua ? ua.quaternion.toArray().map(x => x.toFixed(3)) : null;
  await new Promise(res => setTimeout(res, 1000));
  r.q1 = ua ? ua.quaternion.toArray().map(x => x.toFixed(3)) : null;
  const idle = v.cm.actions['Idle_Skate'];
  r.idle = idle ? { running: idle.isRunning(), w: idle.getEffectiveWeight(), t: idle.time } : null;
  const clip = idle.getClip();
  r.tracks = clip.tracks.slice(0, 5).map(t => t.name);
  r.ntracks = clip.tracks.length;
  // binding check
  const mixer = v.cm.mixer;
  r.rootName = mixer.getRoot().name;
  let names = []; mixer.getRoot().traverse(o => { if (o.name) names.push(o.name); });
  r.names = names.slice(0, 15);
  // model world bbox and head pos
  const head = b['head']; const p = head.getWorldPosition(new (g.vixen.pos.constructor)());
  r.head = [p.x.toFixed(2), p.y.toFixed(2), p.z.toFixed(2)];
  const hl = b['hand_l'].getWorldPosition(new (g.vixen.pos.constructor)());
  r.handL = [hl.x.toFixed(2), hl.y.toFixed(2), hl.z.toFixed(2)];
  const ft = b['foot_l'].getWorldPosition(new (g.vixen.pos.constructor)());
  r.footL = [ft.x.toFixed(2), ft.y.toFixed(2), ft.z.toFixed(2)];
  r.vpos = [v.pos.x, v.pos.z];
  r.scale = v.cm.model.scale.toArray();
  return r;
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
