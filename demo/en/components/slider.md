---
title: slidercomponent Slider
---

<b-back-top></b-back-top>

# slidercomponent Slider

## Basic Usage

<preview path="./demo/Slider/Basic.vue"></preview>

## Step and Stops

<preview path="./demo/Slider/Step.vue"></preview>

## input

<preview path="./demo/Slider/Input.vue"></preview>

## With Marks

<preview path="./demo/Slider/Mark.vue"></preview>

## Props

| Parameter                | Description                                                                                    | Type            | Options                         | Default |
| ------------------- | --------------------------------------------------------------------------------------- | --------------- | ------------------------------ | ------ |
| value / v-model     | Bound value                                                                                  | number          | —                              | 0      |
| min                 | Minimum value                                                                                  | number          | —                              | 0      |
| max                 | Maximum value                                                                                  | number          | —                              | 100    |
| disabled            | Disable d                                                                                | boolean         | —                              | false  |
| step                | Step size                                                                                    | number          | —                              | 1      |
| show-input          | Whether to show input, only effective in non-range mode                                                    | boolean         | —                              | false  |
| show-input-controls | Whether to show input control buttons when input is displayed                                          | boolean         | —                              | true   |
| input-size          | Input size                                                                            | string          | large / default / small / mini | small  |
| show-stops          | Whether to show stops                                                                          | boolean         | —                              | false  |
| show-tooltip        | Whether to show tooltip                                                                        | boolean         | —                              | true   |
| format-tooltip      | Format tooltip message                                                                  | function(value) | —                              | —      |
| range               | Whether to use range selection                                                                          | boolean         | —                              | false  |
| vertical            | Whether to use vertical mode                                                                            | boolean         | —                              | false  |
| height              | Slider height, required in vertical mode                                                             | string          | —                              | —      |
| label               | Screen reader label                                                                          | string          | —                              | —      |
| debounce            | Debounce delay on input, in milliseconds, only when `show-input` is true                                  | number          | —                              | 300    |
| tooltip-class       | Custom class name for tooltip                                                                    | string          | —                              | —      |
| marks               | Marks, key type must be number and value must be within the closed interval `[min, max]`, each mark can have individual styles | object          | —                              | —      |

## Events

| Event Name | Description                                               | Callback Parameters   |
| -------- | -------------------------------------------------- | ---------- |
| change   | Triggers when value changes (when dragging with mouse, triggers only after releasing the mouse) | Changed value |
| input    | Triggers when data changes (when dragging with mouse, triggers in real time during the drag) | Changed value |
