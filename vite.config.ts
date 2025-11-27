import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repository name as base path for GitHub Pages
  base: '/avantgarde-spaces-landing/',
  build: {
    outDir: 'dist',
  }
})