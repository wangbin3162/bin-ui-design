<template>
  <div
    class="bin-menu-wrapper"
    :class="{
      'is-horizontal': mode === 'horizontal',
      'is-collapse': collapse
    }"
    :style="{ backgroundColor: backgroundColor || '' }"
  >
    <ul
      :key="+collapse"
      role="menubar"
      :class="{
        'bin-menu': true,
        'bin-menu--horizontal': mode === 'horizontal',
        'bin-menu--collapse': collapse
      }"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance,
  watch,
  computed,
  ref,
  provide,
  onMounted,
  isRef,
  defineComponent
} from 'vue'
import mitt from 'mitt'
import Menubar from './util/MenuBar'
import useMenuColor from './useMenuColor'
import { menuProps } from './types'

export default defineComponent({
  name: 'BMenu',
  componentName: 'BMenu',
  props: menuProps,
  emits: ['close', 'open', 'select'],
  setup(props, ctx) {
    // data
    const openedMenus = ref(
      props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []
    )
    const instance = getCurrentInstance()
    const activeIndex = ref(props.defaultActive)
    const items: { [key: string]: any } = ref({})
    const submenus: { [key: string]: any } = ref({})
    const alteredCollapse = ref(false)
    const rootMenuEmitter = mitt()
    const router = instance?.appContext.config.globalProperties.$router

    const hoverBackground = useMenuColor(props.backgroundColor)

    // computed
    const isMenuPopup = computed(() => {
      return props.mode === 'horizontal' || (props.mode === 'vertical' && props.collapse)
    })

    // methods
    const initializeMenu = () => {
      const index = activeIndex.value
      const activeItem = items.value[index]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      let indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach((index: string | number) => {
        let submenu = submenus.value[index]
        submenu && openMenu(index, submenu?.indexPath)
      })
    }

    const addSubMenu = (item: { index: string | number }) => {
      submenus.value[item.index] = item
    }

    const removeSubMenu = (item: { index: string | number }) => {
      delete submenus.value[item.index]
    }

    const addMenuItem = (item: { index: string | number }) => {
      items.value[item.index] = item
    }

    const removeMenuItem = (item: { index: string | number }) => {
      delete items.value[item.index]
    }

    const openMenu = (index: unknown, indexPath: unknown) => {
      if (openedMenus.value.includes(index)) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter(index => {
          // @ts-ignore
          return (isRef(indexPath) ? indexPath.value : indexPath).indexOf(index) !== -1
        })
      }
      openedMenus.value.push(index)
    }

    const closeMenu = (index: unknown) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }

    const open = (index: { toString: () => string | number }) => {
      const { indexPath } = submenus.value[index.toString()]
      indexPath.forEach((i: any) => openMenu(i, indexPath))
    }

    const close = (index: any) => {
      closeMenu(index)
    }

    const handleSubmenuClick = (submenu: { index: any; indexPath: any }) => {
      const { index, indexPath } = submenu
      let isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index)
        ctx.emit('close', index, indexPath.value)
      } else {
        openMenu(index, indexPath)
        ctx.emit('open', index, indexPath.value)
      }
    }

    const handleItemClick = (item: { index: any; indexPath?: any }) => {
      const { index, indexPath } = item
      const hasIndex = item.index !== null
      const oldActiveIndex = activeIndex.value

      if (hasIndex) {
        activeIndex.value = item.index
      }

      ctx.emit('select', index, indexPath.value, item)

      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }

      if (props.router && router && hasIndex) {
        routeToItem(item, (error: { name: string }) => {
          activeIndex.value = oldActiveIndex
          if (error) {
            // vue-router 3.1.0+ push/replace cause NavigationDuplicated error
            // https://github.com/ElemeFE/element/issues/17044
            if (error.name === 'NavigationDuplicated') return
            console.error(error)
          }
        })
      }
    }

    // eslint-disable-next-line no-unused-vars
    const routeToItem = (item: { route: any; index: any }, onError: (error: any) => void) => {
      let route = item.route || item.index
      try {
        router?.push(route, () => null, onError)
      } catch (e) {
        console.error(e)
      }
    }

    const updateActiveIndex = (val: string | undefined) => {
      const itemsInData = items.value

      const item =
        // @ts-ignore
        itemsInData[val] || itemsInData[activeIndex.value] || itemsInData[props.defaultActive]

      if (item) {
        activeIndex.value = item.index
        initializeMenu()
      } else {
        // Can't find item when collapsing
        // and activeIndex shouldn't be changed when 'collapse' was changed.
        // Then reset 'alteredCollapse' immediately.
        if (!alteredCollapse.value) {
          //@ts-ignore
          activeIndex.value = null
        } else {
          alteredCollapse.value = false
        }
      }
    }

    // watch

    watch(
      () => props.defaultActive,
      currentActive => {
        if (!items[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      }
    )

    watch(items.value, () => {
      //@ts-ignore
      updateActiveIndex()
    })

    watch(
      () => props.collapse,
      (value, prev) => {
        if (value !== prev) {
          alteredCollapse.value = true
        }
        if (value) openedMenus.value = []
        rootMenuEmitter.emit('rootMenu:toggle-collapse', Boolean(props.collapse))
      }
    )

    // provide
    provide('rootMenu', {
      props,
      openedMenus,
      items,
      submenus,
      hoverBackground,
      activeIndex,
      isMenuPopup,
      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu
      },
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on
    })
    provide(`subMenu:${instance?.uid}`, {
      addSubMenu,
      removeSubMenu
    })

    onMounted(() => {
      initializeMenu()
      // @ts-ignore
      rootMenuEmitter.on('menuItem:item-click', handleItemClick)
      // @ts-ignore
      rootMenuEmitter.on('submenu:submenu-click', handleSubmenuClick)
      if (props.mode === 'horizontal') {
        new Menubar(instance?.vnode.el)
      }
    })

    return {
      hoverBackground,
      isMenuPopup,
      open,
      close
    }
  }
})
</script>
