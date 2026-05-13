---
title: Tabs
---

<b-back-top></b-back-top>

# Tabs

Display tabs. Since tab content customization varies greatly, only the tab switching functionality is provided here. Content can be implemented as needed.

## Basic Usage

Basic and simple tabs.

<preview path="./demo/Tabs/Basic.vue"></preview>

## cardMode

Can set basic card mode

<preview path="./demo/Tabs/Card.vue"></preview>

## Add and Remove

Tabs can be closed, and new tabs can be added via custom events. The close button is only available in card and tag modes. By default, when the width is exceeded, tabs can scroll.

Set `noClose` on items in `tabs` to exclude the close button, primarily for fixed tabs.

<preview path="./demo/Tabs/Add.vue"></preview>

## context menu

Combined with `ContextMenu`, tabs can be closed and a context menu can be enabled for more configuration options. To enable the context menu, manually insert the button list with `<li>` tags and use the `tab-select` event.

<preview path="./demo/Tabs/ContextMenu.vue"></preview>

## tagMode

Besides card mode, tag mode can also be set. This mode is more independent and resembles tag navigation. Choose based on your needs.

<preview path="./demo/Tabs/TagType.vue"></preview>

## Props

| Parameter     | Description                                                                                                        | Type    | Options                 | Default  |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------- | ---------------------- | ------- |
| data     | Tabs data array, required. Structure follows {key:'',title:''} where key is the unique identifier and title is the tab name; icon can be set for extension | Array   | —                      | []      |
| closable | Whether tabs can be closed                                                                                                  | boolean | —                      | false   |
| type     | tabType                                                                                                     | string  | 'default','card','tag' | default |

## Events

| Event Name     | Description                                            | Return Value        |
| ---------- | ----------------------------------------------- | ------------- |
| change     | Tab change event                                | Currently selected tab |
| tab-close  | Tab close event                                 | Currently closed tab |
| tab-select | Right-click select event callback, used with the right-click system cache for clicked tags | Right-click selected tab |
