<template>
  <div>
    <b-button type="primary" plain @click="message1">info</b-button>
    <b-button type="success" plain @click="message2">success</b-button>
    <b-button type="warning" plain @click="message3">warning</b-button>
    <b-button type="danger" plain @click="message4">error</b-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'bin-ui-design'

function message1() {
  Message.info('我是普通MessageWarning')
}
function message2() {
  Message.success('Success的WarningMessage')
}
function message3() {
  Message.warning('Warning的WarningMessage')
}
function message4() {
  Message.error('Error的WarningMessage')
}
</script>
