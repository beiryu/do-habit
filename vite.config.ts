import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.png', 'icons/*.png'],
            manifest: {
                name: 'OwnHabit',
                short_name: 'OwnHabit',
                description: 'OwnHabit is a straightforward habit tracker that doesn\'t require registration.',
                theme_color: '#000000',
                background_color: '#121212',
                display: 'standalone',
                orientation: 'portrait',
                start_url: '/',
                icons: [
                    {
                        src: 'favicon.png',
                        sizes: '64x64 32x32 24x24 16x16',
                        type: 'image/x-icon'
                    },
                    {
                        src: 'icons/logo192.png',
                        type: 'image/png',
                        sizes: '192x192',
                        purpose: 'any'
                    },
                    {
                        src: 'icons/logo512.png',
                        type: 'image/png',
                        sizes: '512x512',
                        purpose: 'any'
                    },
                    {
                        src: 'icons/logo192-maskable.png',
                        type: 'image/png',
                        sizes: '192x192',
                        purpose: 'maskable'
                    },
                    {
                        src: 'icons/logo512-maskable.png',
                        type: 'image/png',
                        sizes: '512x512',
                        purpose: 'maskable'
                    }
                ],
                categories: ['education', 'lifestyle', 'productivity']
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})