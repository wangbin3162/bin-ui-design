# 组件编写规则说明

整个项目的目录结构如下，具体包含内容后续会进行详细介绍和解释

    ├── build                      // 打包相关脚本
    ├── demo                       // 组件示例包
    ├── site                       // 组件示例打包后部署文件夹
    ├── dist                       // 组件打包资源
    ├── es                         // es-build打包后资源
    ├── lib                        // cjs打包后资源
    ├── src                        // 组件源代码
    │   ├── _directives            // 全局指令（会默认注册和导出，外部可以单独使用）
    │   ├── _hooks                 // 公共hooks
    │   ├── _internal              // 内部组件，也会导出
    │   ├── _styles                // 样式文件，全局样式编写
    │   ├── _uitls                 // 工具包
    │   ├── components             // 别名，通常是组件名称小写，如button
    │       ├── src                // 组件源码，以及types.ts 声明文件
    │       ├── styles             // 组件样式代码，组件内部需要引入，用于实现按需加载
    │       ├── test               // 测试文件夹
    │       ├── index.ts           // 组件导出入口
    │   ├── components.ts          // 组件列表
    │   ├── create.ts              // 组件自动注册
    │   ├── index.ts               // 组件入口
    │   ├── preset.ts              // 预设文件夹，用于注册全局组件和指令
    │   └── version.ts             // 版本文件

## 1.组件编写

1、组件编写统一放置与根目录src 文件夹，单独开一个文件夹用于存放组件目录如button，其内部需要包括几个文件夹，见上图。
2、组件明明一般为大写开头的编写，同时，内部使用defineOptions({name: 'BButton'}) 包裹声明组件名称，组件名称前缀统一为B。
3、组件样式与styles/index.css 中编写，其中dark.css为深色模式的样式，需要在index.css中引入
5、组件编写完毕后，需要index.ts进行导出，并在src/components.ts 中进行导入使用。

## 2.样式编写

1、全局样式编写在\_styles 文件夹下。
2、组件内部的样式分别编写在对应组件内部的样式中。并在\_sytles/index.css 中进行导入。

## 3.库文件打包

1、库文件打包依赖于vite的库模式，同时需要进行部分配置。
2、具体配置参考vite.config.ts
3、打包时运行命令`pnpm run build`，会同时打包dist，es，lib三个文件夹，分别对应不同环境，同时，样式和声明文件会放置到dist目录
4、打包完毕后即可进行提交和部署，使用npm登录后，进行npm publish即可.

## 4.文档编辑

文档使用vitepress进行搭建。
md 中的table可以使用https://markdown-convert.com/en/tool/table进行转换。
