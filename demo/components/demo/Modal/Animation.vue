<template>
  <div>
    <b-space>
      <b-radio-group v-model="transitionName" type="capsule">
        <b-radio label="dialog-fade"></b-radio>
        <b-radio label="fade-in"></b-radio>
        <b-radio label="move-right"></b-radio>
        <b-radio label="zoom-in-top"></b-radio>
        <b-radio label="zoom-in"></b-radio>
        <b-radio label="fade-scale-move"></b-radio>
        <b-radio label="fade-down"></b-radio>
      </b-radio-group>
      <b-button @click="modal1 = true">弹出</b-button>
    </b-space>

    <b-modal
      v-model="modal1"
      :title="`自定义动画${transitionName}`"
      :transition-name="transitionName"
    >
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <template #footer>
        <span>
          <b-button @click="modal1 = false">关闭</b-button>
        </span>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const transitionName = ref('dialog-fade')
</script>
