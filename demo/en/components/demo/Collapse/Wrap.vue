<template>
  <div>
    <b-collapse-wrap title="标题栏" collapse>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap title="收起附加右侧操作" collapse>
      <template #right>
        <b-button type="primary" plain size="small">编辑</b-button>
      </template>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap v-model="value" shadow="none">
      <template #title>
        <div style="font-size: 16px; padding: 10px">自定义开关和标题</div>
      </template>
      <template #right>
        <b-button type="text" @click="value = !value">{{ value ? '收起' : '展开' }}</b-button>
      </template>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap title="标题栏" collapse shadow="none" arrow-icon="caret-down">
      <template #title><span class="title">自定义label标题</span></template>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
