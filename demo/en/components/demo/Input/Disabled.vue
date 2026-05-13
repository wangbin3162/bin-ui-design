<template>
  <div>
    <b-input v-model="value" placeholder="disabled" disabled class="input-item"></b-input>
    <b-input v-model="value1" placeholder="readonly" readonly class="input-item"></b-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Disabled text')
const value1 = ref('Readonly input')
</script>

<style scoped>
.input-item {
  width: 300px;
  margin-right: 20px;
}
</style>
