---
title: 进度条 Progress
---

# 进度条 Progress

展示操作或任务的当前进度，比如上传文件。

## 基础用法

Progress 组件设置 `percent` 属性即可，表示进度条对应的百分比，必填，必须在 0-100。

<preview path="./demo/Progress/Basic.vue"></preview>

## 文字内显示

可以设置 `text-inside` 来配置文字内显示模式

<preview path="./demo/Progress/Inside.vue"></preview>

## 设置样式

可以设置 `color` 和 `radius`等 来配置属性样式、通过开启active可以开启动画样式

<preview path="./demo/Progress/Style.vue"></preview>

## 动态进度

可以配合外部操作进度

<preview path="./demo/Progress/Progress.vue"></preview>

## Props

| 参数         | 说明                         | 类型    | 可选值                 | 默认值  |
| ------------ | ---------------------------- | ------- | ---------------------- | ------- |
| percent      | 百分比                       | Number  | —                      | 0       |
| status       | 进度条状态                   | String  | text/success/exception | —       |
| stroke-width | 进度条的线宽，单位 px        | Number  | —                      | 8       |
| text-inside  | 进度条显示文字内置在进度条内 | Boolean | —                      | false   |
| show-text    | 是否显示进度文字             | Boolean | —                      | true    |
| bg-color     | 进度条背景颜色               | String  | —                      | #f3f3f3 |
| color        | 进度条的颜色                 | String  | —                      | #2d8cf0 |
| radius       | 进度条的圆角                 | String  | —                      | 100px   |
| active       | 进度条背景动画               | Boolean | —                      | false   |
