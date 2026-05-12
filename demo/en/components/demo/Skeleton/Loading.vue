<template>
  <div>
    <div class="mb-15">
      <b-button @click="show">2s 后显示</b-button>
    </div>
    <b-skeleton style="width: 350px" :loading="loading" animation>
      <template #template>
        <div flex="cross:center" style="margin-bottom: 8px">
          <b-skeleton-item variant="circle" style="width: 36px; margin-right: 8px" />
          <div style="width: 200px">
            <div flex="main:justify cross:center">
              <b-skeleton-item variant="text" style="margin-right: 16px" />
              <b-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </div>
        <b-skeleton />
      </template>
      <template #default>
        <div style="width: 350px">
          <div flex="cross:center" style="margin-bottom: 8px">
            <b-skeleton-item variant="circle" style="width: 36px; margin-right: 8px" />
            <div style="width: 200px">用户信息</div>
          </div>
          <p>用户信息内容</p>
          <p>用户信息内容</p>
          <p>用户信息内容</p>
          <p>{{ currentDate }}</p>
        </div>
      </template>
    </b-skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'

const loading = ref(false)
const currentDate = ref(dayjs().format('YYYY-MM-DD'))

function show() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
