---
title: Popover
---

<b-back-top></b-back-top>

# Popover

A popover-type overlay for displaying additional information, confirmation flows, etc.

## Basic Usage

<preview path="./demo/Popover/Basic.vue"></preview>

## Placement

Use `placement` to set the popover position.

<preview path="./demo/Popover/Placement.vue"></preview>

## Close Inside Overlay

<preview path="./demo/Popover/InnerClose.vue"></preview>

## More Content

<preview path="./demo/Popover/More.vue"></preview>

## Confirm Popover

Enable confirm dialog mode via the `confirm` prop. In confirm mode, the popover only triggers via click and only displays the title content, ignoring the content slot.

<preview path="./demo/Popover/Confirm.vue"></preview>

## Props

| Parameter            | Description                                             | Type                                                                           | Options                                                                                                    | Default         |
| --------------- | ------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | -------------- |
| trigger         | Trigger mode                                         | string                                                                         | hover / click / focus                                                                   | click          |
| title           | Title                                             | string                                                                         | —                                                                                                         | —              |
| content         | Content to display                                       | string                                                                         | —                                                                                                         | —              |
| width           | Width                                             | string/number                                                                  | —                                                                                                         | —              |
| placement       | Position of the popover                                 | string                                                                         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| disabled        | Disable the popover                                   | Boolean                                                                        | —                                                                                                         | false          |
| v-model:visible | Whether the popover is visible                                     | Boolean                                                                        | —                                                                                                         | false          |
| placement       | Position of the popover                                 | string                                                                         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| transition      | Custom transition animation                                   | string                                                                         | —                                                                                                         | fade-in-linear |
| show-arrow      | Whether to show arrow                                     | Boolean                                                                        | —                                                                                                         | true           |
| popper-options  | popper.js parameters                                   | Object                                                                         | —                                                                                                         |                |
| show-after      | Delay before showing, in milliseconds                               | number                                                                         | —                                                                                                         | 0              |
| hide-after      | Delay before hiding, in milliseconds                               | number                                                                         | —                                                                                                         | 0              |
| auto-close      | Auto-close after showing for the specified milliseconds. 0 means no auto-close | number                                                                         | —                                                                                                         | 0              |
| manual          | Manual control mode. When true, mouse enter/leave events do not apply       | Boolean                                                                        | —                                                                                                         | false          |
| offset          | Position offset amount                                 | Number                                                                         | —                                                                                                         | 0              |
| appendToBody    | Append the overlay to body                         | Boolean                                                                        | —                                                                                                         | true           |
| options         | Custom popper.js configuration options. See popper.js docs       | Object                                                                         | —                                                                                                         | —              |
| z-index         | Z-index level. Default is 2000. The dialog auto-increments. If set, it appends and then auto-increments | Number | —                                                                                                         | 0              |

## Slot

| Name    | Description                                                 |
| ------- | ---------------------------------------------------- |
| content | Content of the popover. When defined, overrides the `content` prop. |
