<template>
  <b-tooltip content="延时一Secondshowhover文字" :open-delay="1000">
    <b-button>延时一Second</b-button>
  </b-tooltip>
  <b-tooltip content="clickshow" trigger="click">
    <b-button>clickshow</b-button>
  </b-tooltip>
  <b-tooltip content="Close和hideWarning" :disabled="disabled">
    <b-button @click="disabled = !disabled">{{ disabled ? 'CloseWarning' : '开启Warning' }}</b-button>
  </b-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const disabled = ref(false)
</script>
