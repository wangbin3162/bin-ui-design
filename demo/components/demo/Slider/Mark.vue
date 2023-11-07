<template>
  <div>
    <b-slider v-model="value1" range :marks="marks"></b-slider>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

const value1 = ref([15, 65])
const marks = {
  0: '0°C',
  12: '12°C',
  36: '36°C',
  88: {
    style: {
      color: '#ff0000'
    },
    label: h('strong', '88°C')
  }
}
</script>
