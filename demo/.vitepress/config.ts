import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import sidebarDocs from './sidebar-docs'
import sidebarComps from './sidebar-comps'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/bin-ui-design/' : '/',
  outDir: '../site',
  title: 'BIN-UI-DESIGN',
  description: 'A Compontnts Lib for Vue3',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'BIN-UI-DESIGN',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/introduction' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: {
      '/docs/': sidebarDocs,
      '/components/': sidebarComps
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888"/></svg>'
        },
        link: 'https://gitee.com/wangbin3162/bin-ui-design'
      },
      { icon: 'github', link: 'https://github.com/wangbin3162/bin-ui-design' }
    ],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2023-present bin-ui-design'
    }
  },
  markdown: {
    theme: {
      light: 'slack-ochin',
      dark: 'rose-pine-moon'
    },
    lineNumbers: true,
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  vite: {
    resolve: {
      alias: {
        'bin-ui-design': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  }
})

// https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
// export type Theme =
//   | 'css-variables',
//   | 'dark-plus',
//   | 'dracula-soft',
//   | 'dracula',
//   | 'github-dark-dimmed',
//   | 'github-dark',
//   | 'github-light',
//   | 'hc_light',
//   | 'light-plus',
//   | 'material-theme-darker',
//   | 'material-theme-lighter',
//   | 'material-theme-ocean',
//   | 'material-theme-palenight',
//   | 'material-theme',
//   | 'min-dark',
//   | 'min-light',
//   | 'monokai',
//   | 'nord',
//   | 'one-dark-pro',
//   | 'poimandres',
//   | 'rose-pine-dawn',
//   | 'rose-pine-moon',
//   | 'rose-pine',
//   | 'slack-dark',
//   | 'slack-ochin',
//   | 'solarized-dark',
//   | 'solarized-light',
//   | 'vitesse-dark',
//   | 'vitesse-light',
