---
title: Circle
---

<b-back-top></b-back-top>

# Circle

Display a circular progress chart. Can show task percentage or the proportion of certain data statistics.

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Circle/Basic.vue"></preview>

## Dynamic Progress

Can be controlled by external operations.

<preview path="./demo/Circle/Progress.vue"></preview>

## Set Styles

Configure more custom styles.

<preview path="./demo/Circle/Style.vue"></preview>

## DashboardMode

Set the `dashboard` property to easily achieve a dashboard-style display.

<preview path="./demo/Circle/Dashboard.vue"></preview>

## Props

| Parameter           | Description                      | Type    | Options                   | Default  |
| -------------- | ------------------------- | ------- | ------------------------ | ------- |
| percent        | percentage                    | Number  | —                        | 0       |
| size           | Chart width and height, in px | Number  | —                        | 120     |
| stroke-linecap | Shape of the progress circle cap          | String  | square / round | round   |
| stroke-width   | Progress circle line width, in px     | Number  | —                        | 6       |
| stroke-color   | Progress circle color              | String  | —                        | #2db7f5 |
| trail-width    | Progress circle background line width, in px | Number  | —                        | 5       |
| trail-color    | Progress circle background color          | String  | —                        | #eaeef2 |
| dashboard      | Whether to display as a dashboard          | Boolean | —                        | false   |
