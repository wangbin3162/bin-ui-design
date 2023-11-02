<template>
  <div>
    <b-button type="default" @click="open">打开confirm</b-button>
  </div>
</template>

<script setup lang="ts">
import { MessageBox, Message } from 'bin-ui-design'

function open() {
  MessageBox.confirm({
    type: 'warning',
    title: '提示',
    message: '<p>此操作将永久<span style="color:red;">删除</span>该文件, 是否继续?</p>',
    useHTML: true
  })
    .then(() => {
      Message({ type: 'success', message: '删除成功!' })
    })
    .catch(() => {
      Message({ type: 'info', message: '已取消删除' })
    })
}
</script>
