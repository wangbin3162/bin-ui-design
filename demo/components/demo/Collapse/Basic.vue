<template>
  <div>
    <b-collapse v-model="value">
      <b-collapse-panel title="面板一标题" name="1">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板二标题" name="2">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板三标题" name="3">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
