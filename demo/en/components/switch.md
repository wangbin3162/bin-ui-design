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

## Prevent Toggle

Can use loading, confirm, and the before-change function prop together to prevent toggling.

<preview path="./demo/Switch/Confirm2.vue"></preview>

## Props

| Parameter           | Description                                                       | Type                    | Options                | Default  |
| -------------- | ---------------------------------------------------------- | ----------------------- | --------------------- | ------- |
| modelValue     | Specifies whether selected; use v-model for two-way binding            | Boolean                 | —                     | false   |
| size           | Switch size. Large is recommended when the switch uses 2 Chinese characters.  | String                  | large、small、default | default |
| disabled       | Disabled switch                                                   | Boolean                 | —                     | false   |
| true-value     | Value when selected; useful when using values like 1 and 0 to determine selection     | String, Number, Boolean | —                     | true    |
| false-value    | Value when not selected; useful when using values like 1 and 0 to determine selection | String, Number, Boolean | —                     | false   |
| active-color   | Background color when switch is on                                      | string                  | —                     | —       |
| inactive-color | Background color when switch is off                                      | string                  | —                     | —       |
| confirm        | Enable confirmation before toggling                                         | Boolean                 | —                     | false   |
| confirm-txt    | Toggle confirmation text                                               | string                  | —                     | —       |
| loading        | Loading state                                                 | Boolean                 | —                     | —       |
| beforeChange   | Interceptor function before state change; returns Promise or boolean         | Function                | —                     | —       |

## Events

| Event Name | Description                           | Return Value      |
| ------ | ------------------------------ | ----------- |
| change | Triggers when switch changes, returns current state | true、false |

## Slot

| Event Name | Description                   |
| ------ | ---------------------- |
| open   | Custom content when open |
| close  | Custom content when closed |
