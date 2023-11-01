<template>
  <div>
    <b-button type="primary" @click="value = true">打开抽屉</b-button>
    <b-drawer title="一级抽屉" width="512" :show-close="false" v-model="value">
      <b-button @click="value1 = true" type="primary">打开二层抽屉</b-button>
    </b-drawer>
    <b-drawer title="二级抽屉" :show-close="false" v-model="value1">这是第二层抽屉</b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
const value1 = ref(false)
</script>
