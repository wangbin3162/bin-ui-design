<template>
  <div flex="box:mean" style="width: 600px">
    <div style="padding: 0 10px">
      <div class="demonstration">基础</div>
      <b-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :shortcuts="shortcuts"
      ></b-date-picker>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '本月',
    value: [new Date(), new Date()]
  },
  {
    text: '今年至今',
    value: (() => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    })()
  },
  {
    text: '最近六个月',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    })()
  }
]
const value1 = ref('')
const value2 = ref('')
</script>
