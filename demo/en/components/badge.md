---
title: Badge
---

<b-back-top></b-back-top>

# Badge

Used for displaying empty data state.

## Basic Usage

Basic badge usage.

<preview path="./demo/Badge/Basic.vue"></preview>

## CustomTipContent

Can display non-numeric badge content.

<preview path="./demo/Badge/Custom.vue"></preview>

## Props

| Parameter   | Description                              | Type           | Options                                      | Default |
| ------ | --------------------------------- | -------------- | ------------------------------------------- | ------ |
| value  | Display value                            | string, number | —                                           | —      |
| max    | Maximum value; exceeding the maximum will display '{max}+' | number         | —                                           | —      |
| is-dot | Small dot                            | boolean        | —                                           | false  |
| hidden | Hide badge                        | boolean        | —                                           | false  |
| type   | Type                              | string         | primary / success / warning / danger / info | —      |
