---
title: 标记 Badge
---

# 标记 Badge

空显示状态，用于给内部无数据情况的展示。十分简单

## 基础用法

基础的徽标用法

<preview path="./demo/Badge/Basic.vue"></preview>

## 自定义提示内容

可以提示非数字的徽标

<preview path="./demo/Badge/Custom.vue"></preview>

## Props

| 参数   | 说明                              | 类型           | 可选值                                      | 默认值 |
| ------ | --------------------------------- | -------------- | ------------------------------------------- | ------ |
| value  | 显示值                            | string, number | —                                           | —      |
| max    | 最大值，超过最大值会显示 '{max}+' | number         | —                                           | —      |
| is-dot | 小圆点                            | boolean        | —                                           | false  |
| hidden | 隐藏 badge                        | boolean        | —                                           | false  |
| type   | 类型                              | string         | primary / success / warning / danger / info | —      |
