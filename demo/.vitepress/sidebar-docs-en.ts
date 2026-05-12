import { formatSidebar } from './utils/utils'

export default formatSidebar([
  {
    text: 'Start',
    items: [
      { text: 'Introduction', link: '/en/docs/introduction' },
      { text: 'Changelog', link: '/en/docs/changelog' }
    ]
  },
  {
    text: 'Quick Start',
    items: [
      { text: 'Installation', link: '/en/docs/installation' },
      { text: 'Use in SFC', link: '/en/docs/usage-sfc' },
      { text: 'Import on Demand', link: '/en/docs/import-on-demand' },
      { text: 'Internationalization', link: '/en/docs/internationalization' }
    ]
  },
  {
    text: 'Guide',
    items: [
      { text: 'JSX & TSX', link: '/en/docs/jsx' },
      { text: 'Color Design', link: '/en/docs/color-design' },
      { text: 'Theme', link: '/en/docs/custom-theme' },
      { text: 'Common CSS', link: '/en/docs/common-css' },
      { text: 'Helpers', link: '/en/docs/common-api' },
      { text: 'Directives', link: '/en/docs/common-directive' },
      { text: 'Built-in Transition', link: '/en/docs/common-transition' }
    ]
  }
])
