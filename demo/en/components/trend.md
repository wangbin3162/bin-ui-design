---
title: Trend
---

<b-back-top></b-back-top>

# Trend

trend符号，标记上升和下降trend。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。

## Basic Usage

在数值背后添加一个小icon来标识涨跌情况。

<preview path="./demo/Trend/Basic.vue"></preview>

## color反转

设置property `reverse-color` 可以颠倒上升和下降的iconcolor。比如负值设置为红色，正值设置为绿色。

<preview path="./demo/Trend/Reverse.vue"></preview>

## Textcolor

设置property `text-color` 文字也Can display color，该property受 `colorful` 和 `reverse-color` 的影响 。

<preview path="./demo/Trend/Text.vue"></preview>

## Custom Styles

Can be set via style覆盖，设置 up 和 down 的color， or 者覆盖文字大小

<preview path="./demo/Trend/Color.vue"></preview>

## Customicon

Can set icon的icon

<preview path="./demo/Trend/Icon.vue"></preview>

## Props

| Parameter          | Description                                                    | Type    | Options     | Default |
| ------------- | ------------------------------------------------------- | ------- | ---------- | ------ |
| title         | 上升下降标识                                            | String  | up  or  down | -      |
| colorful      | Whether to 以彩色Show                                          | Boolean | -          | true   |
| reverse-color | Whether to color反转                                            | Boolean | -          | false  |
| text-color    | 文字Whether to show color（受 colorful 和 reverse-color 的影响） | Boolean | -          | false  |
