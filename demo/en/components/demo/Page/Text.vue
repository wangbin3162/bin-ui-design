<template>
  <b-page v-model:current="current" :total="100" prev-text="上一页" next-text="下一页"></b-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(2)
</script>
