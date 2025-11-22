import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
      base: '/', 
  plugins: [
    react(),
     ViteImageOptimizer({
      /* config options */
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 75,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 75,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
    }),

  ],

})
