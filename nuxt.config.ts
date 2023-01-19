import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css
  css: ['@unocss/reset/tailwind.css', '~/assets/scss/main.scss'],

  // build
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
    // transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
    plugins: [ElementPlus()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/element-plus/index.scss" as *;',
        },
      },
    },
  },

  // 代理服务器
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:8000/api',
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
    '@nuxtjs/algolia',
    '@element-plus/nuxt',
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
  // elementPlus: {
  //   importStyle: 'scss',
  // },
  algolia: {
    apiKey: 'MY_API_KEY',
    applicationId: 'MY_APPLICATION_ID',
  },
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
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'ko', iso: 'ko-KR', file: 'ko.json', name: '한국어' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
    ],
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      useCookie: true,
      // cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      legacy: false,
    },
  },
})
