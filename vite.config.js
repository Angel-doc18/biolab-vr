import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// BioLab VR — offline-first PWA config.
// Everything the app needs (app shell + 3D assets) is precached at install
// time so it works with zero network after the first load.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.svg'],
      manifest: {
        name: 'BioLab VR — WAEC Biology',
        short_name: 'BioLab VR',
        description: 'Offline VR/3D biology study companion for secondary school students (WAEC/GCE syllabus).',
        theme_color: '#0F1713',
        background_color: '#0F1713',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: '/icons/icon-maskable.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' }
        ]
      },
      workbox: {
        // Precache the built app shell (JS/CSS/HTML) plus any bundled
        // 3D/texture assets that end up in dist/.
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,glb,gltf,bin}'],
        // SPA routing must still resolve to index.html when fully offline.
        navigateFallback: '/index.html',
        // Everything is precached; nothing needs a runtime network fetch,
        // so there is no runtimeCaching block. If you later fetch models
        // from a CDN instead of bundling them, add a CacheFirst
        // runtimeCaching rule here — but see learnings.md: CDN deps have
        // bitten this project before, so bundling is preferred.
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024
      },
      devOptions: {
        enabled: true // test the SW behavior in `vite dev`, not just build
      }
    })
  ],
  server: {
    host: true, // reachable on LAN for QR/cross-device testing, per past workflow
    proxy: {
      // Forwards /api/* to the local AI proxy server (see /server) during
      // `npm run dev`, so the frontend can call the relative default
      // ('/api/ask') without hitting CORS. Doesn't apply to `vite preview`
      // or a production static build — see README "Deploying AI Mode".
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true
      }
    }
  }
})
