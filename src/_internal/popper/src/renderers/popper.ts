import { withDirectives, Transition, vShow, withCtx, h } from 'vue'
import { stop } from '../../../../_utils/dom'

export default function renderPopper(props, children) {
  const {
    theme,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseEnter,
    onMouseLeave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  } = props

  const kls = [popperClass, 'bin-popper', 'is-' + theme, pure ? 'is-pure' : '']

  const mouseUpAndDown = stopPopperMouseEvent ? stop : () => {}
  return h(
    Transition,
    {
      name,
      onAfterEnter: onAfterEnter,
      onAfterLeave: onAfterLeave,
      onBeforeEnter: onBeforeEnter,
      onBeforeLeave: onBeforeLeave
    },
    {
      default: withCtx(() => [
        withDirectives(
          h(
            'div',
            {
              // 'aria-hidden': String(!visibility),
              class: kls,
              style: popperStyle ?? {},
              id: popperId,
              ref: popperRef ?? 'popperRef',
              role: 'tooltip',
              onMouseenter: onMouseEnter,
              onMouseleave: onMouseLeave,
              onClick: stop,
              onMousedown: mouseUpAndDown,
              onMouseup: mouseUpAndDown
            },
            children
          ),
          [[vShow, visibility]]
        )
      ])
    }
  )
}
