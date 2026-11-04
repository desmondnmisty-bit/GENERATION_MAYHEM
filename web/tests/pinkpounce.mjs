// Fang · Pink Pounce browser tease proof: forces a Viper finisher on Vixen, shoots telegraph + pin.
import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.evaluateOnNewDocument(() => { window.__gmNoAutoQuality = true; });
await p.goto('http://localhost:4181/', { waitUntil: 'load' });
await p.waitForFunction(() => window.__gm && window.__gm.ready, { timeout: 120000 });
await p.click('#btn-play'); await new Promise(r => setTimeout(r, 2000));
await p.evaluate(()=>{ const api=window.__gm; const g=api.game; api.sandbox(); g.waveActive=false; g.updateWaves=()=>{};
  const V=g.vixen.pos.constructor; const a=g.vixen.pos;
  g.kailee.pos.set(a.x-9,0,a.z-6); // keep partner out of auto-check range for the pin shot
  const e=g.spawnEnemy('v', new V(a.x+1.5,0,a.z+6.5)); e.stateT=999; e.state='spawn';
  window.__fang=e; const c=g.camera;
  g.update=((u)=>function(dt){ if(!window.__kfree){g.k.shootCd=9; g.k.atkCd=9;} g.p.fwdSpeed=0; g.vixen.vel.set(0,0,0); u.call(this,dt); c.position.set(a.x-4.5,3.2,a.z-4.2); c.lookAt(a.x+0.5,0.6,a.z+3); })(g.update);
});
await new Promise(r=>setTimeout(r,800));
await p.evaluate(()=>{ window.__fang.state='chase'; window.__fang.heading=Math.PI; window.__gm.forcePinkPounce(false); });
await p.waitForFunction(()=>window.__fang.state==='windup'&&window.__fang.stateT<0.4,{timeout:20000});
const s1=await p.evaluate(()=>window.__gm.pinState());
await p.screenshot({ path: 'shots/27_pink_pounce_telegraph.png' });
const trace=[]; for(let i=0;i<200;i++){ const st=await p.evaluate(()=>{const e=window.__fang,g=window.__gm.game;return [e.state,+e.stateT.toFixed(2),+e.pos.x.toFixed(1),+e.pos.z.toFixed(1),+e.y.toFixed(2),+g.p.invuln.toFixed(2)]}); trace.push(st.join(",")); if(st[0]==="recover") break; if(st[0]==="pin") break; await new Promise(r=>setTimeout(r,100)); } console.log(trace.join(" | "));
await p.waitForFunction(()=>window.__gm.vixen().hp<97||window.__fang.state!=='pin',{timeout:20000});
const s2=await p.evaluate(()=>({pin:window.__gm.pinState(), v:window.__gm.vixen()}));
await p.screenshot({ path: 'shots/28_pink_pounce_pin.png' });
// partner Check break
await p.evaluate(()=>{ const g=window.__gm.game; g.kailee.pos.set(g.vixen.pos.x-3,0,g.vixen.pos.z-2); });
await p.evaluate(()=>{window.__kfree=1}); await p.keyboard.press("KeyF"); await new Promise(r=>setTimeout(r,400));
const s3=await p.evaluate(()=>window.__gm.pinState());
console.log(JSON.stringify({s1,s2,s3,errs})); await b.close();
