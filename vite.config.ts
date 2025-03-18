import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/musica-x/', // Base URL for GitHub Pages (lowercase for consistency)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
