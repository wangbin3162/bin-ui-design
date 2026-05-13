<template>
  <div>
    <b-steps :current="current">
      <b-step title="Completed" content="Description of this step"></b-step>
      <b-step title="In Progress" content="Description of this step"></b-step>
      <b-step title="Pending" content="Description of this step"></b-step>
      <b-step title="Pending" content="Description of this step"></b-step>
    </b-steps>
    <b-button type="primary" @click="next">Next Step</b-button>
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
