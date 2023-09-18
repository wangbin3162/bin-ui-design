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
      text: '反馈组件',
      items: [
        // { text: '空状态', link: '/components/empty', icon: 'fire', alias: 'Tooltip' },
        { text: '提示', link: '/components/tooltip', icon: 'info-circle', alias: 'Tooltip' }
      ]
    },
    {
      text: '工具组件',
      items: [
        { text: '空状态', link: '/components/empty', icon: 'border', alias: 'Empty' }
        // { text: '弹层', link: '/components/popper', icon: 'fire', alias: 'Popper' }
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
