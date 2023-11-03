/* eslint-disable no-unused-vars */
export interface TabItem {
  key: string
  title: string
  noClose?: boolean
  icon?: string
}

export interface TabsProps {
  modelValue?: string
  data?: TabItem[]
  type?: 'default' | 'card' | 'tag'
  closable?: boolean
  contextMenu?: boolean
}

export interface ScrollPaneInstance {
  calcWidth: () => void
  moveToTarget: (target: HTMLElement) => void
}
