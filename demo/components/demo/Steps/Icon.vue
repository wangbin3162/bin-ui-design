<template>
  <div>
    <b-steps :current="current">
      <b-step title="已完成" icon="sketch"></b-step>
      <b-step title="进行中" icon="block"></b-step>
      <b-step title="待进行" icon="Gitlab"></b-step>
    </b-steps>
    <b-button type="primary" @click="next">下一步</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

function next() {
  if (current.value === 2) {
    current.value = 0
  } else {
    current.value += 1
  }
}
</script>
