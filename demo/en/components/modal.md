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

设置property `screen-center` The dialog can be centered for display，并且，A default max-height can be configured.。

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
| custom-class     | 自定义类名                                      | String                                                                   | —      | —                    |
| body-styles      | 自定body的stylestyle                             | Object                                                                   | —      | —                    |
| z-index          | Z-index level                                            | Number，Defaultas2000，dialog会自增，如设置了此值，则会从当前设置的值进行自增 | —      | 0                    |
| append-to-body   | Whether to 将dialog放置于 body 内                      | Boolean                                                                  | —      | false                |
| lock-scroll      | appearmodal时锁定滚动                             | Boolean                                                                  | —      | true                 |
| transition-name  | dialoganimation                                        | String                                                                   | —      | 'dialog-fade'        |
| open-delay       | open延时（毫秒）                                | Number                                                                   | —      | 0                    |
| close-delay      | Disable延时（毫秒）                                | Number                                                                   | —      | 0                    |
| before-close     | Disable前Callback，会暂停Disable                          | Function(done) doneUsed for Disable                                              | —      | —                    |
| destroy-on-close | Disable时销毁内部元素，多Used for 内部元素需要初始化    | Boolean                                                                  | —      | false                |
| screen-center    | 屏幕centerdialog（水平垂直center）                    | Boolean                                                                  | —      | false                |
| max-height       | 最大dialogHeight（屏幕center时生效）                  | String                                                                   | —      | 'calc(100vh - 80px)' |

## Events

| Event Name | Description             | Return Value |
| ------ | ---------------- | ------ |
| open   | modalopenCallback    | —     |
| opened | openanimation完成Callback | —     |
| close  | modalDisableCallback    | —     |
| closed | Disableanimation结束Callback | —     |

## Slot

| Name   | Description               |
| ------ | ------------------ |
| title  | 自定义Title         |
| ctrl   | Disablebutton左侧控制槽 |
| footer | 自定义Table footerContent     |
