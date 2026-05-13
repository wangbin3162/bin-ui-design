<template>
  <div class="demo-tooltip">
    <div class="top">
      <b-tooltip content="Top Left text" placement="top-start">
        <b-button>Top Left</b-button>
        &nbsp;&nbsp;
      </b-tooltip>
      <b-tooltip content="Top Center text" placement="top">
        <b-button>Top</b-button>
        &nbsp;&nbsp;
      </b-tooltip>
      <b-tooltip content="Top Right text" placement="top-end">
        <b-button>Top Right</b-button>
      </b-tooltip>
    </div>
    <div class="center">
      <div class="center-left">
        <b-tooltip content="Left Top text" placement="left-start">
          <b-button>Left Top</b-button>
        </b-tooltip>
        <br />
        <br />
        <b-tooltip content="Left Center text" placement="left">
          <b-button>Left</b-button>
        </b-tooltip>
        <br />
        <br />
        <b-tooltip content="Left Bottom text" placement="left-end">
          <b-button>Left Bottom</b-button>
        </b-tooltip>
      </div>
      <div class="center-right">
        <b-tooltip content="Right Top text" placement="right-start">
          <b-button>Right Top</b-button>
        </b-tooltip>
        <br />
        <br />
        <b-tooltip content="Right Center text" placement="right">
          <b-button>Right</b-button>
        </b-tooltip>
        <br />
        <br />
        <b-tooltip content="Right Bottom text" placement="right-end">
          <b-button>Right Bottom</b-button>
        </b-tooltip>
      </div>
    </div>
    <div class="bottom">
      <b-tooltip content="Bottom Left text" placement="bottom-start">
        <b-button>Bottom Left</b-button>
        &nbsp;&nbsp;
      </b-tooltip>
      <b-tooltip content="Bottom Center text" placement="bottom">
        <b-button>Bottom</b-button>
        &nbsp;&nbsp;
      </b-tooltip>
      <b-tooltip content="Bottom Right text" placement="bottom-end">
        <b-button>Bottom Right</b-button>
      </b-tooltip>
    </div>
  </div>
</template>

<style scoped>
.demo-tooltip {
  .top,
  .bottom {
    text-align: center;
  }
  .center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
    .center-left {
      float: left;
    }
    .center-right {
      float: right;
    }
  }
}
</style>
