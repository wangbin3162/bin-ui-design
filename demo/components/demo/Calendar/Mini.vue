<template>
  <div flex>
    <div style="width: 300px">
      <b-calendar mini></b-calendar>
    </div>
    <div style="width: 300px">
      <b-calendar
        mini
        :body-style="{ border: 'none' }"
        :day-style="{ border: 'none', borderRadius: '4px' }"
      ></b-calendar>
    </div>
  </div>
</template>
