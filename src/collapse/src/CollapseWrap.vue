<template>
  <div :class="['bin-collapse-wrap', { 'bin-collapse-wrap-active': isActive }]" :style="wrapStyle">
    <div
      class="header"
      :class="{ 'is-collapse': collapse && !$slots.right }"
      :style="headerStyle"
      @click="toggle"
    >
      <slot name="title">
        <div class="label">
          {{ title }}
        </div>
      </slot>
      <div v-if="$slots.right" class="right" :class="{ 'can-collapse': collapse }">
        <slot name="right">
          {{ title }}
        </slot>
      </div>
      <div
        class="arrow"
        :style="{ cursor: $slots.right ? 'pointer' : undefined }"
        @click="arrowToggle"
      >
        <b-icon v-if="collapse" :name="arrowIcon"></b-icon>
      </div>
    </div>
    <b-collapse-transition>
      <div v-show="isActive" class="content">
        <div class="content-box">
          <slot></slot>
        </div>
      </div>
    </b-collapse-transition>
  </div>
</template>

<script setup lang="ts">
import '../styles/index.css'
import { computed, ref, watch } from 'vue'
import type { CollapseWrapProps, CollapseEmits } from './types'
import { BIcon } from '../../icon'
import { BCollapseTransition } from '../../_internal/collapse-transition'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'

defineOptions({
  name: 'BCollapseWrap',
  components: { BIcon, BCollapseTransition }
})
const slots = defineSlots()
const emit = defineEmits<CollapseEmits>()
const props = withDefaults(defineProps<CollapseWrapProps>(), {
  modelValue: true,
  arrowIcon: 'down'
})
const isActive = ref(props.modelValue)

const wrapStyle = computed(() => ({ boxShadow: props.shadow }))

const headerStyle = computed(() => ({
  boxShadow: props.shadow,
  borderBottom: props.shadow === 'none' ? '1px solid #eee' : undefined
}))

const toggle = () => {
  if (props.collapse && !slots.right) {
    isActive.value = !isActive.value
    emit(UPDATE_MODEL_EVENT, isActive.value)
    emit(CHANGE_EVENT, isActive.value)
  }
}
const arrowToggle = () => {
  // 可以收起且没有右侧功能插入时点击一行展开收起
  if (props.collapse && slots.right) {
    isActive.value = !isActive.value
    emit(UPDATE_MODEL_EVENT, isActive.value)
    emit(CHANGE_EVENT, isActive.value)
  }
}

watch(
  () => props.modelValue,
  val => {
    isActive.value = val
  }
)
</script>
