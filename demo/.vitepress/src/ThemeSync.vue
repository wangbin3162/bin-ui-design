<template></template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const applyThemeName = (dark: boolean) => {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('theme-name', dark ? 'dark' : 'light')
}

onMounted(() => {
  applyThemeName(isDark.value)
})

watch(
  () => isDark.value,
  val => {
    applyThemeName(val)
  }
)
</script>
