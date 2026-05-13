---
title: Rate
---

<b-back-top></b-back-top>

# Rate

Used for Showrate

## Basic Usage

Simply insert content using the default slot.

<preview path="./demo/Rate/Basic.vue"></preview>

## Customicon

<preview path="./demo/Rate/Icon.vue"></preview>

## readonly

<preview path="./demo/Rate/Readonly.vue"></preview>

## Attributes

| Parameter                     | Description                                                                    | Type    | Options | Default                                   |
| ------------------------ | ----------------------------------------------------------------------- | ------- | ------ | ---------------------------------------- |
| value / v-model          | Bound value                                                                  | number  | —      | 0                                        |
| max                      | 最大分值                                                                | number  | —      | 5                                        |
| disabled                 | Whether to 为readonly                                                              | boolean | —      | false                                    |
| allow-half               | Whether to 允许半选                                                            | boolean | —      | false                                    |
| low-threshold            | 低分和中等分数的界限值，值本身被划分在低分中                            | number  | —      | 2                                        |
| high-threshold           | 高分和中等分数的界限值，值本身被划分在高分中                            | number  | —      | 4                                        |
| colors                   | icon 的color数组，共有 3 个元素，为 3 个分段所对应的color                 | array   | —      | ['#F7BA2A', '#F7BA2A', '#F7BA2A']        |
| void-color               | 未select icon 的color                                                      | string  | —      | #C6D1DE                                  |
| disabled-void-color      | readonly时未select icon 的color                                                | string  | —      | #EFF2F7                                  |
| icon-classes             | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名                 | array   | —      | ['star', 'star', 'star']                 |
| void-icon-class          | 未select icon 的类名                                                      | string  | —      | star                                     |
| disabled-void-icon-class | readonly时未select icon 的类名                                                | string  | —      | star                                     |
| show-text                | Whether to show 辅助文字，若为真，则会从 texts 数组中选取当前分数对应的Text content | boolean | —      | false                                    |
| show-score               | Whether to show 当前分数，show-score 和 show-text 不能同时为真                  | boolean | —      | false                                    |
| text-color               | 辅助文字的color                                                          | string  | —      | #1F2D3D                                  |
| texts                    | 辅助文字数组                                                            | array   | —      | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template           | 分数Show模板                                                            | string  | —      | {value}                                  |

## Events

| Event Name | Description           | Callback Parameters     |
| -------- | -------------- | ------------ |
| change   | 分值改变时Trigger | 改变后的分值 |
