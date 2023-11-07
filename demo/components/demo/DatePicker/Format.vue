<template>
  <div flex="cross:center">
    <div style="padding: 0 10px; width: 300px">
      <b-date-picker
        v-model="value1"
        type="date"
        format="YYYY 年 MM 月 DD 日"
        placeholder="选择日期"
      ></b-date-picker>
    </div>
    <div>值：{{ value1 }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
</script>
