---
title: 帮助函数
---

# 帮助函数

部分内部的帮助函数已经暴露给外部，可供外部直接导入使用。

## 导入

无论是全量引入还是按需引入，扩展工具包只能通过手动引入的方式进行注册。

这里只介绍部分包中的函数.

(推荐开启一个中间文件用于包裹各种导入函数，这样方便管理和区分)

```ts
// util-helper.ts 这里是你自己定义的
import { Utils } from 'bin-ui-design'

export const typeOf = Utils.util.typeOf
export const deepCopy = Utils.util.deepCopy
export const deepMerge = Utils.util.deepMerge
export const throttle = Utils.util.throttl
export const debounce = Utils.util.debounc
export const on = Utils.dom.on
export const off = Utils.dom.off
export const addClass = Utils.dom.addClass
export const removeClass = Utils.dom.removeClass
export const addResizeListener = Utils.resize.addResizeListener
export const removeResizeListener = Utils.resize.removeResizeListener

// 或者按分包进行导出也可.
```

## Utils.util

通用工具包

```ts
/**
 * @description 更新标题
 * @param {String} title 标题
 */
export function title(title) {
  // --
}

/**
 * @description 复制到剪切板
 * @param content
 */
export function copy(content) {
  // --
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 * @param target
 */
export function open(url, target = false) {
  // --
}

/**
 * @description 日期格式化
 * @param time
 * @param cFormat
 * @param weekArray
 */
export function parseTime(time, cFormat = '{y}-{m}-{d} {h}:{i}:{s}', weekArray) {
  // --
}

/**
 * @description 获取区间范围，如近一周，近三个月，后一个月等
 * @param days 为负值时往前，正为之后的日期
 * @param mode
 * @returns {*}
 */
export function rangeTime(days, mode = '{y}-{m}-{d}') {
  // --
}

/**
 * @description 精准判断对象类型
 * @param obj
 */
export function typeOf(obj) {
  // --
}

/**
 * @description 深拷贝
 * @param data
 */
export function deepCopy(data) {
  // --
}

/**
 * @description 深度合并
 * @param target
 * @param merged
 */
export function deepMerge(target, merged) {
  // --
}

/**
 * @description 在某个区间随机一个整数
 * @param min 最小值
 * @param max 最大值
 * @return {number}
 */
export function getRandomInt(min, max) {
  // --
}

/**
 * @description 打乱某个数组
 * @return {number}
 */
export function shuffle(arr) {
  // --
}

/**
 * @description 交换两个数组内容
 * @return {number}
 */
export function swap(arr, i, j) {
  // --
}

/**
 * @description 节流函数，(限制函数的执行频率)返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param immediate 是否立即执行 true 则先调用，false不先调用
 * @return {function}             返回客户调用函数
 */
export function throttle(func, wait, immediate) {
  // --
}

/**
 * @description 防抖函数，(限制函数的执行频率) 保证再一系列调用时间内，只调用一次
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @return {function}             返回客户调用函数
 */
export function debounce(func, wait) {
  // --
}

/**
 * @description 判断是否是对象或数组
 * @param obj
 * @returns {boolean}
 */
export function isObject(obj) {
  // --
}

/**
 * @description 判定对象数组相等
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export function isEqual(obj1, obj2) {
  // --
}

/**
 * @description 获取随机uuid
 * @param hasHyphen 是否有连接符
 */
export function uuid(hasHyphen) {
  // --
}
```

## Utils.resize

resize 借助插件实现容器大小改变的响应实现,实际开发中也偶尔能用到

```ts
import ResizeObserver from 'resize-observer-polyfill'

/* istanbul ignore next */
const resizeHandler = function (entries) {
  // --
}

/* istanbul ignore next */
export const addResizeListener = function (element: HTMLElement, fn) {
  // --
}

/* istanbul ignore next */
export const removeResizeListener = function (element: HTMLElement, fn) {
  // --
}
```

## Utils.color

依赖colorjs包,封装部分用法函数

```ts
/**
 * 依赖color插件，在此基础上封装部分转换函数
 * 参考文档说明：https://www.npmjs.com/package/color
 */
import Color from 'color'

// 调色板
export function getPalette(color) {
  const normalColor = Color(color).hex().toString().toLowerCase()
  // active
  const darkColor1 = mixBlack(normalColor, 0.1)
  const darkColor2 = mixBlack(normalColor, 0.2)
  const darkColor3 = mixBlack(normalColor, 0.3)
  const darkColor4 = mixBlack(normalColor, 0.4)
  // light
  const lightColor1 = mixWhite(normalColor, 0.2)
  const lightColor2 = mixWhite(normalColor, 0.4)
  const lightColor3 = mixWhite(normalColor, 0.6)
  const lightColor4 = mixWhite(normalColor, 0.8)
  const lightColor5 = mixWhite(normalColor, 0.9)
  const lightColor6 = mixWhite(normalColor, 0.95)

  return [
    darkColor4,
    darkColor3,
    darkColor2,
    darkColor1,
    normalColor,
    lightColor1,
    lightColor2,
    lightColor3,
    lightColor4,
    lightColor5,
    lightColor6
  ]
}

// getObject
export function toObject(color) {
  return Color(color).object()
}

// getHex
export function toHex(color, toLowerCase = true) {
  const hex = Color(color).hex().toString()
  return toLowerCase ? hex.toLowerCase() : hex
}

// getRgbArr
export function toRgbArr(color) {
  return Color(color).rgb().array()
}

// getHslArr
export function toHslArr(color) {
  return Color(color).hsl()
}

// grayscale
export function grayscale(color) {
  return Color(color).grayscale().toString()
}

/// 两个颜色值比较
export function isEqual(color1, color2) {
  return Color(color1).toString() === Color(color2).toString()
}

// 是否是light
export function isLight(color) {
  return Color(color).isLight()
}

// 是否是light
export function isDark(color) {
  return Color(color).isDark()
}

// 混合色，浓度
export function mix(mixColor, color, concentration) {
  return Color(color).mix(Color(mixColor), concentration).hex().toLowerCase()
}

// 混合白色
export function mixWhite(color, concentration) {
  return mix('#ffffff', color, concentration)
}

// 混合黑色
export function mixBlack(color, concentration) {
  return mix('#000000', color, concentration)
}

// 透明度
export function alpha(color, alpha) {
  return Color(color).alpha(alpha).toString()
}

// 渐隐
export function fade(color, fade) {
  return Color(color).fade(fade).toString()
}

// 变轻
export function lighten(color, concentration) {
  return Color(color).lighten(concentration).toString()
}

// 变深
export function darken(color, concentration) {
  return Color(color).darken(concentration).toString()
}
```

