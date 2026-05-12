import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDirs: ['es', 'lib', 'dist/@types'],
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json')
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'bin-ui-design': resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'es2018',
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'bin-ui-design',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', /\.css$/],
      input: resolve(__dirname, 'src/index.ts'),
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: 'es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: 'lib'
        }
      ]
    }
  }
})
