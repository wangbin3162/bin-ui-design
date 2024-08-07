<template>
  <div :class="[prefixCls]">
    <div
      :class="classes"
      @click="handleClick"
      @drop.prevent="onDrop"
      @paste="handlePaste"
      @dragover.prevent="dragOver = true"
      @dragleave.prevent="dragOver = false"
    >
      <input
        ref="input"
        type="file"
        :class="[prefixCls + '-input']"
        :multiple="multiple"
        :accept="accept"
        @change="handleChange"
      />
      <slot>
        <b-button icon="cloud-upload">点击上传</b-button>
      </slot>
    </div>
    <!--tip，说明插槽-->
    <slot name="tip"></slot>
    <upload-list
      v-if="showUploadList"
      :files="fileList"
      @file-remove="handleRemove"
      @file-preview="handlePreview"
    ></upload-list>
  </div>
</template>

<script lang="ts">
import { uploadProps } from './types'
import UploadList from './UploadList.vue'
import { BButton } from '../../button'
import { useForm } from '../../_hooks'
import ajax from './ajax'
import { defineComponent } from 'vue'

const prefixCls = 'bin-upload'

export default defineComponent({
  name: 'BUpload',
  components: { BButton, UploadList },
  props: uploadProps,
  setup() {
    const { formEmit } = useForm()
    return {
      formEmit
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      dragOver: false,
      fileList: [],
      tempIndex: 1
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-select`]: this.type === 'select',
          [`${prefixCls}-drag`]: this.type === 'drag',
          [`${prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
        }
      ]
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler(fileList) {
        this.fileList = fileList.map(item => {
          item.status = 'finished'
          item.percentage = 100
          item.uid = Date.now() + this.tempIndex++
          return item
        })
      }
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      this.$refs.input.click()
    },
    handleChange(e) {
      const files = e.target.files

      if (!files) {
        return
      }
      this.uploadFiles(files)
      this.$refs.input.value = null
    },
    onDrop(e) {
      this.dragOver = false
      if (this.type === 'select' || this.disabled) return
      this.uploadFiles(e.dataTransfer.files)
    },
    handlePaste(e) {
      if (this.disabled) return
      if (this.paste) {
        this.uploadFiles(e.clipboardData.files)
      }
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files)
      if (!this.multiple) postFiles = postFiles.slice(0, 1)

      if (postFiles.length === 0) return

      postFiles.forEach(file => {
        this.upload(file)
      })
    },
    upload(file) {
      if (!this.beforeUpload) {
        return this.post(file)
      }

      const before = this.beforeUpload(file)
      if (before && before.then) {
        before.then(
          processedFile => {
            if (Object.prototype.toString.call(processedFile) === '[object File]') {
              this.post(processedFile)
            } else {
              this.post(file)
            }
          },
          () => {
            // this.$emit('cancel', file);
          }
        )
      } else if (before !== false) {
        this.post(file)
      } else {
        // this.$emit('cancel', file);
      }
    },
    post(file) {
      // check format
      if (this.format.length) {
        const fileFormat = file.name.split('.').pop().toLocaleLowerCase()
        const checked = this.format.some(item => item.toLocaleLowerCase() === fileFormat)
        if (!checked) {
          this.onFormatError(file, this.fileList)
          return false
        }
      }

      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList)
          return false
        }
      }

      this.handleStart(file)
      let formData = new FormData()
      formData.append(this.name, file)

      ajax({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, file)
        },
        onSuccess: res => {
          this.handleSuccess(res, file)
        },
        onError: (err, response) => {
          this.handleError(err, response, file)
        }
      })
    },
    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++
      const _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      }

      this.fileList.push(_file)
    },
    getFile(file) {
      const fileList = this.fileList
      let target
      fileList.every(item => {
        target = file.uid === item.uid ? item : null
        return !target
      })
      return target
    },
    handleProgress(e, file) {
      const _file = this.getFile(file)
      this.onProgress(e, _file, this.fileList)
      _file.percentage = e.percent || 0
    },
    handleSuccess(res, file) {
      const _file = this.getFile(file)

      if (_file) {
        _file.status = 'finished'
        _file.response = res

        this.onSuccess(res, _file, this.fileList)
        this.formEmit('change', _file)

        setTimeout(() => {
          _file.showProgress = false
        }, 1000)
      }
    },
    handleError(err, response, file) {
      const _file = this.getFile(file)
      const fileList = this.fileList

      _file.status = 'fail'

      fileList.splice(fileList.indexOf(_file), 1)

      this.onError(err, response, file)
    },
    handleRemove(file) {
      const fileList = this.fileList
      fileList.splice(fileList.indexOf(file), 1)
      this.onRemove(file, fileList)
    },
    handlePreview(file) {
      if (file.status === 'finished') {
        this.onPreview(file)
      }
    },
    clearFiles() {
      this.fileList = []
    }
  }
})
</script>
