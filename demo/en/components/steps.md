---
title: Step Steps
---

<b-back-top></b-back-top>

# Step Steps

Tip某个任务的Step

## Basic Usage

基本用法，component会根据current自动判断各Step状态。

<preview path="./demo/Steps/Basic.vue"></preview>

## 小型steps

设置 `size="small"`EnableShow小型steps

<preview path="./demo/Steps/Small.vue"></preview>

## Customicon

设置 `icon`自定义设置icon

<preview path="./demo/Steps/Icon.vue"></preview>

## 竖型Step

设置`direction="vertical"`Can enable 竖向的Step

<preview path="./demo/Steps/Vertical.vue"></preview>

## 设置状态

基本用法，component会根据current自动判断各Step状态。

<preview path="./demo/Steps/Status.vue"></preview>

## Steps Props

| Parameter      | Description           | Type   | Options                                | Default     |
| --------- | -------------- | ------ | ------------------------------------- | ---------- |
| current   | 当前Step       | Number | —                                     | 0          |
| status    | 当前Step的状态 | String | wait、process、finish、error、success | process    |
| size      | 大小           | String | small                                 | —          |
| direction | 方向           | String | horizontal（水平） or vertical（垂直）  | horizontal |

## Step Props

| Parameter    | Description           | Type   | Options                                | Default  |
| ------- | -------------- | ------ | ------------------------------------- | ------- |
| title   | Title           | String | —                                     | —       |
| status  | 当前Step的状态 | String | wait、process、finish、error、success | process |
| content | 详细Content(可选) | String | —                                     | —       |
| icon    | 自定义icon     | String | —                                     | —       |

## Step Slot

| Event Name  | Description       |
| ------- | ---------- |
| title   | Title       |
| content | 详细Content   |
| icon    | 自定义icon |
