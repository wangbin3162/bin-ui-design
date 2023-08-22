import { formatSidebar } from './uitls/utils'

export default formatSidebar([
  {
    text: '介绍',
    items: [{ text: 'Bin UI Design', link: '/docs/introduction' }]
  },
  {
    text: '快速上手',
    items: [
      { text: '安装', link: '/docs/installation' },
      { text: '在 SFC 中使用', link: '/docs/usage-sfc' }
    ]
  }
])
