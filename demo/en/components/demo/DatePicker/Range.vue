<template>
  <div flex="box:mean" style="width: 600px">
    <div style="padding: 0 10px">
      <div class="demonstration">Basic</div>
      <b-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">With shortcuts</div>
      <b-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
      ></b-date-picker>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: 'Last week',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })()
  },
  {
    text: 'Last month',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })()
  },
  {
    text: 'Last 3 months',
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
