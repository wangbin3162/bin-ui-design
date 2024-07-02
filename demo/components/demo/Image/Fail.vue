<template>
  <b-row gutter="20">
    <b-col span="12">
      <div flex="main:center">
        <b-image width="200px" height="100px" />
      </div>
      <p class="t-center">默认</p>
    </b-col>
    <b-col span="12">
      <div flex="main:center">
        <b-image width="200px" height="100px">
          <template #error>
            <b-icon name="image" size="28" color="var(--bin-fill-color-4)" />
          </template>
        </b-image>
      </div>
      <p class="t-center">插槽</p>
    </b-col>
  </b-row>
</template>
