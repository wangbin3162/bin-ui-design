<template>
  <b-popover v-model:visible="visible">
    <b-button type="text" @click="close">Click me to open overlay</b-button>
    <a style="margin-left: 30px">Click</a>
    <template #content>
      <b-button type="text" @click="close">Close</b-button>
    </template>
  </b-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
function close() {
  visible.value = false
}
</script>
