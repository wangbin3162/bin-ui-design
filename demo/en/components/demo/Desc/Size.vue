<template>
  <div>
    <div flex="cross:center">
      <span style="margin: 0 5px">Size:</span>
      <b-radio-group v-model="size">
        <b-radio label="large">Large</b-radio>
        <b-radio label="default">Default</b-radio>
        <b-radio label="small">Small</b-radio>
        <b-radio label="mini">Mini</b-radio>
      </b-radio-group>
      <span style="margin: 0 5px">Label Width:</span>
      <b-input-number
        v-model="labelWidth"
        :min="10"
        :max="20"
        :step="2"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
        style="width: 120px"
      ></b-input-number>
      <b-button @click="labelWidth = null">AUTO</b-button>
    </div>
    <b-divider />
    <b-desc title="Bordered List" :column="3" :size="size" border :label-width="labelWidth">
      <b-desc-item label="Username">Han Meimei</b-desc-item>
      <b-desc-item label="Phone">1769239****</b-desc-item>
      <b-desc-item label="Address">Xuzhou</b-desc-item>
      <b-desc-item label="Remarks">
        <b-tag type="primary" size="mini">School</b-tag>
      </b-desc-item>
      <b-desc-item label="Contact Address">No. 1245, Wuzhong Avenue, Wuzhong District, Jiangsu Province</b-desc-item>
    </b-desc>
    <b-divider />
    <b-desc title="Borderless List" :column="3" :size="size" :label-width="labelWidth">
      <b-desc-item label="Username">Han Meimei</b-desc-item>
      <b-desc-item label="Phone">1769239****</b-desc-item>
      <b-desc-item label="Address">Xuzhou</b-desc-item>
      <b-desc-item label="Remarks">
        <b-tag type="primary" size="mini">School</b-tag>
      </b-desc-item>
      <b-desc-item label="Contact Address">No. 1245, Wuzhong Avenue, Wuzhong District, Jiangsu Province</b-desc-item>
    </b-desc>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const size = ref('default')
const labelWidth = ref(null)
</script>
