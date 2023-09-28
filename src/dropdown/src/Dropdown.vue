<template>
  <BPopper
    ref="triggerVNode"
    v-model:visible="visible"
    pure
    :placement="placement"
    :theme="theme"
    :trigger="trigger"
    :manual-mode="true"
    :offset="8"
    :append-to-body="appendToBody"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
    :show-arrow="false"
    transition="zoom-in-top"
    popper-class="bin-dropdown__popper"
  >
    <template #default>
      <slot name="dropdown"></slot>
    </template>
    <template #trigger>
      <div class="bin-dropdown" @contextmenu.prevent="handleRight">
        <slot></slot>
      </div>
    </template>
  </BPopper>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { provide, getCurrentInstance, ref, computed, watch, onMounted } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { on, addClass, removeClass } from '../../_utils/dom'
import { BPopper } from '../../_internal/popper'
import { dropdownContextKey } from './types'
import type { DropdownProps } from './types'

defineOptions({
  name: 'BDropdown'
})
const emit = defineEmits(['visible-change', 'command'])
const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'click',
  placement: 'bottom',
  tabindex: 0,
  showTimeout: 150,
  hideTimeout: 150,
  theme: 'light',
  hideOnClick: true,
  appendToBody: true
})

const _instance = getCurrentInstance()
const timeout = ref(0)
const visible = ref(false)
const focusing = ref(false)
const triggerVNode = ref<HTMLElement | null>(null)
const triggerElm = computed(() => {
  if (triggerVNode.value) {
    // @ts-ignore
    return triggerVNode.value?.$refs?.triggerRef?.children[0]
  }
  return {}
})

function removeTabindex() {
  triggerElm.value?.setAttribute('tabindex', '-1')
}

function resetTabindex(ele: HTMLElement) {
  removeTabindex()
  ele?.setAttribute('tabindex', '0')
}

function triggerElmFocus() {
  triggerElm.value?.focus?.()
}

function triggerElmBlur() {
  triggerElm.value?.blur?.()
}
function commandHandler(
  name: string | number | object,
  intance: ComponentInternalInstance | null,
  e: MouseEvent
) {
  emit('command', name, intance, e)
}

function show() {
  if (triggerElm.value?.disabled) return
  timeout.value && clearTimeout(timeout.value)
  timeout.value = window.setTimeout(
    () => {
      visible.value = true
    },
    props.trigger === 'click' ? 0 : props.showTimeout
  )
}

function hide() {
  if (triggerElm.value?.disabled) return
  removeTabindex()
  if (props.tabindex >= 0) {
    resetTabindex(triggerElm.value)
  }
  clearTimeout(timeout.value)
  timeout.value = window.setTimeout(
    () => {
      visible.value = false
    },
    props.trigger === 'click' ? 0 : props.hideTimeout
  )
}

function handleRight() {
  if (props.trigger !== 'contextmenu') return
  handleClick()
}

function handleClick() {
  if (triggerElm.value?.disabled) return
  if (visible.value) hide()
  else show()
}

onMounted(() => {
  if (props.trigger === 'hover') {
    on(triggerElm.value, 'mouseenter', show)
    on(triggerElm.value, 'mouseleave', hide)
  } else if (props.trigger === 'click') {
    on(triggerElm.value, 'click', handleClick)
  }

  // @ts-ignore
  Object.assign(_instance, {
    handleClick,
    hide,
    resetTabindex
  })
})

watch(
  () => visible.value,
  val => {
    if (val) triggerElmFocus()
    if (!val) triggerElmBlur()
    emit('visible-change', val)
  }
)

watch(
  () => focusing.value,
  val => {
    const selfDefine = triggerElm.value
    if (selfDefine) {
      if (val) {
        addClass(selfDefine, 'focusing')
      } else {
        removeClass(selfDefine, 'focusing')
      }
    }
  }
)

provide(dropdownContextKey, {
  instance: _instance,
  visible,
  handleClick,
  commandHandler,
  show,
  hide,
  triggerElm,
  trigger: computed(() => props.trigger),
  hideOnClick: computed(() => props.hideOnClick)
})
</script>
