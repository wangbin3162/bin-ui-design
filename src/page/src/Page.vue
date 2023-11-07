<template>
  <ul v-if="simple" :class="simpleWrapClasses" :style="styles">
    <li title="上一页" :class="prevClasses" @click="prev">
      <span><i class="b-iconfont b-icon-left"></i></span>
    </li>
    <li :class="simplePagerClasses" :title="currentPage + '/' + allPages">
      <label>
        <input
          type="text"
          :value="currentPage"
          autocomplete="off"
          spellcheck="false"
          @keydown="keyDown"
          @keyup="keyUp"
          @change="keyUp"
        />
      </label>
      <span>/</span>
      {{ allPages }}
    </li>
    <li title="下一页" :class="nextClasses" @click="next">
      <span><i class="b-iconfont b-icon-right"></i></span>
    </li>
  </ul>
  <ul v-else :class="wrapClasses" :style="styles">
    <li v-if="showTotal" :class="[prefixCls + '-total']">
      <span>
        <slot>共 {{ total }} 条</slot>
      </span>
    </li>
    <li title="上一页" :class="prevClasses" @click="prev">
      <span>
        <template v-if="prevText !== ''">{{ prevText }}</template>
        <i v-else class="b-iconfont b-icon-left"></i>
      </span>
    </li>
    <li title="1" :class="firstPageClasses" @click="changePage(1)"><span>1</span></li>
    <li
      v-if="currentPage > 5"
      title="向前5页"
      :class="[prefixCls + '-item-jump-prev']"
      @click="fastPrev"
    >
      <span><i class="b-iconfont b-icon-doubleleft"></i></span>
    </li>
    <li
      v-if="currentPage === 5"
      :title="currentPage - 3"
      :class="[prefixCls + '-item']"
      @click="changePage(currentPage - 3)"
    >
      <span>{{ currentPage - 3 }}</span>
    </li>
    <li
      v-if="currentPage - 2 > 1"
      :title="currentPage - 2"
      :class="[prefixCls + '-item']"
      @click="changePage(currentPage - 2)"
    >
      <span>{{ currentPage - 2 }}</span>
    </li>
    <li
      v-if="currentPage - 1 > 1"
      :title="currentPage - 1"
      :class="[prefixCls + '-item']"
      @click="changePage(currentPage - 1)"
    >
      <span>{{ currentPage - 1 }}</span>
    </li>
    <li
      v-if="currentPage !== 1 && currentPage !== allPages"
      :title="currentPage"
      :class="[prefixCls + '-item', prefixCls + '-item-active']"
    >
      <span>{{ currentPage }}</span>
    </li>
    <li
      v-if="currentPage + 1 < allPages"
      :title="currentPage + 1"
      :class="[prefixCls + '-item']"
      @click="changePage(currentPage + 1)"
    >
      <span>{{ currentPage + 1 }}</span>
    </li>
    <li
      v-if="currentPage + 2 < allPages"
      :title="currentPage + 2"
      :class="[prefixCls + '-item']"
      @click="changePage(currentPage + 2)"
    >
      <span>{{ currentPage + 2 }}</span>
    </li>
    <li
      v-if="allPages - currentPage === 4"
      :title="currentPage + 3"
      :class="[prefixCls + '-item']"
      @click="changePage(currentPage + 3)"
    >
      <span>{{ currentPage + 3 }}</span>
    </li>
    <li
      v-if="allPages - currentPage >= 5"
      title="向后5页"
      :class="[prefixCls + '-item-jump-next']"
      @click="fastNext"
    >
      <span><i class="b-iconfont b-icon-doubleright"></i></span>
    </li>
    <li
      v-if="allPages > 1"
      :title="allPages"
      :class="lastPageClasses"
      @click="changePage(allPages)"
    >
      <span>{{ allPages }}</span>
    </li>
    <li title="下一页" :class="nextClasses" @click="next">
      <span>
        <template v-if="nextText !== ''">{{ nextText }}</template>
        <i v-else class="b-iconfont b-icon-right"></i>
      </span>
    </li>
    <options
      :show-sizer="showSizer"
      :page-size="currentPageSize"
      :page-size-opts="pageSizeOpts"
      :placement="placement"
      :append-to-body="appendToBody"
      :show-elevator="showElevator"
      :current="currentPage"
      :all-pages="allPages"
      :is-small="isSmall"
      @size="onSize"
      @page="onPage"
    ></options>
  </ul>
