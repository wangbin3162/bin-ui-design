<template>
  <div flex="main:justify" style="width: 300px">
    <b-circle :percent="percent" :stroke-color="color">
      <b-icon v-if="percent === 100" name="check" size="50" style="color: #5cb85c"></b-icon>
      <span v-else style="font-size: 24px">{{ percent }}%</span>
    </b-circle>

    <b-button-group>
      <b-button icon="minus" @click="minus"></b-button>
      <b-button icon="plus" @click="add"></b-button>
    </b-button-group>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const percent = ref(10)

const color = computed(() => {
  let color = '#2db7f5'
  if (percent.value === 100) {
    color = '#5cb85c'
  }
  return color
})

function add() {
  percent.value += 10
  if (percent.value >= 100) percent.value = 100
}

function minus() {
  percent.value -= 10
  if (percent.value < 0) percent.value = 0
}
</script>
