import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Single-file build: JS, CSS, GLBs and textures are all inlined into dist/index.html
// so the game runs by double-clicking index.html (file://) AND on itch.io.
export default defineConfig({
  base: './',
  assetsInclude: ['**/*.glb'],
  plugins: [viteSingleFile({ removeViteModuleLoader: true })],
  build: {
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 100_000,
    cssCodeSplit: false,
    reportCompressedSize: false,
    target: 'es2020',
  },
  server: { port: 4180 },
  preview: { port: 4181 },
});