## Utils.dom

dom 相关工具包

```ts
// 去除空格
const trim = function (string) {
  //--
}

// 监听事件
export const on = (function () {
  //--
})()

// 移除事件
export const off = (function () {
  //--
})()

// 监听一次事件
export const once = function (el, event, fn) {
  //--
}

// 是否有class类名
export function hasClass(el, cls) {
  //--
}

// 添加class
export function addClass(el, cls) {
  //--
}

// 移除一个class样式
export function removeClass(el, cls) {
  //--
}

// getStyle
export function getStyle(element, styleName) {
  //--
}

// 获取浏览器滚动条宽度
export function getScrollBarWidth() {
  //--
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  //--
}

// 首字母大写
export function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1)
}

// 是否有滚动条
export const isScroll = (el, isVertical) => {
  //--
}

// 获取滚动容器
export const getScrollContainer = (el, isVertical) => {
  //--
}

// 阻止冒泡
export const stop = e => e.stopPropagation()
```

## Utils.log

log 控制台打印函数,用于各种颜色的打印

<preview path="./demo/Console/Demo.vue"></preview>

```ts
/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
export function typeColor(type = 'default') {
  //--
}

const print = (text, type = 'default', back = false) => {
  //--
}

const pretty = (title, text, type = 'primary') => {
  //--
}

const primary = (text, back = false) => {
  //--
}
const success = (text, back = false) => {
  //--
}
const info = (text, back = false) => {
  //--
}
const warning = (text, back = false) => {
  //--
}
const danger = (text, back = false) => {
  //--
}
const printVersion => (
  //--
}
const log = {
  print,
  pretty,
  primary,
  info,
  success,
  warning,
  danger,
  printVersion
}

export default log

export const throwError = (scope, m) => {
  //--
}
export const throwWarn = (scope, m) => {
  //--
}

```

## Utils.helper

辅助判断方法

```ts
/**
 * 随机一个id
 * @returns id
 */
export const generateId = () => Math.floor(Math.random() * 10000)

/**
 * 是否是boolean
 * @param val
 * @returns
 */
export const isBool = val => typeof val === 'boolean'

/**
 * 是否是number
 * @param val
 * @returns
 */
export const isNumber = val => typeof val === 'number'

/**
 * 是否是string
 * @param val
 * @returns
 */
export const isString = value => typeof value === 'string'

/**
 * 是否是HTMLElement
 * @param val
 * @returns
 */
export const isHTMLElement = val => {
  // --
}

/**
 * 是否为空
 */
export function isEmpty(val) {
  // --
}

/**
 * 查找数组元素
 * @param arr
 * @param pred
 * @returns
 */
export const arrayFind = (arr, pred) => arr.find(pred)

/**
 * 查找数组索引
 * @param arr
 * @param pred
 * @returns
 */
export const arrayFindIndex = (arr, pred) => arr.findIndex(pred)

/**
 * 清空计时器
 * @param val
 * @returns
 */
export const clearTimer = timer => {
  // --
}

/**
 * 追加transition前缀
 * @param style
 * @returns
 */
export const autoprefixer = function (style) {
  // --
}

/**
 * 根据.获取拼接路径
 * @param obj
 * @param paths
 * @returns
 */
export const getValueByPath = (obj, paths = '') => {
  // --
}

/**
 * 根据路径信息获取prop
 * @param obj
 * @param path
 * @param strict
 * @returns
 */
export function getPropByPath(obj, path, strict) {
  // --
}

/**
 * 是否是IE
 * @returns
 */
export const isIE = function () {
  // --
}

/**
 * 是否是Edge
 * @returns
 */
export const isEdge = function () {
  // --
}

/**
 * 正则转换
 * @param value
 * @returns
 */
export const escapeRegexpString = (value = '') => {
  // --
}

/**
 * 是否存在entries
 * @param obj
 * @returns
 */
export function entries(obj) {
  // --
}

/**
 * ref解包
 * @param ref Refed value
 */
export function $(ref) {
  // --
}

/** 是否是undefined */
export function isUndefined(val) {
  // --
}

/**
 * 数组打乱
 * @param arr
 * @returns
 */
export function arrayFlat(arr) {
  // --
}

export function deduplicate(arr) {
  // --
}

/**
 * 实际值转换为数组
 * @param arr
 * @returns
 */
export const coerceTruthyValueToArray = arr => {
  // --
}
```
