// Keyboard / mouse / touch input. Edge-triggered "pressed" flags are consumed each frame.
export class Input {
  keys = new Set<string>();
  pressed = new Set<string>();
  mouseDX = 0;
  mouseDY = 0;
  locked = false;
  touchMove = { x: 0, y: 0 };
  isTouch = false;
  private canvas: HTMLCanvasElement;
  onLockChange: (locked: boolean) => void = () => {};

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    window.addEventListener('keydown', (e) => {
      const k = e.code;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(k)) e.preventDefault();
      if (!this.keys.has(k)) this.pressed.add(k);
      this.keys.add(k);
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); });
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.pressed.add('Mouse0');
      if (e.button === 2) this.pressed.add('Mouse2');
      this.keys.add('Mouse' + e.button);
    });
    window.addEventListener('mouseup', (e) => { this.keys.delete('Mouse' + e.button); });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (this.locked) { this.mouseDX += e.movementX || 0; this.mouseDY += e.movementY || 0; }
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.onLockChange(this.locked);
    });
    this.isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window && navigator.maxTouchPoints > 0;
  }
  requestLock() {
    if (this.isTouch) return;
    try {
      const p = this.canvas.requestPointerLock() as unknown as Promise<void> | undefined;
      if (p && typeof (p as Promise<void>).catch === 'function') (p as Promise<void>).catch(() => {});
    } catch { /* not available (e.g. sandboxed iframe) – auto camera still works */ }
  }
  exitLock() { if (document.pointerLockElement) document.exitPointerLock(); }
  down(...codes: string[]) { return codes.some((c) => this.keys.has(c)); }
  hit(...codes: string[]) { return codes.some((c) => this.pressed.has(c)); }
  press(code: string) { this.pressed.add(code); }
  endFrame() { this.pressed.clear(); this.mouseDX = 0; this.mouseDY = 0; }

  bindTouch(onPause: () => void) {
    const root = document.getElementById('touch')!;
    root.classList.remove('hidden');
    const stick = document.getElementById('stick')!;
    const knob = document.getElementById('stick-knob')!;
    let sid: number | null = null;
    const R = 60;
    const upd = (t: Touch) => {
      const r = stick.getBoundingClientRect();
      let dx = t.clientX - (r.left + r.width / 2), dy = t.clientY - (r.top + r.height / 2);
      const l = Math.hypot(dx, dy); if (l > R) { dx *= R / l; dy *= R / l; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.touchMove.x = dx / R; this.touchMove.y = -dy / R;
    };
    stick.addEventListener('touchstart', (e) => { e.preventDefault(); const t = e.changedTouches[0]; sid = t.identifier; upd(t); }, { passive: false });
    stick.addEventListener('touchmove', (e) => { e.preventDefault(); for (const t of Array.from(e.changedTouches)) if (t.identifier === sid) upd(t); }, { passive: false });
    const end = (e: TouchEvent) => { for (const t of Array.from(e.changedTouches)) if (t.identifier === sid) { sid = null; this.touchMove.x = 0; this.touchMove.y = 0; knob.style.transform = ''; } };
    stick.addEventListener('touchend', end); stick.addEventListener('touchcancel', end);
    const map: Record<string, string> = { punch: 'KeyJ', cone: 'KeyK', sling: 'KeyL', jump: 'Space' };
    document.querySelectorAll<HTMLButtonElement>('#tbtns button').forEach((b) => {
      const code = map[b.dataset.k || ''];
      b.addEventListener('touchstart', (e) => { e.preventDefault(); this.pressed.add(code); this.keys.add(code); }, { passive: false });
      b.addEventListener('touchend', (e) => { e.preventDefault(); this.keys.delete(code); }, { passive: false });
    });
    document.getElementById('tpause')!.addEventListener('touchstart', (e) => { e.preventDefault(); onPause(); }, { passive: false });
  }
}
