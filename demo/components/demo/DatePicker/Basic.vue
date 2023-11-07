<template>
  <div flex="box:mean" style="width: 600px">
    <div style="padding: 0 10px">
      <div class="demonstration">基础</div>
      <b-date-picker v-model="value1" type="date" placeholder="选择日期"></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
      ></b-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const disabledDate = time => time.getTime() > Date.now()
const shortcuts = [
  {
    text: '今日',
    value: new Date()
  },
  {
    text: '昨天',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })()
  },
  {
    text: '一周前',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })()
  }
]
const value1 = ref('')
const value2 = ref('')
</script>
