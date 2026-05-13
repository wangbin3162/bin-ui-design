<template>
  <div>
    <div class="demo-loading">
      <div>I am the paragraph behindI am the paragraph behindI am the paragraph behindI am the paragraph behind</div>
      <b-loading v-show="loading" fix></b-loading>
    </div>
    <div>
      <b-button v-if="loading" type="danger" @click="loading = false">Stop</b-button>
      <b-button v-else @click="loading = true">Load</b-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)
</script>

<style scoped>
.demo-loading {
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 5px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #cecece;
}
</style>
