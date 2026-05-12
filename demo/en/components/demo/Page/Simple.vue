<template>
  <b-page v-model:current="current" :total="100" simple></b-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(2)
</script>
