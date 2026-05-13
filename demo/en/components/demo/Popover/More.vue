<template>
  <div>
    <b-popover placement="top" width="200px">
      <b-button>Long text</b-button>
      <template #content>
        <div>This is a very very very very very very very very very very very long description</div>
      </template>
    </b-popover>
    <b-popover placement="right" width="300px">
      <b-button>More content</b-button>
      <template #content>
        <div>This is custom content~This is custom content~This is custom content~This is custom content~</div>
        <div>This is custom content~This is custom content~This is custom content~This is custom content~</div>
      </template>
    </b-popover>
  </div>
</template>
