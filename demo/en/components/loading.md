---
title: loading Loading
---

<b-back-top></b-back-top>

# loading Loading

Displayed when fetching data or loading to indicate the user should wait.

## Basic Usage

The simplest loading indicator.

<preview path="./demo/Loading/Basic.vue"></preview>

## Center Fixed

Can be fixed at the center of the parent element. Defaults to centered fixed. When `fix` is set to false, it's used for scenarios like pull-down loading.

<preview path="./demo/Loading/Center.vue"></preview>

## Custom content

Custom text and content can be configured.

<preview path="./demo/Loading/Custom.vue"></preview>

## Toggle Display State

Toggle the display state.

<preview path="./demo/Loading/Ctrl.vue"></preview>

## Props

| Parameter     | Description               | Type    | Options  | Default |
| -------- | ------------------ | ------- | ------- | ------ |
| showIcon | Showloadingicon       | String  | loading | —      |
| showText | Text displayed while loading     | String  | loading | —      |
| fix      | Whether to fix at the center of the parent | Boolean | —       | true   |
| size     | Text display size     | Number  | —       | —      |
