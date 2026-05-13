---
title: layoutcomponent Layout
---

<b-back-top></b-back-top>

# layoutcomponent Layout

## Basic Usage

目前暂时为简易左右layout，后续扩展

<preview path="./demo/Layout/Basic.vue"></preview>

## Props

| Parameter                 | Description                       | Type    | Options | Default |
| -------------------- | -------------------------- | ------- | ------ | ------ |
| hasSider             | Whether to 又侧边栏（目前为左侧） | Boolean | —      | —      |
| siderWidth           | 侧边栏Width                 | Number  | —      | 240    |
| collapsedWidth       | 侧边栏collapse后Width           | Number  | —      | 40     |
| showToggle           | Whether to show collapsebutton           | Boolean | —      | true   |
| showCollapsedContent | Whether to show collapse后的内部区域   | Boolean | —      | false  |
| contentStyle         | 右侧容器style               | Object  | —      | {}     |
