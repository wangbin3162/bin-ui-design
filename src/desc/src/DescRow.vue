<template>
  <tr>
    <template v-for="(cell, index) in row" :key="`tr3-${index}`">
      <template v-if="descriptions.border">
        <b-desc-cell :cell="cell" tag="td" type="label" />
        <b-desc-cell :cell="cell" tag="td" type="content" />
      </template>
      <b-desc-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import BDescCell from './DescCell'
import type { DescProps } from './types'

defineOptions({
  name: 'BDescRow'
})
defineProps({
  row: {
    type: Array,
    default: () => []
  }
})

const descriptions = inject<DescProps>('BDesc', {})
</script>
