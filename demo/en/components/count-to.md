---
title: CountTo
---

<b-back-top></b-back-top>

# CountTo

count animation为常用component，因此收录至component库便于use，整体源码See vue-count-to实现，propsparameter也一样，由于纯数字Show，因此所有style都可以自定义

## Basic Usage

<preview path="./demo/CountTo/Basic.vue"></preview>

## Customparameter

Can set 不同parameter来定义时长、前缀、后缀、连接符等来定义Show

<preview path="./demo/CountTo/Options.vue"></preview>

## Props

| Parameter      | Description                     | Type    | Options | Default |
| --------- | ------------------------ | ------- | ------ | ------ |
| startVal  | 开始值                   | Number  | —      | -      |
| endVal    | 结束值                   | Number  | —      | 2000   |
| duration  | animation持续时间             | Number  | —      | 2000   |
| autoplay  | Whether to 自动播放             | Boolean | —      | true   |
| decimals  | 小数点精度               | Number  | —      | 0      |
| decimal   | 小数点Show               | String  | —      | .      |
| separator | 数字分割                 | String  | —      | ，     |
| prefix    | 前缀，Used for Show之前的字符 | String  | —      | —      |
| suffix    | 后缀，Used for Show之后的字符 | String  | —      | —      |

## Events

| Event Name   | Description     | Return Value |
| -------- | -------- | ------ |
| mounted  | 开始render | —     |
| callback | call结束 | —     |

## Functions

| Event Name      | Description       | Parameter            |
| ----------- | ---------- | --------------- |
| count       | Get current value | timestamp，时间 |
| start       | 开始       | —              |
| pauseResume | 暂停和启动 | —              |
| reset       | reset       | —              |
| restart     | 重启       | —              |
