---
title: Scrollbar
---

<b-back-top></b-back-top>

# Scrollbar

Since default browser scrollbars are unattractive and inconsistent across different browsers, this scroll component is provided for implementing scrolling.

## Basic Usage

Wrap content with `b-scrollbar`; the default `slot` is the content display area. The scroll structure of the current example is as follows:

<preview path="./demo/Scrollbar/Basic.vue"></preview>

Note: If the content area does not exceed the container height, no scrollbar will be generated.

## Max Height

Use `max-height` to limit the maximum height of the scroll area. The scrollbar only appears when the content exceeds this height.

<preview path="./demo/Scrollbar/MaxHeight.vue"></preview>

## Manual Scroll

Use the exposed `setScrollTop` and `setScrollLeft` methods to control the scroll position manually.

<preview path="./demo/Scrollbar/ManualScroll.vue"></preview>

## Always Show

Use `always` to keep the scrollbar always visible

<preview path="./demo/Scrollbar/Always.vue"></preview>

## Custom Scrollbar Styles

You can customize scrollbar styles using different props, or use CSS for style modifications.

<preview path="./demo/Scrollbar/Custom.vue"></preview>

## Infinite Scroll

`end-reached` is triggered when the scrollbar reaches an edge. It supports `top / bottom / left / right` and is commonly used for infinite loading.

<preview path="./demo/Scrollbar/InfiniteScroll.vue"></preview>

## Notes

- The parent layer of b-scrollbar must have a fixed height
- The height of b-scrollbar must be set to 100%
- If a horizontal scrollbar appears, add CSS (.bin-scrollbar\_\_wrap{overflow-x:hidden;})

## Props

| Parameter         | Description                                                    | Type    | Options | Default |
| ------------ | ------------------------------------------------------- | ------- | ------ | ------ |
| distance     | Trigger distance for `end-reached` in pixels                    | Number  | -      | 0      |
| height       | Height of the scroll area                                       | String / Number | - | — |
| maxHeight    | Maximum height of the scroll area                               | String / Number | - | — |
| native       | Whether to use native scrolling                                 | Boolean | true   | false  |
| always       | Whether to always show, rather than show on hover               | Boolean | true   | false  |
| wrapStyle    | Inline style for the wrap container                             | String / Object / Array | - | — |
| wrapClass    | Class name for the wrap container                               | String / Array | - | — |
| viewClass    | Class name for the view container                               | String / Array | - | — |
| viewStyle    | Inline style for the view container                             | String / Object / Array | - | — |
| noresize     | If the container size does not change, setting this to true can optimize performance | Boolean | true   | false  |
| tag          | Element tag of the view container                               | String  | -      | div    |
| minSize      | Minimum scrollbar size                                          | Number  | -      | 20     |
| tabindex     | Tabindex of the wrap container                                  | String / Number | - | — |
| barStyle     | Scrollbar thumb style                                           | Object  | -      | {}     |
| barWrapStyle | Scrollbar bar container style                                   | Object  | -      | {}     |

## Events

| Event Name  | Description                        | Callback |
| ----------- | ---------------------------------- | -------- |
| scroll      | Triggered when scrolling           | `{ scrollTop, scrollLeft }` |
| end-reached | Triggered when an edge is reached  | `direction: 'top' \| 'bottom' \| 'left' \| 'right'` |

## Methods

| Method Name   | Description                        | Parameters |
| ------------- | ---------------------------------- | ---------- |
| handleScroll  | Manually trigger scroll handling   | —          |
| scrollTo      | Scroll to a specific position      | `(options)` or `(x, y)` |
| setScrollTop  | Set vertical scroll distance       | `(scrollTop: number)` |
| setScrollLeft | Set horizontal scroll distance     | `(scrollLeft: number)` |
| update        | Manually update scrollbar state    | —          |
| wrapRef       | Scroll container instance ref      | —          |
