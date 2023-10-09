<template>
  <div>
    <b-button type="primary" @click="restart">restart</b-button>
    <div class="mt-15" flex="cross:center">
      <b-tag type="primary" dot font-size="14px">
        <b-count-to ref="countToRef" :start-val="startVal" :end-val="endVal"></b-count-to>
      </b-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const startVal = ref(0)
const endVal = ref(2023)
const countToRef = ref(null)

function restart() {
  countToRef.value?.restart()
}
</script>
