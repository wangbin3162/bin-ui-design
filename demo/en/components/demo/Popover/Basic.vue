<template>
  <div>
    <b-popover trigger="hover" title="Title" content="This is some contentThis is some contentThis is some content">
      <b-button>Hover</b-button>
    </b-popover>
    <b-popover
      trigger="click"
      title="Title"
      content="This is some contentThis is some contentThis is some content"
      :z-index="1000"
    >
      <b-button>Click</b-button>
    </b-popover>
    <b-popover trigger="focus" title="Title" content="This is some contentThis is some contentThis is some content">
      <b-button>Focus</b-button>
    </b-popover>
  </div>
</template>
