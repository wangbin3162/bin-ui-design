import { defineComponent, h, ref, cloneVNode } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../_utils/constants'
import { getFirstValidNode } from '../../_utils/vnode'
import { tooltipProps } from './types'
import { BPopper } from '../../_internal/popper'
import '../styles/index.css'

export default defineComponent({
  name: 'BTooltip',
  components: { BPopper },
  props: tooltipProps,
  emits: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    if (props.manual && typeof props.modelValue === 'undefined') {
      console.warn('[BTooltip] You need to pass a v-model to b-tooltip when `manual` is true')
    }
    const popper = ref(null)

    const onUpdateVisible = val => {
      ctx.emit(UPDATE_MODEL_EVENT, val)
    }

    const updatePopper = () => {
      return popper.value?.update()
    }

    return {
      popper,
      onUpdateVisible,
      updatePopper
    }
  },
  render() {
    const { $slots, content, manual, openDelay, onUpdateVisible, showArrow, visible } = this

    const throwErrorTip = () =>
      console.warn('[BTooltip]  you need to provide a valid default slot.')

    return h(
      BPopper,
      {
        ...Object.keys(tooltipProps).reduce((result, key) => ({ ...result, [key]: this[key] }), {}),
        ref: 'popper',
        openDelay,
        manual,
        showArrow,
        visible,
        'onUpdate:visible': onUpdateVisible
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => {
          if ($slots.default) {
            const firstVnode = getFirstValidNode($slots.default(), 1)
            if (!firstVnode) throwErrorTip()
            return cloneVNode(firstVnode, {}, true)
          }
          throwErrorTip()
        }
      }
    )
  }
})
