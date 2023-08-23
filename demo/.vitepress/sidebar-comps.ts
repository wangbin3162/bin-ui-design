import { formatSidebar } from './utils/utils'

export default formatSidebar(
  [
    {
      text: '通用组件',
      items: [
        { text: '图标', link: '/components/icon', icon: 'fire', alias: 'Icon' },
        { text: '按钮', link: '/components/button', icon: 'Youtube', alias: 'Button' }
      ]
    }
  ],
  true
)
