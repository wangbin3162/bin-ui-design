---
title: Button
description: Button 组件文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

默认按钮，可设置`dashed`虚线和`background`拟物按钮

<preview path="../components/Button/Basic.vue"></preview>

## Props

| 参数        | 说明                                                                          | 类型    | 可选值                                                          | 默认值 |
| ----------- | ----------------------------------------------------------------------------- | ------- | --------------------------------------------------------------- | ------ |
| size        | 尺寸                                                                          | string  | large / small / mini                                            | —      |
| type        | 类型                                                                          | string  | primary / success / warning / danger / info / text              | —      |
| plain       | 是否朴素按钮                                                                  | boolean | —                                                               | false  |
| round       | 是否圆角按钮                                                                  | boolean | —                                                               | false  |
| transparent | 是否是透明按钮                                                                | boolean | —                                                               | false  |
| background  | 默认按钮是否带有拟物背景                                                      | boolean | —                                                               | false  |
| loading     | 是否加载中状态                                                                | boolean | —                                                               | false  |
| disabled    | 是否禁用状态                                                                  | boolean | —                                                               | false  |
| icon        | 图标类名                                                                      | string  | —                                                               | —      |
| text-color  | 文字按钮颜色，默认禁用文字颜色增加亮度区分                                    | string  | primary / success / warning / danger / info / text / 自定义色值 | —      |
| icon-style  | 图标样式,可设置图标大小，字体对其等，可依托 text-color 设置颜色，也可以自定义 | Object  | —                                                               | —      |
| autofocus   | 是否默认聚焦                                                                  | boolean | —                                                               | false  |
| native-type | 原生 type 属性                                                                | string  | button / submit / reset                                         | button |
