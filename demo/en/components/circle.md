---
title: Circle
---

<b-back-top></b-back-top>

# Circle

Show环形图，Can display 任务percentage or 者Yes统计某些数据的占比情况

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Circle/Basic.vue"></preview>

## 动态进度

可以配合外部操作进度

<preview path="./demo/Circle/Progress.vue"></preview>

## 设置style

可以configuration更多的自定义style

<preview path="./demo/Circle/Style.vue"></preview>

## DashboardMode

通过设置property `dashboard`，可以很方便地实现仪表盘style。

<preview path="./demo/Circle/Dashboard.vue"></preview>

## Props

| Parameter           | Description                      | Type    | Options                   | Default  |
| -------------- | ------------------------- | ------- | ------------------------ | ------- |
| percent        | percentage                    | Number  | —                        | 0       |
| size           | 图表的Width和Height，in px | Number  | —                        | 120     |
| stroke-linecap | progress circle顶端的形状          | String  | square（方）/round（圆） | round   |
| stroke-width   | progress circle的线宽，in px     | Number  | —                        | 6       |
| stroke-color   | progress circle的color              | String  | —                        | #2db7f5 |
| trail-width    | progress circlebackground的线宽，in px | Number  | —                        | 5       |
| trail-color    | progress circlebackground的color          | String  | —                        | #eaeef2 |
| dashboard      | Whether to show 为仪表盘          | Boolean | —                        | false   |
