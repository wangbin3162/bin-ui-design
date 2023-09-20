# Bin UI Design

Bin UI Design 是一个 Vue3 的组件库。

要了解如何安装，参见 [安装](/docs/installation.html)

它是基于 [bin-ui-next](https://wangbin3162.gitee.io/bin-ui-next/#/guide) 更新而来，可以平滑的过度和切换。

## 最新版本

[![NPM version](https://img.shields.io/npm/v/bin-ui-design.svg)](https://www.npmjs.com/package/bin-ui-design)

## 组件丰富

我们提供了超过60 个组件，基本可以满足日常开发需求。

顺带一提，基本全都可以 treeshaking。

## 使用 TypeScript 编写

使用了TypeScript 进行了重构。更快更好。另外，你不需要导入任何 CSS 就能让组件正常工作。

## 主题样式

使用了Postcss 重构了样式，增加了更多的主题颜色配置。我们提供了一个使用TypeScript构建的类型安全主题系统。您只需要按需进行配置导出一个配置覆盖对象即可。

# 安装

注意，bin-ui-design 仅支持 Vue3。如果你在使用 Vue2，可以使用 [bin-ui](https://wangbin3162.gitee.io/bin-ui/#/guide)。

## 最新版本

[![NPM version](https://img.shields.io/npm/v/bin-ui-design.svg)](https://www.npmjs.com/package/bin-ui-design)

## npm

推荐使用 pnpm 进行安装，它能更好地和打包工具配合使用。而且可以更好的和 typescript 配合使用。并且支持按需引入

```sh
npm i bin-ui-design
# or
yarn add bin-ui-design
# or
pnpm add bin-ui-design
```

## 在 SFC 中使用

推荐在 SFC 单文件组件风格（SFC - Single File Component）环境中进行使用，可以选择直接引入或全局安装在 Vue App 中。

参考[在 SFC 中使用](/docs/usage-sfc.html)
