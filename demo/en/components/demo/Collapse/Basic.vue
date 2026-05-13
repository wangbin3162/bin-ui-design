<template>
  <div>
    <b-collapse v-model="value">
      <b-collapse-panel title="Panel 1 Title" name="1">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </b-collapse-panel>
      <b-collapse-panel title="Panel 2 Title" name="2">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </b-collapse-panel>
      <b-collapse-panel title="Panel 3 Title" name="3">
        <p v-for="i in 3" :key="i">Content goes here...</p>
      </b-collapse-panel>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
