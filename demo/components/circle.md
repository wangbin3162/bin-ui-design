---
title: 进度环 Circle
---

<b-back-top></b-back-top>

# 进度环 Circle

显示环形图，可以显示任务百分比或者是统计某些数据的占比情况

## 基础用法

直接用组件默认插槽插入即可

<preview path="./demo/Circle/Basic.vue"></preview>

## 动态进度

可以配合外部操作进度

<preview path="./demo/Circle/Progress.vue"></preview>

## 设置样式

可以配置更多的自定义样式

<preview path="./demo/Circle/Style.vue"></preview>

## 仪表盘模式

通过设置属性 `dashboard`，可以很方便地实现仪表盘样式。

<preview path="./demo/Circle/Dashboard.vue"></preview>

## Props

| 参数           | 说明                      | 类型    | 可选值                   | 默认值  |
| -------------- | ------------------------- | ------- | ------------------------ | ------- |
| percent        | 百分比                    | Number  | —                        | 0       |
| size           | 图表的宽度和高度，单位 px | Number  | —                        | 120     |
| stroke-linecap | 进度环顶端的形状          | String  | square（方）/round（圆） | round   |
| stroke-width   | 进度环的线宽，单位 px     | Number  | —                        | 6       |
| stroke-color   | 进度环的颜色              | String  | —                        | #2db7f5 |
| trail-width    | 进度环背景的线宽，单位 px | Number  | —                        | 5       |
| trail-color    | 进度环背景的颜色          | String  | —                        | #eaeef2 |
| dashboard      | 是否显示为仪表盘          | Boolean | —                        | false   |
