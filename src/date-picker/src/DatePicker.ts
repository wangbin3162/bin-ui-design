import { ref } from 'vue'
import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from '../../time-picker/src'
import { CommonPicker, defaultProps } from '../../time-picker/src'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { h } from 'vue'

dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const getPanel = function (type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePickPanel
  } else if (type === 'monthrange') {
    return MonthRangePickPanel
  }
  return DatePickPanel
}

const getFormatValue = function (value, format) {
  if (!format || !value) return value
  if (dayjs(value).isValid()) {
    return dayjs(value).format(format)
  } else {
    console.warn('value-format must be right date string!', value)
    return value
  }
}

export default {
  name: 'BDatePicker',
  install: null,
  props: {
    ...defaultProps,
    type: {
      type: String,
      default: 'date'
    },
    valueFormat: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const commonPicker = ref(null)
    const refProps = {
      ...props,
      focus: () => {
        commonPicker.value?.handleFocus()
      }
    }
    const panel = getPanel(props.type)
    ctx.expose(refProps)
    return () => {
      // since props always have all defined keys on it, {format, ...props} will always overwrite format
      // pick props.format or provide default value here before spreading
      const format =
        props.format ?? (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)

      return h(
        CommonPicker,
        {
          ...props,
          format,
          type: props.type,
          ref: commonPicker,
          'onUpdate:modelValue': value => {
            let val = value
            if (val) {
              if (props.valueFormat) {
                const isRange = ['datetimerange', 'daterange', 'monthrange', 'dates'].includes(
                  props.type
                )
                if (isRange) {
                  val = value.map(item => getFormatValue(item, props.valueFormat))
                } else {
                  val = getFormatValue(value, props.valueFormat)
                }
              }
            }

            ctx.emit('update:modelValue', val)
          }
        },
        {
          default: scopedProps => h(panel, scopedProps)
        }
      )
    }
  }
}
