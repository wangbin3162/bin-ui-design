import { h, computed, ref, getCurrentInstance, onUnmounted, inject, defineComponent } from 'vue'
import { on, off } from '../../../_utils/dom'
import { renderThumbStyle, BAR_MAP } from './utils'

export default defineComponent({
  name: 'Bar',
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    move: {
      type: Number,
      default: 0
    },
    ratio: {
      type: Number,
      default: 1
    },
    barStyle: {
      type: Object,
      default: () => ({})
    },
    barWrapStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const instance = getCurrentInstance()
    const thumb = ref(null)
    const wrap = inject('scroll-bar-wrap', {})
    const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])
    const barStore = ref({})
    const cursorDown = ref(null)
    let baseScrollHeight = 0
    let baseScrollWidth = 0

    const offsetRatio = computed(() => {
      if (!instance?.vnode?.el || !thumb.value || !wrap.value) {
        return 1
      }

      const thumbEl = thumb.value as HTMLElement
      const instanceEl = instance.vnode.el as HTMLElement
      const thumbOffset = thumbEl[bar.value.offset]
      const instanceOffset = instanceEl[bar.value.offset]
      const wrapScrollSize = wrap.value[bar.value.scrollSize]

      if (!thumbOffset || !instanceOffset || !wrapScrollSize || !props.ratio) {
        return 1
      }

      return instanceOffset ** 2 / wrapScrollSize / props.ratio / thumbOffset
    })

    const clickThumbHandler = e => {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return
      }
      startDrag(e)
      barStore.value[bar.value.axis] =
        e.currentTarget[bar.value.offset] -
        (e[bar.value.client] - e.currentTarget.getBoundingClientRect()[bar.value.direction])
    }

    const clickTrackHandler = e => {
      if (!thumb.value || !instance?.vnode?.el || !wrap.value) {
        return
      }

      const offset = Math.abs(
        e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]
      )
      const thumbHalf = thumb.value[bar.value.offset] / 2
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100 * offsetRatio.value) / instance.vnode.el[bar.value.offset]

      wrap.value[bar.value.scroll] =
        (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100
    }
    const startDrag = e => {
      e.stopImmediatePropagation()
      cursorDown.value = true
      baseScrollHeight = wrap.value?.scrollHeight || 0
      baseScrollWidth = wrap.value?.scrollWidth || 0
      on(document, 'mousemove', mouseMoveDocumentHandler)
      on(document, 'mouseup', mouseUpDocumentHandler)
      document.onselectstart = () => false
    }

    const mouseMoveDocumentHandler = e => {
      if (cursorDown.value === false) return
      const prevPage = barStore.value[bar.value.axis]

      if (!prevPage) return

      const offset =
        (instance.vnode.el.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100 * offsetRatio.value) / instance.vnode.el[bar.value.offset]

      if (bar.value.scroll === 'scrollLeft') {
        wrap.value[bar.value.scroll] = (thumbPositionPercentage * baseScrollWidth) / 100
      } else {
        wrap.value[bar.value.scroll] = (thumbPositionPercentage * baseScrollHeight) / 100
      }
    }

    function mouseUpDocumentHandler() {
      cursorDown.value = false
      barStore.value[bar.value.axis] = 0
      off(document, 'mousemove', mouseMoveDocumentHandler)
      document.onselectstart = null
    }

    onUnmounted(() => {
      off(document, 'mouseup', mouseUpDocumentHandler)
    })

    return () =>
      h(
        'div',
        {
          class: ['bin-scrollbar__bar', 'is-' + bar.value.key],
          style: props.barWrapStyle,
          onMousedown: clickTrackHandler
        },
        h('div', {
          ref: thumb,
          class: 'bin-scrollbar__thumb',
          onMousedown: clickThumbHandler,
          style: {
            ...renderThumbStyle({
              size: props.size,
              move: props.move,
              bar: bar.value
            }),
            ...props.barStyle
          }
        })
      )
  }
})
