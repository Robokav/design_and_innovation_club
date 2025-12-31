import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
      base: '/', 
  plugins: [
    react(),
       // 2. Generate Sitemap automatically
    Sitemap({
      // REPLACE with your actual domain when deployed
      hostname: 'https://design-and-innovation-club.vercel.app', 
      
      // List all static pages
      routes: [
        '/',
        '/projects',
        '/projects/active',
        '/projects/3d-models',
        '/team/professor',
        '/team/core',
        '/team/junior',
        '/contact',
        // ADDING DYNAMIC PROJECT ROUTES MANUALLY
        // Since your data is inlined, we tell the plugin these exist
        '/projects/1',
        '/projects/2',
        '/projects/3',
        '/projects/4'
      ],
      // This ensures the file is named sitemap.xml in the dist folder
      outDir: 'dist',
      changefreq: 'monthly',
      priority: 0.7,
    }),
      
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
