<template>
  <div>
    <b-button type="primary" @click="value = true">Open from Left</b-button>
    <b-drawer v-model="value" title="drawerTitle" placement="left" width="500px">
      <p>I am the left-side drawer</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
