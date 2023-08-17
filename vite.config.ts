import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    host: '0.0.0.0',
    port: 5188,
    open: true
  },
  resolve: {
    alias:
      process.env.NODE_ENV !== 'production'
        ? [
            {
              find: 'bin-ui-view',
              replacement: path.resolve(__dirname, './src')
            }
          ]
        : undefined
  }
})
