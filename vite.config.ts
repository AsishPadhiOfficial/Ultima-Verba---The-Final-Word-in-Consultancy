import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages at https://AsishPadhiOfficial.github.io/AI-Nexus/
  // base should be the repo name with leading and trailing slashes
  base: '/AI-Nexus/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
