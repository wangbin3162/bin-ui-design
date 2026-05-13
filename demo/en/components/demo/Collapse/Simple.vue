<template>
  <div>
    <b-collapse v-model="value" simple>
      <b-collapse-panel title="Panel 1Title" name="1">
        <template #title>
          Panel 1Title
          <b-icon name="smile" size="18"></b-icon>
        </template>
        <p v-for="i in 3" :key="i">我是Content我是Content...</p>
      </b-collapse-panel>
      <b-collapse-panel title="Panel 2Title" name="2">
        <p v-for="i in 3" :key="i">我是Content我是Content...</p>
      </b-collapse-panel>
      <b-collapse-panel title="Panel 3Title" name="3">
        <p v-for="i in 3" :key="i">我是Content我是Content...</p>
      </b-collapse-panel>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
