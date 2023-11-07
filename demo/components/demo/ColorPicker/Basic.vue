<template>
  <div flex>
    <div class="block" style="width: 240px; margin-right: 20px">
      <div class="demonstration mb-5">有默认值</div>
      <b-color-picker v-model="color1" show-alpha color-format="hex"></b-color-picker>
      <div class="demonstration mb-5">{{ color1 }}</div>
    </div>
    <div class="block" style="width: 240px; margin-right: 20px">
      <div class="demonstration mb-5">无默认值</div>
      <b-color-picker v-model="color2" show-alpha></b-color-picker>
      <div class="demonstration mb-5">{{ color2 }}</div>
    </div>
    <div class="block" style="width: 240px; margin-right: 20px">
      <div class="demonstration mb-5">不显示label</div>
      <b-color-picker v-model="color3" show-alpha :show-label="false"></b-color-picker>
      <div class="demonstration mb-5">{{ color3 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const color1 = ref('#1089ff')
const color2 = ref(null)
const color3 = ref(null)
</script>
