<template>
  <table class="bin-month-table" @click="handleMonthTableClick" @mousemove="handleMouseMove">
    <tbody>
      <tr v-for="(row, key) in rows" :key="key">
        <td v-for="(cell, key_) in row" :key="key_" :class="getCellStyle(cell)">
          <div>
            <span class="cell">{{ monthMap[months[cell.text]] }}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { hasClass } from '../../../_utils/dom'
import { coerceTruthyValueToArray } from '../../../_utils/util-helper'
import { rangeArr } from '../../../time-picker/src'
import dayjs from 'dayjs'
import { computed, defineComponent, ref } from 'vue'

const datesInMonth = (year, month) => {
  const firstDay = dayjs().startOf('month').month(month).year(year)
  const numOfDays = firstDay.daysInMonth()
  return rangeArr(numOfDays).map(n => firstDay.add(n, 'day').toDate())
}

export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    disabledDate: {
      type: Function
    },
    selectionMode: {
      type: String,
      default: 'month'
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
    date: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    parsedValue: {
      type: Object
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
    const monthMap = ref({
      jan: '一月',
      feb: '二月',
      mar: '三月',
      apr: '四月',
      may: '五月',
      jun: '六月',
      jul: '七月',
      aug: '八月',
      sep: '九月',
      oct: '十月',
      nov: '十一月',
      dec: '十二月'
    })
    const months = ref(
      //@ts-ignore
      props.date
        .locale('en')
        .localeData()
        .monthsShort()
        .map(_ => _.toLowerCase())
    )
    const tableRows = ref([[], [], []])
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const rows = computed(() => {
      const rows = tableRows.value
      const now = dayjs().startOf('month')

      for (let i = 0; i < 3; i++) {
        const row = rows[i]
        for (let j = 0; j < 4; j++) {
          let cell = row[j]
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

          //@ts-ignore
          cell.type = 'normal'

          const index = i * 4 + j
          //@ts-ignore
          const calTime = props.date.startOf('year').month(index)

          const calEndDate =
            props.rangeState.endDate ||
            props.maxDate ||
            (props.rangeState.selecting && props.minDate)

          //@ts-ignore
          cell.inRange =
            (props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'month') &&
              calEndDate &&
              calTime.isSameOrBefore(calEndDate, 'month')) ||
            (props.minDate &&
              calTime.isSameOrBefore(props.minDate, 'month') &&
              calEndDate &&
              calTime.isSameOrAfter(calEndDate, 'month'))

          if (props.minDate?.isSameOrAfter(calEndDate)) {
            //@ts-ignore
            cell.start = calEndDate && calTime.isSame(calEndDate, 'month')
            //@ts-ignore
            cell.end = props.minDate && calTime.isSame(props.minDate, 'month')
          } else {
            //@ts-ignore
            cell.start = props.minDate && calTime.isSame(props.minDate, 'month')
            //@ts-ignore
            cell.end = calEndDate && calTime.isSame(calEndDate, 'month')
          }

          const isToday = now.isSame(calTime)

          if (isToday) {
            //@ts-ignore
            cell.type = 'today'
          }
          //@ts-ignore
          cell.text = index
          let cellDate = calTime.toDate()
          //@ts-ignore
          cell.disabled = props.disabledDate && props.disabledDate(cellDate)
          row[j] = cell
        }
      }
      return rows
    })
    const getCellStyle = cell => {
      const style = {}
      //@ts-ignore
      const year = props.date.year()
      const today = new Date()
      const month = cell.text

      //@ts-ignore
      style.disabled = props.disabledDate
        ? //@ts-ignore
          datesInMonth(year, month).every(props.disabledDate)
        : false
      //@ts-ignore
      style.current =
        coerceTruthyValueToArray(props.parsedValue).findIndex(
          date => date.year() === year && date.month() === month
        ) >= 0
      //@ts-ignore
      style.today = today.getFullYear() === year && today.getMonth() === month

      if (cell.inRange) {
        style['in-range'] = true

        if (cell.start) {
          style['start-date'] = true
        }

        if (cell.end) {
          style['end-date'] = true
        }
      }
      return style
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

      const row = target.parentNode.rowIndex
      const column = target.cellIndex
      // can not select disabled date
      //@ts-ignore
      if (rows.value[row][column].disabled) return

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row
        lastColumn.value = column
        ctx.emit('changerange', {
          selecting: true,
          //@ts-ignore
          endDate: props.date.startOf('year').month(row * 4 + column)
        })
      }
    }
    const handleMonthTableClick = event => {
      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return
      if (hasClass(target, 'disabled')) return
      const column = target.cellIndex
      const row = target.parentNode.rowIndex
      const month = row * 4 + column
      //@ts-ignore
      const newDate = props.date.startOf('year').month(month)
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
      } else {
        ctx.emit('pick', month)
      }
    }

    return {
      handleMouseMove,
      handleMonthTableClick,
      rows,
      getCellStyle,
      monthMap,
      months
    }
  }
})
</script>
