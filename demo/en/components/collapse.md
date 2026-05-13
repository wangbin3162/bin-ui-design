---
title: Collapse
---

<b-back-top></b-back-top>

# Collapse

Use collapse panels when content needs to be displayed in sections.

## Basic Usage

Multiple panels can be expanded at once by default. You can set which panel is expanded by default.

<preview path="./demo/Collapse/Basic.vue"></preview>

## Accordion ModeMode

Set `accordion` for accordion mode; only one panel can be expanded at a time.

<preview path="./demo/Collapse/Accordion.vue"></preview>

## Simple Mode and Custom Header

`simple` sets simple mode. You can also customize the header via slot.

<preview path="./demo/Collapse/Simple.vue"></preview>

## Container Component

Use the `b-collapse-wrap` component for standalone collapse panels.

<preview path="./demo/Collapse/Wrap.vue"></preview>

## Props

| Parameter       | Description                                             | Type         | Options | Default |
| ---------- | ------------------------------------------------ | ------------ | ------ | ------ |
| modelValue | The name of the currently active panel; use v-model for two-way binding | Array/String | —      | —      |
| accordion  | Enable accordion mode; only one panel can be expanded at a time   | Boolean      | —      | false  |
| simple     | Enable simple mode                                 | Boolean      | —      | false  |

## Events

| Event Name | Description                                                   | Return Value  |
| ------ | ------------------------------------------------------ | ------- |
| change | Triggers when panels switch; returns the keys of currently expanded panels as an array | array[] |

## Slot

| Name  | Description       |
| ----- | ---------- |
| title | Panel header content |

## CollapseWrap Props

| Parameter     | Description                               | Type    | Options            | Default |
| -------- | ---------------------------------- | ------- | ----------------- | ------ |
| value    | Whether to expand                           | boolean | —                 | true   |
| title    | Title                               | string  | —                 | —      |
| collapse | Whether to expand/collapse                   | boolean | —                 | false  |
| shadow   | Shadow; set to none to enable simple mode | string  | none/custom shadow | —      |

## CollapseWrap Slot

| Name  | Description             |
| ----- | ---------------- |
| title | Panel header content       |
| right | Right side content area |
