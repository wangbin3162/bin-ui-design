<template>
  <b-space :size="24">
    <b-badge :value="12">
      <b-button>普通按钮</b-button>
    </b-badge>
    <b-badge :value="3">
      <b-button>回复</b-button>
    </b-badge>
    <b-badge :value="1" type="primary">
      <b-button>primary徽标</b-button>
    </b-badge>
    <b-badge :value="2" type="warning">
      <b-button>warning徽标</b-button>
    </b-badge>
    <b-badge value="ok" type="success">
      <b-button>success徽标</b-button>
    </b-badge>
    <b-badge :value="200" :max="99">
      <b-button>最大数值</b-button>
    </b-badge>
  </b-space>
</template>
