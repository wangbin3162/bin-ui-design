<template>
  <div flex>
    <div class="block" style="width: 200px; margin-right: 20px">
      <div class="demonstration mb-5">带透明度</div>
      <b-color-picker v-model="color" show-alpha></b-color-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color = ref('rgba(45,140,240,0.45)')
</script>
