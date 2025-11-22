import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
      base: '/', 
  plugins: [
    react(),
     Sitemap({
      hostname: 'https://design-and-innovation-club.vercel.app', // IMPORTANT: Use your actual Vercel domain
      
      // Define the static routes that don't come from data
      routes: [
        '/', 
        '/projects', 
        '/projects/active', 
        '/projects/3d-models',
        '/team/professor',
        '/team/core',
        '/team/junior',
        '/contact'
      ],}),
      
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
