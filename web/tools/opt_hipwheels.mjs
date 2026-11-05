import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { textureCompress, prune, dedup } from '@gltf-transform/functions';
import sharp from 'sharp';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
for (const [n,s] of [['vixen','Vixen'],['kailee','Kailee']]) {
  const d = await io.read('/tmp/glb/'+s+'.glb');
  await d.transform(dedup(), prune(), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [1024,1024], quality: 82 }));
  await io.write('src/assets/models/'+n+'.glb', d);
  console.log(n, d.getRoot().listNodes().filter(x=>x.getSkin()).map(x=>x.getName()));
}
