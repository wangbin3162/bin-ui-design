import { formatSidebar } from './utils/utils'

export default formatSidebar([
  {
    text: '开始',
    items: [
      { text: '介绍', link: '/docs/introduction' },
      { text: '变更日志', link: '/docs/changelog' }
    ]
  },
  {
    text: '快速上手',
    items: [
      { text: '安装', link: '/docs/installation' },
      { text: '在 SFC 中使用', link: '/docs/usage-sfc' },
      { text: '按需引入', link: '/docs/import-on-demand' }
    ]
  },
  {
    text: '指南',
    items: [
      { text: 'JSX & TSX', link: '/docs/jsx' },
      { text: '色彩设计', link: '/docs/color-design' },
      { text: '调整主题', link: '/docs/custom-theme' },
      { text: '通用样式', link: '/docs/common-css' },
      { text: '帮助函数', link: '/docs/common-api' },
      { text: '组件指令', link: '/docs/common-directive' },
      { text: '内置动画', link: '/docs/common-transition' }
    ]
  }
])
