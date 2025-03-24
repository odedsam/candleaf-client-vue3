import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Add this to resolve '@' alias
    },
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/tests/**/*.spec.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/tests/setup.ts'],
    },
  },
})