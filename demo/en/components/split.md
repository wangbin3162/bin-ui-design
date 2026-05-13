---
title: Split
---

<b-back-top></b-back-top>

# Split

Split panels can be freely resized by dragging the divider

## Basic Usage

<preview path="./demo/Split/Basic.vue"></preview>

## Horizontal Split

<preview path="./demo/Split/Horizontal.vue"></preview>

## Nestinguse

<preview path="./demo/Split/Mixed.vue"></preview>

## Set Default Styles

If default styles are set, double-clicking the divider resets to the configured default size.

<preview path="./demo/Split/Normal.vue"></preview>

## Hidedivider

<preview path="./demo/Split/HideLine.vue"></preview>

## Props

| Parameter               | Description                                                                         | Type    | Options                   | Default   |
| ------------------ | ---------------------------------------------------------------------------- | ------- | ------------------------ | -------- |
| split              | Split type                                                                     | String  | 'vertical', 'horizontal' | vertical |
| min                | Minimum pixels                                                                     | Number  | —                        | 60       |
| default            | Default percentage                                                                   | Number  | —                        | 200      |
| default-wrap-style | Default container styles, an array that specifies the sizes of the two containers in px or percentage, applied on initialization | Array[] | —                        | —        |
| hide-line          | Hide divider                                                               | Boolean | —                        | false    |
| resizer-color      | Custom divider color (hide-line is ignored when custom color is set)                              | String  | —                        | —        |
| class-name         | Custom resizer style class name                                                        | String  | —                        | —        |

## Events

| Event Name | Description     | Return Value  |
| ------ | -------- | ------- |
| resize | Reset size | percent |

## Slot

| Name  | Description                                                 |
| ----- | ---------------------------------------------------- |
| left  | Left panel when split is vertical, top panel when horizontal |
| right | Right panel when split is vertical, bottom panel when horizontal |
