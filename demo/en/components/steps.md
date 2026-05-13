---
title: Step Steps
---

<b-back-top></b-back-top>

# Step Steps

Shows the steps of a task.

## Basic Usage

Basic usage. The component automatically determines the state of each step based on the current value.

<preview path="./demo/Steps/Basic.vue"></preview>

## Small Steps

Set `size="small"` to display small steps

<preview path="./demo/Steps/Small.vue"></preview>

## Customicon

Set `icon` to customize icons

<preview path="./demo/Steps/Icon.vue"></preview>

## Vertical Steps

Set `direction="vertical"` to enable vertical steps

<preview path="./demo/Steps/Vertical.vue"></preview>

## Set Status

Basic usage. The component automatically determines the state of each step based on the current value.

<preview path="./demo/Steps/Status.vue"></preview>

## Steps Props

| Parameter      | Description           | Type   | Options                                | Default     |
| --------- | -------------- | ------ | ------------------------------------- | ---------- |
| current   | Current step       | Number | —                                     | 0          |
| status    | Current step status | String | wait、process、finish、error、success | process    |
| size      | Size           | String | small                                 | —          |
| direction | Direction           | String | horizontal or vertical  | horizontal |

## Step Props

| Parameter    | Description           | Type   | Options                                | Default  |
| ------- | -------------- | ------ | ------------------------------------- | ------- |
| title   | Title           | String | —                                     | —       |
| status  | Current step status | String | wait、process、finish、error、success | process |
| content | Detailed content (optional) | String | —                                     | —       |
| icon    | Custom icon     | String | —                                     | —       |

## Step Slot

| Event Name  | Description       |
| ------- | ---------- |
| title   | Title       |
| content | Detailed content   |
| icon    | Custom icon |
