---
title: ColorPicker
---

<b-back-top></b-back-top>

# ColorPicker

Used for 选择color色值

## Basic Usage

<preview path="./demo/ColorPicker/Basic.vue"></preview>

## 带Alpha/opacity

可以选择Alpha/opacity

<preview path="./demo/ColorPicker/Alpha.vue"></preview>

## 带有预设色卡

可以提供预设的色卡

<preview path="./demo/ColorPicker/Colors.vue"></preview>

## Disabled State

可设置Disabled state

<preview path="./demo/ColorPicker/Disabled.vue"></preview>

## 不同的大小

四个不同大小

<preview path="./demo/ColorPicker/Size.vue"></preview>

## Props

| Parameter            | Description                      | Type    | Options                | Default                                                |
| --------------- | ------------------------- | ------- | --------------------- | ----------------------------------------------------- |
| value / v-model | Bound value                    | string  | —                     | —                                                     |
| disabled        | Disable d                  | boolean | —                     | false                                                 |
| size            | size                      | string  | —                     | medium / small / mini                                 |
| show-alpha      | Whether to 支持Alpha/opacity选择        | boolean | —                     | false                                                 |
| color-format    | 写入 v-model 的color的格式 | string  | hsl / hsv / hex / rgb | hex（show-alpha as false）/ rgb（show-alpha as true） |
| popper-class    | ColorPicker Dropdown的类名  | string  | —                     | —                                                     |
| colors          | 预定义color                | array   | —                     | —                                                     |

## Events

| Event Name      | Description                               | Callback Parameters         |
| ------------- | ---------------------------------- | ---------------- |
| change        | 当Bound value变化时Trigger                 | Current value           |
| active-change | 面板中当前Show的color发生改变时Trigger | 当前Show的color值 |
