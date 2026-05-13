<template>
  <div>
    <b-button @click="message">Create three messages that won't close</b-button>
    <b-button @click="closeAll">Close All</b-button>
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
