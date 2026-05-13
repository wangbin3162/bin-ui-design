<template>
  <div>
    <b-button type="primary" @click="visible = true">Open</b-button>
    <b-button type="primary" @click="confirm = true">Confirm</b-button>
    <b-modal v-model="visible" title="Basic Modal Title" :z-index="1000">
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <template #footer>
        <span>
          <b-button @click="onClose">Cancel</b-button>
          <b-button type="primary" @click="onOk">Confirm</b-button>
        </span>
      </template>
    </b-modal>
    <b-modal v-model="confirm" width="420px" :show-close="false">
      <div class="p8">
        <div class="f-s-18" flex="cross:center">
          <b-icon name="info-circle" size="24" color="#fa8c16"></b-icon>
          <span class="ml-8">Warning</span>
        </div>
        <div style="padding: 8px 0 8px 32px">Confirm注销Login吗？</div>
        <div class="t-right">
          <b-button @click="confirm = false">Cancel</b-button>
          <b-button type="primary" @click="confirm = false">Confirm</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message } from 'bin-ui-design'

const visible = ref(false)
const confirm = ref(false)

function onOk() {
  visible.value = false
  Message('clickConfirm')
}

function onClose() {
  visible.value = false
  Message('clickCancel')
}
</script>
