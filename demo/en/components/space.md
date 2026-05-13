---
title: Space
---

<b-back-top></b-back-top>

# Space

Can set component和不同dom之间的spacing，Sets 相同间隔，方便use

## Basic Usage

<preview path="./demo/Space/Basic.vue"></preview>

## Verticalspacing

<preview path="./demo/Space/Vertical.vue"></preview>

## spacing大小

<preview path="./demo/Space/Size.vue"></preview>

## 任意数字大小

<preview path="./demo/Space/Number.vue"></preview>

## 换行

<preview path="./demo/Space/Wrap.vue"></preview>

## Separator

<preview path="./demo/Space/Split.vue"></preview>

## Alignment

设置该值可以调整所有子节点在容器内的Alignment, 可设置的值与 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 一致

<preview path="./demo/Space/Align.vue"></preview>

## Space Props

| Parameter      | Description                      | Type                                      | Options              | Default     |
| --------- | ------------------------- | ----------------------------------------- | ------------------- | ---------- |
| alignment | alignment的方式                | String                                    | -                   | 'center'   |
| class     | 类名                      | String / Array<Object \| String> / Object | -                   | -          |
| direction | 排列的方向                | String                                    | vertical/horizontal | horizontal |
| prefixCls | 给 space-items 的类名前缀 | String                                    | bin-space           | -          |
| style     | 额外style                  | String / Array<Object \| String> / Object | -                   | -          |
| spacer    | 间隔符                    | String / Number / VNode                   | -                   | -          |
| size      | 间隔大小                  | String / Number / [Number, Number]        | -                   | 'small'    |
| wrap      | 设置Whether to 自动折行          | Boolean                                   | true / false        | false      |

## Space Slot

| name    | Description               |
| ------- | ------------------ |
| default | 需要添加间隔的元素 |
