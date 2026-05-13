<template>
  <b-space :size="24">
    <b-badge :value="12">
      <b-button>普通button</b-button>
    </b-badge>
    <b-badge :value="3">
      <b-button>回复</b-button>
    </b-badge>
    <b-badge :value="1" type="primary">
      <b-button>primarybadge</b-button>
    </b-badge>
    <b-badge :value="2" type="warning">
      <b-button>warningbadge</b-button>
    </b-badge>
    <b-badge value="ok" type="success">
      <b-button>successbadge</b-button>
    </b-badge>
    <b-badge :value="200" :max="99">
      <b-button>最大Number</b-button>
    </b-badge>
  </b-space>
</template>
