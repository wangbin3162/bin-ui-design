---
title: 栅格 Grid
---

# 栅格 Grid

采用了24栅格系统，将区域进行24等分

## 基础用法

<preview path="./demo/Grid/Basic.vue"></preview>

## 间隔

<preview path="./demo/Grid/Gutter.vue"></preview>

## 栅格次序

<preview path="./demo/Grid/Order.vue"></preview>

## 栅格顺序

使用push和pull来改变栅格顺序

<preview path="./demo/Grid/Pull.vue"></preview>

## 左右偏移

offset 可以设置偏移量

<preview path="./demo/Grid/Offset.vue"></preview>

## flex布局

<preview path="./demo/Grid/Flex.vue"></preview>

## 响应式布局

预设六个响应尺寸：xs sm md lg xl xxl，详见 API。

<preview path="./demo/Grid/Auto.vue"></preview>

## Row Props

| 参数       | 说明                         | 类型          | 可选值                                          | 默认值 |
| ---------- | ---------------------------- | ------------- | ----------------------------------------------- | ------ |
| gutter     | 栅格间距，单位 px            | number/string | —                                               | 0      |
| type       | 布局模式，在现代浏览器下有效 | string        | flex或不选                                      | —      |
| justify    | lex 布局下的水平排列方式     | string        | —                                               | —      |
| align      | flex 布局下的垂直对齐方式    | string        | start、end、center、space-around、space-between | —      |
| class-name | 自定义的class名称            | string        | —                                               | —      |

## Col Props

| 参数       | 说明                                      | 类型          | 可选值 | 默认值 |
| ---------- | ----------------------------------------- | ------------- | ------ | ------ |
| span       | 栅格的占位格数 为0 时，相当于display:none | number/string | 0~24   | -      |
| order      | 栅格的顺序 在flex布局模式下有效           | number/string | -      | -      |
| offset     | 栅格左侧偏移                              | number/string | -      | -      |
| push       | 栅格向右移动格数                          | number/string | -      | -      |
| pull       | 栅格向左移动格数                          | number/string | -      | -      |
| class-name | 自定义的class                             | string        | -      | -      |
| xs         | <576px 响应式栅格                         | number        | -      | -      |
| sm         | (≥576px < 768px)≥576px 响应式栅格         | number        | -      | -      |
| md         | (≥768px < 992px) 响应式栅格               | number        | -      | -      |
| lg         | (≥992px < 1200px) 响应式栅格              | number        | -      | -      |
| xl         | (≥1200px < 1600px) 响应式栅格             | number        | -      | -      |
| xxl        | ≥1600px 响应式栅格                        | number        | -      | -      |
