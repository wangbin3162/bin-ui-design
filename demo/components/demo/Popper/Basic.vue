<template>
  <div style="width: 200px">
    <b-popper trigger="click" theme="light" :z-index="1000">
      <template #default>这是一段内容这是一段内容这是一段内容</template>
      <template #trigger>
        <b-button>触发popper</b-button>
      </template>
    </b-popper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
