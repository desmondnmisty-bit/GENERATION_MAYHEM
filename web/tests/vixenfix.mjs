import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await p.goto('http://localhost:4181/', { waitUntil: 'load' });
await p.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
await p.click('#btn-play'); await new Promise(r => setTimeout(r, 3000));
const shots=[['16_vixen_face',[0,1.55,1.3],[0,1.45,0],40],['17_vixen_34',[1.6,1.3,2.4],[0,0.95,0],45],['18_vixen_wheels',[0.9,0.8,1.6],[0,0.75,0],45],['19_vixen_vents',[0.5,1.65,0.9],[0,1.6,0],35]];
for (const [n,o,t,fov] of shots) {
  await p.evaluate((o,t,fov) => { const g=window.__gm.game; const v=g.vixen; g.introT=1e9;
    for (const e of g.enemies) e.pos.set(99,0,99); g.kailee.pos.set(v.pos.x+4,0,v.pos.z-3);
    try{ for (const k in g.hud) if (g.hud[k]?.style) g.hud[k].style.opacity=0; }catch{}
    const c=v.pos.clone(); const yaw=v.heading??v.model?.rotation?.y??0; const cam=g.camera;
    const rot=(x,z)=>[x*Math.cos(yaw)+z*Math.sin(yaw), -x*Math.sin(yaw)+z*Math.cos(yaw)];
    const [ox,oz]=rot(o[0],o[2]); const [tx,tz]=rot(t[0],t[2]);
    g.state='paused'; cam.fov=fov; cam.updateProjectionMatrix(); cam.position.set(c.x+ox,o[1],c.z+oz); cam.lookAt(c.x+tx,t[1],c.z+tz);
  }, o,t,fov);
  await new Promise(r => setTimeout(r, 1500));
  await p.screenshot({ path: 'shots/'+n+'.png' });
}
console.log('errs', errs); await b.close();
