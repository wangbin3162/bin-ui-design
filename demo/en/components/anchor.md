---
title: Anchor
---

<b-back-top></b-back-top>

# Anchor

anchor主要应Used for 滚动navigation

## Basic Usage

Defaults to window滚动，也Can set 滚动区域的 target，并且Can set `b-affix`来固定

<preview path="./demo/Anchor/Basic.vue"></preview>

## Customicon

Can be set via 设置`icon`来设置小圆点为自定义icon，推荐use实心icon以达到最好的Show效果

<preview path="./demo/Anchor/Icon.vue"></preview>

## Customcolor

Can be set via 设置`activeColor`来设置自定义icon的color

<preview path="./demo/Anchor/Color.vue"></preview>

## 指定滚动容器

Can be set via 设置`target`来指定滚动区域的标识，设置的滚动容器需要设置定位

<preview path="./demo/Anchor/Target.vue"></preview>

## Props

| Parameter          | Description                                                             | Type    | Options                                     | Default |
| ------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------ | ------ |
| icon          | Whether to 设置自定义icon                                               | string  | —                                          | —      |
| icon-size     | 自定义icon大小                                                   | Number  | —                                          | —      |
| active-color  | selectcolor                                                         | string  | primary,info,success,warning,danger,自定义 | —      |
| offset-top    | 距离窗口顶部达到指定offset量后Trigger                                 | Number  | —                                          | 0      |
| bounds        | anchor区域边界                                                     | Number  | —                                          | 5      |
| showInk       | Whether to show 小圆点                                                   | Boolean | —                                          | false  |
| scroll-offset | click滚动的额外距离                                               | Number  | —                                          | 0      |
| target        | 指定滚动容器的标识，滚动容器需要设置position定位Used for 计算滚动offset | string  | —                                          | —      |

## Events

| Event Name | Description                     | Return Value |
| ------ | ------------------------ | ------ |
| select | clickanchor时Trigger，返回link | href   |

## AnchorLink Props

| Parameter  | Description     | Type   | Options | Default |
| ----- | -------- | ------ | ------ | ------ |
| href  | anchorlink | String | —      | —      |
| title | Text content | String | —      | —      |
