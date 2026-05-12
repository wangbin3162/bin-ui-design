<template>
  <div>
    <b-button @click="modal1 = true">显示弹窗一</b-button>

    <b-modal v-model="modal1" title="弹窗一" width="600px">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <b-button type="primary" @click="modal2 = true">打开嵌套弹窗</b-button>
      <b-modal v-model="modal2" title="嵌套弹窗">
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
      </b-modal>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
</script>
