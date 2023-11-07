<template>
  <div flex="box:mean" style="width: 600px">
    <div style="padding: 0 10px">
      <div class="demonstration">基础</div>
      <b-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      ></b-date-picker>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '最近一周',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })()
  },
  {
    text: '最近一个月',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })()
  },
  {
    text: '最近三个月',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })()
  }
]
const value1 = ref('')
const value2 = ref('')
</script>
