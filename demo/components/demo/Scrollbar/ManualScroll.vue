<template>
  <div>
    <b-scrollbar ref="scrollbarRef" height="320px" always @scroll="handleScroll">
      <div ref="innerRef">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          手动滚动示例 {{ item }}
        </p>
      </div>
    </b-scrollbar>

    <div style="margin-top: 16px">
      <b-slider v-model="value" :max="max" :format-tooltip="formatTooltip"></b-slider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLElement | null>(null)
const scrollbarRef = ref<{
  setScrollTop: (scrollTop: number) => void
  wrapRef?: {
    value: HTMLElement | null
  }
} | null>(null)

function handleScroll({ scrollTop }: { scrollTop: number }) {
  value.value = scrollTop
}

function formatTooltip(currentValue: number) {
  return `${currentValue}px`
}

function updateMaxScroll() {
  const wrapElement = scrollbarRef.value?.wrapRef?.value
  const contentHeight = innerRef.value?.clientHeight || 0
  const viewportHeight = wrapElement?.clientHeight || 0

  max.value = Math.max(contentHeight - viewportHeight, 0)
}

watch(value, currentValue => {
  scrollbarRef.value?.setScrollTop(currentValue)
})

onMounted(async () => {
  await nextTick()
  updateMaxScroll()
})
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin: 10px 0;
  border-radius: 6px;
  background: #f5f7fa;
  color: #606266;
}
</style>
