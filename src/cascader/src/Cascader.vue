<template>
  <b-popper
    ref="popper"
    v-model:visible="popperVisible"
    manual-mode
    placement="bottom-start"
    :popper-class="`bin-cascader__dropdown ${popperClass}`"
    :stop-popper-mouse-event="false"
    transition="zoom-in-top"
    :gpu-acceleration="false"
    theme="light"
    pure
    :show-arrow="false"
    :offset="5"
    @after-leave="hideSuggestionPanel"
  >
    <template #trigger>
      <div
        v-click-outside:[popperPaneRef]="() => togglePopperVisible(false)"
        :class="[
          'bin-cascader',
          realSize && `bin-cascader--${realSize}`,
          { 'is-disabled': isDisabled }
        ]"
        @click="() => togglePopperVisible(readonly ? undefined : true)"
        @keydown="handleKeyDown"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
        <b-input
          ref="input"
          v-model.trim="inputValue"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="isDisabled"
          :validate-event="false"
          :size="realSize"
          :class="{ 'is-focus': popperVisible }"
          @focus="e => $emit('focus', e)"
          @blur="e => $emit('blur', e)"
          @input="handleInput"
        >
          <template #suffix>
            <i
              v-if="clearBtnVisible"
              key="clear"
              class="b-iconfont b-icon-close-circle-fill"
              @click.stop="handleClear"
            ></i>
            <i
              v-else
              key="arrow-down"
              :class="['b-iconfont', 'b-icon-down', popperVisible && 'is-reverse']"
              @click.stop="togglePopperVisible()"
            ></i>
          </template>
        </b-input>

        <div v-if="multiple" ref="tagWrapper" class="bin-cascader__tags">
          <b-tag
            v-for="tag in presentTags"
            :key="tag.key"
            type="info"
            :size="tagSize"
            :hit="tag.hitState"
            :closable="tag.closable"
            disable-transitions
            @close="deleteTag(tag)"
          >
            <span>{{ tag.text }}</span>
          </b-tag>
          <input
            v-if="filterable && !isDisabled"
            v-model.trim="searchInputValue"
            type="text"
            class="bin-cascader__search-input"
            :placeholder="presentText ? '' : placeholder"
            @input="e => handleInput(searchInputValue, e)"
            @click.stop="togglePopperVisible(true)"
            @keydown.delete="handleDelete"
          />
        </div>
      </div>
    </template>

    <template #default>
      <b-cascader-panel
        v-show="!filtering"
        ref="panel"
        v-model="checkedValue"
        :options="options"
        :props="props"
        :border="false"
        :render-label="$slots.default"
        @expand-change="handleExpandChange"
        @close="togglePopperVisible(false)"
      />
      <b-scrollbar
        v-if="filterable"
        v-show="filtering"
        ref="suggestionPanel"
        tag="ul"
        class="bin-cascader__suggestion-panel"
        view-class="bin-cascader__suggestion-list"
      >
        <template v-if="suggestions.length">
          <li
            v-for="item in suggestions"
            :key="item.uid"
            :class="['bin-cascader__suggestion-item', item.checked && 'is-checked']"
            :tabindex="-1"
            @click="handleSuggestionClick(item)"
          >
            <span>{{ item.text }}</span>
            <i v-if="item.checked" class="b-iconfont b-icon-check"></i>
          </li>
        </template>
        <slot v-else name="empty">
          <li class="bin-cascader__empty-text">暂无数据</li>
        </slot>
      </b-scrollbar>
    </template>
  </b-popper>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BCascaderPanel from './CascaderPanel.vue'
import isServer from '../../_utils/isServer'
import { BInput } from '../../input'
import { BPopper } from '../../_internal/popper'
import { BScrollbar } from '../../_internal/scrollbar'
import { BTag } from '../../tag'
import { ClickOutside } from '../../_directives'
import { isPromise } from '../../_utils/util-helper'
import { debounce } from '../../_utils/util'
import { EVENT_CODE } from '../../_utils/aria'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../_utils/constants'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import { useForm } from '../../_hooks'
import { cascaderProps } from './types'

const DEFAULT_INPUT_HEIGHT = 32

const INPUT_HEIGHT_MAP = {
  large: 40,
  small: 24,
  mini: 22
}

const popperOptions = {
  modifiers: [
    {
      name: 'arrowPosition',
      enabled: true,
      phase: 'main',
      fn: ({ state }) => {
        const { modifiersData, elements } = state
        const { reference, arrow } = elements
        modifiersData.arrow.x =
          modifiersData.arrow.x - (reference.clientWidth - arrow.clientWidth) / 2 + 35
      },
      requires: ['arrow']
    }
  ]
}

