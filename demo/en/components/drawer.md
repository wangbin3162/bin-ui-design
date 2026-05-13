---
title: Drawer
---

<b-back-top></b-back-top>

# Drawer

A simple drawer used for display or quick opening. It can be used to show information or dynamically create and insert content.

## Basic Usage

The simplest usage: show/hide the dialog by controlling the property value.

<preview path="./demo/Drawer/Basic.vue"></preview>

## Open from Left

Set `placement="left"` to open from the left side

<preview path="./demo/Drawer/Left.vue"></preview>

## inner Mode

Can set inner mode to open within a specific container

<preview path="./demo/Drawer/Inner.vue"></preview>

## Info Preview Box

<preview path="./demo/Drawer/Preview.vue"></preview>

## Nestingdrawer

Drawers can be nested within each other, but this is generally not recommended to avoid too many z-index levels affecting user interaction.

<preview path="./demo/Drawer/Qiantao.vue"></preview>

## DraggableWidth

Can set dragdrawer

<preview path="./demo/Drawer/Dragable.vue"></preview>

## Props

| Parameter           | Description                                                                     | Type     | Options     | Default |
| -------------- | ------------------------------------------------------------------------ | -------- | ---------- | ------ |
| modelValue     | Whether to show; use v-model for two-way binding                                  | Boolean  | —          | false  |
| title          | Title. If a custom header slot is used, the title prop is ignored.                          | String   | —          | —      |
| placement      | Direction                                                                     | String   | left/right | right  |
| append-to-body | Whether to append the dialog to the body                                               | Boolean  | —          | false  |
| width          | Drawer width                                                                 | Number   | —          | 300    |
| min-width      | Drawer minimum width                                                             | Number   | —          | 300    |
| show-close     | Whether to show close button                                                         | Boolean  | —          | true   |
| mask-closable  | Allow clicking the mask to close                                                   | Boolean  | —          | true   |
| mask           | Whether to show mask                                                           | Boolean  | —          | true   |
| styles         | Drawer middle layer styles                                                         | Object   | —          | —      |
| inner          | Whether to set the drawer to open within a specific element. When enabling this property, disable append-to-body property | Boolean  | —          | false  |
| draggable      | Enable drag to adjust width                                                     | Boolean  | —          | false  |
| before-close   | Event before closing; return a Promise to prevent closing                                     | Function |
| lock-scroll    | Whether to lock scrolling                                                             | Boolean  | —          | true   |

## Events

| Event Name       | Description         | Return Value |
| ------------ | ------------ | ------ |
| close        | Triggers when drawer closes | —     |
| resize-width | Adjust width     | —     |

## Slot

| Name    | Description         |
| ------- | ------------ |
| header  | Custom header   |
| close   | Close button     |
| default | Drawer body content |
