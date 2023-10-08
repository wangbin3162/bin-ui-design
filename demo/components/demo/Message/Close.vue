<template>
  <div>
    <b-button @click="message">创建三条不会关闭的消息</b-button>
    <b-button @click="closeAll">关闭所有</b-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function message() {
  Message.warning({ message: '消息1', duration: 0 })
  Message.warning({ message: '消息2', duration: 0 })
  Message.warning({ message: '消息3', duration: 0 })
}

function closeAll() {
  Message.closeAll()
}
</script>
