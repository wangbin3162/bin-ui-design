<template>
  <div>
    <b-button type="primary" @click="value = true">open</b-button>
    <b-drawer v-model="value" title="抽屉标题" draggable>
      <p>我是抽屉内容</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
