<template>
  <div>
    <b-button
      @click="open({ title: '标题', useHTML: true, message: '我是<i>html</i>片段插入的内容' })"
    >
      HTML片段
    </b-button>
    <b-button @click="open({ title: '标题', showClose: false, message: '隐藏关闭按钮内容' })">
      隐藏关闭按钮
    </b-button>
    <b-button @click="open({ title: '偏移', message: '这是一条带有偏移的提示消息', offset: 200 })">
      偏移位置
    </b-button>
  </div>
</template>

<script setup lang="ts">
import { Notice } from 'bin-ui-design'

function open(options) {
  Notice.info(options)
}
</script>
