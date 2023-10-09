---
title: 布局组件 Layout
---

# 布局组件 Layout

## 基础用法

目前暂时为简易左右布局，后续扩展

<preview path="./demo/Layout/Basic.vue"></preview>

## Props

| 参数                 | 说明                       | 类型    | 可选值 | 默认值 |
| -------------------- | -------------------------- | ------- | ------ | ------ |
| hasSider             | 是否又侧边栏（目前为左侧） | Boolean | —      | —      |
| siderWidth           | 侧边栏宽度                 | Number  | —      | 240    |
| collapsedWidth       | 侧边栏折叠后宽度           | Number  | —      | 40     |
| showToggle           | 是否显示折叠按钮           | Boolean | —      | true   |
| showCollapsedContent | 是否显示折叠后的内部区域   | Boolean | —      | false  |
| contentStyle         | 右侧容器样式               | Object  | —      | {}     |
