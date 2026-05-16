<template>
  <b-scrollbar height="320px" :distance="16" @end-reached="loadMore">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      无限滚动内容 {{ item }}
    </p>
  </b-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(20)

function loadMore(direction: 'top' | 'bottom' | 'left' | 'right') {
  if (direction === 'bottom') {
    count.value += 5
  }
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
