---
title: Internationalization
---

<b-back-top></b-back-top>

# Internationalization

Bin UI Design provides language injection via the `locale` prop of `ConfigProvider`, currently supporting:

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
## Recommended Practice

Internationalization should be managed externally at the application level (e.g., using an app-level i18n solution to maintain language resources, switching logic, and copy organization). The component library only consumes the current language configuration.

This avoids duplicating business copy within component library documentation or internals, and makes it easier to extend multi-language support at the project level.

## Using with ConfigProvider

You can inject language configuration into descendant components via the global config provider component. See [ConfigProvider](/en/components/config-provider.html) for examples.
