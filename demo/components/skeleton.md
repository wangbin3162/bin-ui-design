---
title: 骨架屏 Skeleton
---

# 骨架屏 Skeleton

在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

## 基础用法

基础的骨架效果

<preview path="./demo/Skeleton/Basic.vue"></preview>

## 更多参数

可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。

<preview path="./demo/Skeleton/Rows.vue"></preview>

## 动画效果

可以显示动画效果

<preview path="./demo/Skeleton/Animation.vue"></preview>

## 自定义

可以使用slot插槽来自己设定模板，可以根据真实dom来构建差不多的骨架

<preview path="./demo/Skeleton/Custom.vue"></preview>

## Loading 加载

loading结束后加载真实的ui，通过slot设置之后的ui

<preview path="./demo/Skeleton/Loading.vue"></preview>

# Skeleton Props

| 参数     | 说明                                        | 类型    | 可选值       | 默认值 |
| -------- | ------------------------------------------- | ------- | ------------ | ------ |
| animated | 是否使用动画                                | boolean | true / false | false  |
| count    | 渲染多少个 template, 建议使用尽可能小的数字 | number  | integer      | 1      |
| loading  | 是否显示真实的 DOM 结构                     | boolean | true / false | false  |
| rows     | 骨架屏段落数量                              | number  | 正整数       | 3      |
| throttle | 延迟占位 DOM 渲染的时间, 单位是毫秒         | number  | 正整数       | 0      |

## Skeleton Item Attributes

| 参数    | 说明                     | 类型         | 可选值                                                                    | 默认值 |
| ------- | ------------------------ | ------------ | ------------------------------------------------------------------------- | ------ |
| variant | 当前显示的占位元素的样式 | Enum(string) | p / text / h1 / h2 / h5 / text / caption / button / image / circle / rect | text   |

## Skeleton Slots

| name     | description          |
| -------- | -------------------- |
| default  | 用来展示真实 UI      |
| template | 用来展示自定义占位符 |
