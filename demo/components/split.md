---
title: 分割面板 Split
---

# 分割面板 Split

分割面板可自行拖放宽度/高度

## 基础用法

<preview path="./demo/Split/Basic.vue"></preview>

## 水平分割

<preview path="./demo/Split/Horizontal.vue"></preview>

## 嵌套使用

<preview path="./demo/Split/Mixed.vue"></preview>

## 设置默认样式

如设置了默认样式，双击分割线可重置默认设置的大小。

<preview path="./demo/Split/Normal.vue"></preview>

## 隐藏分割线

<preview path="./demo/Split/HideLine.vue"></preview>

## Props

| 参数               | 说明                                                                         | 类型    | 可选值                   | 默认值   |
| ------------------ | ---------------------------------------------------------------------------- | ------- | ------------------------ | -------- |
| split              | 分割类型                                                                     | String  | 'vertical', 'horizontal' | vertical |
| min                | 最小像素                                                                     | Number  | —                        | 60       |
| default            | 默认百分比                                                                   | Number  | —                        | 200      |
| default-wrap-style | 默认容器样式 ,一个数组，可分别指定两个容器大小，可为像素或百分比，开始时生效 | Array[] | —                        | —        |
| hide-line          | 是否隐藏分割线                                                               | Boolean | —                        | false    |
| resizer-color      | 自定义分割线颜色（自定义颜色后hide-line不生效）                              | String  | —                        | —        |
| class-name         | 自定义resizer样式名称                                                        | String  | —                        | —        |

## Events

| 事件名 | 说明     | 返回值  |
| ------ | -------- | ------- |
| resize | 重置大小 | percent |

## Slot

| 名称  | 说明                                                 |
| ----- | ---------------------------------------------------- |
| left  | split 为 vertical 时左边面板 horizontal 时为上边面板 |
| right | split 为 vertical 时右边面板 horizontal 时为下边面板 |
