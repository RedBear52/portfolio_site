import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true, // Use polling in case file changes aren't detected
      interval: 100, // Adjust polling interval if needed
    },
    hmr: {
      protocol: 'ws', // Ensure WebSocket protocol is used for HMR
      host: 'localhost', // Use the correct host
    },
  },
})
