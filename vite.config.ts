import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
// const backendUrl = import.meta.env.VITE_BACKEND_URL as any
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': {
        target:'https://candleaf-back.railway.internal',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    vue(), tailwindcss(),
    /* Auto-import components */
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i',
          enabledCollections: ['tabler'],
        }),
      ],
    }),
    /* Load icon components */
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
