/* eslint-disable no-unused-vars */
import type { Placement } from '@popperjs/core'
import type { InjectionKey, Ref, ComputedRef, ComponentInternalInstance } from 'vue'

export interface DropdownProps {
  trigger?: 'hover' | 'click' | 'contextmenu'
  type?: string
  appendToBody?: boolean
  hideOnClick?: boolean
  placement?: Placement
  tabindex?: number
  showTimeout?: number
  hideTimeout?: number
  theme?: 'light' | 'dark'
}

export interface DropdownItemProps {
  name?: object | string | number
  disabled?: boolean
  divided?: boolean
  selected?: boolean
  icon?: string
}

export interface DropdownContext {
  instance: ComponentInternalInstance | null
  visible: Ref<boolean>
  hideOnClick: ComputedRef<boolean>
  handleClick: () => void
  commandHandler: (
    name: string | number | object,
    intance: ComponentInternalInstance | null,
    e: MouseEvent
  ) => void
  show: () => void
  hide: () => void
  triggerElm: ComputedRef<any>
  trigger: ComputedRef<'click' | 'hover' | 'contextmenu'>
}

export interface CollapseWrapProps {
  modelValue?: boolean
  title?: string
  collapse?: boolean
  shadow?: string
  arrowIcon?: string
}

export const dropdownContextKey: InjectionKey<DropdownContext> = Symbol('BDropdown')
