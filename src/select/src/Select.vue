<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    class="bin-select"
    :class="[selectSize ? 'bin-select--' + selectSize : '']"
    @click.stop="toggleMenu"
  >
    <b-popper
      ref="popper"
      v-model:visible="dropMenuVisible"
      placement="bottom-start"
      :append-to-body="appendToBody"
      :popper-class="`bin-select__popper ${popperClass}`"
      manual-mode
      theme="light"
      pure
      trigger="click"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :show-arrow="false"
      :offset="5"
      transition="zoom-in-top"
      @before-enter="handleMenuEnter"
    >
      <template #trigger>
        <div class="select-trigger">
          <div
            v-if="multiple"
            ref="tags"
            class="bin-select__tags"
            :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
          >
            <span v-if="collapseTags && selected.length">
              <b-tag
                :closable="!selectDisabled && !selected[0].isDisabled"
                :size="collapseTagSize"
                type="info"
                disable-transitions
                @click.stop="toggleMenu"
                @close="deleteTag($event, selected[0])"
              >
                <span
                  class="bin-select__tags-text"
                  :style="{ 'max-width': inputWidth - 123 + 'px' }"
                >
                  {{ selected[0].currentLabel }}
                </span>
              </b-tag>
              <b-tag
                v-if="selected.length > 1"
                :closable="false"
                :size="collapseTagSize"
                type="info"
                @click.stop="toggleMenu"
              >
                <span class="bin-select__tags-text">+ {{ selected.length - 1 }}</span>
              </b-tag>
            </span>

            <transition @after-leave="resetInputHeight">
              <span
                v-if="!collapseTags"
                :style="{ marginLeft: prefixWidth && selected.length ? `${prefixWidth}px` : null }"
              >
                <b-tag
                  v-for="item in selected"
                  :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  type="info"
                  @click.stop="toggleMenu"
                  @close="deleteTag($event, item)"
                >
                  <span
                    class="bin-select__tags-text"
                    :style="{ 'max-width': inputWidth - 75 + 'px' }"
                  >
                    {{ item.currentLabel }}
                  </span>
                </b-tag>
              </span>
            </transition>

            <input
              v-if="filterable"
              ref="input"
              v-model="query"
              type="text"
              class="bin-select__input"
              :class="[selectSize ? `is-${selectSize}` : '']"
              :disabled="selectDisabled"
              :autocomplete="autocomplete"
              :style="{
                marginLeft:
                  (prefixWidth && !selected.length) || tagInMultiLine ? `${prefixWidth}px` : null,
                flexGrow: '1',
                width: `${inputLength / (inputWidth - 32)}%`,
                maxWidth: `${inputWidth - 42}px`
              }"
              @focus="handleFocus"
              @blur="handleBlur"
              @keyup="managePlaceholder"
              @keydown="resetInputState"
              @keydown.down.prevent="navigateOptions('next')"
              @keydown.up.prevent="navigateOptions('prev')"
              @keydown.esc.stop.prevent="visible = false"
              @keydown.enter.stop.prevent="selectOption"
              @keydown.delete="deletePrevTag"
              @keydown.tab="visible = false"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
              @input="debouncedQueryChange"
            />
          </div>
          <b-input
            :id="id"
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="currentPlaceholder"
            :name="name"
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            :tabindex="multiple && filterable ? '-1' : null"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.up.stop.prevent="navigateOptions('prev')"
            @keydown.enter.stop.prevent="selectOption"
            @keydown.esc.stop.prevent="visible = false"
            @keydown.tab="visible = false"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template v-if="$slots.prefix" #prefix>
              <div
                class="bin-input__prefix"
                style="height: 100%; display: flex; justify-content: center; align-items: center"
              >
                <slot name="prefix"></slot>
              </div>
            </template>
            <template #suffix>
              <i
                v-show="!showClose"
                :class="['bin-select__caret', 'b-iconfont', 'b-icon-' + iconClass]"
              ></i>
              <i
                v-if="showClose"
                :class="`bin-select__caret is-show-close b-iconfont b-icon-${clearIcon}`"
                @click="handleClearClick"
              ></i>
            </template>
          </b-input>
        </div>
      </template>
      <template #default>
        <b-select-menu>
          <b-scrollbar
            v-show="options.size > 0 && !loading"
            ref="scrollbar"
            tag="ul"
            wrap-class="bin-select-dropdown__wrap"
            view-class="bin-select-dropdown__list"
            :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
          >
            <b-option v-if="showNewOption" :value="query" :created="true" />
            <slot></slot>
          </b-scrollbar>
          <template
            v-if="emptyText && (!allowCreate || loading || (allowCreate && options.size === 0))"
          >
            <slot v-if="$slots.empty" name="empty"></slot>
            <p v-else class="bin-select-dropdown__empty">
              {{ emptyText }}
            </p>
          </template>
        </b-select-menu>
      </template>
    </b-popper>
  </div>
