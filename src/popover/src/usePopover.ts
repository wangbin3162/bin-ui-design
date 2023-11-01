import { computed, watch } from 'vue'
import { typeOf } from '../../_utils/util'
import { usePopper } from '../../_internal/popper'

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover(props, ctx) {
  const popperProps = usePopper(props, ctx)

  const popperStyle = computed(() => {
    let _width

    if (typeOf(props.width) === 'string') {
      _width = props.width
    } else {
      _width = props.width + 'px'
    }

    return {
      width: _width,
      zIndex: popperProps.popperStyle.value.zIndex
    }
  })

  watch(popperProps.visibility, val => {
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    ...popperProps,
    popperStyle
  }
}
