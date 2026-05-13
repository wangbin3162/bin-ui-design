---
title: Split
---

<b-back-top></b-back-top>

# Split

split panel可自行dropWidth/Height

## Basic Usage

<preview path="./demo/Split/Basic.vue"></preview>

## 水平分割

<preview path="./demo/Split/Horizontal.vue"></preview>

## Nestinguse

<preview path="./demo/Split/Mixed.vue"></preview>

## 设置Defaultstyle

如设置了Defaultstyle，double clickdivider可resetDefault设置的大小。

<preview path="./demo/Split/Normal.vue"></preview>

## Hidedivider

<preview path="./demo/Split/HideLine.vue"></preview>

## Props

| Parameter               | Description                                                                         | Type    | Options                   | Default   |
| ------------------ | ---------------------------------------------------------------------------- | ------- | ------------------------ | -------- |
| split              | 分割Type                                                                     | String  | 'vertical', 'horizontal' | vertical |
| min                | 最小px                                                                     | Number  | —                        | 60       |
| default            | Defaultpercentage                                                                   | Number  | —                        | 200      |
| default-wrap-style | Default容器style ,一个数组，可分别指定两个容器大小，可为px or percentage，开始时生效 | Array[] | —                        | —        |
| hide-line          | Hide divider                                                               | Boolean | —                        | false    |
| resizer-color      | 自定义dividercolor（自定义color后hide-line不生效）                              | String  | —                        | —        |
| class-name         | 自定义resizerstyleName                                                        | String  | —                        | —        |

## Events

| Event Name | Description     | Return Value  |
| ------ | -------- | ------- |
| resize | reset大小 | percent |

## Slot

| Name  | Description                                                 |
| ----- | ---------------------------------------------------- |
| left  | split 为 vertical 时左边面板 horizontal 时为上边面板 |
| right | split 为 vertical 时右边面板 horizontal 时为下边面板 |
