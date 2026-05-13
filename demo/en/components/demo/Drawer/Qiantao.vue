<template>
  <div>
    <b-button type="primary" @click="value = true">Opendrawer</b-button>
    <b-drawer v-model="value" title="一级drawer" width="512" :show-close="false">
      <b-button type="primary" @click="value1 = true">Open二层drawer</b-button>
    </b-drawer>
    <b-drawer v-model="value1" title="二级drawer" :show-close="false">这是第二层drawer</b-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
const value1 = ref(false)
</script>
