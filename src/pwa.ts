import { registerSW } from 'virtual:pwa-register'

export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        registerSW({
            onRegistered(_r) {
                console.log('Service Worker registered')
            },
            onRegisterError(error) {
                console.error('Service Worker registration failed:', error)
            }
        })
    }
}