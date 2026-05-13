<template>
  <div flex>
    <div style="width: 220px; margin-right: 20px">
      <b-time-picker
        v-model="value1"
        format="HH点mm分ssSecond"
        placeholder="任意时间点"
      ></b-time-picker>
    </div>
    <div style="width: 220px; margin-right: 20px">
      <b-time-picker
        v-model="value2"
        is-range
        arrow-control
        format="HH’mm’ss"
        range-separator="~"
        start-placeholder="Start time"
        end-placeholder="End time"
        placeholder="选择Time range"
      >
        >
      </b-time-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(new Date(2023, 9, 10, 18, 40))
const value2 = ref([new Date(2023, 4, 270, 18, 40), new Date(2023, 4, 30, 11, 40)])
</script>
