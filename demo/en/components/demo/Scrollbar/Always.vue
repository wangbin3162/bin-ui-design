<template>
  <div style="height: 300px">
    <b-scrollbar ref="componentScrollBar" always noresize>
      <p v-for="i in 40" :key="i">I am filler content....</p>
    </b-scrollbar>
  </div>
</template>
