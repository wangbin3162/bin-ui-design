---
title: 颜色选择器 ColorPicker
---

<b-back-top></b-back-top>

# 颜色选择器 ColorPicker

用于选择颜色色值

## 基础用法

<preview path="./demo/ColorPicker/Basic.vue"></preview>

## 带透明度

可以选择透明度

<preview path="./demo/ColorPicker/Alpha.vue"></preview>

## 带有预设色卡

可以提供预设的色卡

<preview path="./demo/ColorPicker/Colors.vue"></preview>

## 禁用状态

可设置禁用状态

<preview path="./demo/ColorPicker/Disabled.vue"></preview>

## 不同的大小

四个不同大小

<preview path="./demo/ColorPicker/Size.vue"></preview>

## Props

| 参数            | 说明                      | 类型    | 可选值                | 默认值                                                |
| --------------- | ------------------------- | ------- | --------------------- | ----------------------------------------------------- |
| value / v-model | 绑定值                    | string  | —                     | —                                                     |
| disabled        | 是否禁用                  | boolean | —                     | false                                                 |
| size            | 尺寸                      | string  | —                     | medium / small / mini                                 |
| show-alpha      | 是否支持透明度选择        | boolean | —                     | false                                                 |
| color-format    | 写入 v-model 的颜色的格式 | string  | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popper-class    | ColorPicker 下拉框的类名  | string  | —                     | —                                                     |
| colors          | 预定义颜色                | array   | —                     | —                                                     |

## Events

| 事件名称      | 说明                               | 回调参数         |
| ------------- | ---------------------------------- | ---------------- |
| change        | 当绑定值变化时触发                 | 当前值           |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
