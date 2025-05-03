import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'



export default defineConfig({
  plugins: [
    vue(), tailwindcss(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i',
          enabledCollections: ['tabler'],
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  // base:process.env.NODE_ENV === 'production' ? process.env.VITE_BASE_PATH || "/candleaf-front" : '/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap:true,
  },
})
