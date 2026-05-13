---
title: Utility Functions
---

<b-back-top></b-back-top>

# Utility Functions

Some internal utility functions are exposed for external use via direct imports.

## Importing

Whether you use full or on-demand imports, the utility toolkit must be manually imported.

Only some utility functions are introduced here.

(We recommend creating an intermediate file to wrap various import functions — this makes management and organization easier.)

```ts
// util-helper.ts — define this yourself
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

// Or export by sub-package
```

## Utils.util

General utility toolkit

```ts
/**
 * @description Update document title
 * @param {String} title Title
 */
export function title(title) {
  // --
}

/**
 * @description Copy to clipboard
 * @param content
 */
export function copy(content) {
  // --
}

/**
 * @description Open new page
 * @param {String} url URL
 * @param target
 */
export function open(url, target = false) {
  // --
}

/**
 * @description Date formatting
 * @param time
 * @param cFormat
 * @param weekArray
 */
export function parseTime(time, cFormat = '{y}-{m}-{d} {h}:{i}:{s}', weekArray) {
  // --
}

/**
 * @description Get a date range, e.g., last week, last three months, next month
 * @param days Negative for past dates, positive for future dates
 * @param mode
 * @returns {*}
 */
export function rangeTime(days, mode = '{y}-{m}-{d}') {
  // --
}

/**
 * @description Accurately determine object type
 * @param obj
 */
export function typeOf(obj) {
  // --
}

/**
 * @description deep copy
 * @param data
 */
export function deepCopy(data) {
  // --
}

/**
 * @description Deep merge
 * @param target
 * @param merged
 */
export function deepMerge(target, merged) {
  // --
}

/**
 * @description Generate a random integer in a range
 * @param min Minimum value
 * @param max Maximum value
 * @return {number}
 */
export function getRandomInt(min, max) {
  // --
}

/**
 * @description Shuffle an array
 * @return {number}
 */
export function shuffle(arr) {
  // --
}

/**
 * @description Swap two array elements
 * @return {number}
 */
export function swap(arr, i, j) {
  // --
}

/**
 * @description Throttle function. (Limit function execution frequency)Returns a function that, when called continuously, only executes `func` after the idle time is >= `wait`.
 *
 * @param  {function} func        Callback function
 * @param  {number}   wait        Time window interval in milliseconds
 * @param immediate If true, execute immediately on the first call; if false, wait for the first interval.
 * @return {function}             Returns the client call function
 */
export function throttle(func, wait, immediate) {
  // --
}

/**
 * @description Debounce function. (Limit function execution frequency) Ensures that within a series of calls, the function is only executed once.
 *
 * @param  {function} func        Callback function
 * @param  {number}   wait        Time window interval in milliseconds
 * @return {function}             Returns the client call function
 */
export function debounce(func, wait) {
  // --
}

/**
 * @description Determine if object or array
 * @param obj
 * @returns {boolean}
 */
export function isObject(obj) {
  // --
}

/**
 * @description Determine if two objects or arrays are equal
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export function isEqual(obj1, obj2) {
  // --
}

/**
 * @description Generate a random UUID
 * @param hasHyphen Whether to include hyphens
 */
export function uuid(hasHyphen) {
  // --
}
```

## Utils.resize

Uses a resize plugin to respond to container size changes, which can be useful in real-world development.

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

Depends on the `color` package, wrapping some usage functions

```ts
/**
 * Depends on the color plugin, wrapping some conversion functions on top.
 * Reference docs: https://www.npmjs.com/package/color
 */
import Color from 'color'

// Color palette
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

/// Compare two color values
export function isEqual(color1, color2) {
  return Color(color1).toString() === Color(color2).toString()
}

// Check if light color
export function isLight(color) {
  return Color(color).isLight()
}

// Check if light color
export function isDark(color) {
  return Color(color).isDark()
}

// Mix colors with concentration
export function mix(mixColor, color, concentration) {
  return Color(color).mix(Color(mixColor), concentration).hex().toLowerCase()
}

// Mix with white
export function mixWhite(color, concentration) {
  return mix('#ffffff', color, concentration)
}

// Mix with black
export function mixBlack(color, concentration) {
  return mix('#000000', color, concentration)
}

// Alpha/opacity
export function alpha(color, alpha) {
  return Color(color).alpha(alpha).toString()
}

// Fade
export function fade(color, fade) {
  return Color(color).fade(fade).toString()
}

// Lighten
export function lighten(color, concentration) {
  return Color(color).lighten(concentration).toString()
}

// Darken
export function darken(color, concentration) {
  return Color(color).darken(concentration).toString()
}
```

