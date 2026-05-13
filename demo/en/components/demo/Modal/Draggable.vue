<template>
  <div>
    <b-button @click="modal1 = true">Opendialog1</b-button>
    <b-button @click="modal2 = true">Opendialog2</b-button>
    <b-modal v-model="modal1" title="dialog1" draggable>
      <p>dialog1Content</p>
    </b-modal>
    <b-modal v-model="modal2" title="dialog2" draggable :mask="false">
      <p>dialog2Content</p>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
</script>
