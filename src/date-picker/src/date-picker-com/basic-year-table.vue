<template>
  <table class="bin-year-table" @click="handleYearTableClick">
    <tbody>
      <tr>
        <td class="available" :class="getCellStyle(startYear + 0)">
          <span class="cell">{{ startYear }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 1)">
          <span class="cell">{{ startYear + 1 }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 2)">
          <span class="cell">{{ startYear + 2 }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 3)">
          <span class="cell">{{ startYear + 3 }}</span>
        </td>
      </tr>
      <tr>
        <td class="available" :class="getCellStyle(startYear + 4)">
          <span class="cell">{{ startYear + 4 }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 5)">
          <span class="cell">{{ startYear + 5 }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 6)">
          <span class="cell">{{ startYear + 6 }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 7)">
          <span class="cell">{{ startYear + 7 }}</span>
        </td>
      </tr>
      <tr>
        <td class="available" :class="getCellStyle(startYear + 8)">
          <span class="cell">{{ startYear + 8 }}</span>
        </td>
        <td class="available" :class="getCellStyle(startYear + 9)">
          <span class="cell">{{ startYear + 9 }}</span>
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { hasClass } from '../../../_utils/dom'
import { rangeArr } from '../../../time-picker/src'
import { coerceTruthyValueToArray } from '../../../_utils/util-helper'
import { computed, defineComponent } from 'vue'
import dayjs from 'dayjs'

const datesInYear = year => {
  const firstDay = dayjs(String(year)).startOf('year')
  const lastDay = firstDay.endOf('year')
  //@ts-ignore
  const numOfDays = lastDay.dayOfYear()
  return rangeArr(numOfDays).map(n => firstDay.add(n, 'day').toDate())
}

export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    disabledDate: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    parsedValue: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    date: {
      type: Object
    }
  },
  emits: ['pick'],
  setup(props, ctx) {
    const startYear = computed(() => {
      //@ts-ignore
      return Math.floor(props.date.year() / 10) * 10
    })
    const getCellStyle = year => {
      const style = {}
      const today = dayjs()

      //@ts-ignore
      style.disabled = props.disabledDate ? datesInYear(year).every(props.disabledDate) : false

      //@ts-ignore
      style.current =
        coerceTruthyValueToArray(props.parsedValue).findIndex(_ => _.year() === year) >= 0

      //@ts-ignore
      style.today = today.year() === year

      return style
    }

    const handleYearTableClick = event => {
      const target = event.target
      if (target.tagName === 'SPAN') {
        if (hasClass(target.parentNode, 'disabled')) return
        const year = target.textContent || target.innerText
        ctx.emit('pick', Number(year))
      }
    }
    return {
      startYear,
      getCellStyle,
      handleYearTableClick
    }
  }
})
</script>
