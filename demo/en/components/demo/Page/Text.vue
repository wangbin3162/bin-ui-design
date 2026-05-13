<template>
  <b-page v-model:current="current" :total="100" prev-text="Prev" next-text="Next"></b-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(2)
</script>