</template>

<script lang="ts">
import '../styles/index.css'
import { pageProps } from './types'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import Options from './Options.vue'

const prefixCls = 'bin-page'

export default defineComponent({
  name: 'BPage',
  components: { Options },
  props: pageProps,
  emits: ['update:current', 'change', 'size-change'],
  setup(props, ctx) {
    const states = reactive({
      prefixCls,
      currentPage: props.current,
      currentPageSize: props.pageSize
    })

    const allPages = computed(() => {
      const allPage = Math.ceil(props.total / states.currentPageSize)
      return allPage === 0 ? 1 : allPage
    })
    const changePage = page => {
      if (states.currentPage !== page) {
        states.currentPage = page
        ctx.emit('update:current', page)
        ctx.emit('change', page)
      }
    }
    const prev = () => {
      const current = states.currentPage
      if (current <= 1) {
        return false
      }
      changePage(current - 1)
    }
    const next = () => {
      const current = states.currentPage
      if (current >= allPages.value) {
        return false
      }
      changePage(current + 1)
    }
    const fastPrev = () => {
      const page = states.currentPage - 5
      if (page > 0) {
        changePage(page)
      } else {
        changePage(1)
      }
    }
    const fastNext = () => {
      const page = states.currentPage + 5
      if (page > allPages.value) {
        changePage(allPages.value)
      } else {
        changePage(page)
      }
    }
    const onSize = pageSize => {
      states.currentPageSize = pageSize
      ctx.emit('size-change', pageSize)
      changePage(1)
    }
    const onPage = page => {
      changePage(page)
    }
    const keyDown = e => {
      const key = e.keyCode
      const condition =
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105) ||
        key === 8 ||
        key === 37 ||
        key === 39

      if (!condition) {
        e.preventDefault()
      }
    }
    const keyUp = e => {
      const key = e.keyCode
      const val = parseInt(e.target.value)

      if (key === 38) {
        prev()
      } else if (key === 40) {
        next()
      } else if (key === 13) {
        let page = 1

        if (val > allPages.value) {
          page = allPages.value
        } else if (val <= 0 || !val) {
          page = 1
        } else {
          page = val
        }

        e.target.value = page
        changePage(page)
      }
    }
    return {
      ...toRefs(states),
      allPages,
      changePage,
      prev,
      next,
      fastPrev,
      fastNext,
      onSize,
      onPage,
      keyDown,
      keyUp
    }
  },
  computed: {
    isSmall() {
      return !!this.size
    },
    simpleWrapClasses() {
      return [
        `${prefixCls}`,
        `${prefixCls}-simple`,
        {
          [`${this.className}`]: !!this.className
        }
      ]
    },
    simplePagerClasses() {
      return `${prefixCls}-simple-pager`
    },
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${this.className}`]: !!this.className,
          mini: !!this.size
        }
      ]
    },
    prevClasses() {
      return [
        `${prefixCls}-prev`,
        {
          [`${prefixCls}-disabled`]: this.currentPage === 1,
          [`${prefixCls}-custom-text`]: this.prevText !== ''
        }
      ]
    },
    nextClasses() {
      return [
        `${prefixCls}-next`,
        {
          [`${prefixCls}-disabled`]: this.currentPage === this.allPages,
          [`${prefixCls}-custom-text`]: this.nextText !== ''
        }
      ]
    },
    firstPageClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.currentPage === 1
        }
      ]
    },
    lastPageClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.currentPage === this.allPages
        }
      ]
    }
  },
  watch: {
    total(val) {
      let maxPage = Math.ceil(val / this.currentPageSize)
      if (maxPage < this.currentPage) {
        this.currentPage = maxPage === 0 ? 1 : maxPage
      }
    },
    current(val) {
      this.currentPage = val
    },
    pageSize(val) {
      this.currentPageSize = val
    }
  }
})
</script>