export default defineComponent({
  name: 'BCascader',
  components: {
    BCascaderPanel,
    BInput,
    BPopper,
    BScrollbar,
    BTag
  },
  directives: { ClickOutside },
  props: cascaderProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'focus',
    'blur',
    'visible-change',
    'expand-change',
    'remove-tag'
  ],
  setup(props, { emit }) {
    let inputInitialHeight = 0
    let pressDeleteCount = 0

    const { BForm, BFormItem, formEmit } = useForm()

    const popper = ref(null)
    const input = ref(null)
    const tagWrapper = ref(null)
    const panel = ref(null)
    const suggestionPanel = ref(null)
    const popperVisible = ref(false)
    const inputHover = ref(false)
    const filtering = ref(false)
    const inputValue = ref('')
    const searchInputValue = ref('')
    const presentTags = ref([])
    const suggestions = ref([])

    //@ts-ignore
    const isDisabled = computed(() => props.disabled || BForm.disabled)
    //@ts-ignore
    const realSize = computed(() => props.size || BFormItem.size)
    const tagSize = computed(() => (['small', 'mini'].includes(realSize.value) ? 'mini' : 'small'))
    const multiple = computed(() => !!props.props.multiple)
    const readonly = computed(() => !props.filterable || multiple.value)
    const searchKeyword = computed(() =>
      multiple.value ? searchInputValue.value : inputValue.value
    )
    //@ts-ignore
    const checkedNodes = computed(() => panel.value?.checkedNodes || [])
    const clearBtnVisible = computed(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value) return false

      return !!checkedNodes.value.length
    })
    const presentText = computed(() => {
      const { showAllLevels, separator } = props
      const nodes = checkedNodes.value
      return nodes.length
        ? multiple.value
          ? ' '
          : nodes[0].calcText(showAllLevels, separator)
        : ''
    })

    const checkedValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit(UPDATE_MODEL_EVENT, val)
        emit(CHANGE_EVENT, val)
        formEmit('change', [val])
      }
    })

    const popperPaneRef = computed(() => {
      //@ts-ignore
      return popper.value?.popperRef
    })

    const togglePopperVisible = visible => {
      if (isDisabled.value) return

      visible = visible ?? !popperVisible.value

      if (visible !== popperVisible.value) {
        popperVisible.value = visible
        //@ts-ignore
        input.value.inputRef.setAttribute('aria-expanded', visible)

        if (visible) {
          updatePopperPosition()
          //@ts-ignore
          nextTick(panel.value.scrollToExpandingNode)
        } else if (props.filterable) {
          const { value } = presentText
          inputValue.value = value
          searchInputValue.value = value
        }

        emit('visible-change', visible)
      }
    }

    const updatePopperPosition = () => {
      //@ts-ignore
      nextTick(popper.value.update)
    }

    const hideSuggestionPanel = () => {
      filtering.value = false
    }

    const genTag = node => {
      const { showAllLevels, separator } = props
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled
      }
    }

    const deleteTag = tag => {
      const { node } = tag
      node.doCheck(false)
      //@ts-ignore
      panel.value.calculateCheckedValue()
      emit('remove-tag', node.valueByOption)
    }

    const calculatePresentTags = () => {
      if (!multiple.value) return

      const nodes = checkedNodes.value
      const tags = []

      if (nodes.length) {
        const [first, ...rest] = nodes
        const restCount = rest.length

        //@ts-ignore
        tags.push(genTag(first))

        if (restCount) {
          if (props.collapseTags) {
            //@ts-ignore
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false
            })
          } else {
            //@ts-ignore
            rest.forEach(node => tags.push(genTag(node)))
          }
        }
      }

      presentTags.value = tags
    }

    const calculateSuggestions = () => {
      const { filterMethod, showAllLevels, separator } = props
      //@ts-ignore
      const res = panel.value.getFlattedNodes(!props.props.checkStrictly).filter(node => {
        if (node.isDisabled) return false
        node.calcText(showAllLevels, separator)
        return filterMethod(node, searchKeyword.value)
      })

      if (multiple.value) {
        presentTags.value.forEach(tag => {
          //@ts-ignore
          tag.hitState = false
        })
      }

      filtering.value = true
      suggestions.value = res
      updatePopperPosition()
    }

    const focusFirstNode = () => {
      let firstNode = null

      if (filtering.value && suggestionPanel.value) {
        //@ts-ignore
        firstNode = suggestionPanel.value.$el.querySelector('.bin-cascader__suggestion-item')
      } else {
        //@ts-ignore
        firstNode = panel.value?.$el.querySelector('.bin-cascader-node[tabindex="-1"]')
      }

      if (firstNode) {
        //@ts-ignore
        firstNode.focus()
        //@ts-ignore
        !filtering.value && firstNode.click()
      }
    }

    const updateStyle = () => {
      //@ts-ignore
      const inputInner = input.value.inputRef
      const tagWrapperEl = tagWrapper.value
      //@ts-ignore
      const suggestionPanelEl = suggestionPanel.value?.$el

      if (isServer || !inputInner) return

      if (suggestionPanelEl) {
        const suggestionList = suggestionPanelEl.querySelector('.bin-cascader__suggestion-list')
        suggestionList.style.minWidth = inputInner.offsetWidth + 'px'
      }

      if (tagWrapperEl) {
        const { offsetHeight } = tagWrapperEl
        inputInner.style.height = Math.max(offsetHeight + 6, inputInitialHeight) + 'px'
        updatePopperPosition()
      }
    }

    const getCheckedNodes = leafOnly => {
      //@ts-ignore
      return panel.value.getCheckedNodes(leafOnly)
    }

    const handleExpandChange = value => {
      updatePopperPosition()
      emit('expand-change', value)
    }

    const handleKeyDown = e => {
      switch (e.code) {
        case EVENT_CODE.enter:
          //@ts-ignore
          togglePopperVisible()
          break
        case EVENT_CODE.down:
          togglePopperVisible(true)
          nextTick(focusFirstNode)
          e.preventDefault()
          break
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          togglePopperVisible(false)
          break
      }
    }

    const handleClear = () => {
      //@ts-ignore
      panel.value.clearCheckedNodes()
      togglePopperVisible(false)
    }

    const handleSuggestionClick = node => {
      const { checked } = node

      if (multiple.value) {
        //@ts-ignore
        panel.value.handleCheckChange(node, !checked, false)
      } else {
        //@ts-ignore
        !checked && panel.value.handleCheckChange(node, true, false)
        togglePopperVisible(false)
      }
    }

    const handleDelete = () => {
      const tags = presentTags.value
      const lastTag = tags[tags.length - 1]
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1

      if (!lastTag || !pressDeleteCount) return

      //@ts-ignore
      if (lastTag.hitState) {
        deleteTag(lastTag)
      } else {
        //@ts-ignore
        lastTag.hitState = true
      }
    }

    const handleFilter = debounce(() => {
      const { value } = searchKeyword

      if (!value) return

      const passed = props.beforeFilter(value)

      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
          /* prevent log error */
        })
      } else if (passed !== false) {
        calculateSuggestions()
      } else {
        hideSuggestionPanel()
      }
    }, props.debounce)

    const handleInput = (val, e) => {
      !popperVisible.value && togglePopperVisible(true)

      if (e?.isComposing) return

      val ? handleFilter() : hideSuggestionPanel()
    }

    watch(filtering, updatePopperPosition)

    watch([checkedNodes, isDisabled], calculatePresentTags)

    //@ts-ignore
    watch(presentTags, () => {
      nextTick(updateStyle)
    })

    watch(presentText, val => (inputValue.value = val), { immediate: true })

    onMounted(() => {
      //@ts-ignore
      const inputEl = input.value.$el
      inputInitialHeight =
        inputEl?.offsetHeight || INPUT_HEIGHT_MAP[realSize.value] || DEFAULT_INPUT_HEIGHT
      addResizeListener(inputEl, updateStyle)
    })

    onBeforeUnmount(() => {
      //@ts-ignore
      removeResizeListener(input.value.$el, updateStyle)
    })

    return {
      popperOptions,
      popper,
      popperPaneRef,
      input,
      tagWrapper,
      panel,
      suggestionPanel,
      popperVisible,
      inputHover,
      filtering,
      presentText,
      checkedValue,
      inputValue,
      searchInputValue,
      presentTags,
      suggestions,
      isDisabled,
      realSize,
      tagSize,
      multiple,
      readonly,
      clearBtnVisible,
      BForm,
      BFormItem,
      formEmit,
      togglePopperVisible,
      hideSuggestionPanel,
      deleteTag,
      focusFirstNode,
      getCheckedNodes,
      handleExpandChange,
      handleKeyDown,
      handleClear,
      handleSuggestionClick,
      handleDelete,
      handleInput
    }
  }
})
</script>
