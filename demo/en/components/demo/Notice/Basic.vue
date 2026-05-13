<template>
  <div>
    <b-button @click="open(false)">Notice</b-button>
    <b-button @click="open(true)">OpenNotice(仅Title)</b-button>
    <b-button @click="open1">render function</b-button>
    <b-button @click="time">Custom时长</b-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Notice } from 'bin-ui-design'

function open(hasMessage) {
  Notice({
    title: 'Notice Title',
    message: hasMessage ? '' : '这是NoticeContent,这是NoticeContent. 这是NoticeContent,这是NoticeContent.'
  })
}
function open1() {
  Notice({
    title: 'Title名称',
    message: h('i', { style: 'color: red' }, 'Content rendered by render function.')
  })
}
function time() {
  Notice({
    title: 'Notice Title',
    message: 'duration设置为0则不会自动Close',
    duration: 0
  })
}
</script>
