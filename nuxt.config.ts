// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css
  css: ['@unocss/reset/tailwind.css', '~/assets/scss/main.scss'],

  // build
  build: {
    transpile: ['element-plus/es'],
  },

  // vite: {
  //   plugins: [ElementPlus()],
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/styles/element-plus/index.scss";',
  //       },
  //     },
  //   },
  // },

  // 代理服务器
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },

  typescript: {
    // typeCheck: true,
    strict: true,
    shim: false,
  },

  // auto import components
  components: true,

  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-icons',
    '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
        zh: {
          welcome: '欢迎',
        },
      },
    },
  },
})
