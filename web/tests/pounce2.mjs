import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await b.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e))); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('http://localhost:4181/'); await p.waitForFunction(()=>window.__gm&&window.__gm.ready,{timeout:180000});
await p.keyboard.press('Escape'); await p.evaluate(()=>document.getElementById('btn-play').click()); await new Promise(r=>setTimeout(r,2000));
await p.evaluate(()=>{window.__gm.setInvuln(0); window.__gm.spawn('v',1,5);}); await new Promise(r=>setTimeout(r,1500));
console.log('force', await p.evaluate(()=>window.__gm.forcePinkPounce(false)));
for (let i=0;i<6;i++){ await new Promise(r=>setTimeout(r,700)); console.log(JSON.stringify(await p.evaluate(()=>window.__gm.pinState()))); }
console.log('ERRS', errs); await b.close();
