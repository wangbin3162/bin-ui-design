<template>
  <div
    class="bin-picker-panel bin-date-range-picker"
    :class="[
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime
      }
    ]"
  >
    <div class="bin-picker-panel__body-wrapper">
      <slot name="sidebar" class="bin-picker-panel__sidebar"></slot>
      <div v-if="hasShortcuts" class="bin-picker-panel__sidebar">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          class="bin-picker-panel__shortcut"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div class="bin-picker-panel__body">
        <div v-if="showTime" class="bin-date-range-picker__time-header">
          <span class="bin-date-range-picker__editors-wrap">
            <span class="bin-date-range-picker__time-picker-wrap">
              <b-input
                size="small"
                :disabled="rangeState.selecting"
                placeholder="开始日期"
                class="bin-date-range-picker__editor"
                :model-value="minVisibleDate"
                @input="val => handleDateInput(val, 'min')"
                @change="val => handleDateChange(val, 'min')"
              />
            </span>
            <span
              v-click-outside="handleMinTimeClose"
              class="bin-date-range-picker__time-picker-wrap"
            >
              <b-input
                size="small"
                class="bin-date-range-picker__editor"
                :disabled="rangeState.selecting"
                placeholder="开始时间"
                :model-value="minVisibleTime"
                @focus="minTimePickerVisible = true"
                @input="val => handleTimeInput(val, 'min')"
                @change="val => handleTimeChange(val, 'min')"
              />
              <time-pick-panel
                :visible="minTimePickerVisible"
                :format="timeFormat"
                datetime-role="start"
                :time-arrow-control="arrowControl"
                :parsed-value="leftDate"
                @pick="handleMinTimePick"
              />
            </span>
          </span>
          <span class="bin-icon-arrow-right">
            <i class="b-iconfont b-icon-right"></i>
          </span>
          <span class="bin-date-range-picker__editors-wrap is-right">
            <span class="bin-date-range-picker__time-picker-wrap">
              <b-input
                size="small"
                class="bin-date-range-picker__editor"
                :disabled="rangeState.selecting"
                placeholder="结束日期"
                :model-value="maxVisibleDate"
                :readonly="!minDate"
                @input="val => handleDateInput(val, 'max')"
                @change="val => handleDateChange(val, 'max')"
              />
            </span>
            <span
              v-click-outside="handleMaxTimeClose"
              class="bin-date-range-picker__time-picker-wrap"
            >
              <b-input
                size="small"
                class="bin-date-range-picker__editor"
                :disabled="rangeState.selecting"
                placeholder="结束时间"
                :model-value="maxVisibleTime"
                :readonly="!minDate"
                @focus="minDate && (maxTimePickerVisible = true)"
                @input="val => handleTimeInput(val, 'max')"
                @change="val => handleTimeChange(val, 'max')"
              />
              <time-pick-panel
                datetime-role="end"
                :visible="maxTimePickerVisible"
                :format="timeFormat"
                :time-arrow-control="arrowControl"
                :parsed-value="rightDate"
                @pick="handleMaxTimePick"
              />
            </span>
          </span>
        </div>
        <div class="bin-picker-panel__content bin-date-range-picker__content is-left">
          <div class="bin-date-range-picker__header">
            <button
              type="button"
              class="bin-picker-panel__icon-btn bin-date-picker__prev-btn"
              @click="leftPrevYear"
            >
              <i class="b-iconfont b-icon-doubleleft"></i>
            </button>
            <button
              type="button"
              class="bin-picker-panel__icon-btn bin-date-picker__prev-btn"
              @click="leftPrevMonth"
            >
              <i class="b-iconfont b-icon-left"></i>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="bin-picker-panel__icon-btn bin-date-picker__next-btn"
              @click="leftNextYear"
            >
              <i class="b-iconfont b-icon-doubleright"></i>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="{ 'is-disabled': !enableMonthArrow }"
              class="bin-picker-panel__icon-btn bin-date-picker__next-btn"
              @click="leftNextMonth"
            >
              <i class="b-iconfont b-icon-right"></i>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <div class="bin-date-range-picker-table__content">
            <date-table
              selection-mode="range"
              :date="leftDate"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              :cell-class-name="cellClassName"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
              @select="onSelect"
            />
          </div>
        </div>
        <div class="bin-picker-panel__content bin-date-range-picker__content is-right">
          <div class="bin-date-range-picker__header">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="bin-picker-panel__icon-btn bin-date-picker__prev-btn"
              @click="rightPrevYear"
            >
              <i class="b-iconfont b-icon-doubleleft"></i>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="{ 'is-disabled': !enableMonthArrow }"
              class="bin-picker-panel__icon-btn bin-date-picker__prev-btn"
              @click="rightPrevMonth"
            >
              <i class="b-iconfont b-icon-left"></i>
            </button>
            <button
              type="button"
              class="bin-picker-panel__icon-btn bin-date-picker__next-btn"
              @click="rightNextYear"
            >
              <i class="b-iconfont b-icon-doubleright"></i>
            </button>
            <button
              type="button"
              class="bin-picker-panel__icon-btn bin-date-picker__next-btn"
              @click="rightNextMonth"
            >
              <i class="b-iconfont b-icon-right"></i>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <div class="bin-date-range-picker-table__content">
            <date-table
              selection-mode="range"
              :date="rightDate"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              :cell-class-name="cellClassName"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
              @select="onSelect"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showTime" class="bin-picker-panel__footer">
      <b-button size="mini" type="text" @click="handleClear">清空</b-button>
      <b-button type="primary" size="mini" :disabled="btnDisabled" @click="handleConfirm(false)">
        确定
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, inject, watch, defineComponent } from 'vue'
import { extractDateFormat, extractTimeFormat } from '../../../time-picker/src'
import { TimePickPanel } from '../../../time-picker/src'
import { ClickOutside } from '../../../_directives'
import dayjs from 'dayjs'
import DateTable from './basic-date-table.vue'
import { BInput } from '../../../input'
import { BButton } from '../../../button'

