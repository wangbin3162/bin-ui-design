---
title: Common Styles
---

<b-back-top></b-back-top>

# Common Styles

The library includes some common styles such as margin/padding utilities and flex. These are imported by default with the global styles. When using on-demand loading, you can import them as needed.

```ts
// main.ts
// Full import
import 'bin-ui-design/dist/styles/index.css'
// On-demand import
import 'bin-ui-design/dist/styles/base.css'
import 'bin-ui-design/dist/styles/icon.css'

// Extended base styles
import 'bin-ui-design/dist/styles/common/common.css'
import 'bin-ui-design/dist/styles/common/flex.css'
import 'bin-ui-design/dist/styles/common/reset.css'
import 'bin-ui-design/dist/styles/common/scrollbar.css'
```

## reset.css

Base styles for resetting defaults. The reset styles already integrate some style variables for easier use. Simply import them directly.

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

[flex.css](https://github.com/lzxb/flex.css) compatibility styles. `flex.css` extends the wrap attribute with `wrap`.

```css
[flex~='wrap:wrap'] {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
```

<!--
  Import the CSS files from the dist directory into your page as needed.
  flex.css uses flex attribute matching.
  data-flex.css uses data-flex attribute matching (for React).
  If using webpack, after npm install and with an ES6 compiler configured,
  flex attribute matching can be used directly:
    import 'flex.css';
  data-flex attribute matching can be used directly (for React):
    import 'flex.css/dist/data-flex.css';
  -->
<!-- flex attribute matching, simple child centering example: -->
<div flex="main:center cross:center" style="height: 80px; border:1px solid #1089ff">
  <div style="background: #fff;padding: 15px;">Am I centered?</div>
</div>

```html
<!--
  Import the CSS files from the dist directory into your page as needed.
  flex.css uses flex attribute matching.
  data-flex.css uses data-flex attribute matching (for React).
  If using webpack, after npm install and with an ES6 compiler configured,
  flex attribute matching can be used directly:
    import 'flex.css';
  data-flex attribute matching can be used directly (for React):
    import 'flex.css/dist/data-flex.css';
  -->
<!-- flex attribute matching, simple child centering example: -->
<div flex="main:center cross:center" style="height: 80px; border:1px solid #1089ff">
  <div style="background: #fff;padding: 15px;">Am I centered?</div>
</div>
```

Flex Attributes

```
dir: Main axis direction
    top: from top to bottom
    right: from right to left
    bottom: from bottom to top
    left: from left to right (default)

main: Main axis alignment
    right: from right to left
    left: from left to right (default)
    justify: space-between
    center: center

cross: Cross axis alignment
    top: from top to bottom (default)
    bottom: from top to bottom
    baseline: baseline alignment
    center: center
    stretch: stretch to fill height

box: Child element settings
    mean: children share space equally
    first: first child takes no extra space, others share equally
    last: last child takes no extra space, others share equally
    justify: first and last children take no extra space, others share equally

flex-box:
  Range (0-10). Sets how extra space is distributed for individual child elements.
  Set to 0 to prevent the child from taking extra space.
  Space distribution = current flex-box value / sum of all child flex-box values
```

## common.css

Border and common utility styles

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

Used to reset default scrollbar styles. You can also use the built-in scrollbar component.

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
