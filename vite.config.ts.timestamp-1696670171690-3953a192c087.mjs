// vite.config.ts
import { defineConfig } from "file:///D:/Workspace/MyProject/bin-ui-design/node_modules/.pnpm/vite@4.4.11_@types+node@18.18.4/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///D:/Workspace/MyProject/bin-ui-design/node_modules/.pnpm/@vitejs+plugin-vue@4.4.0_vite@4.4.11_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Workspace/MyProject/bin-ui-design/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.11_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/Workspace/MyProject/bin-ui-design/node_modules/.pnpm/vite-plugin-dts@3.6.0_@types+node@18.18.4_rollup@2.79.1_typescript@5.1.6_vite@4.4.11/node_modules/vite-plugin-dts/dist/index.mjs";
import { terser } from "file:///D:/Workspace/MyProject/bin-ui-design/node_modules/.pnpm/rollup-plugin-terser@7.0.2_rollup@2.79.1/node_modules/rollup-plugin-terser/rollup-plugin-terser.mjs";
var __vite_injected_original_dirname = "D:\\Workspace\\MyProject\\bin-ui-design";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // https://github.com/vitejs/vite/issues/2049
    // https://github.com/vuejs/language-tools/discussions/640#discussioncomment-1555479
    dts({
      outDir: ["es", "lib", "dist/@types"],
      tsConfigFilePath: resolve(__vite_injected_original_dirname, "tsconfig.json")
    }),
    terser({
      format: {
        comments: "all"
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      "bin-ui-design": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      external: ["vue", /\.css/],
      input: "./src/index.ts",
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "es"
        },
        {
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "lib"
        }
      ]
    },
    lib: {
      entry: "./src/index.ts",
      name: "bin-ui-design",
      fileName: "bin-ui-design"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3Jrc3BhY2VcXFxcTXlQcm9qZWN0XFxcXGJpbi11aS1kZXNpZ25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtzcGFjZVxcXFxNeVByb2plY3RcXFxcYmluLXVpLWRlc2lnblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29ya3NwYWNlL015UHJvamVjdC9iaW4tdWktZGVzaWduL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCB7IHRlcnNlciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdGVyc2VyJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLCAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUvaXNzdWVzLzIwNDlcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvbGFuZ3VhZ2UtdG9vbHMvZGlzY3Vzc2lvbnMvNjQwI2Rpc2N1c3Npb25jb21tZW50LTE1NTU0NzlcbiAgICBkdHMoe1xuICAgICAgb3V0RGlyOiBbJ2VzJywgJ2xpYicsICdkaXN0L0B0eXBlcyddLFxuICAgICAgdHNDb25maWdGaWxlUGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsICd0c2NvbmZpZy5qc29uJylcbiAgICB9KSxcbiAgICB0ZXJzZXIoe1xuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiAnYWxsJ1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgICAgJ2Jpbi11aS1kZXNpZ24nOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgL1xcLmNzcy9dLFxuICAgICAgaW5wdXQ6ICcuL3NyYy9pbmRleC50cycsXG4gICAgICBvdXRwdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2VzJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5tanMnLFxuICAgICAgICAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgICBkaXI6ICdlcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgICAgIGRpcjogJ2xpYidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogJy4vc3JjL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdiaW4tdWktZGVzaWduJyxcbiAgICAgIGZpbGVOYW1lOiAnYmluLXVpLWRlc2lnbidcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNTLFNBQVMsb0JBQW9CO0FBQ25VLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sU0FBUztBQUNoQixTQUFTLGNBQWM7QUFMdkIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBO0FBQUE7QUFBQSxJQUVQLElBQUk7QUFBQSxNQUNGLFFBQVEsQ0FBQyxNQUFNLE9BQU8sYUFBYTtBQUFBLE1BQ25DLGtCQUFrQixRQUFRLGtDQUFXLGVBQWU7QUFBQSxJQUN0RCxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDN0IsaUJBQWlCLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQzdDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE9BQU8sT0FBTztBQUFBLE1BQ3pCLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQTtBQUFBLFVBRVQsS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUE7QUFBQSxVQUVSLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
