<template>
  <div>
    <b-button @click="message1">info</b-button>
    <b-button @click="message2">render函数</b-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Message } from 'bin-ui-design'

function message1() {
  Message('普通的消息提示！')
}

function message2() {
  Message.info({
    message: h('i', { style: 'color: red' }, '我是render函数渲染出来的内容')
  })
}
</script>
