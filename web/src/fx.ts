import * as THREE from 'three';

// ---------- GPU point particles (single draw call, CPU simulated) ----------
const MAX_P = 900;
export class Particles {
  points: THREE.Points;
  private pos = new Float32Array(MAX_P * 3);
  private col = new Float32Array(MAX_P * 3);
  private size = new Float32Array(MAX_P);
  private alpha = new Float32Array(MAX_P);
  private vel = new Float32Array(MAX_P * 3);
  private life = new Float32Array(MAX_P);
  private maxLife = new Float32Array(MAX_P);
  private size0 = new Float32Array(MAX_P);
  private grav = new Float32Array(MAX_P);
  private drag = new Float32Array(MAX_P);
  private cursor = 0;
  constructor(scene: THREE.Scene) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 400 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*uScale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `varying vec3 vC; varying float vA; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; float a=(1.0-r); gl_FragColor=vec4(vC*a*vA*1.6, 1.0); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
    this.points.renderOrder = 10;
    scene.add(this.points);
  }
  setScale(h: number) { (this.points.material as THREE.ShaderMaterial).uniforms.uScale.value = h * 0.6; }
  emit(p: THREE.Vector3, v: THREE.Vector3, color: THREE.Color, size: number, life: number, grav = 0, drag = 0) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % MAX_P;
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z;
    this.col[i * 3] = color.r; this.col[i * 3 + 1] = color.g; this.col[i * 3 + 2] = color.b;
    this.size0[i] = size; this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.alpha[i] = 1;
    this.grav[i] = grav; this.drag[i] = drag;
  }
  burst(p: THREE.Vector3, n: number, color: THREE.Color, speed: number, size: number, life: number, grav = -9, up = 0.5) {
    const v = new THREE.Vector3();
    for (let k = 0; k < n; k++) {
      v.set(Math.random() * 2 - 1, Math.random() * up + (up > 0 ? 0.2 : 0), Math.random() * 2 - 1).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.8));
      this.emit(p, v, color, size * (0.6 + Math.random() * 0.8), life * (0.6 + Math.random() * 0.7), grav, 1.5);
    }
  }
  update(dt: number) {
    for (let i = 0; i < MAX_P; i++) {
      if (this.life[i] <= 0) { if (this.alpha[i] !== 0) { this.alpha[i] = 0; this.size[i] = 0; } continue; }
      this.life[i] -= dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= dr; this.vel[i * 3 + 2] *= dr; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * dr + this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02 && this.grav[i] < 0) { this.pos[i * 3 + 1] = 0.02; this.vel[i * 3 + 1] *= -0.3; }
      this.alpha[i] = k;
      this.size[i] = this.size0[i] * (0.4 + 0.6 * k);
    }
    const g = this.points.geometry;
    (g.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (g.attributes.color as THREE.BufferAttribute).needsUpdate = true;
    (g.attributes.size as THREE.BufferAttribute).needsUpdate = true;
    (g.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
  }
  clear() { this.life.fill(0); }
}

// ---------- expanding shock rings / sonic cones / flashes (pooled meshes) ----------
interface Transient { mesh: THREE.Mesh; t: number; dur: number; s0: number; s1: number; a0: number; kind: 'ring' | 'cone' | 'sphere'; }
export class Transients {
  private pool: Transient[] = [];
  private scene: THREE.Scene;
  private ringGeo = new THREE.RingGeometry(0.85, 1, 48);
  private coneGeo: THREE.BufferGeometry;
  private sphereGeo = new THREE.SphereGeometry(1, 16, 12);
  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.ringGeo.rotateX(-Math.PI / 2);
    // open cone pointing +Z, apex at origin, length 1, radius 1
    const c = new THREE.ConeGeometry(1, 1, 32, 1, true);
    c.rotateX(-Math.PI / 2); c.translate(0, 0, 0.5);
    this.coneGeo = c;
  }
  private get(kind: Transient['kind']): Transient {
    let tr = this.pool.find((p) => p.t >= p.dur && p.kind === kind);
    if (!tr) {
      const geo = kind === 'ring' ? this.ringGeo : kind === 'cone' ? this.coneGeo : this.sphereGeo;
      const mat = new THREE.MeshBasicMaterial({ color: 0xff1fcf, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
      tr = { mesh: new THREE.Mesh(geo, mat), t: 0, dur: 0, s0: 1, s1: 1, a0: 1, kind };
      tr.mesh.renderOrder = 9;
      this.scene.add(tr.mesh);
      this.pool.push(tr);
    }
    tr.mesh.visible = true;
    return tr;
  }
  ring(p: THREE.Vector3, color: number, r0: number, r1: number, dur: number, alpha = 1, y = 0.08) {
    const tr = this.get('ring');
    tr.mesh.position.set(p.x, y, p.z); tr.mesh.rotation.set(0, 0, 0);
    (tr.mesh.material as THREE.MeshBasicMaterial).color.setHex(color);
    tr.t = 0; tr.dur = dur; tr.s0 = r0; tr.s1 = r1; tr.a0 = alpha;
    return tr.mesh;
  }
  vring(p: THREE.Vector3, dir: THREE.Vector3, color: number, r0: number, r1: number, dur: number) {
    const m = this.ring(p, color, r0, r1, dur, 0.9, p.y);
    m.lookAt(p.clone().add(dir)); m.rotateX(Math.PI / 2);
  }
  cone(p: THREE.Vector3, yaw: number, len: number, halfAngle: number, color: number, dur: number) {
    const tr = this.get('cone');
    tr.mesh.position.copy(p); tr.mesh.rotation.set(0, yaw, 0);
    (tr.mesh.material as THREE.MeshBasicMaterial).color.setHex(color);
    tr.t = 0; tr.dur = dur; tr.s0 = len * 0.25; tr.s1 = len; tr.a0 = 0.22;
    tr.mesh.userData.r = Math.tan(halfAngle);
  }
  flash(p: THREE.Vector3, color: number, r0: number, r1: number, dur: number) {
    const tr = this.get('sphere');
    tr.mesh.position.copy(p);
    (tr.mesh.material as THREE.MeshBasicMaterial).color.setHex(color);
    tr.t = 0; tr.dur = dur; tr.s0 = r0; tr.s1 = r1; tr.a0 = 0.8;
  }
  update(dt: number) {
    for (const tr of this.pool) {
      if (tr.t >= tr.dur) { tr.mesh.visible = false; continue; }
      tr.t += dt;
      const k = Math.min(1, tr.t / tr.dur);
      const e = 1 - Math.pow(1 - k, 3);
      const s = tr.s0 + (tr.s1 - tr.s0) * e;
      if (tr.kind === 'cone') { const r = s * (tr.mesh.userData.r as number); tr.mesh.scale.set(r, r, s); }
      else tr.mesh.scale.setScalar(s);
      (tr.mesh.material as THREE.MeshBasicMaterial).opacity = tr.a0 * (1 - k);
      if (tr.t >= tr.dur) tr.mesh.visible = false;
    }
  }
  clear() { for (const tr of this.pool) { tr.t = tr.dur; tr.mesh.visible = false; } }
}

// ---------- floating damage numbers (DOM, pooled) ----------
export class DamageNumbers {
  private layer: HTMLElement;
  private items: { el: HTMLDivElement; pos: THREE.Vector3; t: number; vx: number }[] = [];
  private v = new THREE.Vector3();
  constructor() { this.layer = document.getElementById('dmg-layer')!; }
  spawn(p: THREE.Vector3, text: string, cls = '') {
    let it = this.items.find((i) => i.t <= 0);
    if (!it) {
      if (this.items.length > 40) return;
      const el = document.createElement('div');
      this.layer.appendChild(el);
      it = { el, pos: new THREE.Vector3(), t: 0, vx: 0 };
      this.items.push(it);
    }
    it.el.className = 'dmg ' + cls;
    it.el.textContent = text;
    it.el.style.display = 'block';
    it.pos.copy(p); it.t = 0.9; it.vx = (Math.random() - 0.5) * 1.2;
  }
  update(dt: number, cam: THREE.Camera, w: number, h: number) {
    for (const it of this.items) {
      if (it.t <= 0) continue;
      it.t -= dt;
      it.pos.y += dt * 1.6; it.pos.x += it.vx * dt;
      this.v.copy(it.pos).project(cam);
      if (it.t <= 0 || this.v.z > 1) { it.el.style.display = 'none'; it.t = 0; continue; }
      const x = (this.v.x * 0.5 + 0.5) * w, y = (-this.v.y * 0.5 + 0.5) * h;
      const s = 1 + Math.max(0, it.t - 0.7) * 2.5;
      it.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%) scale(${s.toFixed(2)})`;
      it.el.style.opacity = Math.min(1, it.t * 3).toFixed(2);
    }
  }
  clear() { for (const it of this.items) { it.t = 0; it.el.style.display = 'none'; } }
}

// ---------- Tether beam (Vixen -> Kailee) ----------
export class Beam {
  mesh: THREE.Mesh;
  constructor(scene: THREE.Scene) {
    const g = new THREE.CylinderGeometry(0.06, 0.06, 1, 8, 1, true);
    g.rotateX(Math.PI / 2); g.translate(0, 0, 0.5);
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xff40e0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.mesh.visible = false;
    this.mesh.renderOrder = 11;
    scene.add(this.mesh);
  }
  set(a: THREE.Vector3, b: THREE.Vector3, width: number) {
    this.mesh.visible = true;
    this.mesh.position.copy(a);
    this.mesh.lookAt(b);
    const d = a.distanceTo(b);
    this.mesh.scale.set(width, width, d);
  }
  hide() { this.mesh.visible = false; }
}
