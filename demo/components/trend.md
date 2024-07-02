---
title: 趋势标记 Trend
---

<b-back-top></b-back-top>

# 趋势标记 Trend

趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。

## 基础用法

在数值背后添加一个小图标来标识涨跌情况。

<preview path="./demo/Trend/Basic.vue"></preview>

## 颜色反转

设置属性 `reverse-color` 可以颠倒上升和下降的图标颜色。比如负值设置为红色，正值设置为绿色。

<preview path="./demo/Trend/Reverse.vue"></preview>

## 文字颜色

设置属性 `text-color` 文字也可以显示颜色，该属性受 `colorful` 和 `reverse-color` 的影响 。

<preview path="./demo/Trend/Text.vue"></preview>

## 自定义样式

可以通过样式覆盖，设置 up 和 down 的颜色，或者覆盖文字大小

<preview path="./demo/Trend/Color.vue"></preview>

## 自定义图标

可以设置图标的icon

<preview path="./demo/Trend/Icon.vue"></preview>

## Props

| 参数          | 说明                                                    | 类型    | 可选值     | 默认值 |
| ------------- | ------------------------------------------------------- | ------- | ---------- | ------ |
| title         | 上升下降标识                                            | String  | up 或 down | -      |
| colorful      | 是否以彩色显示                                          | Boolean | -          | true   |
| reverse-color | 是否颜色反转                                            | Boolean | -          | false  |
| text-color    | 文字是否显示颜色（受 colorful 和 reverse-color 的影响） | Boolean | -          | false  |
