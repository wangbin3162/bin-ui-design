<template>
  <div>
    <b-button @click="message">create三条不会Close的Message</b-button>
    <b-button @click="closeAll">Close所有</b-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function message() {
  Message.warning({ message: 'Message1', duration: 0 })
  Message.warning({ message: 'Message2', duration: 0 })
  Message.warning({ message: 'Message3', duration: 0 })
}

function closeAll() {
  Message.closeAll()
}
</script>
