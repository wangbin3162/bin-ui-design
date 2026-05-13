<template>
  <div
    style="position: relative; height: 400px; background: #eee; border: 1px solid #eee; z-index: 2"
  >
    <b-button type="primary" @click="valueInner = true">Inner Drawer</b-button>
    <b-drawer v-model="valueInner" title="Inner Drawer" :lock-scroll="false" inner :z-index="10">
      <p>I am the inner drawer</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const valueInner = ref(false)
</script>
