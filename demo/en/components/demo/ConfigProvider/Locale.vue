<template>
  <div>
    <div class="locale-actions">
      <b-button size="small" :type="locale === 'zh-CN' ? 'primary' : 'default'" @click="locale = 'zh-CN'">
        Chinese
      </b-button>
      <b-button size="small" :type="locale === 'en-US' ? 'primary' : 'default'" @click="locale = 'en-US'">
        English
      </b-button>
    </div>

    <b-config-provider :locale="locale">
      <div class="locale-demo-wrap">
        <b-date-picker v-model="date" type="date" />
        <b-time-picker v-model="time" />
      </div>
    </b-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const locale = ref<'zh-CN' | 'en-US'>('zh-CN')
const date = ref(new Date())
const time = ref(new Date())
</script>

<style scoped>
.locale-actions {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.locale-demo-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
