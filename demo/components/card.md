---
title: 卡片 Card
---

# 卡片 Card

按照一个区块来展示

## 基础用法

头部可以 开启高亮提示，如不需要头部则不用插入header 可以开启`head-tip`来高亮header的前头

<preview path="./demo/Card/Basic.vue"></preview>

## 默认标题和分割线

直接传入header可以生成默认标题,配置divider="no"可以消除默认标题和内容的分割线

<preview path="./demo/Card/TitleDivider.vue"></preview>

## 边框和圆角

无边框适合在有背景的情况下使用

<preview path="./demo/Card/BorderRadius.vue"></preview>

## shadow

<preview path="./demo/Card/Shadow.vue"></preview>

## Props

| 参数       | 说明                              | 类型    | 可选值                 | 默认值 |
| ---------- | --------------------------------- | ------- | ---------------------- | ------ |
| header     | 设置 header，也可以已插槽形式插入 | String  | —                      | —      |
| body-style | 设置 body 的样式                  | Object  | —                      | —      |
| shadow     | 阴影的显示                        | String  | always / hover / never | hover  |
| bordered   | 设置是否有边框                    | Boolean | false                  | true   |
| width      | 设置卡片默认宽度                  | String  | —                      | 100%   |
| radius     | 设置圆角值                        | String  | 0 / 百分比 / 像素      | 4px    |
| divider    | header和body之间的分割线          | String  | no / has               | has    |
| head-tip   | 头部的高亮提示                    | Boolean | true / false           | false  |
| bg-color   | 整体的背景色                      | String  | —                      | #fff   |
