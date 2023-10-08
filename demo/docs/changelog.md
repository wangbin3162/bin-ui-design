---
title: 变更日志
---

# CHANGELOG

<div class="change-log">
  <h2 id="0.0.4" class="version">0.0.4</h2>
  <div class="date">2023-10-08</div>
  <div class="type">Feats</div>
  <p class="log-item"><i>🍀</i>新增全局配置组件</p>
  <p class="log-item"><i>🍀</i>新增滚动组件</p>
  <p class="log-item"><i>🍀</i>新增布局layout组件</p>
  <p class="log-item"><i>🍀</i>新增卡片组件card</p>
  <p class="log-item"><i>🍀</i>新增单选组件radio</p>
  <p class="log-item"><i>🍀</i>新增分割面板组件split</p>
  <p class="log-item"><i>🍀</i>新增间距组件space</p>
  <p class="log-item"><i>🍀</i>新增栅格布局组件grid</p>
  <p class="log-item"><i>🍀</i>新增下拉菜单组件dropdown</p>
  <p class="log-item"><i>🍀</i>新增标签组件tag</p>
  <p class="log-item"><i>🍀</i>新增消息组件message</p>
  <div class="type">Fix</div>
  <p class="log-item"><i>🛠️</i>修改部分配置</p>
  <div class="type">Docs</div>
  <p class="log-item"><i>📖</i>文档库完成优化，修改整体文档样式</p>
  <p class="log-item"><i>📖</i>完成文档日志部分的样式优化</p>
  <p class="log-item"><i>📖</i>新增组件迁移进度统计文档</p>
</div>
<div class="change-log">
  <h2 id="0.0.3" class="version">0.0.3</h2>
  <div class="date">2023-8-23</div>
  <div class="type">Feats</div>
  <p class="log-item"><i>📖</i>完成基础文档搭建</p>
  <p class="log-item"><i>🍀</i>完成组件文档编写，完成button、icon、tooltip、collapse组件以及文档</p>
</div>
<div class="change-log">
  <h2 id="0.0.3" class="version">0.0.2</h2>
  <div class="date">2023-8-22</div>
  <div class="type">Feats</div>
  <p class="log-item"><i>📖</i>完成组建文档初始化</p>
  <p class="log-item"><i>🍀</i>完成编译环境</p>
  <p class="log-item"><i>🍀</i>新增按钮组件</p>
</div>
<div class="change-log">
  <h2 id="0.0.1" class="version">0.0.1</h2>
  <div class="date">2023-8-21</div>
  <div class="type">Feats</div>
  <p class="log-item">初始化工程</p>
  <p class="log-item">初始化文档</p>
</div>

<style scoped>
  .vp-doc {
    .change-log {
      margin-top: 24px;
      border-bottom: 1px solid #eee;
    }
    .version {
      display: inline-block;
      vertical-align: middle;
      padding: 0 16px;
      font-size: 22px;
      font-weight: 500;
      border: 1px solid #1890ff;
      border-radius: 5px;
      border-top: none;
      border-bottom: none;
    }
    .date {
      display: inline-block;
      vertical-align: middle;
      margin: 0 15px;
      background: #f2f4f5;
      padding: 0.1em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
      border: 1px solid #eee;
    }
    .type {
      margin-top: 16px;
      font-weight: 500;
      font-size: 18px;
    }
    .log-item {
      position: relative;
      padding-left: 30px;
      &::before {
        content: '';
        position: absolute;
        left: 14px;
        top: 8px;
        width: 0;
        height: 0;
        transform: rotateZ(90deg);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 6px solid #5e6d82;
      }
      > i {
        margin-right: 6px;
      }
    }
  }
</style>
