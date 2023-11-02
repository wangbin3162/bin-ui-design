import type { VNode } from 'vue'

export interface NoticeProps {
  id: string
  title?: string
  message?: string | VNode
  duration?: number
  type?: 'info' | 'success' | 'warning' | 'error'
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  showClose?: boolean
  onClose: () => void
  zIndex: number
  offset?: number
  iconClass?: string
  customClass?: string
  useHTML?: boolean
}

//  创建实例的props，排除id，onClose和zIndex，因为这三个值是需要动态计算的
export type CreateNoticeProps = Omit<NoticeProps, 'onClose' | 'id'>

export interface NoticeContext {
  vm: VNode
  $el: HTMLElement
}
