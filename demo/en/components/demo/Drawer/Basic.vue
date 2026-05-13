<template>
  <div>
    <b-button type="primary" @click="value = true">open</b-button>
    <b-drawer v-model="value" title="Drawer Title">
      <p>Drawer content goes here</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
