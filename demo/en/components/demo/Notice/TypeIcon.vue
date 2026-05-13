<template>
  <div>
    <div style="padding: 5px 0">With description</div>
    <b-button type="primary" plain @click="info(false)">Info</b-button>
    <b-button type="success" plain @click="success(false)">Success</b-button>
    <b-button type="warning" plain @click="warning(false)">Warning</b-button>
    <b-button type="danger" plain @click="error(false)">error</b-button>
    <div style="padding: 5px 0">仅Title</div>
    <b-button type="primary" plain @click="info(true)">Info</b-button>
    <b-button type="success" plain @click="success(true)">Success</b-button>
    <b-button type="warning" plain @click="warning(true)">Warning</b-button>
    <b-button type="danger" plain @click="error(true)">error</b-button>
  </div>
</template>

<script setup lang="ts">
import { Notice } from 'bin-ui-design'

function info(message) {
  Notice.info({
    title: 'Notice Title',
    message: message ? '' : '这是NoticeContent,这是NoticeContent. 这是NoticeContent,这是NoticeContent.'
  })
}
function success(message) {
  Notice.success({
    title: 'Notice Title',
    message: message ? '' : '这是NoticeContent,这是NoticeContent. 这是NoticeContent,这是NoticeContent.'
  })
}
function warning(message) {
  Notice.warning({
    title: 'Notice Title',
    message: message ? '' : '这是NoticeContent,这是NoticeContent. 这是NoticeContent,这是NoticeContent.'
  })
}
function error(message) {
  Notice.error({
    title: 'Notice Title',
    message: message ? '' : '这是NoticeContent,这是NoticeContent. 这是NoticeContent,这是NoticeContent.'
  })
}
</script>
