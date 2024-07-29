<!-- eslint-disable vue/no-v-html -->
<template>
  <transition name="modal-fade" @after-leave="$emit('vanish')">
    <b-mask
      v-show="visible"
      :z-index="state.zIndex + zIndex"
      :mask-class="['is-message-box', modalClass]"
      :mask="mask"
      @click.self="handleWrapperClick"
    >
      <transition name="dialog-fade">
        <div
          v-show="visible"
          ref="modalRef"
          :aria-label="title || 'dialog'"
          aria-modal="true"
          :class="['bin-message-box', customClass]"
        >
          <div v-if="title !== null && title !== undefined" class="bin-message-box__header">
            <i
              v-if="icon"
              :class="['bin-message-box__status', `b-iconfont b-icon-${icon} is-${type}`]"
            ></i>
            <div class="bin-message-box__title">
              <span>{{ title }}</span>
            </div>
          </div>
          <div v-if="hasMessage" class="bin-message-box__message">
            <slot>
              <p v-if="!useHTML">{{ message }}</p>
              <p v-else v-html="message"></p>
            </slot>
          </div>
          <div class="bin-message-box__footer">
            <b-button
              v-if="showCancelButton"
              :loading="state.cancelButtonLoading"
              :class="[cancelButtonClass]"
              @click="handleAction('cancel')"
            >
              {{ state.cancelText }}
            </b-button>
            <b-button
              v-show="showConfirmButton"
              ref="confirmRef"
              :loading="state.confirmButtonLoading"
              :class="[confirmButtonClasses]"
              type="primary"
              :disabled="state.confirmButtonDisabled"
              @click="handleAction('confirm')"
            >
              {{ state.confirmText }}
            </b-button>
          </div>
        </div>
      </transition>
    </b-mask>
  </transition>
</template>

<script lang="ts">
import {
  nextTick,
  onMounted,
  onBeforeUnmount,
  defineComponent,
  computed,
  watch,
  reactive,
  ref
} from 'vue'
import { BButton } from '../../button'
import { BMask } from '../../modal'
import { useModal, useLockScreen, useRestoreActive } from '../../_hooks'
import { transferIncrease } from '../../_utils/config'
import { on, off } from '../../_utils/dom'
import { addEventListenerWrap } from '../../modal/src/addListener'

let mousePosition: { x: number; y: number } | null = null
const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => (mousePosition = null), 100)
}

// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListenerWrap(document.documentElement, 'click', getClickPosition, true)
}

function getScroll(w: Window, top: boolean): number {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = w.document
    // @ts-ignore
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      // @ts-ignore
      ret = d.body[method]
    }
  }
  return ret
}

function setTransformOrigin(node: HTMLElement, value: string) {
  const style = node.style
  ;['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
    // @ts-ignore
    style[`${prefix}TransformOrigin`] = value
  })
  style[`transformOrigin`] = value
}

function offset(el: HTMLElement): { left: number; top: number } {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView // || doc.parentWindow
  if (w) {
    pos.left += getScroll(w, false)
    pos.top += getScroll(w, true)
  }
  return pos
}

const TypeMap = {
  info: 'info-circle',
  success: 'check-circle',
  warning: 'warning-circle',
  error: 'close-circle'
}

export default defineComponent({
  name: 'BMessageBox',
  components: {
    BMask,
    BButton
  },
  props: {
    beforeClose: {
      type: Function,
      default: undefined
    },
    callback: {
      type: Function,
      default: undefined
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelButtonClass: {
      type: String,
      default: ''
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    escClosable: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmButtonClass: {
      type: String,
      default: ''
    },
    container: {
      type: String, // default append to body
      default: 'body'
    },
    customClass: {
      type: String,
      default: ''
    },
    useHTML: Boolean,
    iconClass: {
      type: String,
      default: ''
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    message: {
      type: [String, Object],
      default: ''
    },
    modalFade: {
      // implement this feature
      type: Boolean,
      default: true
    },
    modalClass: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['vanish', 'action'],
  setup(props, { emit }) {
    const modalRef = ref(null)
    // const popup = usePopup(props, doClose)
    const visible = ref(false)
    // s represents state
    const state = reactive({
      action: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      cancelText: props.cancelText,
      confirmButtonDisabled: false,
      confirmText: props.confirmText,
      zIndex: transferIncrease()
    })
    const icon = computed(
      // @ts-ignore
      () => props.iconClass || (props.type && TypeMap[props.type] ? TypeMap[props.type] : '')
    )
    const hasMessage = computed(() => !!props.message)
    const confirmRef = ref(null)

    const confirmButtonClasses = computed(() => `b-button--primary ${props.confirmButtonClass}`)

    const updateCallback = (flag: boolean) => {
      if (visible.value) {
        // first show
        if (!flag) {
          const dialogNode = modalRef.value
          if (!dialogNode) return
          if (mousePosition) {
            const elOffset = offset(dialogNode)
            setTransformOrigin(
              dialogNode,
              `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`
            )
          } else {
            setTransformOrigin(dialogNode, '')
          }
        }
      }
    }
    watch(
      () => visible.value,
      val => {
        if (val) {
          if (props.type === 'alert' || props.type === 'confirm') {
            nextTick().then(() => {
              //@ts-ignore
              confirmRef.value?.$el?.focus?.()
            })
          }
          state.zIndex = transferIncrease()
        }
        nextTick(() => {
          updateCallback(!val)
        })
      }
    )

    onMounted(async () => {
      await nextTick()
      if (props.closeOnHashChange) {
        on(window, 'hashchange', doClose)
      }
    })

    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        off(window, 'hashchange', doClose)
      }
    })

    function doClose() {
      if (!visible.value) return
      visible.value = false
      nextTick(() => {
        if (state.action) emit('action', state.action)
      })
    }

    const handleWrapperClick = () => {
      if (props.maskClosable) {
        handleAction('cancel')
      }
    }

    const handleAction = (action: string) => {
      state.action = action

      if (props.beforeClose) {
        props.beforeClose?.(action, state, doClose)
      } else {
        doClose()
      }
    }

    const handleClose = () => {
      handleAction('close')
    }

    if (props.escClosable) {
      useModal(
        {
          handleClose
        },
        visible
      )
    }

    // locks the screen to prevent scroll
    if (props.lockScroll) {
      useLockScreen(visible)
    }

    // restore to prev active element.
    useRestoreActive(visible)

    return {
      modalRef,
      state,
      visible,
      hasMessage,
      icon,
      confirmButtonClasses,
      confirmRef,
      doClose, // for outside usage
      handleClose, // for out side usage
      handleWrapperClick,
      handleAction
    }
  }
})
</script>
