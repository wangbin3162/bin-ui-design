<template>
  <div>
    <b-button @click="modal = true">Show fullscreen dialog</b-button>
    <b-modal v-model="modal" title="Fullscreen Title" :fullscreen="fullscreen">
      <template #ctrl>
        <i
          :class="`b-iconfont b-icon-fullscreen${fullscreen ? '-exit' : ''}`"
          @click="fullscreen = !fullscreen"
        ></i>
      </template>
      <div :style="fullscreen ? {} : 'height: 300px; overflow-y: auto'">
        <p v-for="i in 50" :key="i">This is the fullscreen content.{{ i }}...</p>
      </div>
      <template #footer>
        <span>
          <b-button @click="modal = false">Cancel</b-button>
          <b-button type="primary" @click="modal = false">Confirm</b-button>
        </span>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal = ref(false)
const fullscreen = ref(false)
</script>
