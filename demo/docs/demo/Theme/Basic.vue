<template>
  <div
    style="
      --bin-color-primary: #722ed1;
      --bin-color-primary-active: #6729bc;
      --bin-color-primary-light1: #8e58da;
      --bin-color-primary-light3: #c7abed;
      --bin-color-primary-light5: #f1eafa;
      --bin-color-success: #13c2c2;
      --bin-color-success-active: #11afaf;
      --bin-color-success-light1: #42cece;
      --bin-color-success-light3: #a1e7e7;
      --bin-color-success-light5: #e7f9f9;
      --bin-color-warning: #fa541c;
      --bin-color-warning-active: #e14c19;
      --bin-color-warning-light1: #fb7649;
      --bin-color-warning-light3: #fdbba4;
      --bin-color-warning-light5: #ffeee8;
      --bin-color-danger: #eb2f96;
      --bin-color-danger-active: #d42a87;
      --bin-color-danger-light1: #ef59ab;
      --bin-color-danger-light3: #f7acd5;
      --bin-color-danger-light5: #fdeaf5;
    "
  >
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
</template>
