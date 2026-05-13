<template>
  <div>
    <div style="margin-bottom: 10px">Input content：{{ value }}</div>
    <b-input v-model="value" placeholder="Please enter一些文字..." class="input-item"></b-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
</style>
