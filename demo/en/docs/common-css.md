---
title: 通用样式
---

<b-back-top></b-back-top>

# 通用样式

组件内部导入了部分通用样式，如内外边距，flex等。默认全局样式引入的时候会默认导入，如进行按需加载，部分内容可按需进行导入

```ts
// main.ts
// 全部引入
import 'bin-ui-design/dist/styles/index.css'
// 按需引入
import 'bin-ui-design/dist/styles/base.css'
import 'bin-ui-design/dist/styles/icon.css'

// 扩展基础样式
import 'bin-ui-design/dist/styles/common/common.css'
import 'bin-ui-design/dist/styles/common/flex.css'
import 'bin-ui-design/dist/styles/common/reset.css'
import 'bin-ui-design/dist/styles/common/scrollbar.css'
```

## reset.css

基础样式用于初始化默认样式，这里的reset样式已经集成了部分样式变量，更方便使用。使用时直接导入即可。

```css
body {
  color: var(--bin-color-text-primary);
  font-size: var(--bin-font-size-default);
  font-family: var(--bin-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

article,
aside,
blockquote,
body,
button,
code,
dd,
details,
div,
dl,
dt,
fieldset,
figcaption,
figure,
footer,
form,
header,
hgroup,
hr,
input,
legend,
li,
menu,
nav,
ol,
p,
pre,
section,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}

a {
  color: var(--bin-color-primary);
  text-decoration: none;
  &:hover {
    color: var(--bin-color-primary-light1);
    outline: none;
  }

  &:focus {
    color: var(--bin-color-primary-light1);
    outline: none;
  }
  &:active {
    color: var(--bin-color-primary-active);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--bin-color-text-primary);
  font-weight: inherit;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

h1 {
  font-size: calc(--bin-font-size-default + 6px);
}

h2 {
  font-size: calc(--bin-font-size-default + 4px);
}

h3 {
  font-size: calc(--bin-font-size-default + 2px);
}

h4,
h5,
h6,
p {
  font-size: inherit;
}

p {
  line-height: 1.8;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

sup,
sub {
  font-size: calc(--bin-font-size-default - 1px);
}

small {
  font-size: calc(--bin-font-size-default - 2px);
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: var(--bin-border-base-light);
}
```

## flex.css

