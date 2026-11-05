// Asset prep: optimizes source GLBs + textures into web/src/assets (run: node tools/prep_assets.mjs)
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { textureCompress, prune, dedup, resample } from '@gltf-transform/functions';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const GM = '/workspace/generation-mayhem';
const CH = GM + '/ue5/GenerationMayhem/Content/Characters';
const UA = GM + '/unity/GenerationMayhem/Assets/Art';
const OUT = path.resolve('src/assets');
sharp.concurrency(1);
sharp.cache(false);

const models = [
  ['vixen', CH + '/Heroes/Vixen/GLB/VIXEN_Hero_LOD1.glb', 1024],
  ['kailee', CH + '/Heroes/Kailee/GLB/KAILEE_Hero_LOD1.glb', 1024],
  ['brianna', CH + '/Heroes/Brianna/Import/GLB/BRIANNA_Hero_LOD1.glb', 1024],
  ['payton', CH + '/Heroes/Payton/Import/GLB/PAYTON_Hero_LOD1.glb', 1024],
  ['viper01', UA + '/Characters/Vipers/VIPER_01/GLB/VIPER_01_LOD1.glb', 512],
  ['viper02', UA + '/Characters/Vipers/VIPER_02/GLB/VIPER_02_LOD1.glb', 512],
  ['viper03', UA + '/Characters/Vipers/VIPER_03/GLB/VIPER_03_LOD1.glb', 512],
  ['enforcer', CH + '/Enemies/Enforcer/Import/GLB/ENFORCER_Enemy_LOD1.glb', 512],
  ['falcon', GM + '/projects/Generation_Mayhem/factions/Iron_Rose/GM_CHR_IronRose_Falcon_v01.glb', 512],
  ['anims', CH + '/Rigs/ChaosWheelSkate/Anims/GLB/ChaosAnims_FightSkate_v001.glb', 0],
  ['dockmood', UA + '/Environment/Dockyard/Mood/Meshes/DockKit_Mood_v001_ALL.glb', 0],
];

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const only = process.argv[2];
for (const [name, src, size] of models) {
  if (only && only !== name) continue;
  const doc = await io.read(src);
  const tf = [dedup(), prune()];
  if (name === 'anims') tf.push(resample());
  if (size) tf.push(textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [size, size], quality: 82 }));
  await doc.transform(...tf);
  const out = path.join(OUT, 'models', name + '.glb');
  await io.write(out, doc);
  console.log(name, (fs.statSync(src).size / 1e6).toFixed(2), 'MB ->', (fs.statSync(out).size / 1e6).toFixed(2), 'MB');
}

const T = UA + '/Environment/Dockyard/Mood/Textures/';
const B = UA + '/Brand/';
const texes = [
  ['asphalt_albedo', T + 'DK_WetAsphalt_Albedo_1024.png', 512, 'webp'],
  ['asphalt_normal', T + 'DK_WetAsphalt_NormalRipple_1024.png', 512, 'webp'],
  ['asphalt_smooth', T + 'DK_WetAsphalt_Smoothness_1024.png', 512, 'webp'],
  ['hazard_stripe', T + 'DK_Decal_HazardStripe_Tile_512.png', 256, 'webp'],
  ['rust', T + 'DK_Decal_RustStreaks_1024.png', 512, 'webp'],
  ['serials', T + 'DK_Decal_StencilSerials_1024.png', 512, 'png'],
  ['gate_energy', T + 'DK_Emissive_ExtractGate_EnergyFill_512.png', 256, 'webp'],
  ['brand_billboard', B + 'Props/Mark/DK_Brand_Billboard_2x1.png', 1024, 'webp'],
  ['brand_mark', B + 'Props/Mark/DK_Brand_Mark_Decal_512.png', 512, 'webp'],
  ['brand_lockup', B + 'UI/DK_Brand_Lockup_1024x512.png', 1024, 'webp'],
];
for (const [name, src, w, fmt] of texes) {
  if (only && only !== 'tex') continue;
  const meta = await sharp(src).metadata();
  const out = path.join(OUT, 'tex', name + '.' + fmt);
  let p = sharp(src).resize({ width: Math.min(w, meta.width) });
  p = fmt === 'webp' ? p.webp({ quality: 82, alphaQuality: 90 }) : p.png({ compressionLevel: 9, palette: false });
  await p.toFile(out);
  console.log(name, meta.width + 'x' + meta.height, meta.channels + 'ch', '->', (fs.statSync(out).size / 1e3).toFixed(0), 'KB');
}
