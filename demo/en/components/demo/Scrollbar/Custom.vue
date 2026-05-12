<template>
  <div style="height: 300px">
    <b-scrollbar
      ref="componentScrollBar"
      always
      noresize
      :bar-style="{ background: 'rgba(110, 23, 122, 0.3)' }"
      :bar-wrap-style="{ background: 'rgba(0, 0, 0, 0.03)' }"
    >
      <p v-for="i in 40" :key="i">我是填充内容....</p>
    </b-scrollbar>
  </div>
</template>
