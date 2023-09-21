<template>
  <b-space :size="size" spacer="|">
    <div v-for="i in 3" :key="i">
      <b-button>button {{ i }}</b-button>
    </div>
  </b-space>
  <br />
  <br />
  <b-space :size="size" :spacer="spacer">
    <div v-for="i in 3" :key="i">
      <b-button>button {{ i }}</b-button>
    </div>
  </b-space>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'

const size = ref(10)
const spacer = h('span', { style: { color: '#999' } }, '>-<')
</script>
