<template>
  <li
    class="bin-menu-item"
    role="menuitem"
    tabindex="-1"
    :style="[paddingStyle, itemStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-disabled': disabled,
      'is-tooltip': parentMenu.type.name === 'BMenu' && rootMenu.props.collapse && slots.title
    }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <b-tooltip
      v-if="parentMenu.type.name === 'BMenu' && rootMenu.props.collapse && slots.title"
      theme="dark"
      placement="right"
    >
      <template #content>
        <slot name="title"></slot>
      </template>
      <div
        style="
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 20px;
        "
      >
        <slot></slot>
      </div>
    </b-tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  getCurrentInstance,
  defineComponent
} from 'vue'
import useMenu from './useMenu'
import { BTooltip } from '../../tooltip'

export default defineComponent({
  name: 'BMenuItem',
  componentName: 'BMenuItem',
  components: { BTooltip },
  props: {
    index: {
      type: String,
      default: null,
      validator: val => typeof val === 'string' || val === null
    },
    route: {
      type: [String, Object],
      default: ''
    },
    disabled: Boolean
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const instance = getCurrentInstance()
    const rootMenu = inject('rootMenu')
    const { parentMenu, paddingStyle, indexPath } = useMenu(instance, props.index)

    // @ts-ignore
    const { addSubMenu, removeSubMenu } = inject(`subMenu:${parentMenu.value.uid}`)

    const active = computed(() => {
      // @ts-ignore
      return props.index === rootMenu.activeIndex.value
    })
    const hoverBackground = computed(() => {
      // @ts-ignore
      return rootMenu.hoverBackground.value
    })
    const backgroundColor = computed(() => {
      // @ts-ignore
      return rootMenu.props.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      // @ts-ignore
      return rootMenu.props.activeTextColor || ''
    })
    const textColor = computed(() => {
      // @ts-ignore
      return rootMenu.props.textColor || ''
    })
    const mode = computed(() => {
      // @ts-ignore
      return rootMenu.props.mode
    })
    const isNested = computed(() => {
      return parentMenu.value.type.name !== 'ElMenu'
    })

    const itemStyle = computed(() => {
      const style = {
        color: active.value ? activeTextColor.value : textColor.value,
        borderBottomColor: active.value ? activeTextColor.value : ''
      }
      if (mode.value === 'horizontal' && !isNested.value) {
        style.borderBottomColor = active.value
          ? // @ts-ignore
            rootMenu.props.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent'
      }
      return style
    })

    const onMouseEnter = () => {
      // @ts-ignore
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      // @ts-ignore
      instance.vnode.el.style.backgroundColor = hoverBackground.value
    }
    const onMouseLeave = () => {
      // @ts-ignore
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      // @ts-ignore
      instance.vnode.el.style.backgroundColor = backgroundColor.value
    }
    const handleClick = () => {
      if (!props.disabled) {
        // @ts-ignore
        rootMenu.rootMenuEmit('menuItem:item-click', {
          index: props.index,
          indexPath,
          route: props.route
        })
        emit('click', {
          index: props.index,
          indexPath: indexPath.value
        })
      }
    }

    onMounted(() => {
      addSubMenu({ index: props.index, indexPath, active })
      // @ts-ignore
      rootMenu.methods.addMenuItem({ index: props.index, indexPath, active })
    })

    onBeforeUnmount(() => {
      removeSubMenu({ index: props.index, indexPath, active })
      // @ts-ignore
      rootMenu.methods.removeMenuItem({ index: props.index, indexPath, active })
    })

    return {
      parentMenu,
      rootMenu,
      slots,
      paddingStyle,
      itemStyle,
      backgroundColor,
      active,
      handleClick,
      onMouseEnter,
      onMouseLeave
    }
  }
})
</script>
