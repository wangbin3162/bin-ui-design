<template>
  <Transition name="fade-in">
    <div v-if="!closed" :class="wrapClasses">
      <span v-if="showIcon" class="bin-alert-icon">
        <slot name="icon">
          <i :class="`b-iconfont b-icon-${iconType}`"></i>
        </slot>
      </span>
      <span class="bin-alert-message"><slot></slot></span>
      <span class="bin-alert-desc"><slot name="desc"></slot></span>
      <span v-if="closable" class="bin-alert-close" @click.stop="close">
        <slot name="close">
          <i class="b-iconfont b-icon-close"></i>
        </slot>
      </span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { AlertProps } from './types'

const prefixCls = 'bin-alert'
const TYPE_CLASSES_MAP = {
  info: 'info-circle',
  success: 'check-circle',
  warning: 'warning-circle',
  error: 'error'
}

defineOptions({
  name: 'BAlert'
})

const emit = defineEmits(['close'])

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info'
})
const slots = defineSlots()

const closed = ref(false)
const desc = ref(false)
const iconType = computed(() => TYPE_CLASSES_MAP[props.type])

const wrapClasses = computed(() => {
  return [
    `${prefixCls}`,
    `${prefixCls}-${props.type}`,
    {
      [`${prefixCls}-with-icon`]: props.showIcon,
      [`${prefixCls}-with-desc`]: desc.value,
      [`${prefixCls}-with-banner`]: props.banner
    }
  ]
})

const close = (e: MouseEvent) => {
  closed.value = true
  emit('close', e)
}

onMounted(() => {
  desc.value = slots.desc !== undefined
})
</script>
