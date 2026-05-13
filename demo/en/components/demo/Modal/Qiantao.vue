<template>
  <div>
    <b-button @click="modal1 = true">showModal 1</b-button>

    <b-modal v-model="modal1" title="Modal 1" width="600px">
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <b-button type="primary" @click="modal2 = true">OpenNested Modal</b-button>
      <b-modal v-model="modal2" title="Nested Modal">
        <p>This is the dialog content....</p>
        <p>This is the dialog content....</p>
        <p>This is the dialog content....</p>
      </b-modal>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
</script>
