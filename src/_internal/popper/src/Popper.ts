import { renderPopper, renderTrigger, renderArrow } from './renderers'
import { ClickOutside } from '../../../_directives'

import {
  Fragment,
  Teleport,
  onBeforeUnmount,
  onDeactivated,
  onActivated,
  onMounted,
  renderSlot,
  toDisplayString,
  withDirectives,
  h,
  defineComponent
} from 'vue'

import usePopper from './hooks'
import { popperProps } from './types'

const UPDATE_VISIBLE_EVENT = 'update:visible'

export default defineComponent({
  name: 'BPopper',
  props: popperProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave', 'before-enter', 'before-leave'],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      console.warn('BPopper Trigger must be provided')
    }
    const popperStates = usePopper(props, ctx)

    const forceDestroy = () => popperStates.doDestroy(true)
    onMounted(popperStates.initializePopper)
    onBeforeUnmount(forceDestroy)
    onActivated(popperStates.initializePopper)
    onDeactivated(forceDestroy)

    return popperStates
  },
  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      theme,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent
    } = this

    const isManual = this.isManualMode()
    const arrow = renderArrow(showArrow)
    const popper = renderPopper(
      {
        theme,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow
      ]
    )

    const _t = $slots.trigger?.()

    const triggerProps = {
      'aria-describedby': popperId,
      class: kls,
      ref: 'triggerRef',
      ...this.events
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    return h(Fragment, null, [
      trigger,
      h(
        Teleport, // Vue did not support createVNode for Teleport
        {
          to: 'body',
          disabled: !appendToBody
        },
        [popper]
      )
    ])
  }
})
