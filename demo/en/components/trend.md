---
title: Trend
---

<b-back-top></b-back-top>

# Trend

Trend symbol, marking upward and downward trends. Typically, green represents “good” and red represents “bad”, except in stock market scenarios.

## Basic Usage

Add a small icon behind the value to indicate the trend direction.

<preview path="./demo/Trend/Basic.vue"></preview>

## Color Reversal

Set `reverse-color` to reverse the icon colors for upward and downward trends. For example, negative values become red, and positive values become green.

<preview path="./demo/Trend/Reverse.vue"></preview>

## Textcolor

Set `text-color` to make the text display in color. This property is affected by `colorful` and `reverse-color`.

<preview path="./demo/Trend/Text.vue"></preview>

## Custom Styles

Can be overridden via styles, setting the colors for up and down, or overriding the text size.

<preview path="./demo/Trend/Color.vue"></preview>

## Customicon

Can set custom icon.

<preview path="./demo/Trend/Icon.vue"></preview>

## Props

| Parameter          | Description                                                    | Type    | Options     | Default |
| ------------- | ------------------------------------------------------- | ------- | ---------- | ------ |
| title         | Upward or downward indicator                                            | String  | up  or  down | -      |
| colorful      | Whether to display in color                                          | Boolean | -          | true   |
| reverse-color | Whether to reverse color                                            | Boolean | -          | false  |
| text-color    | Whether text shows color (affected by colorful and reverse-color) | Boolean | -          | false  |
