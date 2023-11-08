---
title: 空状态 Empty
---

<b-back-top></b-back-top>

# 空状态 Empty

空显示状态，用于给内部无数据情况的展示。十分简单

## 基础用法

直接用组件默认插槽插入即可

<preview path="./demo/Empty/Basic.vue"></preview>

## 指令方式

可以使用v-no-data指令动态指定，并可以绑定显示文字

<preview path="./demo/Empty/Directive.vue"></preview>

## Props

| 参数  | 说明     | 类型   | 可选值 | 默认值   |
| ----- | -------- | ------ | ------ | -------- |
| title | 显示文字 | String | —      | 暂无数据 |

## Slot

| 名称    | 说明                         |
| ------- | ---------------------------- |
| icon    | 可插入图标                   |
| default | 默认插槽，可替换文字显示位置 |
