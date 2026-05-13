<template>
  <div>
    <b-button
      @click="open({ title: 'Right Top角', message: 'Right Top角Opennotice', position: 'top-right' })"
    >
      Right Top角
    </b-button>
    <b-button @click="open({ title: 'Left Top角', message: 'Left Top角Opennotice', position: 'top-left' })">
      Left Top角
    </b-button>
    <b-button
      @click="open({ title: 'Right Bottom角', message: 'Right Bottom角Opennotice', position: 'bottom-right' })"
    >
      Right Bottom角
    </b-button>
    <b-button
      @click="open({ title: 'Left Bottom角', message: 'Left Bottom角Opennotice', position: 'bottom-left' })"
    >
      Left Bottom角
    </b-button>
  </div>
</template>

<script setup lang="ts">
import { Notice } from 'bin-ui-design'

function open(options) {
  Notice.info(options)
}
</script>
