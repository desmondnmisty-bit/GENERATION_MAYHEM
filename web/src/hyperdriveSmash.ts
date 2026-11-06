/** Swept player body against a floor-clutter AABB. Prevents fast impacts tunnelling. */
export function sweepClutter(from: { x: number; z: number }, to: { x: number; z: number },
  box: { minX: number; maxX: number; minZ: number; maxZ: number }, radius: number): boolean {
  let enter = 0, leave = 1;
  for (const [start, delta, lo, hi] of [
    [from.x, to.x - from.x, box.minX - radius, box.maxX + radius],
    [from.z, to.z - from.z, box.minZ - radius, box.maxZ + radius],
  ]) {
    if (Math.abs(delta) < 1e-9) { if (start < lo || start > hi) return false; continue; }
    const a = (lo - start) / delta, b = (hi - start) / delta;
    enter = Math.max(enter, Math.min(a, b)); leave = Math.min(leave, Math.max(a, b));
    if (enter > leave) return false;
  }
  return true;
}
