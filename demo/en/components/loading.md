---
title: loading Loading
---

<b-back-top></b-back-top>

# loading Loading

Get data or Loading...时Show，Tip用户正在等待中。

## Basic Usage

最简单的Loading

<preview path="./demo/Loading/Basic.vue"></preview>

## center固定

可以在父级元素中center固定 Defaults to 剧中固定的，fix设置为false后Used for loading类似下拉loading的功能

<preview path="./demo/Loading/Center.vue"></preview>

## Custom content

可以自定义文字和Content

<preview path="./demo/Loading/Custom.vue"></preview>

## 切换Show状态

切换Show状态

<preview path="./demo/Loading/Ctrl.vue"></preview>

## Props

| Parameter     | Description               | Type    | Options  | Default |
| -------- | ------------------ | ------- | ------- | ------ |
| showIcon | Showloadingicon       | String  | loading | —      |
| showText | Showloading的文字     | String  | loading | —      |
| fix      | Whether to 固定于父级中心 | Boolean | —       | true   |
| size     | 文字Show的大小     | Number  | —       | —      |
