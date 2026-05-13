---
title: Divider
---

<b-back-top></b-back-top>

# Divider

A divider for separating content. Can separate different text paragraphs, inline text, and links.

## Horizontal Divider

The default is a horizontal divider. Text can be placed in the middle. Dashed lines are supported.

<preview path="./demo/Divider/Basic.vue"></preview>

## Verticaldivider

Use type="vertical" to set an inline vertical divider.

<preview path="./demo/Divider/Vertical.vue"></preview>

## Titleposition

The `align` property sets the title position. Use align="left" for left-aligned title.

<preview path="./demo/Divider/Align.vue"></preview>

## Props

| Parameter   | Description             | Type    | Options                | Default     |
| ------ | ---------------- | ------- | --------------------- | ---------- |
| type   | Horizontal or vertical type | String  | horizontal / vertical | horizontal |
| align  | Divider title position | String  | left / right / center | center     |
| dashed | Whether to use dashed line         | Boolean | false / true          | false      |
