---
title: 加载 Loading
---

# 加载 Loading

获取数据或加载中时显示，提示用户正在等待中。

## 基础用法

最简单的Loading

<preview path="./demo/Loading/Basic.vue"></preview>

## 居中固定

可以在父级元素中居中固定 默认是剧中固定的，fix设置为false后用于加载类似下拉加载的功能

<preview path="./demo/Loading/Center.vue"></preview>

## 自定义内容

可以自定义文字和内容

<preview path="./demo/Loading/Custom.vue"></preview>

## 切换显示状态

切换显示状态

<preview path="./demo/Loading/Ctrl.vue"></preview>

## Props

| 参数     | 说明               | 类型    | 可选值  | 默认值 |
| -------- | ------------------ | ------- | ------- | ------ |
| showIcon | 显示加载图标       | String  | loading | —      |
| showText | 显示加载的文字     | String  | loading | —      |
| fix      | 是否固定于父级中心 | Boolean | —       | true   |
| size     | 文字显示的大小     | Number  | —       | —      |
