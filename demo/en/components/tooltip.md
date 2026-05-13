---
title: Tip Tooltip
---

<b-back-top></b-back-top>

# Tip Tooltip

A text tip popover that appears on mouse hover, replacing the system title tooltip. The default slot of the tooltip should contain a single DOM element or component.

## Basic Usage

Simply use the default slot.

<preview path="./demo/Tooltip/Basic.vue"></preview>

## Multiple Positions

Use `placement` to set different positions.

<preview path="./demo/Tooltip/Placement.vue"></preview>

## Different Themes

Set `theme` to apply different style themes.

<preview path="./demo/Tooltip/Theme.vue"></preview>

## Multi-line & Long Text

Can use slots or long text.

<preview path="./demo/Tooltip/Slot.vue"></preview>

## Delay & Trigger Timing & Disabled Tip

Can be configured using different parameters.

<preview path="./demo/Tooltip/More.vue"></preview>

## Props

| Parameter            | Description                     | Type    | Options                                                                                                    | Default         |
| --------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| v-model:visible | Whether visible             | Boolean | —                                                                                                         | false          |
| content         | Display content               | String  | —                                                                                                         | —              |
| placement       | Position of the tooltip         | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| disabled        | Disable tooltip           | Boolean | —                                                                                                         | false          |
| transition      | Custom transition animation           | String  | —                                                                                                         | fade-in-linear |
| show-arrow      | Whether to show arrow             | Boolean | —                                                                                                         | true           |
| theme           | theme                     | String  | dark  or  light                                                                                             | dark           |
| open-delay      | Delay before showing, in milliseconds       | Number  | —                                                                                                         | 0              |
| hide-delay      | Delay before hiding, in milliseconds       | Number  | —                                                                                                         | 0              |
| offset          | Position offset amount         | Number  | —                                                                                                         | 12             |
| appendToBody    | Append the overlay to body | Boolean | —                                                                                                         | true           |
