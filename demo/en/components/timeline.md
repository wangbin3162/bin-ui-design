---
title: Timeline
---

<b-back-top></b-back-top>

# Timeline

Timeline component.

## Basic Usage

A simple way to define a timeline

<preview path="./demo/Timeline/Basic.vue"></preview>

## Set Color

Use various colors to indicate different states. You can use success, info, warning, danger, or a custom color. The default is primary.

<preview path="./demo/Timeline/Color.vue"></preview>

## Last Node Setting

Add the `pending` property to mark the last node

<preview path="./demo/Timeline/Pending.vue"></preview>

## Custom Node Icon

Defaults to a hollow circle; you can customize the axis point icon

<preview path="./demo/Timeline/CustomIcon.vue"></preview>

## Timeline Props

| Parameter    | Description                 | Type    | Options | Default |
| ------- | -------------------- | ------- | ------ | ------ |
| pending | Specifies whether it is the last node | Boolean | —      | false  |

## TimelineItem Props

| Parameter    | Description        | Type   | Options                                               | Default  |
| ------- | ----------- | ------ | ---------------------------------------------------- | ------- |
| color   | Circle color    | String | primary,success,info,warning,danger, or custom color value | primary |
| dot-top | Dot top offset | String | Custom offset from the dot to the top                            | —       |

## TimelineItem Slot

| Name    | Description               |
| ------- | ------------------ |
| default | Basic content           |
| dot     | Custom timeline dot content |
