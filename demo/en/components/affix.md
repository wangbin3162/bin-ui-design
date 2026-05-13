---
title: Affix
---

<b-back-top></b-back-top>

# Affix

## Basic Usage

Fixes elements relative to the window during native scrolling; can also be configured with scrollbar.

<preview path="./demo/Affix/Basic.vue"></preview>

## Fixed Position

Can set a fixed position at a distance from the bottom

<preview path="./demo/Affix/Position.vue"></preview>

## Props

| Parameter     | Description                 | Type   | Options      | Default |
| -------- | -------------------- | ------ | ----------- | ------ |
| offset   | Trigger offset from window position     | Number | —           | 0      |
| position | Can be set to offset from top or bottom | String | top、bottom | top    |
| z-index  | Z-index level                 | Number | —           | 10     |

## Events

| Event Name | Description                                       | Return Value     |
| ------ | ------------------------------------------ | ---------- |
| change | Triggers when fixed state changes                   | true/false |
| scroll | Scroll response event, returns an object containing scrollTop and fixed | Object     |

## Slot

| Name    | Description         |
| ------- | ------------ |
| default | Warning/alert content |
