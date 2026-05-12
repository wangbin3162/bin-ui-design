<template>
  <div class="demo-popover">
    <div class="top">
      <b-popover title="Title" content="Top Left text" placement="top-start">
        <b-button>上左</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Top Center text" placement="top">
        <b-button>上边</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Top Right text" placement="top-end">
        <b-button>上右</b-button>
      </b-popover>
    </div>
    <div class="center">
      <div class="center-left">
        <b-popover title="Title" content="Left Top text" placement="left-start">
          <b-button>左上</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Left Center text" placement="left">
          <b-button>左边</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Left Bottom text" placement="left-end">
          <b-button>左下</b-button>
        </b-popover>
      </div>
      <div class="center-right">
        <b-popover title="Title" content="Right Top text" placement="right-start">
          <b-button>右上</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Right Center text" placement="right">
          <b-button>右边</b-button>
        </b-popover>
        <br />
        <br />
        <b-popover title="Title" content="Right Bottom text" placement="right-end">
          <b-button>右下</b-button>
        </b-popover>
      </div>
    </div>
    <div class="bottom">
      <b-popover title="Title" content="Bottom Left text" placement="bottom-start">
        <b-button>下左</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Bottom Center text" placement="bottom">
        <b-button>下边</b-button>
        &nbsp;&nbsp;
      </b-popover>
      <b-popover title="Title" content="Bottom Right text" placement="bottom-end">
        <b-button>下右</b-button>
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
