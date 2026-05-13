<template>
  <b-config-provider abstract :theme="config">
    <b-button type="primary" @click="setGlobal">
      Click to apply (primary color will change, affecting global)
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
