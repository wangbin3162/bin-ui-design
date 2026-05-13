<template>
  <b-config-provider :theme-name="themeName">
    <div class="demo-dark">
      <b-button size="small" @click="toggleTheme">
        切换为{{ themeName === 'dark' ? '浅色' : '深色' }}模式
      </b-button>

      <div class="demo-dark__row">
        <b-input v-model="keyword" placeholder="输入关键字" clearable style="width: 220px" />
        <b-select v-model="city" placeholder="请选择城市" style="width: 220px">
          <b-option label="上海" value="shanghai" />
          <b-option label="北京" value="beijing" />
          <b-option label="深圳" value="shenzhen" />
        </b-select>
        <b-date-picker v-model="date" type="date" placeholder="选择日期" style="width: 220px" />
      </div>

      <div class="demo-dark__row">
        <b-dropdown @command="handleCommand">
          <b-button>
            Dropdown
            <i class="b-iconfont b-icon-down"></i>
          </b-button>
          <template #dropdown>
            <b-dropdown-menu>
              <b-dropdown-item name="a">菜单 A</b-dropdown-item>
              <b-dropdown-item name="b">菜单 B</b-dropdown-item>
            </b-dropdown-menu>
          </template>
        </b-dropdown>

        <b-button @click="showMessage">Message</b-button>
        <b-button @click="showNotice">Notice</b-button>
        <b-button @click="showConfirm">MessageBox</b-button>
      </div>
    </div>
  </b-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message, Notice, MessageBox } from 'bin-ui-design'

const themeName = ref<'light' | 'dark'>('light')
const keyword = ref('')
const city = ref('')
const date = ref('')

const toggleTheme = () => {
  themeName.value = themeName.value === 'dark' ? 'light' : 'dark'
}

const handleCommand = value => {
  Message.info(`点击了菜单: ${value}`)
}

const showMessage = () => {
  Message.success('函数式 Message 已跟随主题')
}

const showNotice = () => {
  Notice.info({
    title: '主题联动',
    message: 'Notice 已跟随 ConfigProvider 主题切换'
  })
}

const showConfirm = () => {
  MessageBox.confirm({
    title: '主题联动',
    message: 'MessageBox 已跟随 ConfigProvider 主题切换'
  })
}
</script>

<style scoped>
.demo-dark {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-dark__row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
