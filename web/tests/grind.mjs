import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const page = await browser.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(String(e)));
await page.setViewport({ width: 960, height: 540 });
await page.goto('http://localhost:4181/?level=2', { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 180000 });
await page.keyboard.press('Space');
await page.waitForFunction(() => window.__gm.level === 2 && window.__gm.state === 'playing', { timeout: 30000 });
await page.evaluate(() => { window.__gm.setInvuln(999); window.__gm.game.world.barriers.forEach(b=>b.box.active=false); window.__gm.teleport(-1.5, 16); window.__gm.game.vixen.heading = 0; });
await page.keyboard.down('KeyW'); await new Promise(r=>setTimeout(r,500)); await page.keyboard.press('Space');
for (let i=0;i<6;i++){ await new Promise(r=>setTimeout(r,700)); console.log(await page.evaluate(()=>{const g=window.__gm.game,v=g.vixen;return `x${v.pos.x.toFixed(2)} z${v.pos.z.toFixed(1)} y${v.y.toFixed(2)} grind:${!!v.grindBox} tricks:${g.trickScore}`;})); if(i==1) await page.screenshot({path:'shots/grind_sparks.png'}); }
await page.keyboard.up('KeyW');
console.log(await page.evaluate(()=>document.getElementById('enemy-count')?.textContent), errs); await browser.close();
