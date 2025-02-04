// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-generate/' : '/',
    buildAssetsDir: '/static/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['~/assets/css/reset.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
});
