<template>
  <div>
    <b-slider v-model="value1"></b-slider>
    <div class="p10"></div>
    <b-slider v-model="value2" range></b-slider>
    <div class="p10"></div>
    <b-slider v-model="value3" range disabled></b-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(25)
const value2 = ref([20, 60])
const value3 = ref([30, 40])
</script>
