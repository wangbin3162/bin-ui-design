---
title: Anchor
---

<b-back-top></b-back-top>

# Anchor

Anchor is primarily used for scroll navigation.

## Basic Usage

Defaults to window scrolling; you can also set the scrolling area's target and use `b-affix` to fix it in place.

<preview path="./demo/Anchor/Basic.vue"></preview>

## Customicon

Set `icon` to customize the dot as a custom icon. Solid icons are recommended for the best visual effect.

<preview path="./demo/Anchor/Icon.vue"></preview>

## Customcolor

Set `activeColor` to customize the icon color

<preview path="./demo/Anchor/Color.vue"></preview>

## Specify Scroll Container

Set `target` to specify the scroll area identifier; the scroll container must be positioned.

<preview path="./demo/Anchor/Target.vue"></preview>

## Props

| Parameter          | Description                                                             | Type    | Options                                     | Default |
| ------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------ | ------ |
| icon          | Whether to set a custom icon                                               | string  | —                                          | —      |
| icon-size     | Custom icon size                                                   | Number  | —                                          | —      |
| active-color  | Active color                                                         | string  | primary,info,success,warning,danger,custom | —      |
| offset-top    | Triggers when the specified offset from the window top is reached                                 | Number  | —                                          | 0      |
| bounds        | Anchor area boundary                                                     | Number  | —                                          | 5      |
| showInk       | Whether to show the small dot                                                   | Boolean | —                                          | false  |
| scroll-offset | Extra scroll distance on click                                               | Number  | —                                          | 0      |
| target        | Specifies the scroll container identifier; the scroll container must be positioned for calculating scroll offset | string  | —                                          | —      |

## Events

| Event Name | Description                     | Return Value |
| ------ | ------------------------ | ------ |
| select | Triggers when anchor is clicked, returns link | href   |

## AnchorLink Props

| Parameter  | Description     | Type   | Options | Default |
| ----- | -------- | ------ | ------ | ------ |
| href  | anchorlink | String | —      | —      |
| title | Text content | String | —      | —      |
