---
title: Image
---

<b-back-top></b-back-top>

# Image

An image container that supports preview, lazy loading, custom placeholders, load failure fallback, and more.

## Basic Usage

Use `fit` to set the image fitting style within the container, equivalent to the native `object-fit` property.

<preview path="./demo/Image/Basic.vue"></preview>

## Loading

Loading placeholder text or content can be customized.

<preview path="./demo/Image/Loading.vue"></preview>

## Load Failure

A placeholder can be set for when the image fails to load.

<preview path="./demo/Image/Fail.vue"></preview>

## Lazy Loading

Set `lazy` to enable lazy loading. Images will only load when they become visible.

Use `scroll-container` to specify the scroll container. If not set, the closest parent with `overflow: auto` or `overflow: scroll` will be used.

<preview path="./demo/Image/Scroll.vue"></preview>

## Preview

Set `preview` to enable image preview mode. Use `preview-list` to set the image list, and `initial-index` to set the initial image index when the preview opens.

During preview: use `←` / `→` to switch images, `↑` / `↓` to zoom, `Space` to show 1:1 size, `ESC` to exit preview.

<preview path="./demo/Image/Preview.vue"></preview>

## Standalone Preview Component

The `ImagePreview` component can also be used standalone.

<preview path="./demo/Image/ImagePreview.vue"></preview>

## Props

| Parameter             | Description                                                        | Type                 | Options | Default                                                                     |
| ---------------- | ----------------------------------------------------------- | -------------------- | ------ | -------------------------------------------------------------------------- |
| src              | Image URL                                                    | String               | —      | —                                                                          |
| alt              | Image description                                                    | String               | —      | —                                                                          |
| referrer-policy  | Native attribute                                                    | String               | —      | —                                                                          |
| width            | Width                                                        | String / Number        | —      | —                                                                          |
| height           | Height                                                        | String / Number        | —      | —                                                                          |
| fit              | Image fit mode: fill, contain, cover, none, scale-down | String               |        | —                                                                          |
| lazy             | Enable lazy loading                                                  | Boolean              | —      | false                                                                      |
| scroll-container | Scroll container                                                    | String , HTMLElement | —      | false                                                                      |
| append-to-body   | Append the overlay to body                                    | Boolean              | —      | false                                                                      |
| mask-closable    | Allow clicking the mask to close                                      | Boolean              | —      | true                                                                       |
| preview-tip      | Whether to show 预览Tip和mask                                      | Boolean              | —      | true                                                                       |
| preview          | Whether to image预览                                                | Boolean              | —      | false                                                                      |
| preview-list     | image预览列表                                                | Array                | —      | []                                                                         |
| infinite         | Whether to 循环切换                                                | Boolean              | —      | true                                                                       |
| initial-index    | open预览的第一项                                            | Number               | —      | 0                                                                          |
| toolbar          | image预览操作栏option，按数组顺序sort                          | Array                | —      | ['zoomIn', 'zoomOut', 'original', 'rotateLeft', 'rotateRight', 'download'] |
| initial-index    | open预览的第一项                                            | Number               | —      | 0                                                                          |
| failText         | 失败文字                                                    | String               | —      | 失败                                                                       |
| loadingText      | Loading text                                                    | String               | —      | Loading...                                                                     |
| previewText      | 预览文字                                                    | String               | —      | 预览                                                                       |

## Events

| Event Name | Description         | Return Value       |
| -------- | ------------ | ------------ |
| load     | imageloading成功 | -            |
| error    | imageloading失败 | -            |
| switch   | image预览切换 | -            |
| close    | image预览Disable | Object       |
| click    | imageclick     | initialIndex |

## Slots

| Name        | Description               |
| ----------- | ------------------ |
| placeholder | 自定义imageLoading...   |
| error       | 自定义imageloading失败 |
| preview     | 自定义image预览     |
