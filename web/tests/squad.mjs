import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await p.goto('http://localhost:4181/', { waitUntil: 'load', timeout: 300000 });
await p.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 300000 });
await p.click('#btn-play'); await new Promise(r => setTimeout(r, 3000));
for (let i=0;i<6;i++){ await p.keyboard.press('Enter'); await p.mouse.click(640,360); await new Promise(r=>setTimeout(r,1500)); }
await p.evaluate(()=>{ const g=window.__gm.game; document.querySelectorAll('video').forEach(v=>v.remove()); g.resetRun(); g.state='playing'; document.getElementById('hud').classList.remove('hidden'); g.vixen.pos.z += 14; });
const dbg = () => p.evaluate(() => { return { s: window.__gm.squad(), e: window.__gm.enemyCount, f: window.__gm.assets?.failed ?? window.__gm.assets }; });
console.log(JSON.stringify(await dbg()));
await new Promise(r => setTimeout(r, 15000)); await p.screenshot({ path: 'shots/30_squad.png' });
console.log(JSON.stringify(await dbg()));
console.log('errs', errs); await b.close();
