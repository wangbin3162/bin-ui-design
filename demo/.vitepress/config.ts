import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import sidebarDocs from './sidebar-docs'
import sidebarComps from './sidebar-comps'
import sidebarDocsEn from './sidebar-docs-en'
import sidebarCompsEn from './sidebar-comps-en'

const baseUrl = process.env.NODE_ENV === 'production' ? '/bin-ui-design/' : '/'
const linkBase = 'https://wangbin3162.github.io'

const ecosystemZh = [
  { text: '资源', link: '' },
  { text: 'bin-admin-pro', link: `${linkBase}/bin-admin-pro/`, target: '_blank' },
  { text: 'bin-datav', link: `${linkBase}/bin-datav`, target: '_blank' },
  { text: 'bin-datav-schema', link: `${linkBase}/bin-datav-schema/`, target: '_blank' },
  { text: '官方库v3', link: '' },
  { text: 'bin-ui-next', link: `${linkBase}/bin-ui-next/`, target: '_blank' },
  { text: 'bin-editor-next', link: `${linkBase}/bin-editor-next/`, target: '_blank' },
  { text: 'bin-charts-next', link: `${linkBase}/bin-charts-next/`, target: '_blank' },
  { text: '官方库v2', link: '' },
  { text: 'bin-ui', link: `${linkBase}/bin-ui/`, target: '_blank' },
  { text: 'bin-ace-editor', link: `${linkBase}/bin-ace-editor/`, target: '_blank' },
  { text: 'bin-charts', link: `${linkBase}/bin-charts/`, target: '_blank' },
  { text: 'bin-tree-org', link: `${linkBase}/bin-tree-org/`, target: '_blank' },
  { text: '动画库', link: '' },
  { text: 'bin-animation', link: `${linkBase}/bin-animation/`, target: '_blank' },
  {
    text: 'bin-keyframe-animation',
    link: `${linkBase}/bin-keyframe-animation/`,
    target: '_blank'
  }
]

const ecosystemEn = [
  { text: 'Resources', link: '' },
  { text: 'bin-admin-pro', link: `${linkBase}/bin-admin-pro/`, target: '_blank' },
  { text: 'bin-datav', link: `${linkBase}/bin-datav`, target: '_blank' },
  { text: 'bin-datav-schema', link: `${linkBase}/bin-datav-schema/`, target: '_blank' },
  { text: 'Official v3', link: '' },
  { text: 'bin-ui-next', link: `${linkBase}/bin-ui-next/`, target: '_blank' },
  { text: 'bin-editor-next', link: `${linkBase}/bin-editor-next/`, target: '_blank' },
  { text: 'bin-charts-next', link: `${linkBase}/bin-charts-next/`, target: '_blank' },
  { text: 'Official v2', link: '' },
  { text: 'bin-ui', link: `${linkBase}/bin-ui/`, target: '_blank' },
  { text: 'bin-ace-editor', link: `${linkBase}/bin-ace-editor/`, target: '_blank' },
  { text: 'bin-charts', link: `${linkBase}/bin-charts/`, target: '_blank' },
  { text: 'bin-tree-org', link: `${linkBase}/bin-tree-org/`, target: '_blank' },
  { text: 'Animation', link: '' },
  { text: 'bin-animation', link: `${linkBase}/bin-animation/`, target: '_blank' },
  {
    text: 'bin-keyframe-animation',
    link: `${linkBase}/bin-keyframe-animation/`,
    target: '_blank'
  }
]

export default defineConfig({
  base: baseUrl,
  outDir: '../docs',
  title: 'BIN-UI-DESIGN',
  description: 'A Components Library for Vue3',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `${baseUrl}favicon.ico`
      }
    ]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '文档', link: '/docs/introduction', activeMatch: '^/docs/' },
          { text: '组件', link: '/components/button', activeMatch: '^/components/' },
          { text: '生态系统', items: ecosystemZh }
        ],
        sidebar: {
          '/docs/': sidebarDocs,
          '/components/': sidebarComps
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/en/docs/introduction', activeMatch: '^/en/docs/' },
          { text: 'Components', link: '/en/components/button', activeMatch: '^/en/components/' },
          { text: 'Ecosystem', items: ecosystemEn }
        ],
        sidebar: {
          '/en/docs/': sidebarDocsEn,
          '/en/components/': sidebarCompsEn
        }
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'BIN-UI-DESIGN',
    i18nRouting: true,
    search: {
      provider: 'local'
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
