---
title: 返回顶部 Backtop
---

<b-back-top></b-back-top>

# 返回顶部 Backtop

Used when page content is long and needs a quick way to scroll back to the top，Typically placed at the bottom-right corner of the page。如果指定 `target` use则Yes针对某个容器的滚动

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Backtop/Basic.vue"></preview>

## scrollbar用法

如果结合 `scrollbar` use则不需要configurationOther项

Note：If nested inside a custom scroll component, you need to `BackTop` component放置于 `Scrollbar` component内部

<preview path="./demo/Backtop/Scrollbar.vue"></preview>

## Props

| Parameter           | Description                                                        | Type   | Options | Default |
| -------------- | ----------------------------------------------------------- | ------ | ------ | ------ |
| visible-height | 页面滚动Height达到该值时才ShowBackTop                         | Number | —      | 400    |
| target         | 目标容器标识，可设置目标的class、id标识来制定滚动监听的Content | String | —      | —      |
| bottom         | component距离底部的距离                                          | Number | —      | 50     |
| right          | component距离右部的距离                                          | Number | —      | 50     |
| duration       | 滚动animation持续时间，Unit 毫秒                                 | Number | —      | 1000   |

## Events

| Event Name | Description           | Return Value |
| ------ | -------------- | ------ |
| click  | clickbutton时Trigger | —     |
