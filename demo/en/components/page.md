---
title: Pagination Page
---

<b-back-top></b-back-top>

# Pagination Page

A pagination component for navigating between pages. Simple and straightforward.

## Basic Usage

Simply insert content using the component's default slot.

<preview path="./demo/Page/Basic.vue"></preview>

## Page Size

<preview path="./demo/Page/Number.vue"></preview>

## Elevator

<preview path="./demo/Page/Elevator.vue"></preview>

## Total

<preview path="./demo/Page/Total.vue"></preview>

## Mini Size

<preview path="./demo/Page/Mini.vue"></preview>

## Previous/Next Page Text

<preview path="./demo/Page/Text.vue"></preview>

## Simple Mode

<preview path="./demo/Page/Simple.vue"></preview>

## Props

| Parameter           | Description                                  | Type    | Options        | Default           |
| -------------- | ------------------------------------- | ------- | ------------- | ---------------- |
| current        | Current page number, supports v-model:current modifier      | Number  | —             | 1                |
| total          | Total number of items                              | Number  | —             | 0                |
| page-size      | Number of items per page                              | Number  | —             | 10               |
| page-size-opts | Configuration for page size switching                    | Array   | —             | [10, 20, 30, 40] |
| placement      | Expansion direction of the page size switching dropdown                | string  | bottom / top | bottom           |
| size           | Size, options are small (mini) or none (default) | string  | —             | —                |
| simple         | Simple mode                                | Boolean | —             | false            |
| show-total     | Show total count                              | Boolean | —             | false            |
| show-elevator  | Show elevator for quickly jumping to a specific page        | Boolean | —             | false            |
| show-sizer     | Show page sizer to change page-size           | Boolean | —             | false            |
| class-name     | Custom class name                     | String  | —             | —                |
| styles         | Custom inline styles                     | Object  | —             | —                |
| prev-text      | Text for the previous page button, replacing the icon              | String  | —             | —                |
| next-text      | Text for the next page button, replacing the icon              | String  | —             | —                |

## Events

| Event Name      | Description                                       | Return Value    |
| ----------- | ------------------------------------------ | --------- |
| change      | Callback when page number changes, returns the new page number           | page number      |
| size-change | Callback when page size changes, returns the new page size | page-size |

## Slot

| Name    | Description                 |
| ------- | -------------------- |
| default | Custom content for displaying the total count |
