---
title: Tip Tooltip
---

<b-back-top></b-back-top>

# Tip Tooltip

文字Tippopover框，在mousehover时Show，代替了系统的titleTip。tooltip的default slot应该保证Yes一个dom or 者一个component

## Basic Usage

直接useDefaultslot即可

<preview path="./demo/Tooltip/Basic.vue"></preview>

## 多种position

use `placement` 来设置不同的position

<preview path="./demo/Tooltip/Placement.vue"></preview>

## 不同theme

设置 `theme` 来设置不同styletheme

<preview path="./demo/Tooltip/Theme.vue"></preview>

## 多行&长文本

可以useslot or 者长文本

<preview path="./demo/Tooltip/Slot.vue"></preview>

## 延时&Trigger时机&DisabledTip

可以use不同的parameter设置。

<preview path="./demo/Tooltip/More.vue"></preview>

## Props

| Parameter            | Description                     | Type    | Options                                                                                                    | Default         |
| --------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| v-model:visible | 状态Whether to 可见             | Boolean | —                                                                                                         | false          |
| content         | Show的Content               | String  | —                                                                                                         | —              |
| placement       | Position of the position         | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| disabled        | Disable dTip框           | Boolean | —                                                                                                         | false          |
| transition      | 自定义渐变animation           | String  | —                                                                                                         | fade-in-linear |
| show-arrow      | Whether to show arrow             | Boolean | —                                                                                                         | true           |
| theme           | theme                     | String  | dark  or  light                                                                                             | dark           |
| open-delay      | Delay before showing, in milliseconds       | Number  | —                                                                                                         | 0              |
| hide-delay      | Delay before hiding, in milliseconds       | Number  | —                                                                                                         | 0              |
| offset          | Position offset amount         | Number  | —                                                                                                         | 12             |
| appendToBody    | Append the overlay to body | Boolean | —                                                                                                         | true           |
