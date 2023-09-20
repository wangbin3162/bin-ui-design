<template>
  <div style="height: 300px">
    <b-scrollbar ref="componentScrollBar" always noresize>
      <p v-for="i in 40" :key="i">我是填充内容....</p>
    </b-scrollbar>
  </div>
</template>
