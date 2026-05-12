<template>
  <div>
    <b-switch v-model="value1" loading size="large"></b-switch>
    &nbsp;
    <b-switch v-model="value1" loading></b-switch>
    &nbsp;
    <b-switch v-model="value1" loading size="small"></b-switch>
    &nbsp;
    <b-switch v-model="value2" loading size="large"></b-switch>
    &nbsp;
    <b-switch v-model="value2" loading></b-switch>
    &nbsp;
    <b-switch v-model="value2" loading size="small"></b-switch>
    &nbsp;
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
