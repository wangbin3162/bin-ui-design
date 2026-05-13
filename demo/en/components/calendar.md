---
title: calendarcomponent Calendar
---

<b-back-top></b-back-top>

# calendarcomponent Calendar

## Basic Usage

简单的calendarcomponentUsed for 装饰页面

<preview path="./demo/Calendar/Basic.vue"></preview>

## miniShow

简单的calendarcomponentUsed for 装饰页面

<preview path="./demo/Calendar/Mini.vue"></preview>

## Props

| Parameter        | Description                  | Type    | Options            | Default |
| ----------- | --------------------- | ------- | ----------------- | ------ |
| grid-height | 日期Height，不填Default 80 | String  | —                 | 80px   |
| text-align  | 日期对其方式          | String  | left center right | left   |
| mini        | 迷你Mode              | Boolean | l—                | —      |
| body-style  | 日期表bodystyle        | Object  | —                 | —      |
| day-style   | 每天style              | Object  | —                 | —      |

## Events

| Event Name   | Description           | Return Value |
| -------- | -------------- | ------ |
| prev     | 上个月buttonevent | —      |
| next     | 下个月buttonevent | —      |
| today    | 今天buttonevent   | —      |
| selected | Selected某一天event | day    |
