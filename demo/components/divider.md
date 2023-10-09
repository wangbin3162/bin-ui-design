---
title: 分割线 Divider
---

# 分割线 Divider

区隔内容的分割线。可以对对不同文本段落进行分割。可以对行内文字/链接进行分割。

## 水平分割线

默认为水平分割线，可在中间加入文字。 可以是虚线

<preview path="./demo/Divider/Basic.vue"></preview>

## 垂直分割线

使用 type="vertical" 设置为行内的垂直分割线。

<preview path="./demo/Divider/Vertical.vue"></preview>

## 标题位置

align属性可以设置标题位置 使用 align="left" 设置为行内的垂直分割线。

<preview path="./demo/Divider/Align.vue"></preview>

## Props

| 参数   | 说明             | 类型    | 可选值                | 默认值     |
| ------ | ---------------- | ------- | --------------------- | ---------- |
| type   | 水平还是垂直类型 | String  | horizontal / vertical | horizontal |
| align  | 分割线标题的位置 | String  | left / right / center | center     |
| dashed | 是否虚线         | Boolean | false / true          | false      |
