import { formatSidebar } from './utils/utils'

export default formatSidebar(
  [
    {
      text: 'General',
      items: [
        { text: 'Icon', link: '/en/components/icon', icon: 'fire' },
        { text: 'Button', link: '/en/components/button', icon: 'Youtube' },
        { text: 'Card', link: '/en/components/card', icon: 'creditcard' },
        { text: 'Collapse', link: '/en/components/collapse', icon: 'interation' },
        { text: 'Divider', link: '/en/components/divider', icon: 'line' },
        { text: 'Dropdown', link: '/en/components/dropdown', icon: 'caret-down' },
        { text: 'Tag', link: '/en/components/tag', icon: 'tags' },
        { text: 'Image', link: '/en/components/image', icon: 'image' }
      ]
    },
    {
      text: 'Config',
      items: [
        {
          text: 'ConfigProvider',
          link: '/en/components/config-provider',
          icon: 'setting'
        }
      ]
    },
    {
      text: 'Layout',
      items: [
        { text: 'Layout', link: '/en/components/layout', icon: 'layout' },
        { text: 'Grid', link: '/en/components/grid', icon: 'appstore' },
        { text: 'Space', link: '/en/components/space', icon: 'swap' },
        { text: 'Split', link: '/en/components/split', icon: 'block' }
      ]
    },
    {
      text: 'Data Entry',
      items: [
        { text: 'Input', link: '/en/components/input', icon: 'edit-square' },
        { text: 'InputNumber', link: '/en/components/input-number', icon: 'shake' },
        { text: 'Radio', link: '/en/components/radio', icon: 'plus-circle' },
        { text: 'Checkbox', link: '/en/components/checkbox', icon: 'check-square' },
        { text: 'Switch', link: '/en/components/switch', icon: 'build' },
        { text: 'Select', link: '/en/components/select', icon: 'unorderedlist' },
        { text: 'Cascader', link: '/en/components/cascader', icon: 'pic-left' },
        { text: 'DatePicker', link: '/en/components/date-picker', icon: 'calendar' },
        { text: 'TimePicker', link: '/en/components/time-picker', icon: 'time-circle' },
        { text: 'ColorPicker', link: '/en/components/color-picker', icon: 'bg-colors' },
        { text: 'Rate', link: '/en/components/rate', icon: 'star' },
        { text: 'Slider', link: '/en/components/slider', icon: 'minus' },
        { text: 'Upload', link: '/en/components/upload', icon: 'cloud-upload' },
        { text: 'Form', link: '/en/components/form', icon: 'reconciliation' }
      ]
    },
    {
      text: 'Data Display',
      items: [
        { text: 'Tree', link: '/en/components/tree', icon: 'branches' },
        { text: 'Table', link: '/en/components/table', icon: 'table' },
        { text: 'Page', link: '/en/components/page', icon: 'read' },
        { text: 'Desc', link: '/en/components/desc', icon: 'unorderedlist' },
        { text: 'Timeline', link: '/en/components/timeline', icon: 'arrowdown' },
        { text: 'Calendar', link: '/en/components/calendar', icon: 'calendar-fill' },
        { text: 'Carousel', link: '/en/components/carousel', icon: 'appstore-fill' },
        { text: 'CountTo', link: '/en/components/count-to', icon: 'orderedlist' },
        { text: 'Trend', link: '/en/components/trend', icon: 'caret-up' }
      ]
    },
    {
      text: 'Navigation',
      items: [
        { text: 'Affix', link: '/en/components/affix', icon: 'pushpin' },
        { text: 'Anchor', link: '/en/components/anchor', icon: 'attachment' },
        { text: 'BackTop', link: '/en/components/back-top', icon: 'up' },
        { text: 'Breadcrumb', link: '/en/components/breadcrumb', icon: 'right' },
        { text: 'Loading Bar', link: '/en/components/loading-bar', icon: 'minus' },
        { text: 'Menu', link: '/en/components/menu', icon: 'menu' },
        { text: 'Tabs', link: '/en/components/tabs', icon: 'project' },
        { text: 'Steps', link: '/en/components/steps', icon: 'arrowright' }
      ]
    },
    {
      text: 'Feedback',
      items: [
        { text: 'Alert', link: '/en/components/alert', icon: 'error-fill' },
        { text: 'Badge', link: '/en/components/badge', icon: 'border' },
        { text: 'Modal', link: '/en/components/modal', icon: 'idcard' },
        { text: 'Message', link: '/en/components/message', icon: 'message' },
        { text: 'MessageBox', link: '/en/components/message-box', icon: 'mail' },
        { text: 'Notice', link: '/en/components/notice', icon: 'notification' },
        { text: 'Tooltip', link: '/en/components/tooltip', icon: 'info-circle' },
        { text: 'Popover', link: '/en/components/popover', icon: 'question-circle' },
        { text: 'Drawer', link: '/en/components/drawer', icon: 'build' },
        { text: 'Skeleton', link: '/en/components/skeleton', icon: 'sever-fill' },
        { text: 'Loading', link: '/en/components/loading', icon: 'loading' },
        { text: 'Progress', link: '/en/components/progress', icon: 'hourglass' },
        { text: 'Circle', link: '/en/components/circle', icon: 'redo' }
      ]
    },
    {
      text: 'Built-in',
      items: [
        { text: 'Empty', link: '/en/components/empty', icon: 'border' },
        { text: 'Scrollbar', link: '/en/components/scrollbar', icon: 'container' },
        { text: 'Popper', link: '/en/components/popper', icon: 'pic-center' },
        { text: 'Contextmenu', link: '/en/components/contextmenu', icon: 'menu' }
      ]
    }
  ],
  true
)
