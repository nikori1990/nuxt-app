import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css
  css: ['@unocss/reset/tailwind.css', '~/assets/scss/main.scss'],

  // build
  build: {
    transpile: ['element-plus/es'],
  },

  vite: {
    plugins: [ElementPlus()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/styles/element-plus/index.scss" as *;',
        },
      },
    },
  },

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
    // '@nuxtjs/color-mode',
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
  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '',
  //   storageKey: 'nuxt-color-mode',
  // },
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
