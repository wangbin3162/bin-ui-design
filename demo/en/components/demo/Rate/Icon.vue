<template>
  <div flex>
    <b-rate
      v-model="value"
      :icon-classes="iconClasses"
      void-icon-class="heart"
      :colors="['#99A9BF', '#F7BA2A', '#fa8c16']"
    ></b-rate>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(null)
const iconClasses = ['heart-fill', 'heart-fill', 'heart-fill']
</script>
