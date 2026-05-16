<template>
  <div>
    <b-scrollbar ref="scrollbarRef" height="320px" always @scroll="handleScroll">
      <div ref="innerRef">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          Manual Scroll {{ item }}
        </p>
      </div>
    </b-scrollbar>

    <div style="margin-top: 16px">
      <b-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="handleInput"></b-slider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLElement | null>(null)
const scrollbarRef = ref<{
  setScrollTop: (scrollTop: number) => void
} | null>(null)

onMounted(() => {
  max.value = Math.max((innerRef.value?.clientHeight || 0) - 300, 0)
})

function handleInput(currentValue: number) {
  scrollbarRef.value?.setScrollTop(currentValue)
}

function handleScroll({ scrollTop }: { scrollTop: number }) {
  value.value = scrollTop
}

function formatTooltip(currentValue: number) {
  return `${currentValue}px`
}
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
