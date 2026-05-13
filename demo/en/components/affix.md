---
title: 图钉 Affix
---

<b-back-top></b-back-top>

# 图钉 Affix

## Basic Usage

原生滚动相对于window窗口固定，也可以结合scrollbar进行configuration

<preview path="./demo/Affix/Basic.vue"></preview>

## 固定position

Can set 固定距离底部的position

<preview path="./demo/Affix/Position.vue"></preview>

## Props

| Parameter     | Description                 | Type   | Options      | Default |
| -------- | -------------------- | ------ | ----------- | ------ |
| offset   | 距离窗口positionTrigger     | Number | —           | 0      |
| position | 可设置距离顶部 or 底部 | String | top、bottom | top    |
| z-index  | Z-index level                 | Number | —           | 10     |

## Events

| Event Name | Description                                       | Return Value     |
| ------ | ------------------------------------------ | ---------- |
| change | 在固定状态发生改变时Trigger                   | true/false |
| scroll | 滚动响应event ,返回对象包含scrollTop, fixed | Object     |

## Slot

| Name    | Description         |
| ------- | ------------ |
| default | Warning/alert content |
