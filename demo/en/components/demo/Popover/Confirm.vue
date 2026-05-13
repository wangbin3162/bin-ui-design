<template>
  <b-popover v-model:visible="visible" :width="240">
    <b-button type="danger" plain>Confirm popover</b-button>
    <template #content>
      <p>
        <b-icon name="question-circle" size="16" color="#f5222d"></b-icon>
        Are you sure delete this item?
      </p>
      <div style="text-align: right; margin-top: 4px">
        <b-button size="mini" type="text" @click="cancel">Cancel</b-button>
        <b-button type="primary" size="mini" @click="ok">Confirm</b-button>
      </div>
    </template>
  </b-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message } from 'bin-ui-design'

const visible = ref(false)

function ok() {
  visible.value = false
  Message('Clicked [Confirm]')
}
function cancel() {
  visible.value = false
  Message('Clicked [Cancel]')
}
</script>
