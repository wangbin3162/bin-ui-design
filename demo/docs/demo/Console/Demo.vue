<template>
  <div class="demo-button">
    <b-button @click="Log.print('default print', '#df85ff')">custom</b-button>
    <b-button @click="Log.print('default print')">default</b-button>
    <b-button type="primary" @click="Log.print('primary print', 'primary')">primary</b-button>
    <b-button type="success" @click="Log.print('success print', 'success')">success</b-button>
    <b-button type="warning" @click="Log.print('warning print', 'warning')">warning</b-button>
    <b-button type="danger" @click="Log.print('danger print', 'danger')">danger</b-button>
  </div>
  <div class="demo-button">
    <b-button type="primary" @click="Log.print('primary print', 'primary', true)">
      primary-back
    </b-button>
    <b-button type="success" @click="Log.print('success print', 'success', true)">
      success-back
    </b-button>
    <b-button type="warning" @click="Log.print('warning print', 'warning', true)">
      warning-back
    </b-button>
    <b-button type="danger" @click="Log.print('danger print', 'danger', true)">
      danger-back
    </b-button>
  </div>
  <div class="demo-button">
    <b-button @click="Log.print({ name: 'bin-ui', author: 'wang bin' })">object - log</b-button>
    <b-button @click="Log.pretty('title', 'pretty print', 'primary')">pretty - primary</b-button>
    <b-button @click="Log.pretty('title', 'pretty print', 'success')">pretty - success</b-button>
    <b-button @click="Log.pretty('title', 'pretty print', 'warning')">pretty - warning</b-button>
    <b-button @click="Log.pretty('title', 'pretty print', 'danger')">pretty - danger</b-button>
  </div>
  <div class="demo-button">
    <b-button
      @click="
        Log.printVersion('bin-ui-design', '1.0.0', 'https://wangbin3162.gitee.io/bin-ui-design/')
      "
    >
      打印版本号连接
    </b-button>
  </div>
</template>

<script setup lang="ts">
import { Utils } from 'bin-ui-design'

const Log = Utils.log
</script>

<style>
.demo-button {
  margin-bottom: 10px;
}
</style>
