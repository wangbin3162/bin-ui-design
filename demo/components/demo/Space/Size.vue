<template>
  <b-space direction="vertical" alignment="start" :size="30">
    <b-radio-group v-model="size" type="capsule">
      <b-radio :label="'mini'">迷你</b-radio>
      <b-radio :label="'small'">小</b-radio>
      <b-radio :label="'default'">默认</b-radio>
      <b-radio :label="'large'">大号</b-radio>
    </b-radio-group>

    <b-space :size="size">
      space
      <b-button type="primary">Button</b-button>
      <b-button icon="upload">Button</b-button>
      <b-button type="danger">Delete</b-button>
    </b-space>
  </b-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const size = ref('default')
</script>
