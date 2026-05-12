<template>
  <div>
    <b-button @click="open(false)">提醒</b-button>
    <b-button @click="open(true)">打开提醒(仅标题)</b-button>
    <b-button @click="open1">render函数渲染</b-button>
    <b-button @click="time">自定义时长</b-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Notice } from 'bin-ui-design'

function open(hasMessage) {
  Notice({
    title: 'Notice 标题',
    message: hasMessage ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
  })
}
function open1() {
  Notice({
    title: '标题名称',
    message: h('i', { style: 'color: red' }, '我是render函数渲染出来的内容')
  })
}
function time() {
  Notice({
    title: 'Notice 标题',
    message: 'duration设置为0则不会自动关闭',
    duration: 0
  })
}
</script>
