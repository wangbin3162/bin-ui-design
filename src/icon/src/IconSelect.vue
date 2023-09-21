<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    class="bin-icon-select"
    @click.stop="toggleMenu"
  >
    <b-popper
      ref="popper"
      v-model:visible="visible"
      placement="bottom-start"
      :append-to-body="appendToBody"
      :popper-class="`bin-icon-select__popper ${popperClass}`"
      manual-mode
      theme="light"
      pure
      trigger="click"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :show-arrow="false"
      :offset="5"
      transition="zoom-in-top"
    >
      <template #trigger>
        <div class="select-trigger">
          <b-input
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="placeholder"
            :size="inputSize"
            :disabled="disabled"
            :readonly="true"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template #prepend>
              <b-button style="width: 40px; padding: 0">
                <b-icon :name="selectedLabel" size="16"></b-icon>
              </b-button>
            </template>
            <template #suffix>
              <i
                v-show="!showClose"
                :class="['bin-select__caret', 'b-iconfont', 'b-icon-' + iconClass]"
              ></i>
              <i
                v-if="showClose"
                :class="`bin-select__caret is-show-close b-iconfont b-icon-close-circle-fill`"
                @click.stop.prevent="handleClearClick"
              ></i>
            </template>
          </b-input>
        </div>
      </template>
      <template #default>
        <div class="bin-icon-select-panel__query">
          <b-input v-model="query" placeholder="输入图标名称搜索" size="small" clearable></b-input>
        </div>
        <b-scrollbar
          v-show="visible && showIcons.length"
          ref="scrollbar"
          tag="ul"
          wrap-class="bin-icon-select-panel__wrap"
          view-class="icon-list"
        >
          <li
            v-for="name in showIcons"
            :key="name"
            class="list-complete-item"
            :title="name"
            @click="handleSelect(name)"
          >
            <i :class="['b-iconfont', 'b-icon-' + name]"></i>
          </li>
        </b-scrollbar>
        <b-empty v-show="showIcons.length === 0">没有匹配图标</b-empty>
      </template>
    </b-popper>
  </div>
</template>

<script setup lang="ts">
import { BPopper } from '../../_internal/popper'
import { ClickOutside } from '../../_directives'

defineOptions({
  name: 'BIconSelect',
  directives: { ClickOutside }
})
</script>
