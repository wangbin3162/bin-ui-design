---
title: 时间线 Timeline
---

<b-back-top></b-back-top>

# 时间线 Timeline

时间线component

## Basic Usage

简单定义一个timeline的method

<preview path="./demo/Timeline/Basic.vue"></preview>

## 设置color

用各种color来标识不同状态，可以usesuccess、info、warning, danger or 自定义的color，Defaultis primary 。

<preview path="./demo/Timeline/Color.vue"></preview>

## 最后一个节点设置

通过添加`pending`property来标记最后一个为节点

<preview path="./demo/Timeline/Pending.vue"></preview>

## Custom节点icon

Defaults to 空心远点，可以自定义轴点icon

<preview path="./demo/Timeline/CustomIcon.vue"></preview>

## Timeline Props

| Parameter    | Description                 | Type    | Options | Default |
| ------- | -------------------- | ------- | ------ | ------ |
| pending | 指定Whether to 最后一个节点 | Boolean | —      | false  |

## TimelineItem Props

| Parameter    | Description        | Type   | Options                                               | Default  |
| ------- | ----------- | ------ | ---------------------------------------------------- | ------- |
| color   | 圆圈color    | String | primary,success,info,warning,danger, or 者自定义color值 | primary |
| dot-top | dot顶部offset | String | 自定义dot距离顶部的offset量                            | —       |

## TimelineItem Slot

| Name    | Description               |
| ------- | ------------------ |
| default | 基本Content           |
| dot     | 自定义timeline点Content |
