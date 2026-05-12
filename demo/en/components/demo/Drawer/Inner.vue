<template>
  <div
    style="position: relative; height: 400px; background: #eee; border: 1px solid #eee; z-index: 2"
  >
    <b-button type="primary" @click="valueInner = true">内部抽屉</b-button>
    <b-drawer v-model="valueInner" title="内部抽屉" :lock-scroll="false" inner :z-index="10">
      <p>我是内部的抽屉</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const valueInner = ref(false)
</script>