## Utils.dom

DOM-related utility toolkit

```ts
// Trim whitespace
const trim = function (string) {
  //--
}

// Add event listener
export const on = (function () {
  //--
})()

// Remove event listener
export const off = (function () {
  //--
})()

// Add one-time event listener
export const once = function (el, event, fn) {
  //--
}

// Check if element has a CSS class
export function hasClass(el, cls) {
  //--
}

// Add CSS class
export function addClass(el, cls) {
  //--
}

// Remove a CSS class
export function removeClass(el, cls) {
  //--
}

// getStyle
export function getStyle(element, styleName) {
  //--
}

// Get browser scrollbar width
export function getScrollBarWidth() {
  //--
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  //--
}

// Capitalize first letter
export function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1)
}

// Check if element has scrollbar
export const isScroll = (el, isVertical) => {
  //--
}

// Get the scroll container
export const getScrollContainer = (el, isVertical) => {
  //--
}

// Stop propagation
export const stop = e => e.stopPropagation()
```

## Utils.log

Console log functions for colorized output

<preview path="./demo/Console/Demo.vue"></preview>

```ts
/**
 * @description Return the color value for a given style type
 * @param {String} type Style name [ primary | success | warning | danger | text ]
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

Helper utility methods

```ts
/**
 * Generate a random ID
 * @returns id
 */
export const generateId = () => Math.floor(Math.random() * 10000)

/**
 * Check if boolean
 * @param val
 * @returns
 */
export const isBool = val => typeof val === 'boolean'

/**
 * Check if number
 * @param val
 * @returns
 */
export const isNumber = val => typeof val === 'number'

/**
 * Check if string
 * @param val
 * @returns
 */
export const isString = value => typeof value === 'string'

/**
 * Check if HTMLElement
 * @param val
 * @returns
 */
export const isHTMLElement = val => {
  // --
}

/**
 * Check if empty
 */
export function isEmpty(val) {
  // --
}

/**
 * Find array element
 * @param arr
 * @param pred
 * @returns
 */
export const arrayFind = (arr, pred) => arr.find(pred)

/**
 * Find array index
 * @param arr
 * @param pred
 * @returns
 */
export const arrayFindIndex = (arr, pred) => arr.findIndex(pred)

/**
 * Clear timer
 * @param val
 * @returns
 */
export const clearTimer = timer => {
  // --
}

/**
 * Add transition prefix
 * @param style
 * @returns
 */
export const autoprefixer = function (style) {
  // --
}

/**
 * Get nested path by dot notation
 * @param obj
 * @param paths
 * @returns
 */
export const getValueByPath = (obj, paths = '') => {
  // --
}

/**
 * Get prop by path
 * @param obj
 * @param path
 * @param strict
 * @returns
 */
export function getPropByPath(obj, path, strict) {
  // --
}

/**
 * Check if Internet Explorer
 * @returns
 */
export const isIE = function () {
  // --
}

/**
 * Check if Microsoft Edge
 * @returns
 */
export const isEdge = function () {
  // --
}

/**
 * Escape regex string
 * @param value
 * @returns
 */
export const escapeRegexpString = (value = '') => {
  // --
}

/**
 * Get entries if available
 * @param obj
 * @returns
 */
export function entries(obj) {
  // --
}

/**
 * Unwrap ref
 * @param ref Refed value
 */
export function $(ref) {
  // --
}

/** Check if undefined */
export function isUndefined(val) {
  // --
}

/**
 * Flatten array
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
 * Coerce value to array
 * @param arr
 * @returns
 */
export const coerceTruthyValueToArray = arr => {
  // --
}
```
