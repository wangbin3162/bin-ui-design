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
| preview-tip      | Whether to show preview tip and mask                                      | Boolean              | —      | true                                                                       |
| preview          | Whether to enable image preview                                                | Boolean              | —      | false                                                                      |
| preview-list     | Image preview list                                                | Array                | —      | []                                                                         |
| infinite         | Whether to loop switching                                                | Boolean              | —      | true                                                                       |
| initial-index    | Initial index when opening preview                                            | Number               | —      | 0                                                                          |
| toolbar          | Image preview toolbar options, sorted by array order                          | Array                | —      | ['zoomIn', 'zoomOut', 'original', 'rotateLeft', 'rotateRight', 'download'] |
| failText         | Failure text                                                    | String               | —      | Failed                                                                       |
| loadingText      | Loading text                                                    | String               | —      | Loading...                                                                     |
| previewText      | Preview text                                                    | String               | —      | Preview                                                                       |

## Events

| Event Name | Description         | Return Value       |
| -------- | ------------ | ------------ |
| load     | Image loaded successfully | -            |
| error    | Image failed to load | -            |
| switch   | Image preview switch | -            |
| close    | Image preview closed | Object       |
| click    | Image click     | initialIndex |

## Slots

| Name        | Description               |
| ----------- | ------------------ |
| placeholder | Custom image loading placeholder   |
| error       | Custom image loading failure |
| preview     | Custom image preview     |
