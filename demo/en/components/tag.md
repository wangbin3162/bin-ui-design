---
title: Tag
---

<b-back-top></b-back-top>

# Tag

## Basic Usage

Simply use the default slot.

<preview path="./demo/Tag/Basic.vue"></preview>

## Multiple Colors

Use the `dark` property to set dark mode, and you can set tags with more color types

<preview path="./demo/Tag/Colors.vue"></preview>

## Selectable Tag

Set the `checkable` property to define whether a tag is selectable.

<preview path="./demo/Tag/Checked.vue"></preview>

## Removable Tag

Set the `closable` property to define whether a tag is removable.

<preview path="./demo/Tag/Closed.vue"></preview>

## Dot Mode

Set `dot` mode to simply display content with a small indicator dot

<preview path="./demo/Tag/Dots.vue"></preview>

## Dynamictag

<preview path="./demo/Tag/Dynamic.vue"></preview>

## Custom Styles

Multiple customizable style options are available

<preview path="./demo/Tag/Custom.vue"></preview>

## Props

| Parameter       | Description                             | Type    | Options                      | Default |
| ---------- | -------------------------------- | ------- | --------------------------- | ------ |
| closable   | Whether it can be dismissed                       | Boolean | —                           | false  |
| type       | Theme                             | String  | success/info/warning/danger | —      |
| dot        | Whether to show as a small dot                 | Boolean | —                           | false  |
| no-border  | Disable border                     | Boolean | —                           | false  |
| color      | Background color (customizable)               | String  | —                           | —      |
| fontSize   | Font size                         | String  | —                           | —      |
| tag-style  | Tag style (full control, avoid setting if possible) | String  | —                           | —      |
| checkable  | Whether it can be selected                       | Boolean | —                           | false  |
| modelValue | Selection state, use v-model for two-way binding  | Boolean | —                           | true   |

## Events

| Event Name | Description                              | Return Value       |
| ------ | --------------------------------- | ------------ |
| close  | Close event callback                      | event        |
| click  | Click event callback                      | event        |
| change | Selection event callback, the name value must be set as the second parameter | checked,name |
