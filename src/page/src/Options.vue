<template>
  <div v-if="showSizer || showElevator" class="bin-page-options">
    <div v-if="showSizer" class="bin-page-options-sizer">
      <b-select
        v-model="currentPageSize"
        :size="isSmall ? 'mini' : 'default'"
        :placement="placement"
        :append-to-body="appendToBody"
        @change="changeSize"
      >
        <b-option
          v-for="item in pageSizeOpts"
          :key="item"
          :value="item"
          :label="`${item} 条/页`"
          style="text-align: center"
        ></b-option>
      </b-select>
    </div>
    <div v-if="showElevator" class="bin-page-options-elevator">
      跳至
      <label>
        <input
          type="text"
          :value="currentTo"
          autocomplete="off"
          spellcheck="false"
          @keyup.enter="changePage"
        />
      </label>
      页
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { optionsProps } from './types'
import { BSelect, BOption } from '../../select'

function isValueNumber(value) {
  return /^[1-9][0-9]*$/.test(value + '')
}

export default defineComponent({
  name: 'PageOption',
  components: { BSelect, BOption },
  props: optionsProps,
  emits: ['page', 'size'],
  setup(props, ctx) {
    const currentPageSize = ref(props.pageSize)
    const changeSize = () => {
      ctx.emit('size', currentPageSize.value)
    }
    const changePage = e => {
      let val = e.target.value.trim()
      let page = 0

      if (isValueNumber(val)) {
        val = Number(val)
        if (val !== props.current) {
          const allPages = props.allPages

          // @ts-ignore
          if (val > allPages) {
            // @ts-ignore
            page = allPages
          } else {
            page = val
          }
        }
      } else {
        page = 1
      }

      if (page) {
        ctx.emit('page', page)
        e.target.value = page
      }
    }
    watch(
      () => props.pageSize,
      val => {
        currentPageSize.value = val
      }
    )
    return {
      currentPageSize,
      changeSize,
      changePage
    }
  }
})
</script>
