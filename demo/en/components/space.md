---
title: Space
---

<b-back-top></b-back-top>

# Space

Sets spacing between components and different DOM elements with consistent intervals for easy use.

## Basic Usage

<preview path="./demo/Space/Basic.vue"></preview>

## Verticalspacing

<preview path="./demo/Space/Vertical.vue"></preview>

## Spacing Size

<preview path="./demo/Space/Size.vue"></preview>

## Custom Number Size

<preview path="./demo/Space/Number.vue"></preview>

## Wrap

<preview path="./demo/Space/Wrap.vue"></preview>

## Separator

<preview path="./demo/Space/Split.vue"></preview>

## Alignment

Set this value to adjust the alignment of all child nodes within the container. Available values are consistent with [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

<preview path="./demo/Space/Align.vue"></preview>

## Space Props

| Parameter      | Description                      | Type                                      | Options              | Default     |
| --------- | ------------------------- | ----------------------------------------- | ------------------- | ---------- |
| alignment | Alignment mode                | String                                    | -                   | 'center'   |
| class     | Class name                      | String / Array<Object \| String> / Object | -                   | -          |
| direction | Arrangement direction                | String                                    | vertical/horizontal | horizontal |
| prefixCls | Class name prefix for space-items | String                                    | bin-space           | -          |
| style     | Additional styles                  | String / Array<Object \| String> / Object | -                   | -          |
| spacer    | Spacer                    | String / Number / VNode                   | -                   | -          |
| size      | Spacing size                  | String / Number / [Number, Number]        | -                   | 'small'    |
| wrap      | Whether to auto wrap          | Boolean                                   | true / false        | false      |

## Space Slot

| name    | Description               |
| ------- | ------------------ |
| default | Elements to which spacing should be added |
