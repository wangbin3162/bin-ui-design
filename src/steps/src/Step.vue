<template>
  <div :class="wrapClasses">
    <div class="bin-steps-tail"><i></i></div>
    <div class="bin-steps-head">
      <div class="bin-steps-head-inner">
        <span
          v-if="!icon && !$slots.icon && currentStatus !== 'finish' && currentStatus !== 'error'"
        >
          {{ stepNumber }}
        </span>
        <span v-else-if="$slots.icon" class="bin-steps-icon"><slot name="icon"></slot></span>
        <span v-else :class="iconClasses"></span>
      </div>
    </div>
    <div class="bin-steps-main">
      <div class="bin-steps-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="content || $slots.content" class="bin-steps-content">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, toRefs, reactive, onMounted, onBeforeUnmount, defineComponent } from 'vue'
import { stepProps } from './types'

const prefixCls = 'bin-steps'

export default defineComponent({
  name: 'BStep',
  props: stepProps,
  setup(props) {
    const stepsParent = inject('Steps')
    // @ts-ignore
    const stepsMitt = stepsParent?.stepsMitt
    const data = reactive({
      stepNumber: '',
      nextError: false,
      total: 1,
      currentStatus: props.status
    })

    // @ts-ignore
    stepsParent.stepChild.value = [...stepsParent.stepChild.value, data]
    onMounted(() => {
      stepsMitt?.emit('append')
    })
    onBeforeUnmount(() => {
      stepsMitt?.emit('remove')
    })
    return {
      ...toRefs(data)
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-item`,
        `${prefixCls}-status-${this.currentStatus}`,
        {
          [`${prefixCls}-custom`]: !!this.icon || !!this.$slots.icon,
          [`${prefixCls}-next-error`]: this.nextError
        }
      ]
    },
    iconClasses() {
      let icon = ''

      if (this.icon) {
        icon = this.icon
      } else {
        if (this.currentStatus === 'finish') {
          icon = 'check'
        } else if (this.currentStatus === 'success') {
          icon = 'check'
        } else if (this.currentStatus === 'error') {
          icon = 'close'
        }
      }

      return [
        `${prefixCls}-icon`,
        `b-iconfont`,
        {
          [`b-icon-${icon}`]: icon !== ''
        }
      ]
    }
  },
  watch: {
    status(val) {
      this.currentStatus = val
      if (val === 'error') {
        // @ts-ignore
        this.$parent?.setNextError()
      }
    }
  }
})
</script>
