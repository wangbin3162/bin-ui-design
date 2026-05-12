<template>
  <div class="demo-button" flex="cross:center">
    <b-button type="primary" :loading="loading" icon="reload" @click="loading = true">
      Click me!
    </b-button>
    <b-button @click="loading = false">stop</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
</script>
