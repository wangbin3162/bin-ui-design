<template>
  <b-config-provider
    :theme="{
      binColorPrimary: '#722ed1',
      binColorSuccess: '#13c2c2',
      binColorWarning: '#e14c19',
      binColorDanger: '#d42a87'
    }"
  >
    <div>
      <div>[default]默认按钮</div>
      <div class="demo-button">
        <b-button type="primary">Primary</b-button>
        <b-button type="success">Success</b-button>
        <b-button type="warning">Warning</b-button>
        <b-button type="danger">Danger</b-button>
      </div>
      <div>[plain]简约按钮</div>
      <div class="demo-button">
        <b-button type="primary" plain>Primary</b-button>
        <b-button type="success" plain>Success</b-button>
        <b-button type="warning" plain>Warning</b-button>
        <b-button type="danger" plain>Danger</b-button>
      </div>
      <div>[round]圆角按钮</div>
      <div class="demo-button">
        <b-button type="primary" round>Primary</b-button>
        <b-button type="success" round>Success</b-button>
        <b-button type="warning" round>Warning</b-button>
        <b-button type="danger" round>Danger</b-button>
      </div>
      <div>[dashed]虚线按钮</div>
      <div class="demo-button">
        <b-button type="primary" dashed>Primary</b-button>
        <b-button type="success" dashed>Success</b-button>
        <b-button type="warning" dashed>Warning</b-button>
        <b-button type="danger" dashed>Danger</b-button>
      </div>
    </div>
  </b-config-provider>
</template>

<style scoped>
.demo-button {
  margin: 8px 0;
}
</style>
