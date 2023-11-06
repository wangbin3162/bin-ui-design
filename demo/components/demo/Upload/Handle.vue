<template>
  <div style="width: 400px">
    <b-upload
      action="//jsonplaceholder.typicode.com/posts/"
      :before-upload="handleUpload"
    ></b-upload>

    <div v-if="file !== null" flex="cross:center">
      Upload file: {{ file.name }}
      <b-button type="text" :loading="loadingStatus" @click="upload">
        {{ loadingStatus ? 'Uploading...' : 'Click to upload' }}
      </b-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message } from 'bin-ui-design'

const file = ref(null)
const loadingStatus = ref(false)

function handleUpload(f) {
  file.value = f
  return false
}
function upload() {
  loadingStatus.value = true
  setTimeout(() => {
    file.value = null
    loadingStatus.value = false
    Message({ type: 'success', message: '上传成功' })
  }, 1500)
}
</script>
