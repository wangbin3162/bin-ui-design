<template>
  <div>
    <b-button @click="modal1 = true">Custompage头page脚</b-button>
    <b-button @click="modal2 = true">is not title bar or footer</b-button>
    <b-button @click="modal3 = true">Set width</b-button>
    <b-button @click="modal4 = true">from top200px</b-button>
    <b-button @click="modal5 = true">body-style</b-button>

    <b-modal v-model="modal1">
      <template #title>
        <p style="color: #f60; text-align: center">
          <span>Custompage头</span>
        </p>
      </template>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <template #footer>
        <b-button type="danger">Delete</b-button>
      </template>
    </b-modal>

    <b-modal v-model="modal2">
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
    </b-modal>

    <b-modal v-model="modal3" title="Customwidth" width="300px">
      <p>
        Customwidth，单位 px，Default 520px。 dialog的width是响应式的，当屏幕size小于 768px
        时，width会变为自动auto。
      </p>
    </b-modal>

    <b-modal v-model="modal4" title="from top" top="200px">
      <p>from top200px</p>
    </b-modal>

    <b-modal v-model="modal5" title="body-style" :body-styles="{ padding: '20px' }">
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
      <p>This is the dialog content....</p>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
const modal3 = ref(false)
const modal4 = ref(false)
const modal5 = ref(false)
</script>
