import type { CSSOptions } from 'vite'
const css = {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "@/styles/element-plus/index.scss";',
    },
  },
} as CSSOptions
export default css
