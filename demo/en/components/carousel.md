---
title: carousel Carousel
---

<b-back-top></b-back-top>

# carousel Carousel

Carousel component, used for scrolling display of images etc.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Carousel/Basic.vue"></preview>

## Auto Switch and Speed

Can set `autoplay` for auto switching, and `trigger="hover"` for hover switching

<preview path="./demo/Carousel/Auto.vue"></preview>

## Indicator Style and Position

<preview path="./demo/Carousel/Style.vue"></preview>

## Card Style

Can set `card` for card style

<preview path="./demo/Carousel/Card.vue"></preview>

## Direction

Can set `direction` to vertical

<preview path="./demo/Carousel/Direction.vue"></preview>

## Props

| Parameter               | Description                                            | Type            | Options                                           | Default     |
| ------------------ | ----------------------------------------------- | --------------- | ------------------------------------------------ | ---------- |
| initial-index      | Index of the carousel, starting from 0                         | Number          | —                                                | 0          |
| height             | Carousel height, can be `auto` or a specific pixel value | String / Number | —                                                | 200px      |
| loop               | Enable looping                                    | Boolean         | —                                                | false      |
| autoplay           | Whether to auto switch                                    | Boolean         | —                                                | false      |
| interval           | Auto switch interval, in milliseconds                  | Number          | —                                                | 3000       |
| indicator-position | Position of indicators                                    | String          | inside, outside, none | inside     |
| trigger            | Trigger mode                                        | String          | click, hover                                     | click      |
| arrow              | When to show switch arrows                              | String          | hover, always, never                             | hover      |
| direction          | Direction                                            | String          | horizontal, vertical                             | horizontal |
| type               | Type                                            | String          | card                                             | —          |

### Events

| Event Name | Description                                     | Return Value          |
| ------ | ---------------------------------------- | --------------- |
| change | Triggers when carousel switches, returns the currently active index and the original index | oldValue, value |
