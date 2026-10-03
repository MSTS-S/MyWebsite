import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // CRA時代と同じポート
    open: true, // 起動時にブラウザを自動で開く
  },
  build: {
    outDir: 'build', // firebase.json の "public": "build" に合わせる
  },
});
