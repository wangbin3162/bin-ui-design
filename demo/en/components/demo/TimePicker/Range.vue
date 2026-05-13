<template>
  <div flex>
    <b-time-picker
      v-model="value1"
      style="width: 340px"
      is-range
      range-separator="To"
      start-placeholder="Start Time"
      end-placeholder="End Time"
      placeholder="Select Time Range"
    ></b-time-picker>
    &nbsp; &nbsp;
    <b-time-picker
      v-model="value2"
      style="width: 340px"
      is-range
      arrow-control
      range-separator="To"
      start-placeholder="Start Time"
      end-placeholder="End Time"
      placeholder="Select Time Range"
    ></b-time-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
const value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
</script>
