---
title: 图片组件 Image
---

<b-back-top></b-back-top>

# 图片组件 Image

可预览的图片容器，并支持懒加载，自定义占位、加载失败等

## 基础用法

可通过 `fit` 来设置图片在容器的样式，同原生 `object-fit`。

<preview path="./demo/Image/Basic.vue"></preview>

## 加载中

可以设置加载中的文字或者占位内容

<preview path="./demo/Image/Loading.vue"></preview>

## 加载失败

可以设置加载失败占位内容。

<preview path="./demo/Image/Fail.vue"></preview>

## 懒加载

设置属性 `lazy` 可以开启图片懒加载功能，当图片可视时才会加载。

设置属性 `scroll-container` 可以指定滚动容器，如未设置，会自动寻找最近一个 `overflow` 值为 `auto` 或 `scroll` 的父元素。

<preview path="./demo/Image/Scroll.vue"></preview>

## 预览

设置属性 `preview` 可以开启图片预览模式，通过属性 `preview-list` 来设置图片列表，`initial-index` 属性设置打开预览时显示图片的索引。

预览时，可以使用 `←`、`→` 切换图片，`↑`、`↓` 缩放图片，`Space` 显示 `1:1 `图片，`ESC` 退出预览。

<preview path="./demo/Image/Preview.vue"></preview>

## 单独预览组件

图片预览组件 `ImagePreview` 也可以单独使用。

<preview path="./demo/Image/ImagePreview.vue"></preview>

## Props

| 参数             | 说明                                                        | 类型                 | 可选值 | 默认值                                                                     |
| ---------------- | ----------------------------------------------------------- | -------------------- | ------ | -------------------------------------------------------------------------- |
| src              | 图片地址                                                    | String               | —      | —                                                                          |
| alt              | 图片描述                                                    | String               | —      | —                                                                          |
| referrer-policy  | 原生属性                                                    | String               | —      | —                                                                          |
| width            | 宽度                                                        | String Number        | —      | —                                                                          |
| height           | 高度                                                        | String Number        | —      | —                                                                          |
| fit              | 图片适配容器模式包含 fill，contain，cover，none，scale-down | String               |        | —                                                                          |
| lazy             | 是否懒加载                                                  | Boolean              | —      | false                                                                      |
| scroll-container | 加载容器                                                    | String , HTMLElement | —      | false                                                                      |
| append-to-body   | 是否将弹层放置于 body 内                                    | Boolean              | —      | false                                                                      |
| mask-closable    | 是否允许点击遮罩层关闭                                      | Boolean              | —      | true                                                                       |
| preview-tip      | 是否显示预览提示和遮罩                                      | Boolean              | —      | true                                                                       |
| preview          | 是否图片预览                                                | Boolean              | —      | false                                                                      |
| preview-list     | 图片预览列表                                                | Array                | —      | []                                                                         |
| infinite         | 是否循环切换                                                | Boolean              | —      | true                                                                       |
| initial-index    | 打开预览的第一项                                            | Number               | —      | 0                                                                          |
| toolbar          | 图片预览操作栏选项，按数组顺序排序                          | Array                | —      | ['zoomIn', 'zoomOut', 'original', 'rotateLeft', 'rotateRight', 'download'] |
| initial-index    | 打开预览的第一项                                            | Number               | —      | 0                                                                          |
| failText         | 失败文字                                                    | String               | —      | 失败                                                                       |
| loadingText      | 加载文字                                                    | String               | —      | 加载中                                                                     |
| previewText      | 预览文字                                                    | String               | —      | 预览                                                                       |

## Events

| 事件名称 | 说明         | 返回值       |
| -------- | ------------ | ------------ |
| load     | 图片加载成功 | -            |
| error    | 图片加载失败 | -            |
| switch   | 图片预览切换 | -            |
| close    | 图片预览关闭 | Object       |
| click    | 图片点击     | initialIndex |

## Slots

| 名称        | 说明               |
| ----------- | ------------------ |
| placeholder | 自定义图片加载中   |
| error       | 自定义图片加载失败 |
| preview     | 自定义图片预览     |
