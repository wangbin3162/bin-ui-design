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
| max                      | Maximum score                                                                | number  | —      | 5                                        |
| disabled                 | Whether read-only                                                              | boolean | —      | false                                    |
| allow-half               | Whether to allow half selection                                                            | boolean | —      | false                                    |
| low-threshold            | Threshold between low and medium scores; the value itself falls into the low category                            | number  | —      | 2                                        |
| high-threshold           | Threshold between high and medium scores; the value itself falls into the high category                            | number  | —      | 4                                        |
| colors                   | Icon color array with 3 elements, corresponding to 3 score levels                 | array   | —      | ['#F7BA2A', '#F7BA2A', '#F7BA2A']        |
| void-color               | Color of unselected icons                                                      | string  | —      | #C6D1DE                                  |
| disabled-void-color      | Color of unselected icons when read-only                                                | string  | —      | #EFF2F7                                  |
| icon-classes             | Icon class name array with 3 elements, corresponding to 3 score levels                 | array   | —      | ['star', 'star', 'star']                 |
| void-icon-class          | Class name of unselected icons                                                      | string  | —      | star                                     |
| disabled-void-icon-class | Class name of unselected icons when read-only                                                | string  | —      | star                                     |
| show-text                | Whether to show auxiliary text. If true, the text content corresponding to the current score is selected from the texts array | boolean | —      | false                                    |
| show-score               | Whether to show current score. show-score and show-text cannot both be true                  | boolean | —      | false                                    |
| text-color               | Color of auxiliary text                                                          | string  | —      | #1F2D3D                                  |
| texts                    | Auxiliary text array                                                            | array   | —      | ['Terrible', 'Disappointed', 'Average', 'Satisfied', 'Amazing'] |
| score-template           | Score display template                                                            | string  | —      | {value}                                  |

## Events

| Event Name | Description           | Callback Parameters     |
| -------- | -------------- | ------------ |
| change   | Triggers when score changes | Changed score |
