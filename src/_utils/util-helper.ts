import isServer from './isServer'
import { isObject, typeOf } from './util'

/**
 * 随机一个id
 * @returns id
 */
export const generateId = () => Math.floor(Math.random() * 10000)

/**
 * 是否是一个函数
 * @param val
 * @returns
 */
export const isFunction = val => typeOf(val) === 'function'

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
 * 是否是object
 * @param val
 * @returns
 */
export { isObject }

/**
 * 是否是isArray
 * @param val
 * @returns
 */
export const isArray = value => typeOf(value) === 'array'

/**
 * 是否是Promise
 * @param fn
 * @returns
 */
export const isPromise = (fn: any): boolean => fn instanceof Promise

/**
 * 是否是HTMLElement
 * @param val
 * @returns
 */
export const isHTMLElement = val =>
  typeof val === 'object' &&
  val !== null &&
  Object.prototype.toString.call(val).startsWith('[object HTML')

/**
 * 是否为空
 */
export function isEmpty(val) {
  return (
    (!val && val !== 0) ||
    (Array.isArray(val) && !val.length) ||
    (isObject(val) && !Object.keys(val).length)
  )
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
  clearTimeout(timer.value)
  timer.value = null
}

/**
 * 追加transition前缀
 * @param style
 * @returns
 */
export const autoprefixer = function (style) {
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}

/**
 * 根据.获取拼接路径
 * @param obj
 * @param paths
 * @returns
 */
export const getValueByPath = (obj, paths = '') => {
  let ret = obj
  paths.split('.').map(path => {
    ret = ret?.[path]
  })
  return ret
}

/**
 * 根据路径信息获取prop
 * @param obj
 * @param path
 * @param strict
 * @returns
 */
export function getPropByPath(obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (i; i < keyArr.length - 1; i++) {
    if (!tempObj && !strict) break
    const key = keyArr[i]

    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj?.[keyArr[i]]
  }
}

/**
 * 是否是IE
 * @returns
 */
export const isIE = function () {
  return !isServer && !isNaN(Number(document.DOCUMENT_NODE))
}

/**
 * 是否是Edge
 * @returns
 */
export const isEdge = function () {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1
}

/**
 * 正则转换
 * @param value
 * @returns
 */
export const escapeRegexpString = (value = '') =>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

/**
 * 是否存在entries
 * @param obj
 * @returns
 */
export function entries(obj) {
  return Object.keys(obj).map(key => [key, obj[key]])
}

/**
 * ref解包
 * @param ref Refed value
 */
export function $(ref) {
  return ref.value
}

/** 是否是undefined */
export function isUndefined(val) {
  return val === void 0
}

/**
 * 数组打乱
 * @param arr
 * @returns
 */
export function arrayFlat(arr) {
  return arr.reduce((acm, item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item
    return acm.concat(val)
  }, [])
}

export function deduplicate(arr) {
  return Array.from(new Set(arr))
}

/**
 * 实际值转换为数组
 * @param arr
 * @returns
 */
export const coerceTruthyValueToArray = arr => {
  if (!arr && arr !== 0) {
    return []
  }
  return Array.isArray(arr) ? arr : [arr]
}

export function capitalize(str: string): string {
  if (str.length === 0) {
    return str
  }
  return str[0].toUpperCase() + str.slice(1)
}