</template>

<script lang="ts">
import {
  toRefs,
  onMounted,
  onBeforeUnmount,
  nextTick,
  reactive,
  provide,
  computed,
  defineComponent
} from 'vue'
import { BInput } from '../../input'
import BOption from './Option.vue'
import BSelectMenu from './select-dropdown.vue'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import { BTag } from '../../tag'
import { BPopper } from '../../_internal/popper'
import { BScrollbar } from '../../_internal/scrollbar'
import { ClickOutside } from '../../_directives'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../_utils/constants'
import { useSelect, useSelectStates } from './useSelect'
import { selectKey } from './token'
import { useFocus } from '../../_hooks'
import { selectProps } from './types'

export default defineComponent({
  name: 'BSelect',
  componentName: 'BSelect',
  components: {
    BInput,
    BSelectMenu,
    BOption,
    BTag,
    BScrollbar,
    BPopper
  },
  directives: { ClickOutside },
  props: selectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur'
  ],
  setup(props, ctx) {
    const states = useSelectStates(props)
    const {
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconClass,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,

      reference,
      input,
      popper,
      tags,
      selectWrapper,
      scrollbar
    } = useSelect(props, states, ctx)

    const { focus } = useFocus(reference)

    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states)

    provide(
      selectKey,
      reactive({
        props,
        options,
        optionsArray,
        cachedOptions,
        optionsCount,
        filteredOptionsCount,
        hoverIndex,
        handleOptionSelect,
        selectEmitter: states.selectEmitter,
        onOptionCreate,
        onOptionDestroy,
        selectWrapper,
        selected,
        setSelected
      })
    )

    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || ''
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = ''
      }
      addResizeListener(selectWrapper.value, handleResize)
      // @ts-ignore
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          large: 36,
          small: 32,
          mini: 28
        }
        // @ts-ignore
        const input = reference.value.inputRef
        states.initialInputHeight =
          input.getBoundingClientRect().height || sizeMap[selectSize.value]
      }
      if (props.remote && props.multiple) {
        resetInputHeight()
      }
      nextTick(() => {
        // @ts-ignore
        if (reference.value.$el) {
          // @ts-ignore
          inputWidth.value = reference.value.$el.getBoundingClientRect().width
        }
        if (ctx.slots.prefix) {
          // @ts-ignore
          const inputChildNodes = reference.value.$el.childNodes
          const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
          // @ts-ignore
          const prefix = reference.value.$el.querySelector('.bin-input__prefix')
          // @ts-ignore
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30)
          if (states.prefixWidth) {
            input.style.paddingLeft = `${Math.max(states.prefixWidth, 30)}px`
          }
        }
      })
      setSelected()
    })

    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value, handleResize)
    })

    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, [])
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, '')
    }

    const popperPaneRef = computed(() => {
      // @ts-ignore
      return popper.value?.popperRef
    })

    return {
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconClass,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,

      reference,
      input,
      popper,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar
    }
  }
})
</script>
