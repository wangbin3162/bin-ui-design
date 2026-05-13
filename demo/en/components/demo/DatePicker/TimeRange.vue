<template>
  <div flex="cross:center box:mean" style="width: 800px">
    <div style="padding: 0 10px">
      <div class="demonstration">Basic</div>
      <b-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="to"
        start-placeholder="开始Day期"
        end-placeholder="结束Day期"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">带快捷option</div>
      <b-date-picker
        v-model="value2"
        type="datetimerange"
        range-separator="to"
        start-placeholder="开始Day期"
        end-placeholder="结束Day期"
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
    text: '最近一个Month',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })()
  },
  {
    text: '最近三个Month',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })()
  }
]
const value1 = ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)])
const value2 = ref('')
</script>
