---
title: Contextmenu
---

<b-back-top></b-back-top>

# Contextmenu

通用的context menucomponent，只需要插入Defaultoption即可

## Basic Usage

Simply insert content using the default slot.,需要监听property并进行dialogcall。Note，这里必须需要传入$event这个parameter，No则无法获取正确position。

<preview path="./demo/Contextmenu/Basic.vue"></preview>

## Slot

| Name    | Description     |
| ------- | -------- |
| default | Defaultslot |
