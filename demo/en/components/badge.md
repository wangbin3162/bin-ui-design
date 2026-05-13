---
title: 标记 Badge
---

<b-back-top></b-back-top>

# 标记 Badge

Used for displaying empty data state.

## Basic Usage

基础的badge用法

<preview path="./demo/Badge/Basic.vue"></preview>

## CustomTipContent

可以Tip非数字的badge

<preview path="./demo/Badge/Custom.vue"></preview>

## Props

| Parameter   | Description                              | Type           | Options                                      | Default |
| ------ | --------------------------------- | -------------- | ------------------------------------------- | ------ |
| value  | Show值                            | string, number | —                                           | —      |
| max    | Maximum value，超过Maximum value会Show '{max}+' | number         | —                                           | —      |
| is-dot | 小圆点                            | boolean        | —                                           | false  |
| hidden | Hide badge                        | boolean        | —                                           | false  |
| type   | Type                              | string         | primary / success / warning / danger / info | —      |
