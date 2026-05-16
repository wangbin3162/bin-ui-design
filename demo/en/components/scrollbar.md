---
title: Scrollbar
---

<b-back-top></b-back-top>

# Scrollbar

This component provides a unified scrollbar experience because native browser scrollbars often look inconsistent across browsers.

## Basic Usage

Wrap content with `b-scrollbar`. The default slot is the content area, as shown below:

<preview path="./demo/Scrollbar/Basic.vue"></preview>

Note: If the content does not exceed the container height, no scrollbar is rendered.

## Max Height

Use `max-height` to limit the maximum height of the scroll area. The scrollbar only appears when the content exceeds this height.

<preview path="./demo/Scrollbar/MaxHeight.vue"></preview>

## Manual Scroll

Use the exposed `setScrollTop` and `setScrollLeft` methods to control the scroll position manually.

<preview path="./demo/Scrollbar/ManualScroll.vue"></preview>

## Always Show

Use `always` to keep the scrollbar visible instead of showing it only on hover.

<preview path="./demo/Scrollbar/Always.vue"></preview>

## Custom Scrollbar Styles

You can customize the scrollbar with props or override its styles with CSS.

<preview path="./demo/Scrollbar/Custom.vue"></preview>

## Infinite Scroll

`end-reached` is triggered when the scrollbar reaches an edge. It supports `top / bottom / left / right` and is commonly used for infinite loading.

<preview path="./demo/Scrollbar/InfiniteScroll.vue"></preview>

## Notes

- The parent container of `b-scrollbar` should have a fixed height
- `b-scrollbar` itself should usually be set to `height: 100%`
- If an unwanted horizontal scrollbar appears, add `.bin-scrollbar__wrap { overflow-x: hidden; }`

## Props

| Parameter         | Description                                                    | Type    | Options | Default |
| ------------ | ------------------------------------------------------- | ------- | ------ | ------ |
| distance     | Trigger distance for `end-reached` in pixels                    | Number  | -      | 0      |
| height       | Height of the scroll area                                       | String / Number | - | — |
| maxHeight    | Maximum height of the scroll area                               | String / Number | - | — |
| native       | Whether to use native scrolling                                 | Boolean | true   | false  |
| always       | Whether to always show the scrollbar instead of only on hover   | Boolean | true   | false  |
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
