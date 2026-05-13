---
title: calendarcomponent Calendar
---

<b-back-top></b-back-top>

# calendarcomponent Calendar

## Basic Usage

A simple calendar component for decorating pages

<preview path="./demo/Calendar/Basic.vue"></preview>

## miniShow

A simple calendar component for decorating pages

<preview path="./demo/Calendar/Mini.vue"></preview>

## Props

| Parameter        | Description                  | Type    | Options            | Default |
| ----------- | --------------------- | ------- | ----------------- | ------ |
| grid-height | Date cell height, default 80 if not set | String  | —                 | 80px   |
| text-align  | Date text alignment          | String  | left center right | left   |
| mini        | Mini mode              | Boolean | —                | —      |
| body-style  | Date table body style        | Object  | —                 | —      |
| day-style   | Per-day style              | Object  | —                 | —      |

## Events

| Event Name   | Description           | Return Value |
| -------- | -------------- | ------ |
| prev     | Previous month button event | —      |
| next     | Next month button event | —      |
| today    | Today button event   | —      |
| selected | Event when a day is selected | day    |
