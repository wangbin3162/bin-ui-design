<template>
  <div class="demo-popover">
    <div class="top">
      <b-popover title="Title" content="Top Left text" placement="top-start">
        <b-button>Top Left</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Top Center text" placement="top">
        <b-button>Top</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Top Right text" placement="top-end">
        <b-button>Top Right</b-button>
      </b-popover>
    </div>
    <div class="center">
      <div class="center-left">
        <b-popover title="Title" content="Left Top text" placement="left-start">
          <b-button>Left Top</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Left Center text" placement="left">
          <b-button>Left</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Left Bottom text" placement="left-end">
          <b-button>Left Bottom</b-button>
        </b-popover>
      </div>
      <div class="center-right">
        <b-popover title="Title" content="Right Top text" placement="right-start">
          <b-button>Right Top</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Right Center text" placement="right">
          <b-button>Right</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Right Bottom text" placement="right-end">
          <b-button>Right Bottom</b-button>
        </b-popover>
      </div>
    </div>
    <div class="bottom">
      <b-popover title="Title" content="Bottom Left text" placement="bottom-start">
        <b-button>Bottom Left</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Bottom Center text" placement="bottom">
        <b-button>Bottom</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Bottom Right text" placement="bottom-end">
        <b-button>Bottom Right</b-button>
      </b-popover>
    </div>
  </div>
</template>

<style scoped>
.demo-popover {
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
