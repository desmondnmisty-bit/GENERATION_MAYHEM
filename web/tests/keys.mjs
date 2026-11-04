import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
await page.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; window.__kd = []; window.addEventListener('keydown', e => window.__kd.push(e.code + (e.repeat ? 'R' : ''))); window.addEventListener('keyup', e => window.__kd.push('up' + e.code)); });
await page.goto('http://localhost:4181/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
await page.click('#btn-play');
await new Promise(r => setTimeout(r, 1500));
await page.keyboard.down('KeyW');
for (let i = 0; i < 5; i++) { await new Promise(r => setTimeout(r, 500)); console.log(JSON.stringify(await page.evaluate(() => ({ keys: [...window.__gm.game.input.keys], v: window.__gm.vixen(), fs: window.__gm.game.p.fwdSpeed, t: window.__gm.game.time, st: window.__gm.state, fps: window.__gmFps })))); }
await page.keyboard.up('KeyW');
console.log(await page.evaluate(() => window.__kd.join(',')));
await browser.close();
