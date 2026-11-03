import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const page = await browser.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(String(e)));
await page.goto('http://localhost:4181/?level=2', { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 180000 });
await page.keyboard.press('Space');
await page.waitForFunction(() => window.__gm.level === 2 && window.__gm.state === 'playing', { timeout: 30000 });
console.log(await page.evaluate(()=>{const g=window.__gm.game,v=g.vixen;v.pos.set(-3.9,0,20);v.y=1.3;v.vy=0;v.grounded=false;const o=[];for(let i=0;i<60;i++){v.vel.set(0,0,6);v.integrate(1/60,g.world.colliders);o.push(v.grindBox?'G':'.')}return v.pos.x.toFixed(2)+' '+o.join('');}));
await page.evaluate(()=>{const v=window.__gm.game.vixen;window.__gm.teleport(-3,20);v.y=1.2;v.vy=0;v.grounded=false;});
for(let i=0;i<4;i++){await new Promise(r=>setTimeout(r,400));console.log(await page.evaluate(()=>{const g=window.__gm.game,v=g.vixen;return `x${v.pos.x.toFixed(2)} y${v.y.toFixed(2)} grind:${!!v.grindBox} tricks:${g.trickScore}`}));}
await page.screenshot({path:'shots/grind_sparks.png'}); console.log(errs); await browser.close();
