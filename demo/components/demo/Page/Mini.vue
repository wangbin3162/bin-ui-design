<template>
  <b-page
    v-model:current="current"
    :total="100"
    size="small"
    show-elevator
    show-sizer
    show-total
  ></b-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(2)
</script>
