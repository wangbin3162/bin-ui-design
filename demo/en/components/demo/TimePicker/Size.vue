<template>
  <div flex>
    <div style="width: 240px; margin-right: 20px">
      <b-time-picker v-model="value1" size="large"></b-time-picker>
    </div>
    <div style="width: 240px; margin-right: 20px">
      <b-time-picker v-model="value1"></b-time-picker>
    </div>
    <div style="width: 240px; margin-right: 20px">
      <b-time-picker v-model="value1" size="small"></b-time-picker>
    </div>
    <div style="width: 240px; margin-right: 20px">
      <b-time-picker v-model="value1" size="mini"></b-time-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>
