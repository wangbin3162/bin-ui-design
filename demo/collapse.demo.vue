<template>
  <div class="test-wrap">
    <div flex>
      <div style="width: 500px">
        <b-collapse v-model="value">
          <b-collapse-panel title="面板一标题" name="1">
            <p v-for="i in 3" :key="i">我是内容我是内容...</p>
          </b-collapse-panel>
          <b-collapse-panel title="面板二标题" name="2">
            <p v-for="i in 3" :key="i">我是内容我是内容...</p>
          </b-collapse-panel>
          <b-collapse-panel title="面板三标题" name="3" disabled>
            <p v-for="i in 3" :key="i">我是内容我是内容...</p>
          </b-collapse-panel>
        </b-collapse>
      </div>
      <div style="width: 500px">
        <b-collapse v-model="value1" simple accordion>
          <b-collapse-panel name="1">
            <template #title>
              面板一标题
              <b-icon name="smile" size="18"></b-icon>
            </template>
            <p v-for="i in 3" :key="i">我是内容我是内容...</p>
          </b-collapse-panel>
          <b-collapse-panel title="面板二标题" name="2">
            <p v-for="i in 3" :key="i">我是内容我是内容...</p>
          </b-collapse-panel>
          <b-collapse-panel title="面板三标题" name="3">
            <p v-for="i in 3" :key="i">我是内容我是内容...</p>
          </b-collapse-panel>
        </b-collapse>
      </div>
    </div>
    <b-collapse-wrap title="标题栏" collapse>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap title="收起附加右侧操作" collapse>
      <template #right>
        <b-button type="primary" plain size="small">编辑</b-button>
      </template>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap v-model="show1" shadow="none">
      <template #title>
        <div style="font-size: 16px; padding: 10px">自定义开关和标题</div>
      </template>
      <template #right>
        <b-button type="text" @click="show1 = !show1">{{ show1 ? '收起' : '展开' }}</b-button>
      </template>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
    <b-collapse-wrap title="标题栏" collapse shadow="none" arrow-icon="caret-down">
      <template #title><span class="title">自定义label标题</span></template>
      <div class="p5">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </div>
    </b-collapse-wrap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(['1'])
const value1 = ref('1')
const show1 = ref(true)
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #1089ff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  margin-right: 20px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
