// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/ga/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['~/assets/css/reset.css', 'swiper/css', 'swiper/css/navigation'],
  devtools: { enabled: true },
  build: {
    transpile: ['swiper'],
  },
  nitro: {
    preset: 'static',
  },
});
