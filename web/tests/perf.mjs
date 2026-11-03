import puppeteer from 'puppeteer-core';
const URL0 = process.env.URL || 'http://localhost:4181/';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox','--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage(); const errs = [];
page.on('pageerror', e => errs.push('PAGEERR '+e)); page.on('console', m => { if (m.type()==='error'||m.type()==='warning') errs.push(m.type()+': '+m.text().slice(0,200)); });
await page.setViewport({ width: 960, height: 540 });
await page.evaluateOnNewDocument(() => { window.__long=[]; let last=performance.now(); const tick=()=>{const n=performance.now(); const d=n-last; last=n; if(d>120) window.__long.push([Math.round(d), window.__gm?.state, window.__gm?.level, window.__tag]); requestAnimationFrame(tick);}; requestAnimationFrame(tick); window.__gmNoAutoQuality=true; });
await page.goto(URL0, { waitUntil: 'load' });
await page.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 180000 });
await page.keyboard.press('Escape'); await new Promise(r=>setTimeout(r,500));
const snap = async (tag) => { const r = await page.evaluate((tag) => { const o={tag, fps:(window.__gmFps||0).toFixed(1), st:window.__gm.state, lvl:window.__gm.level, en:window.__gm.enemyCount, ri:window.__gm.renderInfo(), heap: Math.round((performance.memory?.usedJSHeapSize||0)/1e6), long: window.__long.splice(0)}; window.__tag=tag; return o; }, tag); console.log(JSON.stringify(r)); };
await page.evaluate(() => { document.getElementById('btn-play').click(); window.__tag='dock'; });
await new Promise(r=>setTimeout(r,3000)); await snap('dock-start');
await page.evaluate(() => window.__gm.setInvuln(9999));
await page.keyboard.down('KeyW');
for (let i=0;i<8;i++){ await new Promise(r=>setTimeout(r,2500)); await page.evaluate(()=>{ if(window.__gm.state!=='playing') return; window.__gm.setInvuln(9999); }); await snap('dock'+i); }
await page.keyboard.up('KeyW');
await page.evaluate(() => { for(let i=0;i<4;i++) window.__gm.spawn(['v','e','f','v'][i], i*2-3, 6); }); await new Promise(r=>setTimeout(r,3000)); await snap('dock-spawn');
await page.evaluate(() => window.__gm.killAll()); await new Promise(r=>setTimeout(r,3000)); await snap('dock-kill');
await page.evaluate(() => window.__gm.skipToL2()); await new Promise(r=>setTimeout(r,4000)); await snap('l2-start');
await page.evaluate(() => { window.__gm.setInvuln(9999); window.__gm.game.world.barriers.forEach(b=>b.box.active=false); });
await page.keyboard.down('KeyW');
for (let i=0;i<10;i++){ await page.keyboard.press('Space'); await new Promise(r=>setTimeout(r,2000)); await page.evaluate(()=>window.__gm.setInvuln(9999)); await snap('l2-'+i); }
await page.keyboard.up('KeyW');
await page.evaluate(() => { const g=window.__gm.game; try { g.damageKailee?.(1); } catch{}; window.__gm.damageKailee(9999); }); await new Promise(r=>setTimeout(r,3000)); await snap('rage');
console.log('STATE', await page.evaluate(()=>[window.__gm.state, window.__gm.rage, window.__gm.frenzyReason]));
console.log('ERRS', JSON.stringify(errs.slice(0,30), null, 1)); await browser.close();
