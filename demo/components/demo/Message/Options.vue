<template>
  <div>
    <b-button @click="message1">我10秒消失</b-button>
    <b-button @click="message2">可关闭的</b-button>
    <b-button @click="message3">不会关闭</b-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function message1() {
  Message.info({ message: '我10秒消失', duration: 10 })
}
function message2() {
  Message.success({ message: '我是可关闭的的提示', duration: 5, showClose: true })
}
function message3() {
  Message.warning({ message: '我永远不会关闭除非手动', duration: 0, showClose: true, zIndex: 3000 })
}
</script>
