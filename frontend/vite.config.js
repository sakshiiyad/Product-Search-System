import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev-time proxy means the frontend can always call same-origin "/api/..."
// without worrying about CORS or hardcoding a backend port.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
