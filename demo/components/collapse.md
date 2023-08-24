---
title: 折叠面板 Collapse
---

# 折叠面板 Collapse

需要进行分段显示时使用折叠面板

## 基础用法

默认可以同时展开多个面板，可以设置默认展开第几个。

<preview path="./demo/Collapse/Basic.vue"></preview>

## 手风琴模式

设置 `accordion` 手风琴模式默认只能开启一个

<preview path="./demo/Collapse/Accordion.vue"></preview>

## 简单模式和自定义头

`simple` 设置简单模式，也可以通过 插槽自定义头部

<preview path="./demo/Collapse/Simple.vue"></preview>

## 容器组件

使用 `b-collapse-wrap` 组件可以单独使用独立的折叠面板

<preview path="./demo/Collapse/Wrap.vue"></preview>

## Props

| 参数       | 说明                                             | 类型         | 可选值 | 默认值 |
| ---------- | ------------------------------------------------ | ------------ | ------ | ------ |
| modelValue | 当前激活的面板的 name，可以使用 v-model 双向绑定 | array/string | —      | —      |
| accordion  | 是否开启手风琴模式，开启后每次至多展开一个面板   | boolean      | —      | false  |
| simple     | 是否开启简洁模式                                 | boolean      | —      | false  |

## Events

| 事件名 | 说明                                                   | 返回值  |
| ------ | ------------------------------------------------------ | ------- |
| change | 切换面板时触发，返回当前已展开的面板的 key，格式为数组 | array[] |

## Slot

| 名称  | 说明       |
| ----- | ---------- |
| title | 面板头内容 |

## CollapseWrap Props

| 参数     | 说明                               | 类型    | 可选值            | 默认值 |
| -------- | ---------------------------------- | ------- | ----------------- | ------ |
| value    | 是否展开                           | boolean | —                 | true   |
| title    | 标题                               | string  | —                 | —      |
| collapse | 是否可以展开收起                   | boolean | —                 | false  |
| shadow   | shadow，设置为none可以开启简单模式 | string  | none/自定义shadow | —      |

## CollapseWrap Slot

| 名称  | 说明             |
| ----- | ---------------- |
| title | 面板头内容       |
| right | 右侧插入内容区域 |
