---
title: Popper
---

<b-back-top></b-back-top>

# Popper

Popper is built on the third-party library <a href="https://popper.js.org/" target="_blank">popper.js</a>. Refer to its documentation for configuration. All overlay components in the library are built on this base component. You can also create your own extensions.

## Basic Usage

<preview path="./demo/Popper/Basic.vue"></preview>

## Column Select

<preview path="./demo/Popper/ColumnSelect.vue"></preview>

## Props

| Parameter                    | Description                                                     | Type                                                                           | Options                                                                                                    | Default         |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | -------------- |
| v-model:visible         | Whether the popper is visible                                             | Boolean                                                                        | —                                                                                                         | false          |
| trigger                 | Trigger mode                                                 | string                                                                         | hover / click / focus                                                                   | click          |
| appendToBody            | Append the overlay to body                                 | Boolean                                                                        | —                                                                                                         | false          |
| placement               | Position of the popper                                         | string                                                                         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | —              |
| disabled                | Disable the popper                                           | Boolean                                                                        | —                                                                                                         | false          |
| transition              | Custom transition animation. After setting a custom animation, GPU acceleration must be disabled, otherwise it will not apply | string                                                                         | —                                                                                                         | fade-in-linear |
| gpu-acceleration        | GPU acceleration for the default animation                                      | Boolean                                                                        | —                                                                                                         | true           |
| stop-popper-mouse-event | Whether to stop popper mouse events                                | Boolean                                                                        | —                                                                                                         | true           |
| show-arrow              | Whether to show arrow                                             | Boolean                                                                        | —                                                                                                         | true           |
| manual-mode             | Whether to use manual control. When enabled, `:visible` must be set explicitly               | Boolean                                                                        | —                                                                                                         | true           |
| theme                   | Theme                                                     | string                                                                         | dark or light                                                                                             | dark           |
| show-after              | Delay before showing, in milliseconds                                       | number                                                                         | —                                                                                                         | 0              |
| close-delay             | Delay before hiding, in milliseconds                                       | number                                                                         | —                                                                                                         | 0              |
| offset                  | Position offset amount                                         | Number                                                                         | —                                                                                                         | 12             |
| arrow-offset            | Arrow offset                                                 | Number                                                                         | —                                                                                                         | 5              |
| class                   | Trigger element class                                              | string                                                                         | —                                                                                                         | —              |
| popper-class            | Additional class for the popper element                                          | string                                                                         | —                                                                                                         | —              |
| popper-options          | Additional popper options. See popper.js docs. Usually not needed        | Object                                                                         | —                                                                                                         | —              |
| z-index                 | Z-index level. Default is 2000. The dialog auto-increments. If set, it appends and then auto-increments | Number | —                                                                                                         | 0              |
| style                   | Style for the popper element                                              | Object                                                                         | —                                                                                                         | —              |

## Slot

| Name    | Description                                                                     |
| ------- | ------------------------------------------------------------------------ |
| default | Popper content slot. Required. Can be extended for various business use cases                                   |
| trigger | Trigger slot. Required. Must contain a single DOM element or component for attaching event listeners. |
