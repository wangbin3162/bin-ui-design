import BLoadingBar from './LoadingBar.vue'
import { createApp } from 'vue'
import type { LoadingBarProps } from './types'

let loadingBarInstance
let timer

let color = 'primary'
let duration = 800
let failedColor = 'error'
let height = 2
let icon = undefined

// 创建一个实例
function getInstance(properties: LoadingBarProps) {
  const _props = properties || {}
  const app = createApp(BLoadingBar, _props)
  const loadingBar = app.mount(document.createElement('div'))
  document.body.appendChild(loadingBar.$el)

  return {
    update(options) {
      if ('percent' in options) {
        loadingBar.percent = options.percent
      }
      if (options.status) {
        loadingBar.status = options.status
      }
      if ('show' in options) {
        loadingBar.show = options.show
      }
      if ('icon' in options) {
        loadingBar.icon = options.icon
      }
    },
    component: loadingBar,
    destroy() {
      document.body.removeChild(document.getElementsByClassName('bin-loading-bar')[0])
    }
  }
}

// 获取loadingBar的实例
function getLoadingBarInstance() {
  // 初始化实例
  loadingBarInstance = loadingBarInstance || getInstance({ color, failedColor, height, icon })
  return loadingBarInstance
}

// 更新进度并传入配置
function update(options) {
  const instance = getLoadingBarInstance()

  instance.update(options)
}

// 隐藏加载进度
function hide() {
  setTimeout(() => {
    update({
      show: false
    })
    setTimeout(() => {
      update({
        percent: 0
      })
    }, 200)
  }, duration)
}

// 清除timer
function clearTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const LoadingBar = {
  start() {
    if (timer) return
    let percent = 0
    update({
      percent: percent,
      status: 'success',
      show: true
    })
    //  开启模拟动画
    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 1)
      if (percent > 95) {
        clearTimer()
      }
      update({
        percent: percent,
        status: 'success',
        show: true
      })
    }, 200)
  },
  update(percent: number) {
    clearTimer()
    update({
      percent: percent,
      status: 'success',
      show: true
    })
  },
  done() {
    clearTimer()
    update({
      percent: 100,
      status: 'success',
      show: true
    })
    hide()
  },
  error() {
    clearTimer()
    update({
      percent: 100,
      status: 'error',
      show: true
    })
    hide()
  },
  config(options: LoadingBarProps) {
    this.destroy()
    if (options.color) {
      color = options.color
    }
    if (options.duration) {
      duration = options.duration
    }
    if (options.failedColor) {
      failedColor = options.failedColor
    }
    if (options.height) {
      height = options.height
    }
    if (options.icon) {
      icon = options.icon
    }
  },
  resetConfig() {
    this.destroy()
    color = 'primary'
    duration = 800
    failedColor = 'error'
    height = 2
    icon = undefined
  },
  destroy() {
    clearTimer()
    const instance = getLoadingBarInstance()
    loadingBarInstance = null
    instance.destroy()
  }
}

export default LoadingBar
