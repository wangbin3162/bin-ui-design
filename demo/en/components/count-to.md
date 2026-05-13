---
title: CountTo
---

<b-back-top></b-back-top>

# CountTo

Count animation is a commonly used component, included in the component library for convenience. The source code is based on vue-count-to, with the same props. Since it only displays numbers, all styles are customizable.

## Basic Usage

<preview path="./demo/CountTo/Basic.vue"></preview>

## Customparameter

Can set different parameters to define duration, prefix, suffix, separator, etc. for the display

<preview path="./demo/CountTo/Options.vue"></preview>

## Props

| Parameter      | Description                     | Type    | Options | Default |
| --------- | ------------------------ | ------- | ------ | ------ |
| startVal  | Start value                   | Number  | —      | -      |
| endVal    | End value                   | Number  | —      | 2000   |
| duration  | Animation duration             | Number  | —      | 2000   |
| autoplay  | Whether to auto play             | Boolean | —      | true   |
| decimals  | Decimal precision               | Number  | —      | 0      |
| decimal   | Decimal point display               | String  | —      | .      |
| separator | Digit separator                 | String  | —      | ,     |
| prefix    | Prefix, character shown before the value | String  | —      | —      |
| suffix    | Suffix, character shown after the value | String  | —      | —      |

## Events

| Event Name   | Description     | Return Value |
| -------- | -------- | ------ |
| mounted  | Start render | —     |
| callback | Callback when finished | —     |

## Functions

| Event Name      | Description       | Parameter            |
| ----------- | ---------- | --------------- |
| count       | Get current value | timestamp, time |
| start       | Start       | —              |
| pauseResume | Pause and resume | —              |
| reset       | Reset       | —              |
| restart     | Restart       | —              |
