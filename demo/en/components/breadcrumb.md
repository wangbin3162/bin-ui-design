---
title: Breadcrumb
---

<b-back-top></b-back-top>

# Breadcrumb

Show当前页面的路径，快速返回之前的任意页面 or 者跳转link

## Basic Usage

breadcrumb的用法，separator设置分隔符 不设置toproperty，一切都需要自行在slot中灵活运用

<preview path="./demo/Breadcrumb/Basic.vue"></preview>

## Separator

Can set 分隔符

<preview path="./demo/Breadcrumb/Separator.vue"></preview>

## Breadcrumb Props

| Parameter           | Description           | Type   | Options | Default |
| -------------- | -------------- | ------ | ------ | ------ |
| separator      | 分隔           | string | —      | '/'    |
| separator-icon | icon分隔符icon | string | —      | —      |
