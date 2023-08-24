---
title: 按钮 Button
---

# 按钮 Button

常用的操作按钮。

## 基础用法

按钮的 type 分别为 primary、info、success、warning 和 error。

<preview path="./demo/Button/Basic.vue"></preview>

## 简约按钮

可以设置 `plain` 显示简约按钮

<preview path="./demo/Button/Plain.vue"></preview>

## 圆角按钮

可以设置 `round` 显示圆角按钮

<preview path="./demo/Button/Round.vue"></preview>

## 虚线按钮

可以设置 `dashed` 显示虚线按钮

<preview path="./demo/Button/Dashed.vue"></preview>

## 幽灵按钮

可以设置 `transparent` 开启透明背景的幽灵模式，用于有背景色的位置

<preview path="./demo/Button/Ghost.vue"></preview>

## 带图标的按钮

使用 `icon` 给按钮配置图标

<preview path="./demo/Button/Icon.vue"></preview>

## 禁用状态

使用 `disabled` 设置禁用状态的按钮

<preview path="./demo/Button/Disabled.vue"></preview>

## 文字状态按钮

使用 `type="text"` 设置仅文字的按钮

<preview path="./demo/Button/Text.vue"></preview>

## 按钮组

使用 `button-group` 组件包裹后可显示按钮组

<preview path="./demo/Button/Group.vue"></preview>

## 不同尺寸

设置 `size` 不同尺寸

<preview path="./demo/Button/Size.vue"></preview>

## 加载状态

设置 `loading` 加载状态

<preview path="./demo/Button/Loading.vue"></preview>

## 点击反馈

可以设置 `v-waves` 指令来更改点击反馈动画

<preview path="./demo/Button/Waves.vue"></preview>

## Props

<doc-table type="props" :data=" [
  'size | 尺寸 | string | large / small / mini | —',
  'type | 类型 | string | primary / success / warning / danger / info / text | —',
  'plain | 简单按钮 | boolean | — | false',
  'round | 圆角按钮 | boolean | — | false',
  'transparent | 透明按钮 | boolean | — | false',
  'background | 拟物背景（仅供默认按钮使用） | boolean | — | false',
  'loading | 加载中 | boolean | — | false',
  'disabled | 禁用状态 | boolean | — | false',
  'icon | 图标 | string | — | —',
  'text-color | 文字按钮颜色 | string | primary / success / warning / danger / info / text / 自定义色值 | —',
  'icon-style | 可设置图标大小 | object | — | —',
  'autofocus | 是否默认聚焦 | boolean | — | false',
  'native-type | 原生 type 属性 | string | button / submit / reset | button',
]"></doc-table>
