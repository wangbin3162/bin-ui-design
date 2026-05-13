---
title: Skeleton
---

<b-back-top></b-back-top>

# Skeleton

Place a skeleton where content is loading. In some scenarios, it provides a better visual experience than a loading spinner.

## Basic Usage

Basic skeleton effect.

<preview path="./demo/Skeleton/Basic.vue"></preview>

## More Parameters

Configure the number of skeleton paragraph rows to more closely match the real rendering. The displayed count will be one more than the number passed in; the first row is rendered as a leading paragraph at 33% width.

<preview path="./demo/Skeleton/Rows.vue"></preview>

## Animation Effect

Can display animation effects.

<preview path="./demo/Skeleton/Animation.vue"></preview>

## Custom

Use slots to define custom templates, allowing you to build a skeleton that closely matches the real DOM structure.

<preview path="./demo/Skeleton/Custom.vue"></preview>

## Loading loading

After loading completes, display the real UI via the slot.

<preview path="./demo/Skeleton/Loading.vue"></preview>

# Skeleton Props

| Parameter     | Description                                        | Type    | Options       | Default |
| -------- | ------------------------------------------- | ------- | ------------ | ------ |
| animated | Whether to useanimation                                | boolean | true / false | false  |
| count    | Number of templates to render; use the smallest number possible | number  | integer      | 1      |
| loading  | Whether to show the real DOM structure                     | boolean | true / false | false  |
| rows     | Number of skeleton paragraph rows                              | number  | Positive integer       | 3      |
| throttle | Delay before rendering the placeholder DOM, in milliseconds         | number  | Positive integer       | 0      |

## Skeleton Item Attributes

| Parameter    | Description                     | Type         | Options                                                                    | Default |
| ------- | ------------------------ | ------------ | ------------------------------------------------------------------------- | ------ |
| variant | Style of the currently displayed placeholder element | Enum(string) | p / text / h1 / h2 / h5 / text / caption / button / image / circle / rect | text   |

## Skeleton Slots

| name     | description          |
| -------- | -------------------- |
| default  | Used to display the real UI      |
| template | Used to display custom placeholders |
