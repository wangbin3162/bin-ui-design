---
title: globalconfiguration  ConfigProvider
---

<b-back-top></b-back-top>

# Basic Usage

Use the global configuration component for style overrides.

<preview path="./demo/ConfigProvider/Basic.vue"></preview>

# Abstract Container

Can be injected using an abstract tag, which will be injected into the HTML by default for global overrides (use with caution to avoid conflicts; generally used for global theme configuration).

<preview path="./demo/ConfigProvider/Abstract.vue"></preview>

# Dark Mode

Enable dark mode with `theme-name="dark"`. Runtime switching is supported, and teleported/function components (such as Message, Notice, MessageBox) will follow the current theme automatically.

<preview path="./demo/ConfigProvider/Dark.vue"></preview>

# Internationalization

You can switch languages via the `locale` property. Currently, `zh-CN` and `en-US` are supported.

It is recommended to manage internationalization uniformly outside of business projects (e.g., via the application-layer i18n solution), while the component library injects language settings through `ConfigProvider`.

For more details, see [Internationalization](/en/docs/internationalization.html).

<preview path="./demo/ConfigProvider/Locale.vue"></preview>
