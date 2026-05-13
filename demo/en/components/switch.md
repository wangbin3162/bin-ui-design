---
title: Switch
---

<b-back-top></b-back-top>

# Switch

A switch selector for toggling between two states.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Switch/Basic.vue"></preview>

## Size and Color

<preview path="./demo/Switch/Size.vue"></preview>

## Text or Icon

<preview path="./demo/Switch/Icon.vue"></preview>

## Disabled

<preview path="./demo/Switch/Disabled.vue"></preview>

## loading

<preview path="./demo/Switch/Loading.vue"></preview>

## Confirm Before Toggle

Set `confirm` to require confirmation before toggling, and use `confirm-txt` to customize the confirmation text.

<preview path="./demo/Switch/Confirm.vue"></preview>

## 阻止切换

可以配合loading和confirm一级before-change函数props来配合实现阻止切换

<preview path="./demo/Switch/Confirm2.vue"></preview>

## Props

| Parameter           | Description                                                       | Type                    | Options                | Default  |
| -------------- | ---------------------------------------------------------- | ----------------------- | --------------------- | ------- |
| modelValue     | 指定当前Whether to select，可以use v-model 双向绑定数据            | Boolean                 | —                     | false   |
| size           | switch的size。建议switch如果use了2个汉字的文字，use large。  | String                  | large、small、default | default |
| disabled       | Disabledswitch                                                   | Boolean                 | —                     | false   |
| true-value     | select时的值，当use类似 1 和 0 来判断Whether to select时会很有用     | String, Number, Boolean | —                     | true    |
| false-value    | 没有select时的值，当use类似 1 和 0 来判断Whether to select时会很有用 | String, Number, Boolean | —                     | false   |
| active-color   | switch open时的background色                                      | string                  | —                     | —       |
| inactive-color | switch Disable时的background色                                      | string                  | —                     | —       |
| confirm        | Enable切换前拦截功能                                         | Boolean                 | —                     | false   |
| confirm-txt    | 切换拦截文字                                               | string                  | —                     | —       |
| loading        | Loading...状态                                                 | Boolean                 | —                     | —       |
| beforeChange   | 改变状态前拦截函数，return type Promise or boolean         | Function                | —                     | —       |

## Events

| Event Name | Description                           | Return Value      |
| ------ | ------------------------------ | ----------- |
| change | switch变化时Trigger，返回当前的状态 | true、false |

## Slot

| Event Name | Description                   |
| ------ | ---------------------- |
| open   | 自定义Showopen时的Content |
| close  | 自定义ShowDisable时的Content |
