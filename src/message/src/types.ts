import type { VNode } from 'vue'
// message props
export interface MessageProps {
  id: string
  message?: string | VNode
  duration?: number
  type?: 'info' | 'success' | 'warning' | 'error'
  showClose?: boolean
  onClose: () => void
  zIndex: number
  offset?: number
  iconClass?: string
  customClass?: string
  useHTML?: boolean
}

export interface MessageContext {
  vm: VNode
  $el: HTMLElement
}

//  创建实例的props，排除id，onClose和zIndex，因为这三个值是需要动态计算的
export type CreateMessageProps = Omit<MessageProps, 'onClose' | 'id'>

export type MessageBack = {
  onClose: () => void
}
