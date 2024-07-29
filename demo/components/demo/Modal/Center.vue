<template>
  <div>
    <b-button @click="open1">自适应高度居中弹窗</b-button>
    <b-button @click="open2">居中弹窗</b-button>

    <b-modal v-model="visible" title="普通的模态框标题" screen-center>
      <p v-for="i in rows" :key="i">我是弹窗内容...</p>
      <template #footer>
        <span>
          <b-button @click="onClose">取 消</b-button>
          <b-button type="primary" @click="onClose">确 定</b-button>
        </span>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const rows = ref(5)

function open1() {
  visible.value = true
  rows.value = 30
}

function open2() {
  visible.value = true
  rows.value = 3
}

function onClose() {
  visible.value = false
}
</script>
