import * as util from './_utils/util'
import * as helper from './_utils/util-helper'
import * as dom from './_utils/dom'
import * as resize from './_utils/resize-event'
import * as color from './_utils/color'
import log from './_utils/log'

export { setConfig } from './_utils/config'

export { default, LoadingBar, Message, MessageBox, Notice } from './preset'

export { default as create } from './create'

export * from './components'

export * from './_directives'

export { default as version } from './version'

export const Utils = {
  util,
  helper,
  resize,
  color,
  dom,
  log
}
