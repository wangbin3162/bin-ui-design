<template>
  <b-skeleton style="width: 240px" animation>
    <template #template>
      <b-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <b-skeleton-item variant="p" style="width: 50%" />
        <div flex="main:justify cross:center">
          <b-skeleton-item variant="text" style="margin-right: 16px" />
          <b-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </b-skeleton>
</template>
