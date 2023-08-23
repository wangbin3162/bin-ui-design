---
title: 组件指令
---

# 组件指令

组件提供了四个指令用于完成组件功能,如果组件是全局引入则会自动注册.如采用自动引入或者按需加载,则需要手动进行引入和注册.

```typescript
// main.ts
import { createApp } from 'vue'
import {
  create,
  // 外部点击指令
  ClickOutside,
  // 点击动画
  ClickAnimation,
  // 水波纹指令
  Waves,
  // 重复点击
  RepeatClick
} from 'bin-ui-design'

const UI = create({
  directives: [ClickOutside, ClickAnimation, Waves, RepeatClick]
})

const app = createApp()
app.use(UI)
app.mount('#app')
```

## 点击动画指令

在标签中追加`v-click-animation`指令增加点击动画指令，波纹颜色根据border或background颜色创建

<div class="demo-button">
  <b-button>Default</b-button>
  <b-button type="primary">Primary</b-button>
  <b-button type="success">Success</b-button>
  <b-button type="info">Info</b-button>
  <b-button type="warning">Warning</b-button>
  <b-button type="danger">Danger</b-button>
  <span style="border: 1px solid #ffa2d3; 
          padding: 6px 10px;margin: 0 8px;border-radius: 2px;vertical-align: middle;"
        v-click-animation>自定义</span>
</div>

## 水波纹指令

在标签中追加`v-waves`指令增加水波纹指令,指令可以设置波纹颜色和点击方式, 注意，增加水波纹指令会默认覆盖原有的按钮点击效果

```html
<b-button v-waves>默认指令</b-button>
<b-button v-waves="'rgba(255,162,211,0.5)'">设置颜色</b-button>
```

<div class="demo-button">
  <b-button v-waves>默认指令</b-button>
  <b-button v-waves="'rgba(255,162,211,0.5)'">设置颜色</b-button>
</div>

## 重复点击指令

可以按住进行重复点击,组件中在数字输入框使用到.按住增加

<div class="demo-button">
  <b-button v-repeat-click="repeatClick">按住查看控制台</b-button>
</div>

## ClickOutside 外部点击指令

通过添加`v-click-outside="clickOutside"`来添加外部点击事件 常用于popper的外部点击关闭.

<div class="demo-button">
  <div v-click-outside="clickOutside" flex="main:center cross:center"
        style="width: 200px;height:100px;background: #2a85e4;color:#fff;font-size: 20px;">
    点击外部执行
  </div>
</div>

<script lang="ts" setup>
const repeatClick = ()=> console.log('不断执行点击事件...')
const clickOutside = ()=> console.log('点击外部...')
</script>
