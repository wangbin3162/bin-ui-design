<template>
  <div>
    <b-button type="default" @click="open">Openconfirm</b-button>
  </div>
</template>

<script setup lang="ts">
import { MessageBox, Message } from 'bin-ui-design'

function open() {
  MessageBox.confirm({
    type: 'warning',
    title: 'Warning',
    message: '<p>此Actions将永久<span style="color:red;">Delete</span>该文件, 是否继续?</p>',
    useHTML: true
  })
    .then(() => {
      Message({ type: 'success', message: 'DeleteSuccess!' })
    })
    .catch(() => {
      Message({ type: 'info', message: '已CancelDelete' })
    })
}
</script>
