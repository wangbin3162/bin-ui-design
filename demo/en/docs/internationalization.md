---
title: 国际化
---

<b-back-top></b-back-top>

# 国际化

Bin UI Design 通过 `ConfigProvider` 的 `locale` 属性提供语言注入能力，当前支持：

- `zh-CN`
- `en-US`

```vue
<template>
  <div>
    <div class="locale-actions">
      <b-button size="small" :type="locale === 'zh-CN' ? 'primary' : 'default'" @click="locale = 'zh-CN'">
        中文
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

```
## 推荐实践

国际化建议在业务项目外部统一管理（例如应用层 i18n 方案维护语言资源、切换逻辑与文案组织），组件库侧只负责消费当前语言配置。

这样可以避免在组件库文档或组件内部重复维护业务文案，也更方便在项目级做多语言扩展。

## 与 ConfigProvider 配合

你可以通过全局配置组件向后代组件注入语言配置，具体示例参见 [全局配置 ConfigProvider](/en/components/config-provider.html)。
