---
title: Alert
---

<b-back-top></b-back-top>

# Alert

Statically display blocks for tips or warnings, which can be dynamically dismissed.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Alert/Basic.vue"></preview>

## With Description

Customize description content by inserting via `#desc`.

<preview path="./demo/Alert/Desc.vue"></preview>

## icon

Different icons are automatically added based on the `type` property, or you can customize icons via the `slot`.

<preview path="./demo/Alert/Icon.vue"></preview>

## Can disable 

Set `closable` to make the alert dismissible

<preview path="./demo/Alert/Close.vue"></preview>

## Top Banner Style

Set `banner` to apply a top banner style.

<preview path="./demo/Alert/Banner.vue"></preview>

## Props

| Parameter      | Description         | Type    | Options                        | Default |
| --------- | ------------ | ------- | ----------------------------- | ------ |
| type      | WarningTipstyle | String  | info、success、warning、error | info   |
| closable  | Whether it can be dismissed   | Boolean | —                             | false  |
| show-icon | Whether to show icon | Boolean | —                             | false  |

## Events

| Event Name | Description       | Return Value |
| ------ | ---------- | ------ |
| close  | Triggers when dismissed | event  |

## Slot

| Name    | Description                   |
| ------- | ---------------------- |
| default | Warning/alert content           |
| desc    | Supplementary description text |
| icon    | Custom icon content         |
| close   | Custom close content         |
