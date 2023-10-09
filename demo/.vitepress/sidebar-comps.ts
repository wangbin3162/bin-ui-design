import { formatSidebar } from './utils/utils'

export default formatSidebar(
  [
    {
      text: '通用组件',
      items: [
        { text: '图标', link: '/components/icon', icon: 'fire', alias: 'Icon' },
        { text: '按钮', link: '/components/button', icon: 'Youtube', alias: 'Button' },
        { text: '卡片', link: '/components/card', icon: 'creditcard', alias: 'Card' },
        { text: '折叠面板', link: '/components/collapse', icon: 'interation', alias: 'Collapse' },
        { text: '分割线', link: '/components/divider', icon: 'line', alias: 'Divider' },
        { text: '下拉菜单', link: '/components/dropdown', icon: 'caret-down', alias: 'Dropdown' },
        { text: '标签', link: '/components/tag', icon: 'tags', alias: 'Tag' }
      ]
    },
    {
      text: '布局组件',
      items: [
        { text: '布局组件', link: '/components/layout', icon: 'layout', alias: 'Layout' },
        { text: '栅格', link: '/components/grid', icon: 'appstore', alias: 'Grid' },
        { text: '间距', link: '/components/space', icon: 'swap', alias: 'Space' },
        { text: '分割面板', link: '/components/split', icon: 'block', alias: 'Split' }
      ]
    },
    {
      text: '数据录入组件',
      items: [
        { text: '输入框', link: '', icon: 'edit-square', alias: 'Input' },
        { text: '数字输入', link: '', icon: 'shake', alias: 'InputNumber' },
        { text: '单选框', link: '/components/radio', icon: 'plus-circle', alias: 'Radio' },
        { text: '多选框', link: '', icon: 'check-square', alias: 'Checkbox' },
        { text: '开关', link: '', icon: 'build', alias: 'Switch' },
        { text: '选择器', link: '', icon: 'unorderedlist', alias: 'Select' },
        { text: '级联选择', link: '', icon: 'pic-left', alias: 'Cascader' },
        { text: '日期选择器', link: '', icon: 'calendar', alias: 'DatePicker' },
        { text: '时间选择器', link: '', icon: 'time-circle', alias: 'TimePicker' },
        { text: '颜色选择器', link: '', icon: 'bg-colors', alias: 'ColorPicker' },
        { text: '评分', link: '', icon: 'star', alias: 'Rate' },
        { text: '滑块', link: '', icon: 'minus', alias: 'Slider' },
        { text: '上传', link: '', icon: 'cloud-upload', alias: 'Upload' },
        { text: '表单', link: '', icon: 'reconciliation', alias: 'Form' }
      ]
    },
    {
      text: '数据展示组件',
      items: [
        { text: '表格', link: '', icon: 'table', alias: 'Table' },
        { text: '树', link: '', icon: 'branches', alias: 'Tree' },
        { text: '描述', link: '', icon: 'unorderedlist', alias: 'Desc' },
        { text: '时间线', link: '', icon: 'arrowdown', alias: 'Timeline' },
        { text: '日历', link: '', icon: 'calendar-fill', alias: 'Calendar' },
        { text: '轮播', link: '', icon: 'appstore-fill', alias: 'Carousel' },
        { text: '数字动画', link: '', icon: 'orderedlist', alias: 'CountTo' }
      ]
    },
    {
      text: '导航组件',
      items: [
        { text: '图钉', link: '', icon: 'pushpin', alias: 'Affix' },
        { text: '锚点', link: '', icon: 'attachment', alias: 'Anchor' },
        { text: '返回顶部', link: '', icon: 'up', alias: 'BackTop' },
        { text: '面包屑', link: '', icon: 'right', alias: 'Breadcrumb' },
        { text: '加载条', link: '', icon: 'minus', alias: 'Loading Bar' },
        { text: '菜单', link: '', icon: 'menu', alias: 'Menu' },
        { text: '标签页', link: '', icon: 'project', alias: 'Tabs' },
        { text: '步骤', link: '', icon: 'arrowright', alias: 'Steps' },
        { text: '分页', link: '', icon: 'read', alias: 'Page' }
      ]
    },
    {
      text: '反馈组件',
      items: [
        { text: '警告信息', link: '/components/alert', icon: 'error-fill', alias: 'Alert' },
        { text: '标记', link: '', icon: 'border', alias: 'Badge' },
        { text: '模态框', link: '', icon: 'idcard', alias: 'Modal' },
        { text: '消息提示', link: '/components/message', icon: 'message', alias: 'Message' },
        { text: '弹框提示', link: '', icon: 'mail', alias: 'MessageBox' },
        { text: '通知', link: '', icon: 'notification', alias: 'Notice' },
        { text: '弹出提示', link: '/components/tooltip', icon: 'info-circle', alias: 'Tooltip' },
        { text: '弹出信息', link: '', icon: 'question-circle', alias: 'Popover' },
        { text: '抽屉', link: '', icon: 'build', alias: 'Drawer' },
        { text: '骨架屏', link: '', icon: 'sever-fill', alias: 'Skeleton' },
        { text: '加载', link: '', icon: 'loading', alias: 'Loading' },
        { text: '进度条', link: '', icon: 'hourglass', alias: 'Progress' },
        { text: '进度环', link: '', icon: 'redo', alias: 'Circle' }
      ]
    },
    {
      text: '内置组件',
      items: [
        { text: '空状态', link: '/components/empty', icon: 'border', alias: 'Empty' },
        { text: '滚动组件', link: '/components/scrollbar', icon: 'container', alias: 'Scrollbar' },
        { text: '弹层', link: '/components/popper', icon: 'pic-center', alias: 'Popper' }
      ]
    },
    {
      text: '配置组件',
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
