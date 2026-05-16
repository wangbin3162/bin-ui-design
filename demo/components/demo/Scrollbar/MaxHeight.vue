<template>
  <div>
    <div style="margin-bottom: 12px">
      <b-button size="small" @click="add">增加内容</b-button>
      <b-button size="small" style="margin-left: 8px" @click="remove">删除内容</b-button>
    </div>
    <b-scrollbar max-height="320px">
      <p v-for="item in count" :key="item" class="scrollbar-demo-item">
        第 {{ item }} 项内容
      </p>
    </b-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)

function add() {
  count.value++
}

function remove() {
  if (count.value > 0) {
    count.value--
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
