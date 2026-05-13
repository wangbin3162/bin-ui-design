---
title: Progress
---

<b-back-top></b-back-top>

# Progress

Display the current progress of an operation or task, such as file uploading.

## Basic Usage

Set the `percent` property on the Progress component, which represents the percentage of the progress bar. Required, must be between 0-100.

<preview path="./demo/Progress/Basic.vue"></preview>

## Text Inside

Set `text-inside` to configure the text-inside display mode

<preview path="./demo/Progress/Inside.vue"></preview>

## Set Styles

Set `color`, `radius`, etc. to configure property styles; enable `active` to activate animation styles

<preview path="./demo/Progress/Style.vue"></preview>

## Dynamic Progress

Can be controlled by external operations

<preview path="./demo/Progress/Progress.vue"></preview>

## Props

| Parameter         | Description                         | Type    | Options                 | Default  |
| ------------ | ---------------------------- | ------- | ---------------------- | ------- |
| percent      | percentage                       | Number  | —                      | 0       |
| status       | Progress bar status                   | String  | text/success/exception | —       |
| stroke-width | Progress bar line width, in px        | Number  | —                      | 8       |
| text-inside  | Show text inside the progress bar | Boolean | —                      | false   |
| show-text    | Whether to show progress text             | Boolean | —                      | true    |
| bg-color     | Progress bar background color               | String  | —                      | #f3f3f3 |
| color        | Progress bar color                 | String  | —                      | #2d8cf0 |
| radius       | Progress bar border radius                 | String  | —                      | 100px   |
| active       | Progress bar background animation               | Boolean | —                      | false   |
