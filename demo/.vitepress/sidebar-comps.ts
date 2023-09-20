import { formatSidebar } from './utils/utils'

export default formatSidebar(
  [
    {
      text: '通用组件',
      items: [
        { text: '图标', link: '/components/icon', icon: 'fire', alias: 'Icon' },
        { text: '按钮', link: '/components/button', icon: 'Youtube', alias: 'Button' },
        { text: '折叠面板', link: '/components/collapse', icon: 'interation', alias: 'Collapse' }
      ]
    },
    {
      text: '布局组件',
      items: [
        { text: '布局组件', link: '/components/layout', icon: 'layout', alias: 'Layout' },
        { text: '分割线', link: '/components/divider', icon: 'line', alias: 'Divider' }
      ]
    },
    {
      text: '反馈组件',
      items: [{ text: '提示', link: '/components/tooltip', icon: 'info-circle', alias: 'Tooltip' }]
    },
    {
      text: '内置组件',
      items: [
        { text: '空状态', link: '/components/empty', icon: 'border', alias: 'Empty' },
        { text: '滚动组件', link: '/components/scrollbar', icon: 'container', alias: 'Scrollbar' }
      ]
    },
    {
      text: '全局配置',
      items: [
        {
          text: '全局配置',
          link: '/components/config-provider',
          icon: 'setting',
          alias: 'ConfigProvider'
        }
      ]
    }
  ],
  true
)
