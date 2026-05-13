<template>
  <div>
    <b-button
      type="primary"
      @click="alert({ type: 'info', title: 'Title', message: 'This is the dialog content.', width: '500px' })"
    >
      Info
    </b-button>
    <b-button
      type="success"
      @click="alert({ type: 'success', title: 'Title', message: 'This is the dialog content.' })"
    >
      Success
    </b-button>
    <b-button
      type="warning"
      @click="alert({ type: 'warning', title: 'Title', message: 'This is the dialog content.' })"
    >
      Warning
    </b-button>
    <b-button type="danger" @click="showAlert">Error</b-button>
  </div>
</template>

<script setup lang="ts">
import { MessageBox, Message } from 'bin-ui-design'

function alert(opt) {
  MessageBox.alert(opt)
}

function showAlert() {
  MessageBox.alert({
    type: 'error',
    title: 'Title',
    message: 'This is the dialog content.',
    callback: action => {
      Message({
        type: 'info',
        message: `action: ${action}`
      })
    }
  })
}
</script>
