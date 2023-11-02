<template>
  <div>
    <b-button @click="modal = true">显示全屏对话框</b-button>
    <b-modal v-model="modal" title="全屏标题" :fullscreen="fullscreen">
      <template #ctrl>
        <i
          :class="`b-iconfont b-icon-fullscreen${fullscreen ? '-exit' : ''}`"
          @click="fullscreen = !fullscreen"
        ></i>
      </template>
      <div :style="fullscreen ? {} : 'height: 300px; overflow-y: auto'">
        <p v-for="i in 50" :key="i">我是全屏的内容{{ i }}...</p>
      </div>
      <template #footer>
        <span>
          <b-button @click="modal = false">取 消</b-button>
          <b-button type="primary" @click="modal = false">确 定</b-button>
        </span>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal = ref(false)
const fullscreen = ref(false)
</script>
