<template>
  <div>
    <b-button @click="modal1 = true">禁用右上角关闭</b-button>
    <b-button @click="modal2 = true">禁用mask关闭</b-button>
    <b-modal v-model="modal1" title="普通的模态框标题" :show-close="false">
      <p>禁用右上角关闭</p>
    </b-modal>
    <b-modal v-model="modal2" title="普通的模态框标题" :mask-closable="false">
      <p>禁用mask关闭</p>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
</script>
