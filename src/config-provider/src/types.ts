import { type PropType } from 'vue'

export interface ConfigProviderProps {
  abstract?: boolean
  tag?: string
  inlineThemeDisabled?: boolean
  locale?: string
  themeName?: string
  theme?: object
}

export const configProviderProps = {
  abstract: Boolean,
  tag: {
    type: String,
    default: 'div'
  },
  // 是否禁用 inline css 主题变量 如果不需要更改主题变量theme
  inlineThemeDisabled: {
    type: Boolean
  },
  // 语言包
  locale: {
    type: String,
    default: 'zh-CN'
  },
  // 主题名称
  themeName: {
    type: String as PropType<'light' | 'dark'>
  },
  // 主题样式对象,这里可以存储js变量
  theme: {
    type: Object
  }
}
