<template>
  <div>
    <b-button class="button-new-tag" size="small" icon="plus" @click="addOne">New Tag</b-button>
    <p>
      <b-tag
        :key="tag"
        v-for="tag in data.dynamicTags"
        type="primary"
        closable
        @close="handleCloseTag(tag)"
      >
        {{ tag }}
      </b-tag>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
const data = reactive({
  dynamicTags: ['标签一', '标签二', '标签三'],
  count: 0
})
const handleCloseTag = (tag: string) => {
  data.dynamicTags.splice(data.dynamicTags.indexOf(tag), 1)
}
const addOne = () => {
  data.count++
  data.dynamicTags.push('new tag' + data.count)
}
</script>
