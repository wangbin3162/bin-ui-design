<template>
  <b-tooltip content="延时一秒显示悬停文字" :open-delay="1000">
    <b-button>延时一秒</b-button>
  </b-tooltip>
  <b-tooltip content="点击显示" trigger="click">
    <b-button>点击显示</b-button>
  </b-tooltip>
  <b-tooltip content="关闭和隐藏提示" :disabled="disabled">
    <b-button @click="disabled = !disabled">{{ disabled ? '关闭提示' : '开启提示' }}</b-button>
  </b-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const disabled = ref(false)
</script>
