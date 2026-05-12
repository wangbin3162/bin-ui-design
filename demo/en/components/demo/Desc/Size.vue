<template>
  <div>
    <div flex="cross:center">
      <span style="margin: 0 5px">Size:</span>
      <b-radio-group v-model="size">
        <b-radio label="large">大号</b-radio>
        <b-radio label="default">默认</b-radio>
        <b-radio label="small">小型</b-radio>
        <b-radio label="mini">超小</b-radio>
      </b-radio-group>
      <span style="margin: 0 5px">Label宽度:</span>
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
    <b-desc title="带边框列表" :column="3" :size="size" border :label-width="labelWidth">
      <b-desc-item label="用户名">韩梅梅</b-desc-item>
      <b-desc-item label="手机号">1769239****</b-desc-item>
      <b-desc-item label="居住地">徐州市</b-desc-item>
      <b-desc-item label="备注">
        <b-tag type="primary" size="mini">学校</b-tag>
      </b-desc-item>
      <b-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</b-desc-item>
    </b-desc>
    <b-divider />
    <b-desc title="无边框列表" :column="3" :size="size" :label-width="labelWidth">
      <b-desc-item label="用户名">韩梅梅</b-desc-item>
      <b-desc-item label="手机号">1769239****</b-desc-item>
      <b-desc-item label="居住地">徐州市</b-desc-item>
      <b-desc-item label="备注">
        <b-tag type="primary" size="mini">学校</b-tag>
      </b-desc-item>
      <b-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</b-desc-item>
    </b-desc>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const size = ref('default')
const labelWidth = ref(null)
</script>
