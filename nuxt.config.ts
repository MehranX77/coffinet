// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/ui', '@vite-pwa/nuxt'],
  compatibilityDate: '2026-07-10',
  devtools: { enabled: false },
  nitro: {
    externals: { inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/] },
  },
  css: ['~/assets/css/main.css'],
  pwa: {
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 1,
      registerPlugin: true,
    },
    devOptions: {
      enabled: true, // جهت فعال‌سازی در محیط توسعه (Development)
      type: 'module',
    },
    manifest: {
      name: 'Coffinet',
      short_name: 'Coffinet',
      description: 'Coffinet',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      lang: 'fa',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ],

    },
    workbox:{
      navigateFallback: '/',
    }
  }
})
