import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import sidebarDocs from './sidebar-docs'
import sidebarComps from './sidebar-comps'

const baseUrl = process.env.NODE_ENV === 'production' ? '/bin-ui-design/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  outDir: '../docs',
  title: 'BIN-UI-DESIGN',
  description: 'A Compontnts Lib for Vue3',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `${baseUrl}favicon.ico`
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'BIN-UI-DESIGN',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/docs/introduction', activeMatch: '/docs/' },
      { text: '组件', link: '/components/button', activeMatch: '/components/' },
      {
        text: '生态系统',
        items: [
          { text: '资源' },
          { text: 'bin-admin-pro', link: '/bin-admin-pro/', target: '_blank' },
          { text: 'bin-datav', link: '/bin-datav/', target: '_blank' },
          { text: 'bin-datav-schema', link: '/bin-datav-schema/', target: '_blank' },
          { text: '官方库v3' },
          { text: 'bin-ui-next', link: '/bin-ui-next/', target: '_blank' },
          { text: 'bin-editor-next', link: '/bin-editor-next/', target: '_blank' },
          { text: 'bin-charts-next', link: '/bin-charts-next/', target: '_blank' },
          { text: '官方库v2' },
          { text: 'bin-ui', link: '/bin-ui/', target: '_blank' },
          { text: 'bin-ace-editor', link: '/bin-ace-editor/', target: '_blank' },
          { text: 'bin-charts', link: '/bin-charts/', target: '_blank' },
          { text: 'bin-tree-org', link: '/bin-tree-org/', target: '_blank' },
          { text: '动画库' },
          { text: 'bin-animation', link: '/bin-animation/', target: '_blank' },
          { text: 'bin-keyframe-animation', link: '/bin-keyframe-animation/', target: '_blank' }
        ]
      }
    ],

    sidebar: {
      '/docs/': sidebarDocs,
      '/components/': sidebarComps
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/wangbin3162/bin-ui-design' }],

    footer: {
      copyright: 'MIT Licensed | Copyright © 2023-present bin-ui-design'
    }
  },
  markdown: {
    theme: {
      light: 'slack-ochin',
      dark: 'rose-pine-moon'
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 9004,
      open: true
    },
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
