<template>
  <div>
    <b-button
      @click="open({ title: '右上角', message: '右上角弹出notice', position: 'top-right' })"
    >
      右上角
    </b-button>
    <b-button @click="open({ title: '左上角', message: '左上角弹出notice', position: 'top-left' })">
      左上角
    </b-button>
    <b-button
      @click="open({ title: '右下角', message: '右下角弹出notice', position: 'bottom-right' })"
    >
      右下角
    </b-button>
    <b-button
      @click="open({ title: '左下角', message: '左下角弹出notice', position: 'bottom-left' })"
    >
      左下角
    </b-button>
  </div>
</template>

<script setup lang="ts">
import { Notice } from 'bin-ui-design'

function open(options) {
  Notice.info(options)
}
</script>
