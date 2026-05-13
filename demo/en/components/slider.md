---
title: slidercomponent Slider
---

<b-back-top></b-back-top>

# slidercomponent Slider

## Basic Usage

<preview path="./demo/Slider/Basic.vue"></preview>

## Step和断点

<preview path="./demo/Slider/Step.vue"></preview>

## input

<preview path="./demo/Slider/Input.vue"></preview>

## 带标记

<preview path="./demo/Slider/Mark.vue"></preview>

## Props

| Parameter                | Description                                                                                    | Type            | Options                         | Default |
| ------------------- | --------------------------------------------------------------------------------------- | --------------- | ------------------------------ | ------ |
| value / v-model     | Bound value                                                                                  | number          | —                              | 0      |
| min                 | Minimum value                                                                                  | number          | —                              | 0      |
| max                 | Maximum value                                                                                  | number          | —                              | 100    |
| disabled            | Disable d                                                                                | boolean         | —                              | false  |
| step                | 步长                                                                                    | number          | —                              | 1      |
| show-input          | Whether to show input，仅在非范围选择时有效                                                    | boolean         | —                              | false  |
| show-input-controls | 在Showinput的情况下，Whether to show input的控制button                                          | boolean         | —                              | true   |
| input-size          | input的size                                                                            | string          | large / default / small / mini | small  |
| show-stops          | Whether to show 间断点                                                                          | boolean         | —                              | false  |
| show-tooltip        | Whether to show  tooltip                                                                        | boolean         | —                              | true   |
| format-tooltip      | 格式化 tooltip message                                                                  | function(value) | —                              | —      |
| range               | Whether to as范围选择                                                                          | boolean         | —                              | false  |
| vertical            | Whether to 竖向Mode                                                                            | boolean         | —                              | false  |
| height              | Slider Height，竖向Mode时必填                                                             | string          | —                              | —      |
| label               | 屏幕阅读器tag                                                                          | string          | —                              | —      |
| debounce            | 输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效                                  | number          | —                              | 300    |
| tooltip-class       | tooltip 的自定义类名                                                                    | string          | —                              | —      |
| marks               | 标记， key 的Type必须as number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置style | object          | —                              | —      |

## Events

| Event Name | Description                                               | Callback Parameters   |
| -------- | -------------------------------------------------- | ---------- |
| change   | 值改变时Trigger（usemouse拖曳时，只在松开mouse后Trigger） | 改变后的值 |
| input    | Triggers when data changes（usemouse拖曳时，活动过程实时Trigger） | 改变后的值 |
