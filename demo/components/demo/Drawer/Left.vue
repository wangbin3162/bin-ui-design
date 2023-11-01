<template>
  <div>
    <b-button type="primary" @click="value = true">左侧打开</b-button>
    <b-drawer v-model="value" title="抽屉标题" placement="left" width="500px">
      <p>我是左侧的抽屉</p>
    </b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
