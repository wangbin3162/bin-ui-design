<template>
  <div>
    <b-slider v-model="value1" show-input></b-slider>
    <div class="p10"></div>
    <b-slider v-model="value2" :format-tooltip="format"></b-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(25)
const value2 = ref(35)

function format(val) {
  return '进度: ' + val + '%'
}
</script>
