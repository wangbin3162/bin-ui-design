<template>
  <div>
    <b-steps :current="current" size="small">
      <b-step title="Completed"></b-step>
      <b-step title="进Row中"></b-step>
      <b-step title="待进Row"></b-step>
      <b-step title="待进Row"></b-step>
    </b-steps>
    <b-button type="primary" @click="next">下一步</b-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

function next() {
  if (current.value === 3) {
    current.value = 0
  } else {
    current.value += 1
  }
}
</script>
