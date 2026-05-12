<template>
  <div>
    <b-button type="primary" @click="visible = true">Open</b-button>
    <b-button type="primary" @click="confirm = true">Confirm</b-button>
    <b-modal v-model="visible" title="普通的模态框标题" :z-index="1000">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <template #footer>
        <span>
          <b-button @click="onClose">取 消</b-button>
          <b-button type="primary" @click="onOk">确 定</b-button>
        </span>
      </template>
    </b-modal>
    <b-modal v-model="confirm" width="420px" :show-close="false">
      <div class="p8">
        <div class="f-s-18" flex="cross:center">
          <b-icon name="info-circle" size="24" color="#fa8c16"></b-icon>
          <span class="ml-8">提示</span>
        </div>
        <div style="padding: 8px 0 8px 32px">确认注销登录吗？</div>
        <div class="t-right">
          <b-button @click="confirm = false">取消</b-button>
          <b-button type="primary" @click="confirm = false">确定</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message } from 'bin-ui-design'

const visible = ref(false)
const confirm = ref(false)

function onOk() {
  visible.value = false
  Message('点击确定')
}

function onClose() {
  visible.value = false
  Message('点击取消')
}
</script>
