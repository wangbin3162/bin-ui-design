<template>
  <table
    cellspacing="0"
    cellpadding="0"
    class="bin-date-table"
    :class="{ 'is-week-mode': selectionMode === 'week' }"
    @click="handleClick"
    @mousemove="handleMouseMove"
  >
    <tbody>
      <tr>
        <th v-if="showWeekNumber">周次</th>
        <th v-for="(week, key) in WEEKS" :key="key">{{ weeksMap[week] }}</th>
      </tr>
      <tr
        v-for="(row, key) in rows"
        :key="key"
        class="bin-date-table__row"
        :class="{ current: isWeekActive(row[1]) }"
      >
        <td v-for="(cell, key_) in row" :key="key_" :class="getCellClasses(cell)">
          <div>
            <span>
              {{ cell.text }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { coerceTruthyValueToArray } from '../../../_utils/util-helper'
import { computed, defineComponent, ref } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    date: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    minDate: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    maxDate: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    parsedValue: {
      type: [Object, Array]
    },
    selectionMode: {
      type: String,
      default: 'day'
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    // eslint-disable-next-line vue/require-default-prop
    disabledDate: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    cellClassName: {
      type: Function
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false
      })
    }
  },
  emits: ['changerange', 'pick', 'select'],
  setup(props, ctx) {
    // data
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const tableRows = ref([[], [], [], [], [], []])

    // todo better way to get Day.js locale object
    const firstDayOfWeek = 1
    //@ts-ignore
    const WEEKS_CONSTANT = props.date
      .locale('en')
      .localeData()
      .weekdaysShort()
      .map(_ => _.toLowerCase())

    const offsetDay = computed(() => {
      // Sunday 7(0), cal the left and right offset days, 3217654, such as Monday is -1, the is to adjust the position of the first two rows of dates
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek
    })

    const startDate = computed(() => {
      //@ts-ignore
      const startDayOfMonth = props.date.startOf('month')
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, 'day')
    })

    const weeksMap = computed(() => {
      return {
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六',
        sun: '日'
      }
    })
    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7)
    })

    const rows = computed(() => {
      // TODO: refactory rows / getCellClasses
      //@ts-ignore
      const startOfMonth = props.date.startOf('month')
      const startOfMonthDay = startOfMonth.day() || 7 // day of first day
      const dateCountOfMonth = startOfMonth.daysInMonth()
      const dateCountOfLastMonth = startOfMonth.subtract(1, 'month').daysInMonth()

      const offset = offsetDay.value
      const rows_ = tableRows.value
      let count = 1

      const selectedDate =
        props.selectionMode === 'dates' ? coerceTruthyValueToArray(props.parsedValue) : []

      const calNow = dayjs().startOf('day')

      for (let i = 0; i < 6; i++) {
        const row = rows_[i]

        if (props.showWeekNumber) {
          if (!row[0]) {
            //@ts-ignore
            row[0] = {
              type: 'week',
              text: startDate.value.add(i * 7 + 1, 'day').week()
            }
          }
        }

        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j]
          if (!cell) {
            //@ts-ignore
            cell = {
              row: i,
              column: j,
              type: 'normal',
              inRange: false,
              start: false,
              end: false
            }
          }
          const index = i * 7 + j
          const calTime = startDate.value.add(index - offset, 'day')
          //@ts-ignore
          cell.type = 'normal'

          const calEndDate =
            props.rangeState.endDate ||
            props.maxDate ||
            (props.rangeState.selecting && props.minDate)

          //@ts-ignore
          cell.inRange =
            (props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'day') &&
              calEndDate &&
              calTime.isSameOrBefore(calEndDate, 'day')) ||
            (props.minDate &&
              calTime.isSameOrBefore(props.minDate, 'day') &&
              calEndDate &&
              calTime.isSameOrAfter(calEndDate, 'day'))

          if (props.minDate?.isSameOrAfter(calEndDate)) {
            //@ts-ignore
            cell.start = calEndDate && calTime.isSame(calEndDate, 'day')
            //@ts-ignore
            cell.end = props.minDate && calTime.isSame(props.minDate, 'day')
          } else {
            //@ts-ignore
            cell.start = props.minDate && calTime.isSame(props.minDate, 'day')
            //@ts-ignore
            cell.end = calEndDate && calTime.isSame(calEndDate, 'day')
          }

          const isToday = calTime.isSame(calNow, 'day')

          if (isToday) {
            //@ts-ignore
            cell.type = 'today'
          }

          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth =
              startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              //@ts-ignore
              cell.text = count++
            } else {
              //@ts-ignore
              cell.text =
                dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - (j % 7)) + 1 + i * 7
              //@ts-ignore
              cell.type = 'prev-month'
            }
          } else {
            if (count <= dateCountOfMonth) {
              //@ts-ignore
              cell.text = count++
            } else {
              //@ts-ignore
              cell.text = count++ - dateCountOfMonth
              //@ts-ignore
              cell.type = 'next-month'
            }
          }

          const cellDate = calTime.toDate()
          //@ts-ignore
          cell.selected = selectedDate.find(_ => _.valueOf() === calTime.valueOf())
          //@ts-ignore
          cell.disabled = props.disabledDate && props.disabledDate(cellDate)
          //@ts-ignore
          cell.customClass = props.cellClassName && props.cellClassName(cellDate)
          row[props.showWeekNumber ? j + 1 : j] = cell
        }

        if (props.selectionMode === 'week') {
          const start = props.showWeekNumber ? 1 : 0
          const end = props.showWeekNumber ? 7 : 6
          const isActive = isWeekActive(row[start + 1])
          //@ts-ignore
          row[start].inRange = isActive
          //@ts-ignore
          row[start].start = isActive
          //@ts-ignore
          row[end].inRange = isActive
          //@ts-ignore
          row[end].end = isActive
        }
      }
      return rows_
    })

    const cellMatchesDate = (cell, date) => {
      if (!date) return false
      //@ts-ignore
      return dayjs(date).isSame(props.date.date(Number(cell.text)), 'day')
    }

    const getCellClasses = cell => {
      let classes = []
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        //@ts-ignore
        classes.push('available')
        if (cell.type === 'today') {
          //@ts-ignore
          classes.push('today')
        }
      } else {
        //@ts-ignore
        classes.push(cell.type)
      }

      if (
        props.selectionMode === 'day' &&
        (cell.type === 'normal' || cell.type === 'today') &&
        cellMatchesDate(cell, props.parsedValue)
      ) {
        //@ts-ignore
        classes.push('current')
      }

      if (
        cell.inRange &&
        (cell.type === 'normal' || cell.type === 'today' || props.selectionMode === 'week')
      ) {
        //@ts-ignore
        classes.push('in-range')

        if (cell.start) {
          //@ts-ignore
          classes.push('start-date')
        }

        if (cell.end) {
          //@ts-ignore
          classes.push('end-date')
        }
      }

      if (cell.disabled) {
        //@ts-ignore
        classes.push('disabled')
      }

      if (cell.selected) {
        //@ts-ignore
        classes.push('selected')
      }

      if (cell.customClass) {
        //@ts-ignore
        classes.push(cell.customClass)
      }

      return classes.join(' ')
    }

    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value
      return startDate.value.add(offsetFromStart, 'day')
    }

    const handleMouseMove = event => {
      if (!props.rangeState.selecting) return

      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = target.cellIndex

      // can not select disabled date
      //@ts-ignore
      if (rows.value[row][column].disabled) return

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== lastRow.value || column !== lastColumn.value) {
        //@ts-ignore
        lastRow.value = row
        lastColumn.value = column
        ctx.emit('changerange', {
          selecting: true,
          endDate: getDateOfCell(row, column)
        })
      }
    }

    const handleClick = event => {
      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }

      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = target.cellIndex
      const cell = rows.value[row][column]

      //@ts-ignore
      if (cell.disabled || cell.type === 'week') return

      const newDate = getDateOfCell(row, column)

      if (props.selectionMode === 'range') {
        if (!props.rangeState.selecting) {
          ctx.emit('pick', { minDate: newDate, maxDate: null })
          ctx.emit('select', true)
        } else {
          //@ts-ignore
          if (newDate >= props.minDate) {
            ctx.emit('pick', { minDate: props.minDate, maxDate: newDate })
          } else {
            ctx.emit('pick', { minDate: newDate, maxDate: props.minDate })
          }
          ctx.emit('select', false)
        }
      } else if (props.selectionMode === 'day') {
        ctx.emit('pick', newDate)
      } else if (props.selectionMode === 'week') {
        const weekNumber = newDate.week()
        const value = newDate.year() + 'w' + weekNumber
        ctx.emit('pick', {
          year: newDate.year(),
          week: weekNumber,
          value: value,
          date: newDate.startOf('week')
        })
      } else if (props.selectionMode === 'dates') {
        //@ts-ignore
        const newValue = cell.selected
          ? coerceTruthyValueToArray(props.parsedValue).filter(
              _ => _.valueOf() !== newDate.valueOf()
            )
          : coerceTruthyValueToArray(props.parsedValue).concat([newDate])
        ctx.emit('pick', newValue)
      }
    }

    const isWeekActive = cell => {
      if (props.selectionMode !== 'week') return false
      //@ts-ignore
      let newDate = props.date.startOf('day')

      if (cell.type === 'prev-month') {
        newDate = newDate.subtract(1, 'month')
      }

      if (cell.type === 'next-month') {
        newDate = newDate.add(1, 'month')
      }

      newDate = newDate.date(parseInt(cell.text, 10))

      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = ((props.parsedValue.day() - firstDayOfWeek + 7) % 7) - 1
        const weekDate = props.parsedValue.subtract(dayOffset, 'day')
        return weekDate.isSame(newDate, 'day')
      }
      return false
    }

    return {
      handleMouseMove,
      rows,
      isWeekActive,
      getCellClasses,
      WEEKS,
      weeksMap,
      handleClick
    }
  }
})
</script>
