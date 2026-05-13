---
title: globalconfiguration  ConfigProvider
---

<b-back-top></b-back-top>

# 基础用法

可以借助globalconfigurationcomponent，来进行style覆盖

<preview path="./demo/ConfigProvider/Basic.vue"></preview>

# 抽象容器

可以use抽象tag来注入，这里会Default注入到html ，进行global覆盖(谨慎use，避免冲突和覆盖，一般Used for globalconfigurationthemeuse)

<preview path="./demo/ConfigProvider/Abstract.vue"></preview>

# 国际化

可通过 `locale` property切换语言，当前支持 `zh-CN` 和 `en-US`。

国际化能力建议在业务项目外部统一管理（e.g. 由应用层 i18n 方案负责），component库侧通过 `ConfigProvider` 进行语言注入。

更多Description请参见 [国际化](/en/docs/internationalization.html)。

<preview path="./demo/ConfigProvider/Locale.vue"></preview>
