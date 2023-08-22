import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // https://github.com/vitejs/vite/issues/2049
    // https://github.com/vuejs/language-tools/discussions/640#discussioncomment-1555479
    dts({
      outDir: ['es', 'lib', 'dist/@types'],
      tsConfigFilePath: resolve(__dirname, 'tsconfig.json')
    }),
    terser({
      format: {
        comments: 'all'
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'bin-ui-design': resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      external: ['vue', /\.css/],
      input: './src/index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'es'
        },
        {
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'lib'
        }
      ]
    },
    lib: {
      entry: './src/index.ts',
      name: 'bin-ui-design',
      fileName: 'bin-ui-design'
    }
  }
})
