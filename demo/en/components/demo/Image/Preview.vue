<template>
  <b-space>
    <template v-for="(url, index) in urlList" :key="url">
      <b-image
        :src="url"
        fit="contain"
        width="120px"
        height="80px"
        preview
        :preview-list="urlList"
        :initial-index="index"
      />
    </template>
  </b-space>
</template>

<script setup>
const urlList = [
  'https://file.iviewui.com/images/image-demo-1.jpg',
  'https://file.iviewui.com/images/image-demo-2.jpg',
  'https://file.iviewui.com/images/image-demo-3.jpg',
  'https://file.iviewui.com/images/image-demo-4.jpg',
  'https://file.iviewui.com/images/image-demo-5.jpg',
  'https://file.iviewui.com/images/image-demo-6.jpg'
]
</script>
