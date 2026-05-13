<template>
  <div>
    <b-popover placement="top" width="200px">
      <b-button>Long text</b-button>
      <template #content>
        <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
      </template>
    </b-popover>
    <b-popover placement="right" width="300px">
      <b-button>More content</b-button>
      <template #content>
        <div>这是CustomContent~这是CustomContent~这是CustomContent~这是CustomContent~</div>
        <div>这是CustomContent~这是CustomContent~这是CustomContent~这是CustomContent~</div>
      </template>
    </b-popover>
  </div>
</template>
