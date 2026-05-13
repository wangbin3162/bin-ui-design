---
title: Collapse
---

<b-back-top></b-back-top>

# Collapse

需要进行分段Show时usecollapse面板

## Basic Usage

Default可以同时expand多个面板，Can set Defaultexpand第几个。

<preview path="./demo/Collapse/Basic.vue"></preview>

## Accordion ModeMode

设置 `accordion` 手风琴ModeDefault只能Enable一个

<preview path="./demo/Collapse/Accordion.vue"></preview>

## 简单Mode和自定义头

`simple` 设置简单Mode，也Can be set via  slot自定义头部

<preview path="./demo/Collapse/Simple.vue"></preview>

## 容器component

use `b-collapse-wrap` component可以单独use独立的collapse面板

<preview path="./demo/Collapse/Wrap.vue"></preview>

## Props

| Parameter       | Description                                             | Type         | Options | Default |
| ---------- | ------------------------------------------------ | ------------ | ------ | ------ |
| modelValue | 当前激活的面板的 name，可以use v-model 双向绑定 | Array/String | —      | —      |
| accordion  | Enable 手风琴Mode，Enable后每次至多expand一个面板   | Boolean      | —      | false  |
| simple     | Enable 简洁Mode                                 | Boolean      | —      | false  |

## Events

| Event Name | Description                                                   | Return Value  |
| ------ | ------------------------------------------------------ | ------- |
| change | 切换面板时Trigger，返回Currently expand的面板的 key，格式为数组 | array[] |

## Slot

| Name  | Description       |
| ----- | ---------- |
| title | 面板头Content |

## CollapseWrap Props

| Parameter     | Description                               | Type    | Options            | Default |
| -------- | ---------------------------------- | ------- | ----------------- | ------ |
| value    | Whether to expand                           | boolean | —                 | true   |
| title    | Title                               | string  | —                 | —      |
| collapse | Whether to 可以expand收起                   | boolean | —                 | false  |
| shadow   | shadow，设置为noneCan enable 简单Mode | string  | none/自定义shadow | —      |

## CollapseWrap Slot

| Name  | Description             |
| ----- | ---------------- |
| title | 面板头Content       |
| right | 右侧插入Content区域 |
