<template>
  <div>
    <b-button @click="modal1 = true">自定义页头页脚</b-button>
    <b-button @click="modal2 = true">不带标题栏和页脚</b-button>
    <b-button @click="modal3 = true">设置宽</b-button>
    <b-button @click="modal4 = true">距离顶部200px</b-button>
    <b-button @click="modal5 = true">body-style</b-button>

    <b-modal v-model="modal1">
      <template #title>
        <p style="color: #f60; text-align: center">
          <span>自定义页头</span>
        </p>
      </template>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <template #footer>
        <b-button type="danger">Delete</b-button>
      </template>
    </b-modal>

    <b-modal v-model="modal2">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
    </b-modal>

    <b-modal v-model="modal3" title="自定义宽度" width="300px">
      <p>
        自定义宽度，单位 px，默认 520px。 对话框的宽度是响应式的，当屏幕尺寸小于 768px
        时，宽度会变为自动auto。
      </p>
    </b-modal>

    <b-modal v-model="modal4" title="距离顶部" top="200px">
      <p>距离顶部200px</p>
    </b-modal>

    <b-modal v-model="modal5" title="body-style" :body-styles="{ padding: '20px' }">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
const modal3 = ref(false)
const modal4 = ref(false)
const modal5 = ref(false)
</script>
