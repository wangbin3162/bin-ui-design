---
title: 图钉 Affix
---

<b-back-top></b-back-top>

# 图钉 Affix

## 基础用法

原生滚动相对于window窗口固定，也可以结合scrollbar进行配置

<preview path="./demo/Affix/Basic.vue"></preview>

## 固定位置

可以设置固定距离底部的位置

<preview path="./demo/Affix/Position.vue"></preview>

## Props

| 参数     | 说明                 | 类型   | 可选值      | 默认值 |
| -------- | -------------------- | ------ | ----------- | ------ |
| offset   | 距离窗口位置触发     | Number | —           | 0      |
| position | 可设置距离顶部或底部 | String | top、bottom | top    |
| z-index  | 层级                 | Number | —           | 10     |

## Events

| 事件名 | 说明                                       | 返回值     |
| ------ | ------------------------------------------ | ---------- |
| change | 在固定状态发生改变时触发                   | true/false |
| scroll | 滚动响应事件 ,返回对象包含scrollTop, fixed | Object     |

## Slot

| 名称    | 说明         |
| ------- | ------------ |
| default | 警告提示内容 |
