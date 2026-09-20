import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

const base = process.env.PAGES_BASE_PATH || '/';

export default defineConfig({
  root: 'github-pages',
  base,
  publicDir: '../public',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  build: {
    outDir: '../dist-pages',
    emptyOutDir: true,
  },
});
