import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/bin-ui-design/' : '/',
  outDir: '../site',
  title: 'BIN-UI-DESIGN',
  description: 'A Compontnts Lib for Vue3',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'demo', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Basic',
        items: [{ text: 'Button', link: '/demo/button' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
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
