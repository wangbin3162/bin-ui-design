<template>
  <div>
    <div style="padding: 5px 0">带描述</div>
    <b-button type="primary" plain @click="info(false)">Info</b-button>
    <b-button type="success" plain @click="success(false)">Success</b-button>
    <b-button type="warning" plain @click="warning(false)">Warning</b-button>
    <b-button type="danger" plain @click="error(false)">error</b-button>
    <div style="padding: 5px 0">仅标题</div>
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
    title: 'Notice 标题',
    message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
  })
}
function success(message) {
  Notice.success({
    title: 'Notice 标题',
    message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
  })
}
function warning(message) {
  Notice.warning({
    title: 'Notice 标题',
    message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
  })
}
function error(message) {
  Notice.error({
    title: 'Notice 标题',
    message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
  })
}
</script>
