<template>
  <div
    class="bin-collapse-item"
    :class="{
      'bin-collapse-item-active': isActive,
      'is-disabled': disabled
    }"
  >
    <div class="bin-collapse-header" @click="handleHeaderClick">
      <b-icon v-if="!hideArrow" name="right" />
      <slot name="title">
        {{ title }}
      </slot>
    </div>

    <b-collapse-transition>
      <div v-show="isActive" class="bin-collapse-content">
        <div class="bin-collapse-content-box">
          <slot />
        </div>
      </div>
    </b-collapse-transition>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { BCollapseTransition } from '../../_internal/collapse-transition'
import { BIcon } from '../../icon'
import type { CollapsePanelProps } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'BCollapsePanel',
  components: { BIcon, BCollapseTransition }
})

const props = defineProps<CollapsePanelProps>()

const collapseContext = inject(collapseContextKey)

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleHeaderClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>
