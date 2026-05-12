<template>
  <div flex>
    <div style="width: 220px; margin-right: 20px">
      <b-time-picker
        v-model="value1"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="任意时间点"
      ></b-time-picker>
    </div>
    <div style="width: 220px; margin-right: 20px">
      <b-time-picker disabled placeholder="禁用状态"></b-time-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))

const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

function disabledHours() {
  return makeRange(0, 16).concat(makeRange(19, 23))
}

function disabledMinutes(hour) {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}

function disabledSeconds(hour, minute) {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}
</script>
