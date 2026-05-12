---
title: 右键菜单 Contextmenu
---

<b-back-top></b-back-top>

# 右键菜单 Contextmenu

通用的右键菜单组件，只需要插入默认选项即可

## 基础用法

直接用组件默认插槽插入即可,需要监听属性并进行弹窗调用。注意，这里必须需要传入$event这个参数，否则无法获取正确位置。

<preview path="./demo/Contextmenu/Basic.vue"></preview>

## Slot

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
