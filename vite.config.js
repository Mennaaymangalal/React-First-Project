import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-First-Project/', 
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
