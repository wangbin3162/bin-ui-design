---
title: Progress
---

<b-back-top></b-back-top>

# Progress

展示操作 or 任务的当前进度，比如上传文件。

## Basic Usage

Progress component设置 `percent` property即可，表示progress bar对应的percentage，必填，必须在 0-100。

<preview path="./demo/Progress/Basic.vue"></preview>

## Text内Show

Can set  `text-inside` 来configuration文字内ShowMode

<preview path="./demo/Progress/Inside.vue"></preview>

## 设置style

Can set  `color` 和 `radius`等 来configurationpropertystyle、通过EnableactiveCan enable animationstyle

<preview path="./demo/Progress/Style.vue"></preview>

## 动态进度

可以配合外部操作进度

<preview path="./demo/Progress/Progress.vue"></preview>

## Props

| Parameter         | Description                         | Type    | Options                 | Default  |
| ------------ | ---------------------------- | ------- | ---------------------- | ------- |
| percent      | percentage                       | Number  | —                      | 0       |
| status       | progress bar状态                   | String  | text/success/exception | —       |
| stroke-width | progress bar的线宽，in px        | Number  | —                      | 8       |
| text-inside  | progress barShow文字内置在progress bar内 | Boolean | —                      | false   |
| show-text    | Whether to show 进度文字             | Boolean | —                      | true    |
| bg-color     | progress barbackgroundcolor               | String  | —                      | #f3f3f3 |
| color        | progress bar的color                 | String  | —                      | #2d8cf0 |
| radius       | progress bar的border radius                 | String  | —                      | 100px   |
| active       | progress barbackgroundanimation               | Boolean | —                      | false   |
