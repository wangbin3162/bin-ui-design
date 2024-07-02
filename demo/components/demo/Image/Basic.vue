<template>
  <div flex>
    <div v-for="fit in fitList" :key="fit" style="flex: 1; padding: 10px">
      <div style="width: 100px; height: 80px; border: 1px solid #eee">
        <b-image :src="url" :fit="fit" width="100px" height="80px" :alt="fit"></b-image>
      </div>
      <p>{{ fit }}</p>
    </div>
  </div>
</template>

<script setup>
const url = 'https://file.iviewui.com/images/image-demo-3.jpg'
const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
