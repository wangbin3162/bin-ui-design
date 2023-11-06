<template>
  <div>
    <b-switch v-model="value1" disabled size="large"></b-switch>
    &nbsp;
    <b-switch v-model="value1" disabled></b-switch>
    &nbsp;
    <b-switch v-model="value1" disabled size="small"></b-switch>
    &nbsp;
    <b-switch v-model="value2" disabled size="large"></b-switch>
    &nbsp;
    <b-switch v-model="value2" disabled></b-switch>
    &nbsp;
    <b-switch v-model="value2" disabled size="small"></b-switch>
    &nbsp;
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