[flex.css](https://github.com/lzxb/flex.css) 兼容样式 ， `flex.css` 扩展了换行属性`wrap`

```css
[flex~='wrap:wrap'] {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
```

<!--
  将dist目录下的css文件引入到你的页面中，根据你的需要引入
  flex.css 使用flex属性匹配
  data-flex.css 使用data-flex属性匹配（React使用）
  如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，
  flex 属性匹配可以直接使用：
    import 'flex.css';
  data-flex 属性匹配可以直接使用(react使用)
    import 'flex.css/dist/data-flex.css';
  -->
<!-- flex属性匹配，简单的子元素居中例子： -->
<div flex="main:center cross:center" style="height: 80px; border:1px solid #1089ff">
  <div style="background: #fff;padding: 15px;">看看我是不是居中的</div>
</div>

```html
<!--
  将dist目录下的css文件引入到你的页面中，根据你的需要引入
  flex.css 使用flex属性匹配
  data-flex.css 使用data-flex属性匹配（React使用）
  如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，
  flex 属性匹配可以直接使用：
    import 'flex.css';
  data-flex 属性匹配可以直接使用(react使用)
    import 'flex.css/dist/data-flex.css';
  -->
<!-- flex属性匹配，简单的子元素居中例子： -->
<div flex="main:center cross:center" style="height: 80px; border:1px solid #1089ff">
  <div style="background: #fff;padding: 15px;">看看我是不是居中的</div>
</div>
```

flex 属性

```
dir：主轴方向
    top：从上到下
    right：从右到左
    bottom：从下到上
    left：从左到右（默认）

main：主轴对齐方式
    right：从右到左
    left：从左到右（默认）
    justify：两端对齐
    center：居中对齐

cross：交叉轴对齐方式
    top：从上到下（默认）
    bottom：从上到下
    baseline：基线对齐
    center：居中对齐
    stretch：高度并排铺满

box：子元素设置
    mean：子元素平分空间
    first：第一个子元素不要多余空间，其他子元素平分多余空间
    last：最后一个子元素不要多余空间，其他子元素平分多余空间
    justify：两端第一个元素不要多余空间，其他子元素平分多余空间

flex-box:
  取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间
  多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和
```

## common.css

边框和部分常用样式

```css
.m0 {
  margin: 0;
}
.m5 {
  margin: 5px;
}
.m10 {
  margin: 10px;
}
.m15 {
  margin: 15px;
}
.m20 {
  margin: 20px;
}
.m8 {
  margin: 8px;
}
.m16 {
  margin: 16px;
}
.m24 {
  margin: 24px;
}
.mt-5 {
  margin-top: 5px;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
.mt-20 {
  margin-top: 20px;
}

.mt-8 {
  margin-top: 8px;
}
.mt-16 {
  margin-top: 16px;
}
.mt-24 {
  margin-top: 24px;
}

.mr-5 {
  margin-right: 5px;
}
.mr-10 {
  margin-right: 10px;
}
.mr-15 {
  margin-right: 15px;
}
.mr-20 {
  margin-right: 20px;
}
.mr-8 {
  margin-right: 8px;
}
.mr-16 {
  margin-right: 16px;
}
.mr-24 {
  margin-right: 24px;
}

.mb-5 {
  margin-bottom: 5px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-15 {
  margin-bottom: 15px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-8 {
  margin-bottom: 8px;
}
.mb-16 {
  margin-bottom: 16px;
}
.mb-24 {
  margin-bottom: 24px;
}

.ml-5 {
  margin-left: 5px;
}
.ml-10 {
  margin-left: 10px;
}
.ml-15 {
  margin-left: 15px;
}
.ml-20 {
  margin-left: 20px;
}

.ml-8 {
  margin-left: 8px;
}
.ml-16 {
  margin-left: 16px;
}
.ml-24 {
  margin-left: 24px;
}

.p0 {
  padding: 0;
}

.p5 {
  padding: 5px;
}

.p10 {
  padding: 10px;
}

.p15 {
  padding: 15px;
}

.p20 {
  padding: 20px;
}

.p8 {
  padding: 8px;
}
.p16 {
  padding: 16px;
}
.p24 {
  padding: 24px;
}

.pt-5 {
  padding-top: 5px;
}
.pt-10 {
  padding-top: 10px;
}
.pt-15 {
  padding-top: 15px;
}
.pt-20 {
  padding-top: 20px;
}
.pt-8 {
  padding-top: 8px;
}
.pt-16 {
  padding-top: 16px;
}
.pt-24 {
  padding-top: 24px;
}

.pr-5 {
  padding-right: 5px;
}
.pr-10 {
  padding-right: 10px;
}
.pr-15 {
  padding-right: 15px;
}
.pr-20 {
  padding-right: 20px;
}
.pr-8 {
  padding-right: 8px;
}
.pr-16 {
  padding-right: 16px;
}
.pr-24 {
  padding-right: 24px;
}

.pb-5 {
  padding-bottom: 5px;
}
.pb-10 {
  padding-bottom: 10px;
}
.pb-15 {
  padding-bottom: 15px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pb-8 {
  padding-bottom: 8px;
}
.pb-16 {
  padding-bottom: 16px;
}
.pb-24 {
  padding-bottom: 24px;
}

.pl-5 {
  padding-left: 5px;
}
.pl-10 {
  padding-left: 10px;
}
.pl-15 {
  padding-left: 15px;
}
.pl-20 {
  padding-left: 20px;
}

.pl-8 {
  padding-left: 8px;
}
.pl-16 {
  padding-left: 16px;
}
.pl-24 {
  padding-left: 24px;
}

.t-center {
  text-align: center;
}

.t-right {
  text-align: right;
}
.t-ellipsis {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.f-s-12 {
  font-size: 12px;
}
.f-s-14 {
  font-size: 14px;
}
.f-s-16 {
  font-size: 16px;
}
.f-s-18 {
  font-size: 18px;
}
.f-s-20 {
  font-size: 20px;
}
.f-s-22 {
  font-size: 22px;
}

.f-color-blue {
  color: #1089ff;
}
.f-color-red {
  color: #f5222d;
}
.f-color-333 {
  color: #333333;
}
.f-color-666 {
  color: #666666;
}
.f-color-999 {
  color: #999999;
}

.link {
  cursor: pointer;
  color: #1089ff;
}

.link-red {
  cursor: pointer;
  color: #f5222d;
}
.g-relative {
  position: relative;
}
[border-box] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

[t-ellipsis] {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

[v-cloak] {
  display: none;
}
```

## scrollbar.css

用于重置默认滚动条的样式，也可以使用内部scrollbar组件

```css
::-webkit-scrollbar {
  width: var(--bin-scrollbar-width);
  height: var(--bin-scrollbar-width);
}

::-webkit-scrollbar-track {
  background: var(--bin-scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--bin-scrollbar-color);
  border-radius: var(--bin-scrollbar-radius);
  transition: 0.2s;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--bin-scrollbar-color-hover);
}
```
