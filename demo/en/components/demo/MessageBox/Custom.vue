<template>
  <div>
    <b-button type="default" @click="open">打开MessageBox</b-button>
  </div>
</template>

<script setup lang="ts">
import { MessageBox, Message } from 'bin-ui-design'
import { h } from 'vue'

function open() {
  MessageBox.confirm({
    title: '消息',
    message: h('p', null, [
      h('span', null, '内容可以是 '),
      h('i', { style: 'color: teal' }, 'VNode')
    ]),
    showCancelButton: true,
    confirmText: 'OK',
    cancelText: 'Cancel',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmText = '执行中... , 三秒关闭'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    }
  })
    .then(action => {
      Message({
        type: 'info',
        message: 'action: ' + action
      })
    })
    .catch(() => {
      Message({ type: 'info', message: 'Cancel' })
    })
}
</script>
