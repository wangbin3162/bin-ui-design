<template>
  <b-tooltip placement="top">
    <b-button>多Row</b-button>
    <template #content>
      <div>这是多Row文字</div>
      <div>这是多Row文字</div>
    </template>
  </b-tooltip>
  <b-tooltip
    placement="top"
    content="我是一段Long text，我是一段Long text，我是一段Long text，我是一段Long text，我是一段Long text，我是一段Long text"
  >
    <b-button>Long text</b-button>
  </b-tooltip>
</template>
