---
title: Card
---

<b-back-top></b-back-top>

# Card

按照一个区块来展示

## Basic Usage

头部可以 Enable高亮Tip，如不需要头部则不用插入header Can enable `head-tip`来高亮header的前头

<preview path="./demo/Card/Basic.vue"></preview>

## DefaultTitle和divider

直接传入header可以生成DefaultTitle,configurationdivider="no"可以消除DefaultTitle和Content的divider

<preview path="./demo/Card/TitleDivider.vue"></preview>

## Border和border radius

无border适合在有background的情况下use

<preview path="./demo/Card/BorderRadius.vue"></preview>

## shadow

<preview path="./demo/Card/Shadow.vue"></preview>

## Props

| Parameter       | Description                              | Type    | Options                 | Default |
| ---------- | --------------------------------- | ------- | ---------------------- | ------ |
| header     | 设置 header，也可以已slot形式插入 | String  | —                      | —      |
| body-style | 设置 body 的style                  | Object  | —                      | —      |
| shadow     | shadow的Show                        | String  | always / hover / never | hover  |
| bordered   | 设置Whether to 有border                    | Boolean | false                  | true   |
| width      | 设置cardDefaultWidth                  | String  | —                      | 100%   |
| radius     | 设置border radius值                        | String  | 0 / percentage / px      | 4px    |
| divider    | header和body之间的divider          | String  | no / has               | has    |
| head-tip   | 头部的高亮Tip                    | Boolean | true / false           | false  |
| bg-color   | 整体的background色                      | String  | —                      | #fff   |
