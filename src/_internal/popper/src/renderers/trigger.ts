import { cloneVNode } from 'vue'
import { getFirstValidNode } from '../../../../_utils/vnode'

export default function renderTrigger(trigger, extraProps) {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) {
    console.warn('trigger expects single rooted node')
  }
  return cloneVNode(firstElement, extraProps, true)
}
