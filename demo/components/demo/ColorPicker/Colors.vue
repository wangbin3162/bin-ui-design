<template>
  <div flex>
    <div class="block" style="width: 200px; margin-right: 20px">
      <b-color-picker v-model="color1" show-alpha :colors="colors1"></b-color-picker>
    </div>
    <div class="block" style="width: 200px; margin-right: 20px">
      <b-color-picker v-model="color2" show-alpha :colors="colors2"></b-color-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color1 = ref('#2d8cf0')
const color2 = ref('#2d8cf0')
const colors1 = [
  '#1089ff',
  '#52c41a',
  '#fa8c16',
  '#f5222d',
  '#2f54eb',
  '#faad14',
  '#722ed1',
  '#eb2f96',
  '#13c2c2',
  '#fadb14',
  '#a0d911',
  '#fa541c',
  '#eaff8f',
  '#bae7ff',
  '#efdbff',
  '#ffd6e7',
  '#ff1885',
  '#fff506',
  '#00bcd4',
  '#f06292',
  '#cb6c00',
  '#607d8b',
  '#000000',
  '#ffffff'
]
const colors2 = [
  '#311B92',
  '#512DA8',
  '#673AB7',
  '#9575CD',
  '#D1C4E9',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)'
]
</script>
