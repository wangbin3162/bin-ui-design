<template>
  <div>
    <b-button @click="message1">I disappear in 10s</b-button>
    <b-button @click="message2">Closable</b-button>
    <b-button @click="message3">Won't Close</b-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function message1() {
  Message.info({ message: 'I disappear in 10s', duration: 10 })
}
function message2() {
  Message.success({ message: 'I am a closable notification', duration: 5, showClose: true })
}
function message3() {
  Message.warning({ message: 'I will never close unless manually dismissed', duration: 0, showClose: true, zIndex: 3000 })
}
</script>
