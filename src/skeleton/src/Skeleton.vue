<template>
  <template v-if="uiLoading">
    <div :class="['bin-skeleton', animation ? 'is-animated' : '']" v-bind="$attrs">
      <template v-for="i in count" :key="i">
        <slot v-if="loading" name="template">
          <b-skeleton-item class="is-first" variant="p" />
          <b-skeleton-item
            v-for="item in rows"
            :key="item"
            :class="{
              'bin-skeleton__paragraph': true,
              'is-last': item === rows && rows > 1
            }"
            variant="p"
          />
        </slot>
      </template>
    </div>
  </template>
  <template v-else>
    <slot v-bind="$attrs"></slot>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SkeletonProps } from './types'
import useThrottleRender from './use-throttle'
import BSkeletonItem from './SkeletonItem.vue'

defineOptions({
  name: 'BSkeleton'
})

const props = withDefaults(defineProps<SkeletonProps>(), {
  count: 1,
  rows: 3,
  loading: true
})

const innerLoading = computed(() => props.loading)

const uiLoading = useThrottleRender(innerLoading, props.throttle)
</script>
