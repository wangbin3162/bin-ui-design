<template>
  <div style="width: 200px">
    <b-select v-model="select">
      <template #prefix>
        <i class="b-iconfont b-icon-alert"></i>
      </template>
      <b-option value="beijing" label="北京"></b-option>
      <b-option value="shanghai" label="上海"></b-option>
      <b-option value="xuzhou" label="徐州"></b-option>
      <b-option value="nanjing" label="南京"></b-option>
    </b-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const select = ref('')
</script>
