---
title: 警告提示 Alert
---

# 警告提示 Alert

静态的展示一些区块，提示或者警告，可以动态的去删除

## 基础用法

直接用组件默认插槽插入即可

<preview path="./demo/Alert/Basic.vue"></preview>

## 包含描述信息

自定义`#desc`插入描述内容。

<preview path="./demo/Alert/Desc.vue"></preview>

## 图标

根据 `type` 属性自动添加不同图标，或者自定义图标 `slot` 。

<preview path="./demo/Alert/Icon.vue"></preview>

## 可以关闭

设置属性 `closable` 可以设置提示可关闭

<preview path="./demo/Alert/Close.vue"></preview>

## 顶部公告样式

设置属性 `banner` 可以应用顶部公告的样式。

<preview path="./demo/Alert/Banner.vue"></preview>

## Props

| 参数      | 说明         | 类型    | 可选值                        | 默认值 |
| --------- | ------------ | ------- | ----------------------------- | ------ |
| type      | 警告提示样式 | string  | info、success、warning、error | info   |
| closable  | 是否可关闭   | boolean | —                             | false  |
| show-icon | 是否显示图标 | boolean | —                             | false  |

## Events

| 事件名 | 说明       | 返回值 |
| ------ | ---------- | ------ |
| close  | 关闭时触发 | event  |

## Slot

| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 警告提示内容           |
| desc    | 警告提示辅助性文字介绍 |
| icon    | 自定义图标内容         |
| close   | 自定义关闭内容         |
