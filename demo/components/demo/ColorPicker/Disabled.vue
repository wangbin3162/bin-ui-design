<template>
  <div flex>
    <div class="block" style="width: 200px; margin-right: 20px">
      <b-color-picker v-model="color" disabled></b-color-picker>
      &nbsp;&nbsp;
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#1089ff')
</script>
