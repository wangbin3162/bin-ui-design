<template>
  <div>
    <b-button @click="message1">I disappear in 10s</b-button>
    <b-button @click="message2">可Close的</b-button>
    <b-button @click="message3">不会Close</b-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function message1() {
  Message.info({ message: 'I disappear in 10s', duration: 10 })
}
function message2() {
  Message.success({ message: '我是可Close的的Warning', duration: 5, showClose: true })
}
function message3() {
  Message.warning({ message: '我永远不会Close除非手动', duration: 0, showClose: true, zIndex: 3000 })
}
</script>
