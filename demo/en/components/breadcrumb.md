---
title: 面包屑 Breadcrumb
---

<b-back-top></b-back-top>

# 面包屑 Breadcrumb

显示当前页面的路径，快速返回之前的任意页面或者跳转链接

## 基础用法

面包屑的用法，separator设置分隔符 不设置to属性，一切都需要自行在插槽中灵活运用

<preview path="./demo/Breadcrumb/Basic.vue"></preview>

## 分隔符

可以设置分隔符

<preview path="./demo/Breadcrumb/Separator.vue"></preview>

## Breadcrumb Props

| 参数           | 说明           | 类型   | 可选值 | 默认值 |
| -------------- | -------------- | ------ | ------ | ------ |
| separator      | 分隔           | string | —      | '/'    |
| separator-icon | 图标分隔符icon | string | —      | —      |
