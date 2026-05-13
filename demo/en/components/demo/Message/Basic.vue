<template>
  <div>
    <b-button @click="message1">info</b-button>
    <b-button @click="message2">render function</b-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Message } from 'bin-ui-design'

function message1() {
  Message('A normal message notification!')
}

function message2() {
  Message.info({
    message: h('i', { style: 'color: red' }, 'Content rendered by render function.')
  })
}
</script>
