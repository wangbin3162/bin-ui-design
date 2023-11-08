<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    class="bin-tree-select"
    @click.stop="toggleMenu"
  >
    <b-popper
      ref="popper"
      v-model:visible="visible"
      placement="bottom-start"
      :append-to-body="appendToBody"
      :popper-class="`bin-tree-select__popper ${popperClass}`"
      manual-mode
      theme="light"
      pure
      trigger="click"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :show-arrow="false"
      :offset="4"
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
        <b-scrollbar v-show="visible" ref="scrollbar" wrap-class="bin-tree-select-panel__wrap">
          <div class="bin-tree-select-inner" :style="{ minWidth: minWidth }">
            <b-tree
              ref="treeRef"
              :data="data"
              :show-checkbox="showCheckbox"
              :check-directly="checkDirectly"
              :check-strictly="checkStrictly"
              :lock-select="lockSelect"
              :load-data="loadData"
              :children-key="childrenKey"
              :default-expand="defaultExpand"
              :empty-text="emptyText"
              :filter-node-method="filterNodeMethod"
              :render="render"
              :title-key="titleKey"
              @select-change="handleSelect"
            ></b-tree>
          </div>
        </b-scrollbar>
      </template>
    </b-popper>
  </div>
</template>

<script lang="ts">
import { BPopper } from '../../_internal/popper'
import { ClickOutside } from '../../_directives'
import { BInput } from '../../input'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../_utils/constants'
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useForm } from '../../_hooks'
import { BScrollbar } from '../../_internal/scrollbar'
import BTree from './Tree.vue'
import { addResizeListener, removeResizeListener } from '../../_utils/resize-event'
import { treeSelectProps } from './types'

export default defineComponent({
  name: 'BTreeSelect',
  components: { BScrollbar, BInput, BPopper, BTree },
  directives: { ClickOutside },
  props: treeSelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'clear',
    'visible-change',
    'focus',
    'blur',
    'update:checked'
  ],
  setup(props, { emit }) {
    const popper = ref(null)
    const selectWrapper = ref(null)
    const input = ref(null)
    const treeRef = ref(null)
    const reference = ref(null)
    const selectedLabel = ref(props.modelValue) // 选中显示值
    const visible = ref(false)
    const inputHovering = ref(false)
    const query = ref('')
    const minWidth = ref('')

    //@ts-ignore
    const popperPaneRef = computed(() => popper.value?.popperRef)
    const showClose = computed(() => props.clearable && selectedLabel.value && inputHovering.value)
    const iconClass = computed(() => (visible.value ? 'down is-reverse' : 'down'))
    //@ts-ignore
    const inputSize = computed(() => props.size || BForm.size)
    const { BForm, formEmit } = useForm()

    // eslint-disable-next-line no-unused-vars
    function handleSelect(selected, node, flatState) {
      // node.selected = true
      visible.value = false
      changeValue(node)
    }

    function toggleMenu() {
      visible.value = !visible.value
      if (visible.value === false) {
        emit(
          'update:checked',
          //@ts-ignore
          treeRef.value.getCheckedNodes().map(v => v[props.valueKey])
        )
      }
    }

    function handleClose() {
      visible.value = false
      query.value = ''
      emit(
        'update:checked',
        //@ts-ignore
        treeRef.value?.getCheckedNodes().map(v => v[props.valueKey])
      )
    }

    function handleClearClick() {
      emit('clear')
      //@ts-ignore
      changeValue()
      visible.value = false

      //@ts-ignore
      treeRef.value && treeRef.value.collapseAll()
      //@ts-ignore
      treeRef.value && treeRef.value.unselectAll()
    }

    function changeValue(node) {
      if (!node) {
        selectedLabel.value = ''
        emit(UPDATE_MODEL_EVENT, '')
        emit(CHANGE_EVENT, '', null)
        formEmit('change', '')
        return
      }
      selectedLabel.value = node[props.titleKey] // 更新显示值
      const value = node[props.valueKey]
      emit(UPDATE_MODEL_EVENT, value)
      emit(CHANGE_EVENT, value, node)
      formEmit('change', value)
    }

    // 设置默认行为
    function setNormalSelected(showError = true) {
      nextTick(() => {
        // 获取全部拍平节点
        //@ts-ignore
        const flatState = treeRef.value?.getFlatState()
        if (!flatState) return

        const matchItem = flatState.find(
          (item: any) => item.node[props.valueKey] === props.modelValue
        )
        if (matchItem) {
          //@ts-ignore
          treeRef.value?.setSelected([matchItem.nodeKey])
          // changeValue(matchItem.node)
        } else {
          if (showError) console.error(' There is no such data in the tree structure!')
        }
      })
    }

    // 默认执行一次初始化数据
    setNormalSelected(false)

    watch(
      () => props.modelValue,
      val => {
        if (val) {
          setNormalSelected()
        } else {
          nextTick(() => {
            handleClearClick()
          })
        }
      },
      { deep: true }
    )

    watch(
      () => props.checked,
      val => {
        nextTick(() => {
          const checkedKeys = []
          //@ts-ignore
          const flatState = treeRef.value?.getFlatState()
          if (!flatState) return
          val.forEach(id => {
            const matchItem = flatState.find((v: any) => v.node[props.valueKey] === id)
            if (matchItem) {
              //@ts-ignore
              checkedKeys.push(matchItem.nodeKey)
            }
          })
          //@ts-ignore
          treeRef.value.uncheckAll()
          //@ts-ignore
          treeRef.value.setChecked(checkedKeys)
        })
      },
      { deep: true, immediate: true }
    )

    function updateMinWidth() {
      //@ts-ignore
      minWidth.value = selectWrapper.value?.getBoundingClientRect().width + 'px'
    }

    onMounted(() => {
      addResizeListener(selectWrapper.value, updateMinWidth)
    })

    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value, updateMinWidth)
    })
    return {
      selectWrapper,
      reference,
      input,
      treeRef,
      popper,
      minWidth,
      query,
      popperPaneRef,
      selectedLabel,
      visible,
      inputHovering,
      showClose,
      iconClass,
      inputSize,
      toggleMenu,
      handleSelect,
      handleClose,
      handleClearClick
    }
  }
})
</script>
