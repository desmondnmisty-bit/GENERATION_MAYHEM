// No WebGL/browser required: execute the real layout and smash lifecycle against Three geometry.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import ts from 'typescript';
const root = new URL('../src/', import.meta.url);
function compile(name, require) {
  const source = fs.readFileSync(new URL(name, root), 'utf8');
  const code = ts.transpile(source, { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 });
  const exports = {};
  const context = { exports, require, console, document: { createElement: () => ({ getContext: () => new Proxy({}, { get: () => () => {} }) }) } };
  vm.runInNewContext(code, context); return exports;
}
const { sweepClutter } = compile('hyperdriveSmash.ts', () => ({}));
const box = { minX: -1, maxX: 1, minZ: -1, maxZ: 1 };
assert(sweepClutter({ x: -20, z: 0 }, { x: 20, z: 0 }, box, 0.45), 'fast sweep hits');
assert(!sweepClutter({ x: -20, z: 3 }, { x: 20, z: 3 }, box, 0.45), 'parallel miss');
assert(sweepClutter({ x: 1.4, z: -3 }, { x: 1.4, z: 3 }, box, 0.45), 'body radius counts');
const { World } = compile('world.ts', (id) => id === 'three' ? THREE : id === './hyperdriveSmash' ? { sweepClutter } : {});
const w = Object.create(World.prototype);
Object.assign(w, { scene: new THREE.Scene(), hdWalk: new THREE.Group(), hdSkins: [], hdSmashables: [], hdRails: [], hdColliders: [], colliders: [], barriers: [], arena: 'hyperdrive', addCiv() {}, setGateActive() {} });
w.buildHyperdriveWalk(); w.hdWalk.visible = true;
for (const b of w.hdColliders) b.active = true;
assert.equal(w.hdColliders.length, 211, 'all original clutter colliders restored');
assert.equal(w.hdColliders.filter(b => b.ride === 'ramp').length, 31, 'all original ramps restored');
assert.equal(w.hdSmashables.length, 51, '51 explicitly tagged floor clutter pieces');
assert(w.hdSmashables.every(s => s.box.ride !== 'ramp' && s.box.ride !== 'rail'));
assert.equal(w.hdRails.length, 15, 'rails retained');
const target = w.hdSmashables.find(s => Math.abs((s.box.minX + s.box.maxX) / 2 + 11) < 0.01 && Math.abs((s.box.minZ + s.box.maxZ) / 2 - 12) < 0.01);
const pos = new THREE.Vector3(target.box.minX - 0.6, 0, 12), vel = new THREE.Vector3(2, 0, 0);
assert.equal(w.smashHyperdrive(pos, vel, 0.2, 3, 0.45).length, 0, 'flying above is safe');
assert.equal(w.smashHyperdrive(pos, vel, 0.2, 0, 0.45).length, 1, 'player body contact breaks');
assert(target.broken && !target.box.active && target.meshes.every(m => !m.visible), 'mesh/trim and collider removed together');
assert.equal(w.smashHyperdrive(pos, vel, 0.2, 0, 0.45).length, 0, 'no repeat reward');
w.syncSmashables(true); assert(!target.box.active, 'arena toggle cannot resurrect invisible wall');
w.reset(); assert(!target.broken && target.box.active && target.meshes.every(m => m.visible), 'new run restores clutter');
w.arena = 'dock'; assert.equal(w.smashHyperdrive(pos, vel, 0.2, 0, 0.45).length, 0, 'Dock untouched');
w.arena = 'hyperdrive';
const bags = w.hdSmashables.filter(s => s.box.ride === 'top'); assert.equal(bags.length, 5);
const bag = bags[0], bp = new THREE.Vector3((bag.box.minX + bag.box.maxX) / 2, 0, (bag.box.minZ + bag.box.maxZ) / 2);
w.smashHyperdrive(bp, vel, 0.1, bag.box.h, 0.45); assert(!bag.broken, 'sandbag riding on top does not break');
let hits = 0;
for (const s of w.hdSmashables) {
  const b = s.box;
  hits += w.smashHyperdrive(new THREE.Vector3(b.minX - 0.6, 0, (b.minZ + b.maxZ) / 2), vel, 0.5, 0, 0.45).length;
}
assert.equal(hits, 51, 'each clutter object yields exactly one scoring event');
assert.equal(w.hdColliders.filter(b => b.active && b.ride === 'ramp').length, 31, 'smashing never destroys ramps');
assert.equal(w.hdColliders.filter(b => b.active).length, 160, 'only tagged clutter colliders disabled');
console.log('PASS: 211 original colliders, 31 ramps, 51 smashables; sweep/contact/air/top/single-reward/reset/arena/mesh-collider lifecycle.');
