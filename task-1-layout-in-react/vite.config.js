import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// app.html is the source entry. `npm run build` inlines everything into one
// file and copies it to index.html, which opens by double-click (no server).
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  server: { open: '/app.html' },
  build: { rollupOptions: { input: 'app.html' } },
});
