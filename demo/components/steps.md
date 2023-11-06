---
title: 步骤 Steps
---

<b-back-top></b-back-top>

# 步骤 Steps

提示某个任务的步骤

## 基础用法

基本用法，组件会根据current自动判断各步骤状态。

<preview path="./demo/Steps/Basic.vue"></preview>

## 小型步骤条

设置 `size="small"`开启显示小型步骤条

<preview path="./demo/Steps/Small.vue"></preview>

## 自定义图标

设置 `icon`自定义设置图标

<preview path="./demo/Steps/Icon.vue"></preview>

## 竖型步骤

设置`direction="vertical"`可以开启竖向的步骤

<preview path="./demo/Steps/Vertical.vue"></preview>

## 设置状态

基本用法，组件会根据current自动判断各步骤状态。

<preview path="./demo/Steps/Status.vue"></preview>

## Steps Props

| 参数      | 说明           | 类型   | 可选值                                | 默认值     |
| --------- | -------------- | ------ | ------------------------------------- | ---------- |
| current   | 当前步骤       | Number | —                                     | 0          |
| status    | 当前步骤的状态 | String | wait、process、finish、error、success | process    |
| size      | 大小           | String | small                                 | —          |
| direction | 方向           | String | horizontal（水平）或vertical（垂直）  | horizontal |

## Step Props

| 参数    | 说明           | 类型   | 可选值                                | 默认值  |
| ------- | -------------- | ------ | ------------------------------------- | ------- |
| title   | 标题           | String | —                                     | —       |
| status  | 当前步骤的状态 | String | wait、process、finish、error、success | process |
| content | 详细内容(可选) | String | —                                     | —       |
| icon    | 自定义图标     | String | —                                     | —       |

## Step Slot

| 事件名  | 说明       |
| ------- | ---------- |
| title   | 标题       |
| content | 详细内容   |
| icon    | 自定义图标 |
