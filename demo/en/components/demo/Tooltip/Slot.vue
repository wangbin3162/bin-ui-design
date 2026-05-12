<template>
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
</template>
