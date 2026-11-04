import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 450 });
await page.goto('http://localhost:4181/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
const arm = () => page.evaluate(() => { const g = window.__gm.game; const v = g.vixen; const h = v.cm.bones['hand_l'].getWorldPosition(v.pos.clone()); const k = g.kailee.cm.bones['hand_l'].getWorldPosition(v.pos.clone()); return `t=${g.time.toFixed(2)} st=${g.state} vix handL y=${(h.y - v.y).toFixed(2)} lat=${(h.x - v.pos.x).toFixed(2)} | kai handL y=${k.y.toFixed(2)} busy=${v.anim.busy} base=${v.anim.base}`; });
console.log('title', await arm());
await page.click('#btn-play'); await new Promise(r => setTimeout(r, 1500));
console.log('play', await arm());
await page.evaluate(() => window.__gm.sandbox());
for (const k of ['KeyJ', 'KeyJ', 'KeyJ', 'KeyK']) { await page.keyboard.press(k); await new Promise(r => setTimeout(r, 1200)); console.log(k, await arm()); }
await page.keyboard.down('KeyW'); await new Promise(r => setTimeout(r, 3000)); await page.keyboard.up('KeyW'); console.log('W', await arm());
await new Promise(r => setTimeout(r, 3000)); console.log('idle', await arm());
await page.keyboard.press('Escape'); await new Promise(r => setTimeout(r, 300));
await page.click('#btn-replay-p'); await new Promise(r => setTimeout(r, 3000)); console.log('replay', await arm());
await browser.close();
