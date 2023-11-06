/* eslint-disable no-unused-vars */
import type { Ref } from 'vue'

export interface CarouselProps {
  initialIndex?: number
  height?: string
  trigger?: 'hover' | 'click'
  autoplay?: boolean
  interval?: number
  indicatorPosition?: string
  indicator?: boolean
  arrow?: string
  type?: string
  loop?: boolean
  direction?: 'horizontal' | 'vertical'
}

export interface CarouselItemProps {
  name?: string
  label?: string | number
}

export interface ItemsType {
  uid?: string
  name?: string
  label?: string | number
  hover?: boolean
  translate?: number
  scale?: number
  active?: boolean
  ready?: boolean
  inStage?: boolean
  animating?: boolean
  translateItem: (index: number, activeIndex: number, oldIndex: number) => void
}

export interface CarouselInject {
  direction: string
  offsetWidth?: Ref<number> | undefined
  offsetHeight?: Ref<number> | undefined
  type: string
  loop?: boolean
  items?: ItemsType[] | undefined
  updateItems: (item: ItemsType) => void
  setActiveItem: (index: number) => void
}
