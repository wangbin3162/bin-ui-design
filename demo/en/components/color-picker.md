---
title: ColorPicker
---

<b-back-top></b-back-top>

# ColorPicker

Used for color value selection

## Basic Usage

<preview path="./demo/ColorPicker/Basic.vue"></preview>

## With Alpha/opacity

Supports Alpha/opacity selection

<preview path="./demo/ColorPicker/Alpha.vue"></preview>

## With Preset Colors

Provides preset color swatches

<preview path="./demo/ColorPicker/Colors.vue"></preview>

## Disabled State

Sets the disabled state

<preview path="./demo/ColorPicker/Disabled.vue"></preview>

## Different Sizes

Four different sizes

<preview path="./demo/ColorPicker/Size.vue"></preview>

## Props

| Parameter            | Description                      | Type    | Options                | Default                                                |
| --------------- | ------------------------- | ------- | --------------------- | ----------------------------------------------------- |
| value / v-model | Bound value                    | string  | —                     | —                                                     |
| disabled        | Disable d                  | boolean | —                     | false                                                 |
| size            | size                      | string  | —                     | medium / small / mini                                 |
| show-alpha      | Whether to support Alpha/opacity selection        | boolean | —                     | false                                                 |
| color-format    | Color format written to v-model | string  | hsl / hsv / hex / rgb | hex (when show-alpha is false) / rgb (when show-alpha is true) |
| popper-class    | Custom class name for ColorPicker dropdown  | string  | —                     | —                                                     |
| colors          | Preset colors                | array   | —                     | —                                                     |

## Events

| Event Name      | Description                               | Callback Parameters         |
| ------------- | ---------------------------------- | ---------------- |
| change        | Triggers when bound value changes                 | Current value           |
| active-change | Triggers when the currently displayed color in the panel changes | Currently displayed color value |
