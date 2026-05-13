<template>
  <div>
    <b-collapse-wrap title="Title Bar" collapse>
      <div class="p5">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap title="Collapse with right action" collapse>
      <template #right>
        <b-button type="primary" plain size="small">Edit</b-button>
      </template>
      <div class="p5">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap v-model="value" shadow="none">
      <template #title>
        <div style="font-size: 16px; padding: 10px">Custom switch and title</div>
      </template>
      <template #right>
        <b-button type="text" @click="value = !value">{{ value ? 'Collapse' : 'Expand' }}</b-button>
      </template>
      <div class="p5">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap title="Title Bar" collapse shadow="none" arrow-icon="caret-down">
      <template #title><span class="title">Custom label title</span></template>
      <div class="p5">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </div>
    </b-collapse-wrap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
