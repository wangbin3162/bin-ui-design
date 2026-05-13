---
title: Alert
---

<b-back-top></b-back-top>

# Alert

静态的展示一些区块，Tip or 者Warning，可以动态的去delete

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Alert/Basic.vue"></preview>

## 包含描述信息

自定义`#desc`插入描述Content。

<preview path="./demo/Alert/Desc.vue"></preview>

## icon

根据 `type` property自动添加不同icon， or 者自定义icon `slot` 。

<preview path="./demo/Alert/Icon.vue"></preview>

## Can disable 

设置property `closable` Can set Tip可Disable

<preview path="./demo/Alert/Close.vue"></preview>

## 顶部公告style

设置property `banner` 可以应用顶部公告的style。

<preview path="./demo/Alert/Banner.vue"></preview>

## Props

| Parameter      | Description         | Type    | Options                        | Default |
| --------- | ------------ | ------- | ----------------------------- | ------ |
| type      | WarningTipstyle | String  | info、success、warning、error | info   |
| closable  | Whether to 可Disable   | Boolean | —                             | false  |
| show-icon | Whether to show icon | Boolean | —                             | false  |

## Events

| Event Name | Description       | Return Value |
| ------ | ---------- | ------ |
| close  | Disable时Trigger | event  |

## Slot

| Name    | Description                   |
| ------- | ---------------------- |
| default | Warning/alert content           |
| desc    | WarningTip辅助性文字介绍 |
| icon    | 自定义iconContent         |
| close   | 自定义DisableContent         |
