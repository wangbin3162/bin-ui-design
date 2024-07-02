<template>
  <div>
    <b-button @click="handleShowPreview">打开图片预览</b-button>
    <b-image-preview v-model="preview" :preview-list="urlList" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const urlList = [
  'https://wangbin3162.github.io/bin-files/animals/00.jpg',
  'https://wangbin3162.github.io/bin-files/animals/01.jpg',
  'https://wangbin3162.github.io/bin-files/animals/02.jpg',
  'https://wangbin3162.github.io/bin-files/animals/03.jpg',
  'https://wangbin3162.github.io/bin-files/animals/04.jpg',
  'https://wangbin3162.github.io/bin-files/animals/05.jpg',
  'https://wangbin3162.github.io/bin-files/animals/06.jpg',
  'https://wangbin3162.github.io/bin-files/animals/07.jpg'
]

const preview = ref(false)

function handleShowPreview() {
  preview.value = true
}
</script>
