<template>
  <div>
    <b-button
      @click="open({ title: 'Title', useHTML: true, message: '我是<i>html</i>片段插入的Content' })"
    >
      HTML Fragment
    </b-button>
    <b-button @click="open({ title: 'Title', showClose: false, message: 'hideClosebuttonContent' })">
      hideClosebutton
    </b-button>
    <b-button @click="open({ title: 'Offset', message: '这是一条带有Offset的WarningMessage', offset: 200 })">
      Offsetposition
    </b-button>
  </div>
</template>

<script setup lang="ts">
import { Notice } from 'bin-ui-design'

function open(options) {
  Notice.info(options)
}
</script>
