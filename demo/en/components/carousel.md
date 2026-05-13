---
title: carousel Carousel
---

<b-back-top></b-back-top>

# carousel Carousel

carouselcomponent，Used for 滚动Showimage等

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Carousel/Basic.vue"></preview>

## 自动切换和速度

Can set `autoplay`自动切换，`trigger="hover"`hover切换

<preview path="./demo/Carousel/Auto.vue"></preview>

## Indicatorsstyle和position

<preview path="./demo/Carousel/Style.vue"></preview>

## card风格

Can set `card`card风格

<preview path="./demo/Carousel/Card.vue"></preview>

## Direction

Can set `direction`方向为竖直方向

<preview path="./demo/Carousel/Direction.vue"></preview>

## Props

| Parameter               | Description                                            | Type            | Options                                           | Default     |
| ------------------ | ----------------------------------------------- | --------------- | ------------------------------------------------ | ---------- |
| initial-index      | carousel的索引，从 0 开始，                         | Number          | —                                                | 0          |
| height             | 走马灯的Height，可填 auto  or 具体Height数值，in px | String / Number | —                                                | 200px      |
| loop               | Enable 循环                                    | Boolean         | —                                                | false      |
| autoplay           | Whether to 自动切换                                    | Boolean         | —                                                | false      |
| interval           | 自动切换的时间间隔，单位为毫秒                  | Number          | —                                                | 3000       |
| indicator-position | 指示器的position                                    | String          | inside （内部），outside（外部），none（不Show） | inside     |
| trigger            | Trigger mode                                        | String          | click，hover                                     | click      |
| arrow              | 切换箭头的Show时机                              | String          | hover，always，never                             | hover      |
| direction          | 方向                                            | String          | horizontal、vertical                             | horizontal |
| type               | Type                                            | String          | card                                             | —          |

### Events

| Event Name | Description                                     | Return Value          |
| ------ | ---------------------------------------- | --------------- |
| change | carousel切换时Trigger，目前激活的索引，原的索引 | oldValue, value |
