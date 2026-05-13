---
title: Modal
---

<b-back-top></b-back-top>

# Modal

A dialog/modal displayed as a floating layer to guide user interactions.

## Basic Usage

<preview path="./demo/Modal/Basic.vue"></preview>

## Custom Styles

The Modal component provides flexible custom styling APIs and slots, allowing full control over each part of the modal, such as header, footer, and close button.

<preview path="./demo/Modal/Custom.vue"></preview>

## Center Alignment

Set `screen-center` to center the dialog on screen, and a default max-height can be configured.

<preview path="./demo/Modal/Center.vue"></preview>

## Open Animation

The modal animation can be customized via `transition-name`. By default, it animates from the click position.

<preview path="./demo/Modal/Animation.vue"></preview>

## Disable Close

Both the close button and mask close can be disabled.

<preview path="./demo/Modal/DisableClose.vue"></preview>

## Nesting

Nested modals are generally not recommended, but they can be used.

<preview path="./demo/Modal/Qiantao.vue"></preview>

## Fullscreen

Set `fullscreen` for fullscreen display. Various controls can be customized.

<preview path="./demo/Modal/Fullscreen.vue"></preview>

## Draggable

Set `draggable` to make the dialog draggable.

<preview path="./demo/Modal/Draggable.vue"></preview>

## Props

| Parameter             | Description                                            | Type                                                                     | Options | Default               |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------ | ------ | -------------------- |
| v-model          | Whether to show                                         | Boolean                                                                  | —      | false                |
| title            | Title. If a custom header slot is used, the title prop is ignored. | String                                                                   | —      | —                    |
| width            | Dialog width                                      | String                                                                   | —      | 520px                |
| top              | Distance from the top of the viewport                              | String                                                                   | —      | 100px                |
| show-close       | Show close button in the top-right corner                                | Boolean                                                                  | —      | true                 |
| mask-closable    | Allow clicking the mask to close                          | Boolean                                                                  | —      | true                 |
| esc-closable     | Whether to allow closing via ESC key                             | Boolean                                                                  | —      | true                 |
| fullscreen       | Whether to show in fullscreen                                    | Boolean                                                                  | —      | false                |
| draggable        | Whether the dialog can be dragged                                | Boolean                                                                  | —      | false                |
| mask             | Whether to show mask                                  | Boolean                                                                  | —      | true                 |
| mask-class       | Custom mask class name                                  | String                                                                   | —      | —                    |
| custom-class     | Custom class name                                      | String                                                                   | —      | —                    |
| body-styles      | Custom body styles                             | Object                                                                   | —      | —                    |
| z-index          | Z-index level                                            | Number, default is 2000, the dialog auto-increments; if this value is set, it starts auto-incrementing from the set value | —      | 0                    |
| append-to-body   | Whether to append the dialog to the body                      | Boolean                                                                  | —      | false                |
| lock-scroll      | Lock scrolling when the modal appears                             | Boolean                                                                  | —      | true                 |
| transition-name  | Dialog animation                                        | String                                                                   | —      | 'dialog-fade'        |
| open-delay       | Open delay (milliseconds)                                | Number                                                                   | —      | 0                    |
| close-delay      | Close delay (milliseconds)                                | Number                                                                   | —      | 0                    |
| before-close     | Callback before closing, can pause closing                          | Function(done) done is used for closing                                              | —      | —                    |
| destroy-on-close | Destroy inner elements on close, mainly used for elements that need re-initialization    | Boolean                                                                  | —      | false                |
| screen-center    | Center dialog on screen (centered horizontally and vertically)                    | Boolean                                                                  | —      | false                |
| max-height       | Maximum dialog height (effective when screen-center is enabled)                  | String                                                                   | —      | 'calc(100vh - 80px)' |

## Events

| Event Name | Description             | Return Value |
| ------ | ---------------- | ------ |
| open   | modalopenCallback    | —     |
| opened | Callback when open animation completes | —     |
| close  | Modal close callback    | —     |
| closed | Callback when close animation ends | —     |

## Slot

| Name   | Description               |
| ------ | ------------------ |
| title  | Custom title         |
| ctrl   | Left side of close button control slot |
| footer | Custom table footer content     |
