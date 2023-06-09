import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import solidJs from "@astrojs/solid-js";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [AstroPWA({
    mode: 'development',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: '貓主食罐磷含量計算機',
      short_name: '貓磷計算機',
      theme_color: '#fefeff',
      icons: [{
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }]
    },
    workbox: {
      navigateFallback: '/404',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/404$/]
    }
  }), solidJs()],
  output: "server",
  adapter: deno()
});
