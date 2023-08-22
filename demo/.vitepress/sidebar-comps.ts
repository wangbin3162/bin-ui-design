import { formatSidebar } from './uitls/utils'

export default formatSidebar(
  [
    {
      text: '通用组件',
      items: [
        { text: '按钮', link: '/components/button', icon: 'Youtube', alias: 'Button' },
        { text: '图标', link: '/components/icon', icon: 'fire', alias: 'Icon' }
      ]
    }
  ],
  true
)
