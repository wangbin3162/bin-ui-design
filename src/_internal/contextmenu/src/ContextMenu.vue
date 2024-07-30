<template>
  <teleport to="body">
    <transition name="zoom-in-top">
      <div v-if="show" class="bin-contextmenu" :style="contextMenuStyle">
        <ul class="bin-contextmenu-content">
          <slot>
            <li>默认插槽,插入li元素</li>
          </slot>
        </ul>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
defineOptions({ name: 'BContextmenu' })

const show = ref(false)
const pos = reactive({
  x: 0,
  y: 0
})

const contextMenuStyle = computed(() => ({
  left: `${pos.x}px`,
  top: `${pos.y}px`
}))

const showMenu = async e => {
  e.preventDefault()
  pos.x = e.clientX
  pos.y = e.clientY
  show.value = true
}
const hideMenu = () => {
  show.value = false
}

watch(
  () => show.value,
  val => {
    if (val) {
      document.body.addEventListener('click', hideMenu)
    } else {
      document.body.removeEventListener('click', hideMenu)
    }
  }
)

defineExpose({
  showMenu,
  hideMenu,
  show,
  pos
})
</script>
