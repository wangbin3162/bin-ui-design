<template>
  <b-config-provider abstract :theme="config">
    <b-button type="primary" @click="setGlobal">
      click应用（应用后主color会变更，会影响global）
    </b-button>
  </b-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const config = ref({})

function setGlobal() {
  config.value = { binColorPrimary: '#00c181' }
}
</script>
