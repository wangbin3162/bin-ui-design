<template>
  <div style="width: 200px">
    <b-popper trigger="click" theme="light" :z-index="1000">
      <template #default>This is some contentThis is some contentThis is some content</template>
      <template #trigger>
        <b-button>Triggerpopper</b-button>
      </template>
    </b-popper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
