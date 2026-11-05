import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { textureCompress, prune, dedup } from '@gltf-transform/functions';
import sharp from 'sharp';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const d = await io.read('/tmp/glb/Vixen.glb');
for (const m of d.getRoot().listMaterials()) {
  const n = m.getName();
  if (n === 'M_Vixen_Body') { m.setEmissiveTexture(null); m.setEmissiveFactor([0,0,0]); m.setRoughnessFactor(0.55); }
  if (n === 'M_Vixen_ResonatorOrange') { m.setBaseColorFactor([0.3,0.01,0.01,1]); m.setEmissiveFactor([1,0.06,0.04]); }
}
for (const n of d.getRoot().listNodes()) if (n.getMesh()?.getName()==='VIXEN_ResonatorMuzzle_Mask') n.dispose();
{ const fs=await import('fs'); const t=d.createTexture('VIXEN_E_maskvents').setImage(fs.readFileSync('tools/VIXEN_E_maskvents_2K.png')).setMimeType('image/png'); const b=d.getRoot().listMaterials().find(m=>m.getName()==='M_Vixen_Body'); b.setEmissiveTexture(t); b.setEmissiveFactor([1,1,1]); }
await d.transform(dedup(), prune(), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [2048,2048], quality: 85 }));
await io.write('src/assets/models/vixen.glb', d);
console.log(d.getRoot().listMaterials().map(m=>m.getName()));
