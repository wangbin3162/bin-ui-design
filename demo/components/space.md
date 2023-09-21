---
title: 间距 Space
---

# 间距 Space

可以设置组件和不同dom之间的间距，用于设置相同间隔，方便使用

## 基础用法

<preview path="./demo/Space/Basic.vue"></preview>

## 垂直间距

<preview path="./demo/Space/Vertical.vue"></preview>

## 间距大小

<preview path="./demo/Space/Size.vue"></preview>

## 任意数字大小

<preview path="./demo/Space/Number.vue"></preview>

## 换行

<preview path="./demo/Space/Wrap.vue"></preview>

## 分隔符

<preview path="./demo/Space/Split.vue"></preview>

## 对齐方式

设置该值可以调整所有子节点在容器内的对齐方式, 可设置的值与 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 一致

<preview path="./demo/Space/Align.vue"></preview>

## Space Props

| 参数      | 说明                      | 类型                                      | 可选值              | 默认值     |
| --------- | ------------------------- | ----------------------------------------- | ------------------- | ---------- |
| alignment | 对齐的方式                | string                                    | -                   | 'center'   |
| class     | 类名                      | string / Array<Object \| String> / Object | -                   | -          |
| direction | 排列的方向                | string                                    | vertical/horizontal | horizontal |
| prefixCls | 给 space-items 的类名前缀 | string                                    | bin-space           | -          |
| style     | 额外样式                  | string / Array<Object \| String> / Object | -                   | -          |
| spacer    | 间隔符                    | string / number / VNode                   | -                   | -          |
| size      | 间隔大小                  | string / number / [number, number]        | -                   | 'small'    |
| wrap      | 设置是否自动折行          | boolean                                   | true / false        | false      |

## Space Slot

| name    | 说明               |
| ------- | ------------------ |
| default | 需要添加间隔的元素 |
