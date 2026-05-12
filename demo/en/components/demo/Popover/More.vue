<template>
  <div>
    <b-popover placement="top" width="200px">
      <b-button>长文本</b-button>
      <template #content>
        <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
      </template>
    </b-popover>
    <b-popover placement="right" width="300px">
      <b-button>更多内容</b-button>
      <template #content>
        <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
        <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
      </template>
    </b-popover>
  </div>
</template>