export default defineComponent({
  directives: { ClickOutside },
  components: { TimePickPanel, DateTable, BInput, BButton },
  props: {
    unlinkPanels: Boolean,
    // eslint-disable-next-line vue/require-default-prop
    parsedValue: {
      type: Array
    },
    type: {
      type: String,
      required: true
    }
  },
  emits: ['pick', 'set-picker-option'],
  setup(props, ctx) {
    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'month'))
    const minDate = ref(null)
    const maxDate = ref(null)
    const dateUserInput = ref({
      min: null,
      max: null
    })
    const timeUserInput = ref({
      min: null,
      max: null
    })
    const leftLabel = computed(() => {
      return leftDate.value.year() + ' 年 ' + `${leftDate.value.month() + 1}月`
    })
    const rightLabel = computed(() => {
      return rightDate.value.year() + ' 年 ' + `${rightDate.value.month() + 1}月`
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const leftMonth = computed(() => {
      return leftDate.value.month()
    })

    const rightYear = computed(() => {
      return rightDate.value.year()
    })

    const rightMonth = computed(() => {
      return rightDate.value.month()
    })

    const hasShortcuts = computed(() => !!shortcuts.length)

    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null) return dateUserInput.value.min
      //@ts-ignore
      if (minDate.value) return minDate.value.format(dateFormat.value)
      return ''
    })

    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null) return dateUserInput.value.max
      if (maxDate.value || minDate.value)
        //@ts-ignore
        return (maxDate.value || minDate.value).format(dateFormat.value)
      return ''
    })

    const minVisibleTime = computed(() => {
      if (timeUserInput.value.min !== null) return timeUserInput.value.min
      //@ts-ignore
      if (minDate.value) return minDate.value.format(timeFormat.value)
      return ''
    })

    const maxVisibleTime = computed(() => {
      if (timeUserInput.value.max !== null) return timeUserInput.value.max
      if (maxDate.value || minDate.value)
        //@ts-ignore
        return (maxDate.value || minDate.value).format(timeFormat.value)
      return ''
    })

    const timeFormat = computed(() => {
      return extractTimeFormat(format)
    })

    const dateFormat = computed(() => {
      return extractDateFormat(format)
    })

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, 'month')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'year')
      }
    }

    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'month')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'month')
      }
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, 'month')
    }

    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, 'year')
    }

    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, 'month')
    }

    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0
      return (
        props.unlinkPanels &&
        new Date(leftYear.value + yearOffset, nextMonth) <
          new Date(rightYear.value, rightMonth.value)
      )
    })

    const enableYearArrow = computed(() => {
      return (
        props.unlinkPanels &&
        rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12
      )
    })

    const isValidValue = value => {
      return (
        Array.isArray(value) && value[0] && value[1] && value[0].valueOf() <= value[1].valueOf()
      )
    }

    const rangeState = ref({
      endDate: null,
      selecting: false
    })

    const btnDisabled = computed(() => {
      return !(
        minDate.value &&
        maxDate.value &&
        !rangeState.value.selecting &&
        isValidValue([minDate.value, maxDate.value])
      )
    })

    const handleChangeRange = val => {
      rangeState.value = val
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const formatEmit = (emitDayjs, index) => {
      if (!emitDayjs) return
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime)
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date())
      }
      return emitDayjs
    }

    const handleRangePick = (val, close = true) => {
      const minDate_ = formatEmit(val.minDate, 0)
      const maxDate_ = formatEmit(val.maxDate, 1)

      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close || showTime.value) return
      handleConfirm()
    }

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        ctx.emit('pick', [dayjs(shortcut.value[0]), dayjs(shortcut.value[1])])
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const minTimePickerVisible = ref(false)
    const maxTimePickerVisible = ref(false)

    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false
    }

    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false
    }

    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value
      const parsedValueD = dayjs(value, dateFormat.value)

      if (parsedValueD.isValid()) {
        if (disabledDate && disabledDate(parsedValueD.toDate())) {
          return
        }
        if (type === 'min') {
          leftDate.value = parsedValueD
          //@ts-ignore
          minDate.value = (minDate.value || leftDate.value)
            .year(parsedValueD.year())
            .month(parsedValueD.month())
            .date(parsedValueD.date())
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, 'month')
            //@ts-ignore
            maxDate.value = minDate.value.add(1, 'month')
          }
        } else {
          rightDate.value = parsedValueD
          //@ts-ignore
          maxDate.value = (maxDate.value || rightDate.value)
            .year(parsedValueD.year())
            .month(parsedValueD.month())
            .date(parsedValueD.date())
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, 'month')
            //@ts-ignore
            minDate.value = maxDate.value.subtract(1, 'month')
          }
        }
      }
    }

    const handleDateChange = (value, type) => {
      dateUserInput.value[type] = null
    }

    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value
      const parsedValueD = dayjs(value, timeFormat.value)

      if (parsedValueD.isValid()) {
        if (type === 'min') {
          minTimePickerVisible.value = true
          //@ts-ignore
          minDate.value = (minDate.value || leftDate.value)
            .hour(parsedValueD.hour())
            .minute(parsedValueD.minute())
            .second(parsedValueD.second())
          //@ts-ignore
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value
          }
        } else {
          maxTimePickerVisible.value = true
          //@ts-ignore
          maxDate.value = (maxDate.value || rightDate.value)
            .hour(parsedValueD.hour())
            .minute(parsedValueD.minute())
            .second(parsedValueD.second())
          //@ts-ignore
          rightDate.value = maxDate.value
          //@ts-ignore
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value
          }
        }
      }
    }

    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null
      if (type === 'min') {
        //@ts-ignore
        leftDate.value = minDate.value
        minTimePickerVisible.value = false
      } else {
        //@ts-ignore
        rightDate.value = maxDate.value
        maxTimePickerVisible.value = false
      }
    }

    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min) return
      if (value) {
        leftDate.value = value
        //@ts-ignore
        minDate.value = (minDate.value || leftDate.value)
          .hour(value.hour())
          .minute(value.minute())
          .second(value.second())
      }

      if (!first) {
        minTimePickerVisible.value = visible
      }

      //@ts-ignore
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value
      }
    }

    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max) return
      if (value) {
        rightDate.value = value
        //@ts-ignore
        maxDate.value = (maxDate.value || rightDate.value)
          .hour(value.hour())
          .minute(value.minute())
          .second(value.second())
      }

      if (!first) {
        maxTimePickerVisible.value = visible
      }

      //@ts-ignore
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value
      }
    }

    const handleClear = () => {
      leftDate.value = getDefaultValue()[0]
      rightDate.value = leftDate.value.add(1, 'month')
      ctx.emit('pick', null)
    }

    const formatToString = value => {
      return Array.isArray(value)
        ? value.map(item => dayjs(item).format(format))
        : dayjs(value).format(format)
    }

    const parseUserInput = value => {
      return Array.isArray(value) ? value.map(_ => dayjs(_, format)) : dayjs(value, format)
    }

    const getDefaultValue = () => {
      let start
      if (Array.isArray(defaultValue)) {
        const left = dayjs(defaultValue[0])
        let right = dayjs(defaultValue[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'month')
        }
        return [left, right]
      } else if (defaultValue) {
        start = dayjs(defaultValue)
      } else {
        start = dayjs()
      }
      return [start, start.add(1, 'month')]
    }

    ctx.emit('set-picker-option', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['parseUserInput', parseUserInput])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    ctx.emit('set-picker-option', ['handleClear', handleClear])

    const pickerBase = inject('EP_PICKER_BASE', {})
    const {
      shortcuts,
      disabledDate,
      cellClassName,
      format,
      defaultTime,
      defaultValue,
      arrowControl
      //@ts-ignore
    } = pickerBase.props

    watch(
      () => props.parsedValue,
      newVal => {
        if (newVal && newVal.length === 2) {
          //@ts-ignore
          minDate.value = newVal[0]
          //@ts-ignore
          maxDate.value = newVal[1]
          //@ts-ignore
          leftDate.value = minDate.value
          //@ts-ignore
          if (props.unlinkPanels && maxDate.value) {
            //@ts-ignore
            const minDateYear = minDate.value.year()
            //@ts-ignore
            const minDateMonth = minDate.value.month()
            //@ts-ignore
            const maxDateYear = maxDate.value.year()
            //@ts-ignore
            const maxDateMonth = maxDate.value.month()
            //@ts-ignore
            rightDate.value =
              minDateYear === maxDateYear && minDateMonth === maxDateMonth
                ? //@ts-ignore
                  maxDate.value.add(1, 'month')
                : maxDate.value
          } else {
            rightDate.value = leftDate.value.add(1, 'month')
          }
        } else {
          const defaultArr = getDefaultValue()
          minDate.value = null
          maxDate.value = null
          leftDate.value = defaultArr[0]
          rightDate.value = defaultArr[1]
        }
      },
      { immediate: true }
    )

    return {
      shortcuts,
      disabledDate,
      cellClassName,
      minTimePickerVisible,
      maxTimePickerVisible,
      handleMinTimeClose,
      handleMaxTimeClose,
      handleShortcutClick,
      rangeState,
      minDate,
      maxDate,
      handleRangePick,
      onSelect,
      handleChangeRange,
      btnDisabled,
      enableYearArrow,
      enableMonthArrow,
      rightPrevMonth,
      rightPrevYear,
      rightNextMonth,
      rightNextYear,
      leftPrevMonth,
      leftPrevYear,
      leftNextMonth,
      leftNextYear,
      hasShortcuts,
      leftLabel,
      rightLabel,
      leftDate,
      rightDate,
      showTime,
      minVisibleDate,
      maxVisibleDate,
      minVisibleTime,
      maxVisibleTime,
      arrowControl,
      handleDateInput,
      handleDateChange,
      handleTimeInput,
      handleTimeChange,
      handleMinTimePick,
      handleMaxTimePick,
      handleClear,
      handleConfirm,
      timeFormat
    }
  }
})
</script>
