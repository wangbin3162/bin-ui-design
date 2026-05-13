---
title: Card
---

<b-back-top></b-back-top>

# Card

Display content in a card block.

## Basic Usage

The header can enable a highlight tip. If no header is needed, omit the header slot. You can enable `head-tip` to highlight the front of the header.

<preview path="./demo/Card/Basic.vue"></preview>

## Default Title and Divider

Passing a header directly generates a default title; set `divider="no"` to remove the divider between the default title and content.

<preview path="./demo/Card/TitleDivider.vue"></preview>

## Border and Border Radius

No border is suitable when used with a background.

<preview path="./demo/Card/BorderRadius.vue"></preview>

## shadow

<preview path="./demo/Card/Shadow.vue"></preview>

## Props

| Parameter       | Description                              | Type    | Options                 | Default |
| ---------- | --------------------------------- | ------- | ---------------------- | ------ |
| header     | Set header, can also be inserted via slot | String  | —                      | —      |
| body-style | Set body styles                  | Object  | —                      | —      |
| shadow     | Shadow display                        | String  | always / hover / never | hover  |
| bordered   | Whether to show border                    | Boolean | false                  | true   |
| width      | Set default card width                  | String  | —                      | 100%   |
| radius     | Set border radius value                        | String  | 0 / percentage / px      | 4px    |
| divider    | Divider between header and body          | String  | no / has               | has    |
| head-tip   | Highlight tip for header                    | Boolean | true / false           | false  |
| bg-color   | Overall background color                      | String  | —                      | #fff   |
