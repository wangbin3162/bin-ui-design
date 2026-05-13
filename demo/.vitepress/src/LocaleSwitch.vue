<template>
  <button class="locale-switch" type="button" @click="handleToggle">
    {{ currentLocale === 'zh-CN' ? 'English' : '中文' }}
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import { setLocale } from 'bin-ui-design'

const STORAGE_KEY = 'bin-ui-design-locale'

const route = useRoute()
const router = useRouter()

const currentLocale = computed(() => (route.path.startsWith('/en/') ? 'en-US' : 'zh-CN'))

const switchPath = (targetLocale: 'zh-CN' | 'en-US'): string => {
  const currentPath = route.path || '/'
  const normalized = currentPath.startsWith('/en/') ? currentPath.slice(3) : currentPath
  const normalizedPath = normalized.startsWith('/') ? normalized : `/${normalized}`

  if (targetLocale === 'en-US') {
    return normalizedPath === '/' ? '/en/' : `/en${normalizedPath}`
  }

  return normalizedPath
}

const handleToggle = async () => {
  const targetLocale = currentLocale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  setLocale(targetLocale)
  localStorage.setItem(STORAGE_KEY, targetLocale)
  await router.go(switchPath(targetLocale))
}

onMounted(async () => {
  setLocale(currentLocale.value)
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'zh-CN' || saved === 'en-US') {
    if (saved !== currentLocale.value) {
      setLocale(saved)
      await router.go(switchPath(saved))
    }
  } else {
    localStorage.setItem(STORAGE_KEY, currentLocale.value)
  }
})

watch(
  () => currentLocale.value,
  locale => {
    setLocale(locale)
  }
)
</script>

<style scoped>
.locale-switch {
  height: 30px;
  padding: 0 11px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.locale-switch:hover {
  color: var(--vp-c-brand-1);
  border-color: #4f94ff;
  background: var(--vp-c-default-soft);
}

.locale-switch:focus-visible {
  outline: none;
  box-shadow: var(--bin-doc-accent-ring);
}
</style>
