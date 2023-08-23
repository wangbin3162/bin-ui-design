---
title: 内置动画
---

# 内置动画

组件提供了如下内置动画,只需要引入base.css 即可包含.

<script lang="ts" setup>
import { ref } from 'vue'
const show1 = ref(true)
const show2 = ref(true)
const show3 = ref(true)
const show4 = ref(true)
const show5 = ref(true)

const tabs = ref([
  { key: 'tab1', title: 'tab1'},
  { key: 'tab2', title: 'tab2' },
  { key: 'tab3', title: 'tab3' },
  { key: 'tab4', title: 'tab4' },
])
const activeTab = ref('tab1')
</script>

## 淡入淡出

提供 2种 淡入淡出效果 `fade-in-linear` 和 `fade-in`

<div class="demo-transition">
  <b-button @click="show1= !show1">查看效果</b-button>
  <div style="display: flex; margin-top: 20px; height: 100px;">
    <transition name="fade-in-linear">
      <div v-show="show1" class="transition-box">fade-in-linear</div>
    </transition>
    <transition name="fade-in">
      <div v-show="show1" class="transition-box">fade-in</div>
    </transition>
  </div>
</div>

## 左右平移

<div class="demo-transition">
  <b-button @click="show2= !show2">查看效果</b-button>
  <div style="display: flex; justify-content:center;margin-top: 20px; height: 100px;">
    <transition name="move-left">
      <div v-show="show2" class="transition-box">move-left</div>
    </transition>
    <transition name="move-right">
      <div v-show="show2" class="transition-box">move-right</div>
    </transition>
  </div>
</div>

## 缩放

提供 4种 缩放效果 `zoom-in-center`，`zoom-in-top` ，`zoom-in` 和 `zoom-in-bottom`

<div class="demo-transition">
  <b-button @click="show3= !show3">查看效果</b-button>
  <div style="display: flex; margin-top: 20px; height: 100px;">
    <transition name="zoom-in-center">
      <div v-show="show3" class="transition-box">zoom-in-center</div>
    </transition>
    <transition name="zoom-in-top">
      <div v-show="show3" class="transition-box">zoom-in-top</div>
    </transition>
    <transition name="zoom-in">
      <div v-show="show3" class="transition-box">zoom-in</div>
    </transition>
    <transition name="zoom-in-bottom">
      <div v-show="show3" class="transition-box">zoom-in-bottom</div>
    </transition>
  </div>
</div>

## 移动渐变

提供 3种 特殊的移动渐变 `fade-transverse` ,`fade-scale` ,`fade-scale-move`

<div class="demo-transition">
  <b-button @click="show4= !show4">查看效果</b-button>
  <div style="display: flex; margin-top: 20px; height: 100px;">
    <transition name="fade-transverse">
      <div v-show="show4" class="transition-box">fade-transverse</div>
    </transition>
    <transition name="fade-scale">
      <div v-show="show4" class="transition-box">fade-scale</div>
    </transition>
    <transition name="fade-scale-move">
      <div v-show="show4" class="transition-box">fade-scale-move</div>
    </transition>
    <transition name="fade-down">
      <div v-show="show4" class="transition-box">fade-down</div>
    </transition>
  </div>
</div>

## 移动变换

同等位置的移动变化，会存在位置错位情况，这个动画内置了绝对定位的覆盖，可同时切换一组内容的动画类型

<div class="demo-transition">
  <b-button v-for="item in tabs" :key="item.key" @click="activeTab = item.key" :type="activeTab === item.key?'primary':null">{{ item.title}}</b-button>

  <div style="position:relative; overflow:hidden;margin:10px 0; width: 200px;height: 100px;">
    <b-move-transition>
      <div class="transition-box" v-if="activeTab==='tab1'">tab1</div>
      <div class="transition-box" v-else-if="activeTab==='tab2'">tab2</div>
      <div class="transition-box" v-else-if="activeTab==='tab3'">tab3</div>
      <div class="transition-box" v-else-if="activeTab==='tab4'">tab4</div>
    </b-move-transition>
  </div>
</div>

## 展开折叠

展开折叠也作为内部组件实现，直接使用 `<b-collapse-transition>` 包裹替换即可

<div class="demo-transition">
  <b-button @click="show5= !show5">查看效果</b-button>
  <div style="margin-top: 20px; height: 220px;">
    <b-collapse-transition>
      <div v-show="show5">
        <div class="transition-box">collapse-transition</div>
        <div class="transition-box">collapse-transition</div>
      </div>
    </b-collapse-transition>
  </div>
</div>

<style scoped>
.demo-transition {
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 20px;
  overflow: hidden;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: var(--bin-color-primary);
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  margin-right: 20px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
