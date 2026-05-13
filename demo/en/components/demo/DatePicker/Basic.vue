<template>
  <div flex="box:mean" style="width: 600px">
    <div style="padding: 0 10px">
      <div class="demonstration">Basic</div>
      <b-date-picker v-model="value1" type="date" placeholder="Select date"></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">With shortcuts</div>
      <b-date-picker
        v-model="value2"
        type="date"
        placeholder="Select date"
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
    text: 'Today',
    value: new Date()
  },
  {
    text: 'Yesterday',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })()
  },
  {
    text: 'A week ago',
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
