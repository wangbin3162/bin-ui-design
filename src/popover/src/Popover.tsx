import {
  createCommentVNode,
  createTextVNode,
  Fragment,
  renderSlot,
  Teleport,
  toDisplayString,
  withDirectives,
  h,
  defineComponent
} from 'vue'
import { popoverProps } from './types'
import { BPopper, renderArrow, renderPopper, renderTrigger } from '../../_internal/popper'
import { Theme } from '../../_internal/popper/src/types'
import { ClickOutside } from '../../_directives'
import { PatchFlags, renderIf } from '../../_utils/vnode'
import usePopover, { HIDE_EVENT, SHOW_EVENT } from './usePopover'
import '../styles/index.css'

const _hoist = { key: 0, class: 'bin-popover__title', role: 'title' }
const _content = { key: 1, class: 'bin-popover__body', role: 'body' }

export default defineComponent({
  name: 'BPopover',
  components: { BPopper },
  props: popoverProps,
  emits: ['update:visible', 'after-enter', 'after-leave', SHOW_EVENT, HIDE_EVENT],
  setup(props, ctx) {
    if (process.env.NODE_ENV !== 'production' && props.visible && !ctx.slots.reference) {
      console.warn('[BPopover] You cannot init popover without given reference')
    }
    return usePopover(props, ctx)
  },
  render() {
    const { $slots } = this
    const trigger = $slots.default ? $slots.default() : null

    const title = renderIf(this.title, 'div', _hoist, toDisplayString(this.title), PatchFlags.TEXT)

    const content = $slots.content
      ? renderSlot($slots, 'content', {}, () => [
          createTextVNode(toDisplayString(this.content), PatchFlags.TEXT)
        ])
      : renderIf(this.content, 'div', _content, toDisplayString(this.content), PatchFlags.TEXT)
    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility
    } = this

    const kls = [this.content ? 'bin-popover--plain' : '', 'bin-popover', popperClass].join(' ')

    const popover = renderPopper(
      {
        theme: Theme.LIGHT,
        name: transition,
        popperClass: kls,
        popperStyle: popperStyle,
        popperId,
        visibility,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        stopPopperMouseEvent: false
      },
      [title, content, renderArrow(showArrow)]
    )

    // when user uses popover directively, trigger will be null so that we only
    // render a popper.md window for displaying contents
    const _trigger = trigger
      ? renderTrigger(trigger, {
          ariaDescribedby: popperId,
          ref: 'triggerRef',
          ...events
        })
      : createCommentVNode('v-if', true)

    return h(Fragment, null, [
      this.trigger === 'click' ? withDirectives(_trigger, [[ClickOutside, this.hide]]) : _trigger,
      h(
        Teleport,
        {
          disabled: !this.appendToBody,
          to: 'body'
        },
        [popover]
      )
    ])
  }
})
