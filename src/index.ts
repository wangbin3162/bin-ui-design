import * as util from './_utils/util'
import * as helper from './_utils/util-helper'
import * as dom from './_utils/dom'
import * as resize from './_utils/resize-event'
import * as color from './_utils/color'
import log from './_utils/log'

export { default, install } from './preset'

export { default as create } from './create'

export * from './components'

export * from './_directives'

export const Utils = {
  util,
  helper,
  resize,
  color,
  dom,
  log
}

export { default as version } from './version'
