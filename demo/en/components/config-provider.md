---
title: 全局配置  ConfigProvider
---

<b-back-top></b-back-top>

# 基础用法

可以借助全局配置组件，来进行样式覆盖

<preview path="./demo/ConfigProvider/Basic.vue"></preview>

# 抽象容器

可以使用抽象标签来注入，这里会默认注入到html ，进行全局覆盖(谨慎使用，避免冲突和覆盖，一般用于全局配置主题使用)

<preview path="./demo/ConfigProvider/Abstract.vue"></preview>

# 国际化

可通过 `locale` 属性切换语言，当前支持 `zh-CN` 和 `en-US`。

<preview path="./demo/ConfigProvider/Locale.vue"></preview>
