/* eslint-disable no-unused-vars */
export type ValueType = boolean | string | number | undefined

export interface RadioProps {
  modelValue?: ValueType
  label?: ValueType
  disabled?: boolean
  name?: string
}

export interface RadioGroupProps {
  modelValue?: ValueType
  type?: 'button' | 'capsule'
  disabled?: boolean
  size?: 'small' | 'large' | 'mini'
}

export interface RadioGroupInject {
  name: string
  modelValue?: ValueType
  type?: 'button' | 'capsule'
  disabled: boolean
  size?: 'small' | 'large' | 'mini'
  changeEvent: (value: ValueType) => void
}
