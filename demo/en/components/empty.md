---
title: Empty
---

<b-back-top></b-back-top>

# Empty

Used for displaying empty data state.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Empty/Basic.vue"></preview>

## directive方式

可以usev-no-datadirective动态指定，并可以绑定Show文字

<preview path="./demo/Empty/Directive.vue"></preview>

## Props

| Parameter  | Description     | Type   | Options | Default   |
| ----- | -------- | ------ | ------ | -------- |
| title | Show文字 | String | —      | is not data |

## Slot

| Name    | Description                         |
| ------- | ---------------------------- |
| icon    | 可插入icon                   |
| default | Defaultslot，可替换文字Showposition |
