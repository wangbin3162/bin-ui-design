<template>
  <div>
    <b-button @click="start">Start</b-button>
    <b-button @click="update(50)">Update 50</b-button>
    <b-button @click="done">Done</b-button>
    <b-button @click="error">Error</b-button>
    <b-button @click="config">Config</b-button>
    <b-button @click="reset">Reset Config</b-button>
  </div>
</template>

<script setup lang="ts">
import { LoadingBar } from 'bin-ui-design'

function start() {
  LoadingBar.start()
}

function update(val: number) {
  LoadingBar.update(val)
}

function done() {
  LoadingBar.done()
}

function error() {
  LoadingBar.error()
}

function config() {
  LoadingBar.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 5,
    icon: 'loading'
  })
}

function reset() {
  LoadingBar.resetConfig()
}
</script>
