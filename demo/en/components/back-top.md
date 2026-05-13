---
title: Backtop
---

<b-back-top></b-back-top>

# Backtop

Used when page content is long and needs a quick way to scroll back to the top, typically placed at the bottom-right corner of the page. If `target` is specified, it monitors scrolling within a specific container.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Backtop/Basic.vue"></preview>

## Usage with Scrollbar

When used with `scrollbar`, no additional configuration is needed.

Note: If nested inside a custom scroll component, you need to place the `BackTop` component inside the `Scrollbar` component.

<preview path="./demo/Backtop/Scrollbar.vue"></preview>

## Props

| Parameter           | Description                                                        | Type   | Options | Default |
| -------------- | ----------------------------------------------------------- | ------ | ------ | ------ |
| visible-height | The BackTop button is shown when the page scroll height reaches this value                         | Number | —      | 400    |
| target         | Target container identifier; specify the target's class or id to set the scroll listener | String | —      | —      |
| bottom         | Distance from the bottom of the component                                          | Number | —      | 50     |
| right          | Distance from the right of the component                                          | Number | —      | 50     |
| duration       | Scroll animation duration, in milliseconds                                 | Number | —      | 1000   |

## Events

| Event Name | Description           | Return Value |
| ------ | -------------- | ------ |
| click  | Triggers when the button is clicked | —     |
