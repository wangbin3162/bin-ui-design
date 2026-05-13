---
title: Button
---

<b-back-top></b-back-top>

# Button

Commonly used action buttons.

## Basic Usage

Button types include primary, info, success, warning, and error.

<preview path="./demo/Button/Basic.vue"></preview>

## Plain Button

Set `plain` to display a plain button.

<preview path="./demo/Button/Plain.vue"></preview>

## Round Button

Set `round` to display a round button.

<preview path="./demo/Button/Round.vue"></preview>

## Dashed Button

Set `dashed` to display a dashed button.

<preview path="./demo/Button/Dashed.vue"></preview>

## Ghost Button

Set `transparent` to enable transparent background ghost mode, useful for areas with background colors.

<preview path="./demo/Button/Ghost.vue"></preview>

## Button with Icon

Use the `icon` prop to add an icon to the button.

<preview path="./demo/Button/Icon.vue"></preview>

## Disabled State

Use `disabled` to set the button to a disabled state.

<preview path="./demo/Button/Disabled.vue"></preview>

## Text Button

Use `type="text"` for a text-only button.

<preview path="./demo/Button/Text.vue"></preview>

## Button Group

Wrap buttons with the `button-group` component to display them as a button group.

<preview path="./demo/Button/Group.vue"></preview>

## Sizes

Set `size` for different sizes.

<preview path="./demo/Button/Size.vue"></preview>

## Loading State

Set `loading` for a loading state.

<preview path="./demo/Button/Loading.vue"></preview>

## Click Feedback

Use the `v-waves` directive to change the click feedback animation.

<preview path="./demo/Button/Waves.vue"></preview>

## Props

| Parameter   | Description                          | Type    | Options                                                          | Default |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- | ------- |
| size        | Size                                 | String  | large / small / mini                                             | —       |
| type        | Type                                 | String  | primary / success / warning / danger / info / text               | —       |
| plain       | Plain button                         | Boolean | —                                                                | false   |
| round       | Round button                         | Boolean | —                                                                | false   |
| circle      | Circle button                        | Boolean | —                                                                | false   |
| transparent | Transparent button                   | Boolean | —                                                                | false   |
| loading     | Loading state                        | Boolean | —                                                                | false   |
| disabled    | Disabled state                       | Boolean | —                                                                | false   |
| background  | Skeuomorphic background (default button only) | Boolean | —                                                      | false   |
| icon        | Icon                                 | String  | —                                                                | —       |
| icon-style  | Icon size configuration              | Object  | —                                                                | —       |
| text-color  | Text button color                    | String  | primary / success / warning / danger / info / text / custom hex  | —       |
| autofocus   | Auto focus                           | Boolean | —                                                                | false   |
| native-type | Native type attribute                | String  | button / submit / reset                                          | button  |
