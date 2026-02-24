import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

import webfontDl from 'vite-plugin-webfont-dl'

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  },
  plugins: [
    react(),
    tailwindcss(),

    webfontDl([
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Outfit:wght@600;700;800&family=Fira+Code:wght@400;600&display=swap'
    ]),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
})
