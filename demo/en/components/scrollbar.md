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

## Always Show

Use `always` to keep the scrollbar always visible

<preview path="./demo/Scrollbar/Always.vue"></preview>

## Custom Scrollbar Styles

You can customize scrollbar styles using different props, or use CSS for style modifications.

<preview path="./demo/Scrollbar/Custom.vue"></preview>

## Notes

- The parent layer of b-scrollbar must have a fixed height
- The height of b-scrollbar must be set to 100%
- If a horizontal scrollbar appears, add CSS (.bin-scrollbar\_\_wrap{overflow-x:hidden;})

## Props

| Parameter         | Description                                                    | Type    | Options | Default |
| ------------ | ------------------------------------------------------- | ------- | ------ | ------ |
| native       | Whether to use native scrolling (hide native scrollbar)                       | Boolean | true   | false  |
| always       | Whether to always show, rather than show on hover                              | Boolean | true   | false  |
| wrapStyle    | Inline style for custom wrap container                           | Object  | -      | {}     |
| wrapClass    | Class name for custom wrap container style                           | Object  | -      | {}     |
| viewClass    | Class name for custom view container style                           | Object  | -      | {}     |
| viewStyle    | Inline style for custom view container                           | Object  | -      | {}     |
| barStyle     | Scrollbar thumb style                                         | Object  | -      | {}     |
| barWrapStyle | Scrollbar bar style                                           | Object  | -      | {}     |
| noresize     | If the container size does not change, setting this to true can optimize performance | Boolean | true   | false  |
