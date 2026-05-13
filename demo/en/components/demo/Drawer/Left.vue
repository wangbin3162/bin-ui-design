<template>
  <div>
    <b-button type="primary" @click="value = true">左侧Open</b-button>
    <b-drawer v-model="value" title="drawerTitle" placement="left" width="500px">
      <p>我是左侧的drawer</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
