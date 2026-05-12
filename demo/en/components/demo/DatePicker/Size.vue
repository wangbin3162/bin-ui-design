<template>
  <div flex="cross:center box:mean">
    <div style="padding: 0 10px">
      <b-date-picker
        v-model="value1"
        type="date"
        size="large"
        placeholder="选择日期"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <b-date-picker v-model="value1" type="date" placeholder="选择日期"></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <b-date-picker
        v-model="value1"
        size="small"
        type="date"
        placeholder="选择日期"
      ></b-date-picker>
    </div>
    <div style="padding: 0 10px">
      <b-date-picker
        v-model="value1"
        size="mini"
        type="date"
        placeholder="选择日期"
      ></b-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
</script>
