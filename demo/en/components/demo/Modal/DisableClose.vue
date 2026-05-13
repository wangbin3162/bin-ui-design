<template>
  <div>
    <b-button @click="modal1 = true">DisabledRight Top角Close</b-button>
    <b-button @click="modal2 = true">DisabledmaskClose</b-button>
    <b-modal v-model="modal1" title="Basic Modal Title" :show-close="false">
      <p>DisabledRight Top角Close</p>
    </b-modal>
    <b-modal v-model="modal2" title="Basic Modal Title" :mask-closable="false">
      <p>DisabledmaskClose</p>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
</script>
