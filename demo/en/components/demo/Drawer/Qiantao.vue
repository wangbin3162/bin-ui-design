<template>
  <div>
    <b-button type="primary" @click="value = true">Opendrawer</b-button>
    <b-drawer v-model="value" title="First Level Drawer" width="512" :show-close="false">
      <b-button type="primary" @click="value1 = true">Open Second Level Drawer</b-button>
    </b-drawer>
    <b-drawer v-model="value1" title="Second Level Drawer" :show-close="false">This is the second level drawer</b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
const value1 = ref(false)
</script>
