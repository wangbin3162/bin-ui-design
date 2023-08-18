/* eslint-disable no-unused-vars */
import type { InjectionKey, Ref } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'

export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[] | NameType
  accordion?: boolean
  simple?: boolean
}

export interface CollapsePanelProps {
  name: NameType
  title?: string
  hideArrow?: boolean
  disabled?: boolean
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export interface CollapseWrapProps {
  modelValue?: boolean
  title?: string
  collapse?: boolean
  shadow?: string
  arrowIcon?: string
}

export interface CollapseEmits {
  (e: UPDATE_MODEL_EVENT, values: NameType[] | NameType | boolean): void
  (e: CHANGE_EVENT, values: NameType[] | NameType | boolean): void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContext')
