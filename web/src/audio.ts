// Tiny WebAudio synth: all SFX + a low dark-synth music loop. No audio files.
export type ArenaId = 'dock' | 'hyperdrive';
export type MusicKind = 'fastbeat' | 'suspense';
/** Arena → music bed. Dock = low fast beat; Hyperdrive (when built) = suspense. */
export function musicForArena(a: ArenaId): MusicKind { return a === 'hyperdrive' ? 'suspense' : 'fastbeat'; }
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
  arenaMusic: MusicKind = 'fastbeat';

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
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = 0.6; this.musicBus.connect(this.master); // capped low per Misty 11-03 (connect was commented out by accident = silent music)
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
  startMusic() { if (!this.ctx) this.init(); if (!this.ctx) return; if (this.ctx.state === 'suspended') this.ctx.resume(); if (!this.musicTimer) this.musicTimer = setInterval(() => this.updateMusic(), 50); if (this.musicOn) return; this.musicOn = true; this.nextNoteTime = this.t + 0.1; this.step = 0; }
  private musicTimer: any = 0;
  stopMusic() { this.musicOn = false; }
  setArena(a: ArenaId) { this.arenaMusic = musicForArena(a); }
  updateMusic() {
    if (!this.ctx || !this.musicOn) return;
    if (this.arenaMusic === 'suspense') return this.updateSuspense();
    // fast beat: 138 bpm, quiet bass + four-on-floor + hats
    const spb = 60 / 138 / 4;
    const bass = [36, 0, 36, 48, 0, 36, 46, 0, 36, 0, 36, 48, 43, 0, 41, 39];
    while (this.nextNoteTime < this.t + 0.15) {
      const s = this.step % 16, bar = Math.floor(this.step / 16) % 4;
      const tt = this.nextNoteTime - this.t;
      const root = [0, 0, 3, -2][bar];
      if (bass[s]) { const f = 440 * Math.pow(2, (bass[s] + root - 69) / 12); this.tone('sawtooth', f, f * 0.98, spb * 0.8, 0.12, tt, this.musicBus); }
      if (bass[s]) { const f2 = 440 * Math.pow(2, (bass[s] + root + 24 - 69) / 12); this.tone('square', f2, f2, spb * 0.7, 0.05, tt, this.musicBus); }
      if (s % 4 === 0) { this.toneKick(tt); this.tone('triangle', 180, 60, 0.12, 0.3, tt, this.musicBus); }
      if (s % 2 === 1) this.noiseHat(tt, 0.04 + this.intensity * 0.04);
      if ((s === 4 || s === 12) && this.intensity > 0.5) this.noiseSnare(tt);
      this.nextNoteTime += spb; this.step++;
    }
  }
  // suspense bed (Hyperdrive): slow pulse + minor-second drone stabs
  private updateSuspense() {
    const spb = 60 / 72 / 2;
    while (this.nextNoteTime < this.t + 0.2) {
      const s = this.step % 16, tt = this.nextNoteTime - this.t;
      if (s % 2 === 0) this.tone('sine', 55, 50, spb * 1.6, 0.35, tt, this.musicBus);
      if (s === 0 || s === 8) { this.tone('triangle', 220, 220, spb * 6, 0.08, tt, this.musicBus); this.tone('triangle', 233, 233, spb * 6, 0.06, tt, this.musicBus); }
      if (s % 2 === 0) this.tone('triangle', 110, 104, spb * 1.4, 0.18, tt, this.musicBus);
      if (s === 0 || s === 8) { this.tone('sawtooth', 440, 440, spb * 5, 0.04, tt, this.musicBus); this.tone('sawtooth', 466, 466, spb * 5, 0.035, tt, this.musicBus); }
      if (s % 4 === 3) this.noiseHat(tt, 0.05);
      this.nextNoteTime += spb; this.step++;
    }
  }
  /** Duck music under dialogue so she can HEAR the ladies. */
  duck(on: boolean) { if (this.musicBus && this.ctx) this.musicBus.gain.setTargetAtTime(on ? 0.3 : 0.6, this.t, 0.15); }
  /** Stub VO: browser TTS per speaker until real clips exist. Returns a promise that resolves when the line ends. */
  private voMan: Record<string, Record<string, string>> | null = null; private voLoad: Promise<void> | null = null;
  private voKey(line: string) { return line.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().split(/\s+/).slice(0, 6).join('_'); }
  /** Soft VO loader: real clips from public/vo/manifest.json (built from art/vo/<name>/*.mp3) beat TTS. */
  private async realVO(speaker: string, line: string): Promise<boolean> {
    if (!this.voLoad) this.voLoad = fetch('vo/manifest.json').then((r) => r.ok ? r.json() : {}).then((j) => { this.voMan = j; }).catch(() => { this.voMan = {}; });
    await this.voLoad; const m = this.voMan?.[speaker.toUpperCase()]; if (!m || this.muted) return false;
    const f = m[this.voKey(line)]; if (!f) return false;
    return new Promise((res) => { const a = new Audio('vo/' + f); a.volume = 1; this.duck(true); let dn = false; const fin = (ok: boolean) => { if (dn) return; dn = true; this.duck(false); res(ok); }; setTimeout(() => { a.pause(); fin(true); }, 12000); a.onended = () => fin(true); a.onerror = () => fin(false); a.play().catch(() => fin(false)); });
  }
  /** Misty 11-04: no spoken VO (robot voices) — captions only; keep caption pacing. */
  say(_speaker: string, line: string): Promise<void> {
    return new Promise((res) => setTimeout(res, 900 + line.length * 55));
  }
  ttsSay(speaker: string, line: string): Promise<void> {
    return new Promise((res) => {
      const ss = (window as any).speechSynthesis as SpeechSynthesis | undefined;
      if (!ss || this.muted) { setTimeout(res, 400 + line.length * 55); return; }
      const P: Record<string, [number, number]> = { VIXEN: [0.85, 0.95], KAILEE: [1.25, 1.08], BRIANNA: [0.95, 1.0], PAYTON: [1.05, 0.9], KAMYRN: [1.35, 1.12], LILI: [1.6, 1.15], FANG: [0.6, 0.9], COBRA: [0.5, 0.8] };
      const [pitch, rate] = P[speaker] ?? [1, 1];
      const u = new SpeechSynthesisUtterance(line.replace(/…/g, ', '));
      const vs = ss.getVoices().filter((v) => /^en/i.test(v.lang));
      const fem = vs.filter((v) => /female|samantha|victoria|karen|zira|susan|aria|jenny|fiona|moira|tessa|google us english|google uk english female/i.test(v.name));
      const pool = fem.length ? fem : vs;
      if (pool.length) u.voice = pool[Math.abs(speaker.length * 7 + speaker.charCodeAt(0)) % pool.length];
      u.pitch = Math.min(2, pitch); u.rate = rate; u.volume = 1;
      let done = false; const fin = () => { if (done) return; done = true; this.duck(false); res(); };
      u.onend = fin; u.onerror = fin; setTimeout(fin, 1500 + line.length * 120);
      this.duck(true); if (ss.speaking || ss.pending) ss.cancel(); ss.speak(u);
    });
  }
  stopVoice() { try { (window as any).speechSynthesis?.cancel(); } catch { /* */ } }
  rage() { this.tone('sawtooth', 70, 140, 0.8, 0.5); this.noise(0.6, 0.6, 900, 0.6, 'bandpass', 0, 3000); this.tone('square', 220, 440, 0.4, 0.15, 0.1); }
  mine() { this.tone('sine', 90, 25, 0.9, 1.0); this.noise(0.9, 1.0, 600, 0.4, 'lowpass', 0, 60); this.noise(0.2, 0.6, 3000, 1); }
  mineClick() { this.tone('square', 2200, 2200, 0.05, 0.15); }
  radio() { this.noise(0.12, 0.12, 2500, 3); }
  private toneKick(d: number) { this.tone('sine', 120, 40, 0.2, 0.45, d, this.musicBus); }
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
