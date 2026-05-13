<template>
  <b-config-provider :theme-name="themeName">
    <div class="demo-dark">
      <b-button size="small" @click="toggleTheme">
        Switch to {{ themeName === 'dark' ? 'Light' : 'Dark' }} Mode
      </b-button>

      <div class="demo-dark__row">
        <b-input v-model="keyword" placeholder="Type keyword" clearable style="width: 220px" />
        <b-select v-model="city" placeholder="Select city" style="width: 220px">
          <b-option label="Shanghai" value="shanghai" />
          <b-option label="Beijing" value="beijing" />
          <b-option label="Shenzhen" value="shenzhen" />
        </b-select>
        <b-date-picker v-model="date" type="date" placeholder="Select date" style="width: 220px" />
      </div>

      <div class="demo-dark__row">
        <b-dropdown @command="handleCommand">
          <b-button>
            Dropdown
            <i class="b-iconfont b-icon-down"></i>
          </b-button>
          <template #dropdown>
            <b-dropdown-menu>
              <b-dropdown-item name="a">Menu A</b-dropdown-item>
              <b-dropdown-item name="b">Menu B</b-dropdown-item>
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
  Message.info(`Clicked menu: ${value}`)
}

const showMessage = () => {
  Message.success('Message now follows current theme')
}

const showNotice = () => {
  Notice.info({
    title: 'Theme Sync',
    message: 'Notice follows ConfigProvider theme switching'
  })
}

const showConfirm = () => {
  MessageBox.confirm({
    title: 'Theme Sync',
    message: 'MessageBox follows ConfigProvider theme switching'
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
