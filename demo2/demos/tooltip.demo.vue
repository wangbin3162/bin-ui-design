<script setup lang="ts">
import { ref } from 'vue'
// import { createPopper } from '@popperjs/core'
// import type { Instance } from '@popperjs/core'

// let popperInstance: Instance | null
// const overlayNode = ref<HTMLElement | null>()
// const triggerNode = ref<HTMLElement | null>()

// if (triggerNode.value && overlayNode.value) {
//   popperInstance = createPopper(triggerNode.value, overlayNode.value, {
//     placement: 'right'
//   })
//   setTimeout(() => {
//     popperInstance?.setOptions({
//       placement: 'top'
//     })
//   }, 2000)
// }

const theme = ref<string | null>()
const disabled = ref(false)
</script>

<template>
  <b-config-provider :theme="theme" class="p16">
    <div class="mb-16">
      <b-tooltip content="这是tooltip悬停文字">
        <span>这是一段文字，鼠标经过其上时会显示tooltip</span>
      </b-tooltip>
      <b-tooltip content="light" theme="light">
        <b-button>light</b-button>
      </b-tooltip>
      <b-tooltip content="Dark" theme="dark">
        <b-button>Dark(default)</b-button>
      </b-tooltip>
    </div>
    <div class="position">
      <div class="top">
        <b-tooltip content="Top Left text" placement="top-start">
          <b-button>上左</b-button>
          &nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Top Center text" placement="top">
          <b-button>上边</b-button>
          &nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Top Right text" placement="top-end">
          <b-button>上右</b-button>
        </b-tooltip>
      </div>
      <div class="center">
        <div class="center-left">
          <b-tooltip content="Left Top text" placement="left-start">
            <b-button>左上</b-button>
          </b-tooltip>
          <br />
          <br />
          <b-tooltip content="Left Center text" placement="left">
            <b-button>左边</b-button>
          </b-tooltip>
          <br />
          <br />
          <b-tooltip content="Left Bottom text" placement="left-end">
            <b-button>左下</b-button>
          </b-tooltip>
        </div>
        <div class="center-right">
          <b-tooltip content="Right Top text" placement="right-start">
            <b-button>右上</b-button>
          </b-tooltip>
          <br />
          <br />
          <b-tooltip content="Right Center text" placement="right">
            <b-button>右边</b-button>
          </b-tooltip>
          <br />
          <br />
          <b-tooltip content="Right Bottom text" placement="right-end">
            <b-button>右下</b-button>
          </b-tooltip>
        </div>
      </div>
      <div class="bottom">
        <b-tooltip content="Bottom Left text" placement="bottom-start">
          <b-button>下左</b-button>
          &nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Bottom Center text" placement="bottom">
          <b-button>下边</b-button>
          &nbsp;&nbsp;
        </b-tooltip>
        <b-tooltip content="Bottom Right text" placement="bottom-end">
          <b-button>下右</b-button>
        </b-tooltip>
      </div>
    </div>
    <div class="mb-16">
      <b-tooltip content="点击显示" trigger="click">
        <b-button>点击显示</b-button>
      </b-tooltip>
      <b-tooltip content="延时一秒显示悬停文字" :open-delay="1000">
        <b-button>延时一秒</b-button>
      </b-tooltip>
      <b-tooltip content="点击显示" trigger="click">
        <b-button>点击显示</b-button>
      </b-tooltip>
      <b-tooltip content="关闭和隐藏提示" :disabled="disabled">
        <b-button @click="disabled = !disabled">{{ disabled ? '关闭提示' : '开启提示' }}</b-button>
      </b-tooltip>
    </div>
    <div class="mb-16">
      <b-tooltip placement="top">
        <b-button>多行</b-button>
        <template #content>
          <div>这是多行文字</div>
          <div>这是多行文字</div>
        </template>
      </b-tooltip>
      <b-tooltip
        placement="top"
        content="我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本"
      >
        <b-button>长文本</b-button>
      </b-tooltip>
    </div>
  </b-config-provider>
</template>

<style scoped>
.position {
  .top,
  .bottom {
    text-align: center;
  }
  .center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
    .bin-button {
      height: 50px;
    }
  }
  .center-left {
    float: left;
  }
  .center-right {
    float: right;
  }
}
</style>
