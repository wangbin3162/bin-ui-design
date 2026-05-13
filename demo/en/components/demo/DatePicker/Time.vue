<template>
  <div flex="cross:center box:mean">
    <div style="padding: 0 10px">
      <div class="demonstration">Basic</div>
      <b-date-picker v-model="value1" type="datetime" placeholder="Select date time"></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">With shortcuts</div>
      <b-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Select date time"
        :shortcuts="shortcuts"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <div class="demonstration">Default time</div>
      <b-date-picker
        v-model="value3"
        type="datetime"
        placeholder="Select date time"
        :default-value="new Date(2000, 1, 1, 12, 0, 0)"
      ></b-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
const value3 = ref('')
</script>
