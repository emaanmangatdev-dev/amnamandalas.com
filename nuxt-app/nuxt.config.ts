// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/content', '@nuxthub/core'],
app: {
    head: {
      title: 'AmnaMandalas',
      meta: [{ name: 'description', content: 'Women wellness & healing blog' }],
    },
  },
})