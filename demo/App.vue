<script setup lang="ts">
import TestButton from './button.demo.vue'
import TestIcon from './icon.demo.vue'
</script>

<template>
  <div class="main-content p16">
    <TestButton />

    <!-- <TestIcon /> -->
  </div>
</template>

<style>
.b-config-provider[theme-name='dark'] {
  background-color: rgb(24, 24, 28);
}
</style>
