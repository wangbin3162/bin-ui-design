---
title: Empty
---

<b-back-top></b-back-top>

# Empty

Used for displaying empty data state.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Empty/Basic.vue"></preview>

## Directive Usage

Use the v-no-data directive for dynamic assignment, with customizable display text.

<preview path="./demo/Empty/Directive.vue"></preview>

## Props

| Parameter  | Description     | Type   | Options | Default   |
| ----- | -------- | ------ | ------ | -------- |
| title | Display text | String | —      | is not data |

## Slot

| Name    | Description                         |
| ------- | ---------------------------- |
| icon    | Insert custom icon                   |
| default | Default slot, can replace text display area |
