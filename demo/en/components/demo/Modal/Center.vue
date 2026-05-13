<template>
  <div>
    <b-button @click="open1">Auto-height centered modal</b-button>
    <b-button @click="open2">Centered Modal</b-button>

    <b-modal v-model="visible" title="Basic Modal Title" screen-center>
      <p v-for="i in rows" :key="i">This is the dialog content....</p>
      <template #footer>
        <span>
          <b-button @click="onClose">Cancel</b-button>
          <b-button type="primary" @click="onClose">Confirm</b-button>
        </span>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const rows = ref(5)

function open1() {
  visible.value = true
  rows.value = 30
}

function open2() {
  visible.value = true
  rows.value = 3
}

function onClose() {
  visible.value = false
}
</script>
