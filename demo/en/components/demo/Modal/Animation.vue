<template>
  <div>
    <b-space>
      <b-radio-group v-model="transitionName" type="capsule">
        <b-radio label="dialog-fade"></b-radio>
        <b-radio label="fade-in"></b-radio>
        <b-radio label="move-right"></b-radio>
        <b-radio label="zoom-in-top"></b-radio>
        <b-radio label="zoom-in"></b-radio>
        <b-radio label="fade-scale-move"></b-radio>
        <b-radio label="fade-down"></b-radio>
      </b-radio-group>
      <b-button @click="modal1 = true">Open</b-button>
    </b-space>

    <b-modal
      v-model="modal1"
      :title="`Customanimation${transitionName}`"
      :transition-name="transitionName"
    >
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <template #footer>
        <span>
          <b-button @click="modal1 = false">Close</b-button>
        </span>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const transitionName = ref('dialog-fade')
</script>
