<template>
  <div flex>
    <div>
      <b-radio-group v-model="fruit" type="button">
        <b-radio label="香蕉"></b-radio>
        <b-radio label="苹果"></b-radio>
        <b-radio label="西瓜"></b-radio>
      </b-radio-group>
      <div class="p10" />
      <b-radio-group v-model="fruit" type="button" size="small">
        <b-radio label="香蕉"></b-radio>
        <b-radio label="苹果"></b-radio>
        <b-radio label="西瓜"></b-radio>
      </b-radio-group>
      <div class="p10" />
      <b-radio-group v-model="fruit" type="button" size="mini">
        <b-radio label="香蕉"></b-radio>
        <b-radio label="苹果"></b-radio>
        <b-radio label="西瓜"></b-radio>
      </b-radio-group>
    </div>
    <div style="margin-left: 24px">
      <b-radio-group v-model="fruit" type="button">
        <b-radio label="香蕉" disabled></b-radio>
        <b-radio label="苹果"></b-radio>
        <b-radio label="西瓜"></b-radio>
      </b-radio-group>
      <br />
      <b-radio-group v-model="fruit" type="button" disabled>
        <b-radio label="香蕉" disabled></b-radio>
        <b-radio label="苹果"></b-radio>
        <b-radio label="西瓜"></b-radio>
      </b-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const fruit = ref('苹果')
</script>
