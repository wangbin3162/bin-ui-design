<template>
  <ul :class="[prefixCls + '-list']">
    <li
      v-for="(file, index) in files"
      :key="index"
      :class="fileCls(file)"
      @click="handleClick(file)"
    >
      <span @click="handlePreview(file)">
        <i :class="`b-iconfont b-icon-${format(file)}`"></i>
        {{ file.name }}
      </span>
      <i
        v-show="file.status === 'finished'"
        class="b-iconfont b-icon-close"
        :class="[prefixCls + '-list-remove']"
        @click.native="handleRemove(file)"
      ></i>
      <transition name="fade">
        <b-progress
          v-if="file.showProgress"
          :stroke-width="2"
          :percent="parsePercentage(file.percentage)"
          :status="file.status === 'finished' && file.showProgress ? 'success' : null"
        ></b-progress>
      </transition>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BProgress } from '../../progress'

const prefixCls = 'bin-upload'

export default defineComponent({
  name: 'UploadList',
  components: { BProgress },
  props: {
    files: {
      type: Array,
      default() {
        return []
      }
    }
  },
  emits: ['file-click', 'file-preview', 'file-remove'],
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  methods: {
    fileCls(file) {
      return [
        `${prefixCls}-list-file`,
        {
          [`${prefixCls}-list-file-finish`]: file.status === 'finished'
        }
      ]
    },
    handleClick(file) {
      this.$emit('file-click', file)
    },
    handlePreview(file) {
      this.$emit('file-preview', file)
    },
    handleRemove(file) {
      this.$emit('file-remove', file)
    },
    format(file) {
      const format = file.name.split('.').pop().toLocaleLowerCase() || ''
      let type = 'file-text'

      if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
        type = 'image'
      }
      if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(format) > -1) {
        type = 'video'
      }
      if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
        type = 'Youtube'
      }
      if (['pages', 'epub', 'pdf'].indexOf(format) > -1) {
        type = 'file-pdf'
      }
      if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
        type = 'file-excel'
      }
      if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
        type = 'file-ppt'
      }

      return type
    },
    parsePercentage(val) {
      return parseInt(val, 10)
    }
  }
})
</script>
