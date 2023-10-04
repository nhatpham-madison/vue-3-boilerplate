import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    svgLoader(),
    Components(),
    AutoImport({
      include: [
        /\.[j]s?$/, // .js
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        "vue",
        "vue-router",
      ],
      dts: false,
      dirs: [
        "./src/composables",
        "./src/composables/**",
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    }
  }
})
