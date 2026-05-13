---
title: Color Design
---

<b-back-top></b-back-top>

# Color Design

Bin-UI comes with a well-designed color scheme by default. We recommend using these color palettes to achieve visual consistency in your development.

## Design Principles

The default color scheme has 5 primary hues, each with multiple palette values derived from mixing with white. These colors should cover the color needs of most admin and middle-platform designs.

The color value mixing primarily references Stylus's mix function, with the JavaScript side implemented using the [color.js](https://www.npmjs.com/package/color) library. The library provides some conversion functions that can be imported on demand.

<script setup lang="ts">
import { reactive } from 'vue'
import { Utils } from 'bin-ui-design'

const data = reactive({
  primary: '#1089ff',
  success: '#52c41a',
  info: '#35495e',
  warning: '#fa8c16',
  danger: '#f5222d',

  garyColor: [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000000',
  ],
  textColor: ['#17233d', '#515a6e', '#808695', '#c5c8ce', '#C0C4CC'],

  customColor1: '#722ed1',
  customColor2: '#eb2f96',
  customColor3: '#13c2c2',
  customColor4: '#a0d911',
  customColor5: '#fa541c',
  customColor6: '#2f54eb',
  custom: '#1089ff',
  colorsList: [
  '#1089ff',
  '#52c41a',
  '#fa8c16',
  '#f5222d',
  '#2f54eb',
  '#faad14',
  '#722ed1',
  '#eb2f96',
  '#13c2c2',
  '#fadb14',
  '#a0d911',
  '#fa541c',
  '#00bcd4',
  ],
})

const getColorPane = color => Utils.color.getPalette(color)

const copyColor = color => Utils.util.copy(color)
</script>

## Primary Colors

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.primary)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>primary-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.success)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>success-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.info)"
    :key="index"
    title="click to copy color"
    @click="copyColor(name)"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>info-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.warning)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>warning-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.danger)"
    :key="index"
    title="click to copy color"
    @click="copyColor(name)"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>danger-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

## Custom Color Palettes

If the default color scheme doesn't meet your needs, you can use the following palettes. Different palette values are generated automatically for each base color.

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.customColor1)"
    :key="index"
    title="click to copy color"
    @click="copyColor(name)"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>purple-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.customColor2)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>magenta-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.customColor3)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>cyan-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.customColor4)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>lime-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.customColor5)"
    :key="index"
    @click="copyColor(name)"
    title="click to copy color"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>volcano-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

<div class="color-wrap">
  <div
    class="item"
    v-for="(name, index) in getColorPane(data.customColor6)"
    :key="index"
    title="click to copy color"
    @click="copyColor(name)"
    :style="{ color: index < 5 ? '#fff' : '#333', background: name }"
  >
    <span>geekblue-{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </div>
</div>

## Neutral Colors

Neutral colors include black, white, and gray. They are widely used in admin interface design. Choosing neutral colors wisely helps establish a clear visual hierarchy for page content.

<div class="main-color">
  <div
    class="main-color-item"
    v-for="(color, index) in data.garyColor"
    :key="index"
    title="click to copy color"
    @click="copyColor(color)"
    :style="{ background: color, color: index > 5 ? '#fff' : 'rgba(0,0,0,.85)' }"
  >
    gary-{{ index + 1 }}
    <span class="main-color-value">{{ color }}</span>
  </div>
</div>

## Text Colors

Several text colors are provided. You can define your own in the palette.

<div class="main-color">
  <div
    class="main-color-item"
    v-for="(color, index) in data.textColor"
    :key="index"
    title="click to copy color"
    @click="copyColor(color)"
    :style="{ background: color, color: index < 3 ? '#fff' : 'rgba(0,0,0,.85)' }"
  >
    text-{{ index + 1 }}
    <span class="main-color-value">{{ color }}</span>
  </div>
</div>

## Color Palette Tool

If the palettes above don't meet your needs, you can pick a primary color and a palette will be generated for you.

<div class="color-palette-pick t-center f-s-22 mb-20">Pick your primary color</div>
<div class="main-color">
  <div
    class="main-color-item"
    v-for="(color, index) in getColorPane(data.custom)"
    :key="index"
    title="click to copy color"
    @click="copyColor(color)"
    :style="{ color: index < 5 ? '#fff' : '#333', background: color }"
  >
    color-{{ index + 1 }}
    <span class="main-color-value">{{ color }}</span>
  </div>
</div>
<div class="mt-20" flex="cross:center">
  <b-color-picker v-model="data.custom" style="width: 128px" :colors="data.colorsList"></b-color-picker>
  <span class="ml-10">{{ data.custom }}</span>
</div>
<p class="ml-10 f-color-red f-s-12">Note: Brightness and saturation are recommended to be above 70 for better results.</p>
<div style="height: 100px"></div>

<style scoped>
.color-wrap {
  display: inline-block;
  padding-right: 20px;
  margin-bottom: 20px;
  width: 33.33%;
  .item {
    position: relative;
    height: 44px;
    margin-right: 4px;
    padding: 0 12px;
    font-size: 14px;
    font-family: Consolas, sans-serif;
    line-height: 44px;
    cursor: pointer;
    -webkit-transition: all .2s;
    transition: all .2s;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    user-select: none;
    &:hover {
      margin-right: -8px;
      border-radius: 0 4px 4px 0;
    }
  }
}
.main-color {
  width: 100%;
  display: flex;
  .main-color-item {
    position: relative;
    flex: 1;
    height: 86px;
    margin-right: 0;
    padding: 37px 0 0;
    line-height: normal;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    transition: all .2s;
    &:hover {
      height: 96px;
      margin-top: -10px;
      border-radius: 4px 4px 0 0;
    }
  }
  .main-color-value {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    float: right;
    transform: scale(.85);
    opacity: 0;
    transition: all .3s;
  }
  &:hover {
    .main-color-item {
      padding-top: 8px;
    }
    .main-color-value {
      bottom: 8px;
      opacity: .7;
    }
  }
}
</style>
