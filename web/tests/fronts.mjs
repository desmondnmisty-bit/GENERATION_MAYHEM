import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
await p.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await p.goto('http://localhost:4181/', { waitUntil: 'load' });
await p.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
const SH= [['e','24_game_enforcer_front',4.2,1.3],['f','25_game_falcon_front',6,1.7],['v','26_game_viper_front',3.6,1.1]];
for (const [t,name,d,h] of SH) {
  await p.goto('http://localhost:4181/', { waitUntil: 'load' }); await p.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 }); await p.click('#btn-play'); await new Promise(r => setTimeout(r, 1500));
  await p.evaluate((t,d,h)=>{ const g=window.__gm.game; g.introT=1e9; for(const e of g.enemies) e.pos.set(200,0,200); const V=g.vixen.pos.constructor;
    const a=g.vixen.pos; const ep=new V(a.x,0,a.z+30); g.kailee.pos.set(a.x+60,0,a.z);
    if (t==='v') { g.spawnEnemy('v',new V(ep.x-1.6,0,ep.z)); g.spawnEnemy('v',ep.clone()); g.spawnEnemy('v',new V(ep.x+1.6,0,ep.z)); } else g.spawnEnemy(t,ep.clone());
    const c=g.camera; g.update=((u)=>function(dt){ u.call(this,dt); for (const e of this.enemies) { if (e.pos.distanceTo(ep)<4) { e.state='recover'; e.stateT=1e9; e.heading=Math.PI; e.vel.set(0,0,0);} }
      try{for(const k in this.hud) if(this.hud[k]?.style && k!=='bossBar') this.hud[k].style.opacity=0;}catch{} this.trans.pool.forEach(q=>q.mesh.visible=false); this.particles.points.visible=false; c.position.set(ep.x,h+0.3,ep.z-d); c.lookAt(ep.x,h,ep.z); })(g.__baseUpdate ||= g.update);
  },t,d,h);
  await new Promise(r => setTimeout(r, 4500)); await p.screenshot({ path: 'shots/'+name+'.png' });
}
await b.close();
