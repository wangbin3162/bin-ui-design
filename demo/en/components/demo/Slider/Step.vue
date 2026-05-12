<template>
  <div>
    <b-slider v-model="value4" :step="10"></b-slider>
    <div class="p10"></div>
    <b-slider v-model="value5" :step="10" show-stops></b-slider>
    <div class="p10"></div>
    <b-slider v-model="value6" :step="10" range></b-slider>
    <div class="p10"></div>
    <b-slider v-model="value7" :step="10" range show-stops></b-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value4 = ref(30)
const value5 = ref(35)
const value6 = ref([20, 40])
const value7 = ref([30, 50])
</script>
