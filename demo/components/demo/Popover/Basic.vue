<template>
  <div>
    <b-popover trigger="hover" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Hover</b-button>
    </b-popover>
    <b-popover
      trigger="click"
      title="Title"
      content="这是一段内容这是一段内容这是一段内容"
      :z-index="1000"
    >
      <b-button>Click</b-button>
    </b-popover>
    <b-popover trigger="focus" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Focus</b-button>
    </b-popover>
  </div>
</template>
