<template>
  <div flex>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <b-rate v-model="value1" allow-half show-text></b-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <b-rate v-model="value2" :colors="colors"></b-rate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(null)
const value2 = ref(null)
const colors = ['#99A9BF', '#F7BA2A', '#fa8c16']
</script>

<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
</style>
