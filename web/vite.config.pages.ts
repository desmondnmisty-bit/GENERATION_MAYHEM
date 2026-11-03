import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist-pages',
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 100_000,
    cssCodeSplit: true,
    reportCompressedSize: false,
    target: 'es2020',
  },
});
