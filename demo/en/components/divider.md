---
title: Divider
---

<b-back-top></b-back-top>

# Divider

区隔Content的divider。可以对对不同文本段落进行分割。可以对行内文字/link进行分割。

## 水平divider

Default is 水平divider，可在中间加入文字。 可以Yes虚线

<preview path="./demo/Divider/Basic.vue"></preview>

## Verticaldivider

use type="vertical" 设置为行内的垂直divider。

<preview path="./demo/Divider/Vertical.vue"></preview>

## Titleposition

alignpropertyCan set Titleposition use align="left" 设置为行内的垂直divider。

<preview path="./demo/Divider/Align.vue"></preview>

## Props

| Parameter   | Description             | Type    | Options                | Default     |
| ------ | ---------------- | ------- | --------------------- | ---------- |
| type   | 水平还Yes垂直Type | String  | horizontal / vertical | horizontal |
| align  | dividerTitle的position | String  | left / right / center | center     |
| dashed | Whether to 虚线         | Boolean | false / true          | false      |
