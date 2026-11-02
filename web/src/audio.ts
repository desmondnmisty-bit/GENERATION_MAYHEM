// Tiny WebAudio synth: all SFX + a low dark-synth music loop. No audio files.
export class Sfx {
  ctx: AudioContext | null = null;
  master!: GainNode;
  sfxBus!: GainNode;
  musicBus!: GainNode;
  noiseBuf!: AudioBuffer;
  muted = false;
  private skateGain: GainNode | null = null;
  private skateFilter: BiquadFilterNode | null = null;
  private musicOn = false;
  private nextNoteTime = 0;
  private step = 0;
  intensity = 0; // 0..1 music intensity

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.7;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.sfxBus = ctx.createGain(); this.sfxBus.connect(this.master);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = 0.32; this.musicBus.connect(this.master);
    const len = ctx.sampleRate * 1.5;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // skate rolling loop
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    this.skateFilter = ctx.createBiquadFilter(); this.skateFilter.type = 'bandpass'; this.skateFilter.frequency.value = 400; this.skateFilter.Q.value = 0.8;
    this.skateGain = ctx.createGain(); this.skateGain.gain.value = 0;
    src.connect(this.skateFilter); this.skateFilter.connect(this.skateGain); this.skateGain.connect(this.sfxBus);
    src.start();
  }
  setMuted(m: boolean) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.7; }
  get t() { return this.ctx ? this.ctx.currentTime : 0; }

  private env(g: GainNode, t: number, a: number, peak: number, dec: number) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + dec);
  }
  tone(type: OscillatorType, f0: number, f1: number, dur: number, vol: number, delay = 0, bus?: AudioNode) {
    if (!this.ctx) return;
    const t = this.t + delay;
    const o = this.ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = this.ctx.createGain(); this.env(g, t, 0.005, vol, dur);
    o.connect(g); g.connect(bus || this.sfxBus); o.start(t); o.stop(t + dur + 0.05);
  }
  noise(dur: number, vol: number, freq: number, q = 1, type: BiquadFilterType = 'bandpass', delay = 0, f1?: number) {
    if (!this.ctx) return;
    const t = this.t + delay;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = this.ctx.createGain(); this.env(g, t, 0.004, vol, dur);
    s.connect(f); f.connect(g); g.connect(this.sfxBus); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }

  punch(heavy = false) { this.noise(0.12, heavy ? 0.9 : 0.6, heavy ? 900 : 1400, 1.2); this.tone('sine', heavy ? 160 : 220, 60, 0.12, 0.7); }
  whiff() { this.noise(0.09, 0.25, 2500, 2, 'bandpass', 0, 900); }
  hit() { this.noise(0.08, 0.5, 600, 2); this.tone('square', 140, 50, 0.08, 0.25); }
  cone() { this.tone('sawtooth', 320, 80, 0.45, 0.35); this.tone('sine', 900, 180, 0.4, 0.3); this.noise(0.45, 0.5, 1800, 0.6, 'bandpass', 0, 300); }
  chaosReady() { [0, 0.09, 0.18, 0.3].forEach((d, i) => this.tone('sawtooth', [220, 330, 440, 660][i], [220, 330, 440, 660][i] * 1.01, 0.35, 0.22, d)); this.tone('sine', 55, 55, 0.9, 0.6); }
  tether() { this.tone('sine', 200, 1400, 0.55, 0.3); }
  scream() { if (!this.ctx) return; for (let i = 0; i < 3; i++) this.tone('sawtooth', 520 + i * 37, 1500 + i * 60, 0.5, 0.18); this.noise(0.9, 0.7, 3000, 0.5, 'highpass'); }
  slingshotLaunch() { this.tone('sawtooth', 90, 30, 0.9, 0.8); this.noise(0.9, 1.0, 400, 0.4, 'lowpass', 0, 80); this.tone('sine', 1800, 200, 0.6, 0.25); }
  impact() { this.tone('sine', 110, 30, 0.6, 0.9); this.noise(0.5, 0.8, 300, 0.5, 'lowpass', 0, 60); }
  enemyDie() { this.tone('square', 300, 40, 0.3, 0.2); this.noise(0.25, 0.4, 900, 1, 'bandpass', 0, 200); }
  playerHurt() { this.tone('square', 180, 70, 0.18, 0.35); this.noise(0.12, 0.4, 500, 1); }
  kaileeHurt() { this.tone('triangle', 520, 300, 0.12, 0.2); }
  kaileeDown() { this.tone('sawtooth', 400, 80, 0.7, 0.3); }
  kaileeUp() { [0, 0.08, 0.16].forEach((d, i) => this.tone('triangle', 440 * (1 + i * 0.25), 440 * (1 + i * 0.25), 0.15, 0.2, d)); }
  pistol() { this.noise(0.06, 0.4, 3000, 1); this.tone('square', 900, 200, 0.05, 0.12); }
  blade() { this.noise(0.1, 0.35, 4000, 3, 'bandpass', 0, 1500); this.noise(0.25, 0.15, 800, 0.5, 'lowpass'); }
  bolt() { this.tone('sawtooth', 700, 300, 0.2, 0.15); }
  zap() { this.noise(0.18, 0.4, 5000, 4); this.tone('square', 1200, 600, 0.12, 0.12); }
  splash() { this.noise(0.8, 0.8, 1200, 0.5, 'lowpass', 0, 200); }
  clang() { this.tone('triangle', 620, 600, 0.6, 0.3); this.tone('triangle', 931, 900, 0.5, 0.2); }
  hop() { this.tone('sine', 300, 600, 0.12, 0.2); }
  land() { this.noise(0.08, 0.3, 300, 1, 'lowpass'); }
  brake() { this.noise(0.25, 0.25, 5000, 6, 'bandpass', 0, 2500); }
  pickup() { this.tone('sine', 660, 1320, 0.15, 0.3); }
  waveStart() { this.tone('sawtooth', 110, 110, 0.6, 0.35); this.tone('sawtooth', 165, 165, 0.6, 0.25, 0.15); this.noise(0.5, 0.3, 200, 1, 'lowpass'); }
  waveClear() { [0, 0.12, 0.24].forEach((d, i) => this.tone('square', [392, 523, 784][i], [392, 523, 784][i], 0.25, 0.18, d)); }
  gateOpen() { this.tone('sine', 110, 880, 1.6, 0.35); this.tone('sawtooth', 55, 220, 1.6, 0.2); }
  win() { [0, 0.15, 0.3, 0.5].forEach((d, i) => this.tone('sawtooth', [262, 330, 392, 523][i], [262, 330, 392, 523][i], 0.6, 0.2, d)); }
  lose() { [0, 0.25, 0.5].forEach((d, i) => this.tone('sawtooth', [220, 185, 147][i], [218, 183, 110][i], 0.6, 0.25, d)); }
  ui() { this.tone('square', 880, 1100, 0.06, 0.12); }
  telegraph() { this.tone('square', 1500, 1500, 0.07, 0.08); }

  setSkate(speed01: number, grounded: boolean) {
    if (!this.skateGain || !this.ctx || !this.skateFilter) return;
    const v = grounded ? Math.min(1, speed01) * 0.12 : 0;
    this.skateGain.gain.setTargetAtTime(v, this.t, 0.05);
    this.skateFilter.frequency.setTargetAtTime(250 + speed01 * 700, this.t, 0.1);
  }

  // --- music: 110 bpm dark pulse, scheduled with lookahead ---
  startMusic() { if (!this.ctx || this.musicOn) return; this.musicOn = true; this.nextNoteTime = this.t + 0.1; this.step = 0; }
  stopMusic() { this.musicOn = false; }
  updateMusic() {
    if (!this.ctx || !this.musicOn) return;
    const spb = 60 / 112 / 4; // 16ths
    const bass = [36, 36, 48, 36, 39, 36, 46, 36, 36, 36, 48, 36, 43, 41, 39, 34];
    while (this.nextNoteTime < this.t + 0.15) {
      const s = this.step % 16, bar = Math.floor(this.step / 16) % 4;
      const tt = this.nextNoteTime - this.t;
      const root = [0, 0, 3, -2][bar];
      const n = bass[s] + root;
      const f = 440 * Math.pow(2, (n - 69) / 12);
      this.tone('sawtooth', f, f * 0.98, spb * 0.9, 0.22, tt, this.musicBus);
      if (s % 4 === 0) { this.toneKick(tt); }
      if (s % 2 === 1 && this.intensity > 0.3) this.noiseHat(tt, 0.06 + this.intensity * 0.05);
      if ((s === 4 || s === 12) && this.intensity > 0.6) this.noiseSnare(tt);
      this.nextNoteTime += spb; this.step++;
    }
  }
  private toneKick(d: number) { this.tone('sine', 120, 40, 0.22, 0.7, d, this.musicBus); }
  private noiseHat(d: number, v: number) {
    if (!this.ctx) return; const t = this.t + d;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
    const g = this.ctx.createGain(); this.env(g, t, 0.002, v, 0.04);
    s.connect(f); f.connect(g); g.connect(this.musicBus); s.start(t, Math.random()); s.stop(t + 0.08);
  }
  private noiseSnare(d: number) {
    if (!this.ctx) return; const t = this.t + d;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1800;
    const g = this.ctx.createGain(); this.env(g, t, 0.002, 0.3, 0.15);
    s.connect(f); f.connect(g); g.connect(this.musicBus); s.start(t, Math.random()); s.stop(t + 0.2);
  }
}
export const sfx = new Sfx();
