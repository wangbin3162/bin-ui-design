<template>
  <div style="width: 200px">
    <b-select v-model="select">
      <template #prefix>
        <i class="b-iconfont b-icon-alert"></i>
      </template>
      <b-option value="beijing" label="Beijing"></b-option>
      <b-option value="shanghai" label="Shanghai"></b-option>
      <b-option value="xuzhou" label="Xuzhou"></b-option>
      <b-option value="nanjing" label="Nanjing"></b-option>
    </b-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const select = ref('')
</script>
