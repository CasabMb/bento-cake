import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import cssnanoPlugin from 'cssnano';


// https://vite.dev/config/
export default defineConfig({
  base: '/bento-cake/',
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip' }), 
    viteCompression({ algorithm: 'brotliCompress' })
  ],
  server: {
    allowedHosts: ['.ngrok-free.app'] 
  },
  css: {
    postcss: {
      plugins: [cssnanoPlugin({ preset: 'default' })],
    },
  }
});
