import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-First-Project/', // Replace with your repository name
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
