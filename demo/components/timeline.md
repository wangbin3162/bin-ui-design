---
title: 时间线 Timeline
---

<b-back-top></b-back-top>

# 时间线 Timeline

时间线组件

## 基础用法

简单定义一个时间轴的方法

<preview path="./demo/Timeline/Basic.vue"></preview>

## 设置颜色

用各种颜色来标识不同状态，可以使用success、info、warning, danger或自定义的颜色，默认是 primary 。

<preview path="./demo/Timeline/Color.vue"></preview>

## 最后一个节点设置

通过添加`pending`属性来标记最后一个为节点

<preview path="./demo/Timeline/Pending.vue"></preview>

## 自定义节点图标

默认是空心远点，可以自定义轴点图标

<preview path="./demo/Timeline/CustomIcon.vue"></preview>

## Timeline Props

| 参数    | 说明                 | 类型    | 可选值 | 默认值 |
| ------- | -------------------- | ------- | ------ | ------ |
| pending | 指定是否最后一个节点 | Boolean | —      | false  |

## TimelineItem Props

| 参数    | 说明        | 类型   | 可选值                                               | 默认值  |
| ------- | ----------- | ------ | ---------------------------------------------------- | ------- |
| color   | 圆圈颜色    | String | primary,success,info,warning,danger,或者自定义颜色值 | primary |
| dot-top | dot顶部偏移 | String | 自定义dot距离顶部的偏移量                            | —       |

## TimelineItem Slot

| 名称    | 说明               |
| ------- | ------------------ |
| default | 基本内容           |
| dot     | 自定义时间轴点内容 |
