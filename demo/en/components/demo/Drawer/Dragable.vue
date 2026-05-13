<template>
  <div>
    <b-button type="primary" @click="value = true">open</b-button>
    <b-drawer v-model="value" title="drawerTitle" draggable>
      <p>I am the drawer content</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
