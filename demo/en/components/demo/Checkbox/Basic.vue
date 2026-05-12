<template>
  <div>
    <b-checkbox v-model="value">多选框</b-checkbox>
    &nbsp;&nbsp;
    <span style="color: #ff4511">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
