---
title: Directives
---

<b-back-top></b-back-top>

# Directives

The library provides four directives for component functionality. If components are imported globally, these are registered automatically. For auto-import or on-demand loading, you need to manually import and register them.

```typescript
// main.ts
import { createApp } from 'vue'
import {
  create,
  // Click outside directive
  ClickOutside,
  // Click animation
  ClickAnimation,
  // Ripple wave directive
  Waves,
  // Repeat click
  RepeatClick
} from 'bin-ui-design'

const UI = create({
  directives: [ClickOutside, ClickAnimation, Waves, RepeatClick]
})

const app = createApp()
app.use(UI)
app.mount('#app')
```

## Click Animation Directive

Add the `v-click-animation` directive to elements for a click animation effect. The ripple color is created based on the border or background color.

<div class="demo-button">
  <b-button>Default</b-button>
  <b-button type="primary">Primary</b-button>
  <b-button type="success">Success</b-button>
  <b-button type="info">Info</b-button>
  <b-button type="warning">Warning</b-button>
  <b-button type="danger">Danger</b-button>
  <span style="border: 1px solid #ffa2d3; 
          padding: 6px 10px;margin: 0 8px;border-radius: 2px;vertical-align: middle;"
        v-click-animation>Custom</span>
</div>

## Ripple Waves Directive

Add the `v-waves` directive for a ripple effect. You can configure the ripple color and click behavior. Note that adding this directive will override the default button click effect.

```html
<b-button v-waves>Default</b-button>
<b-button v-waves="'rgba(255,162,211,0.5)'">Custom Color</b-button>
```

<div class="demo-button">
  <b-button v-waves>Default</b-button>
  <b-button v-waves="'rgba(255,162,211,0.5)'">Custom Color</b-button>
</div>

## Repeat Click Directive

Enables repeat click when held down. Used in the InputNumber component for incrementing.

<div class="demo-button">
  <b-button v-repeat-click="repeatClick">Hold to see console</b-button>
</div>

## ClickOutside Directive

Add click-outside detection with `v-click-outside="clickOutside"`. Commonly used to close popper overlays.

<div class="demo-button">
  <div v-click-outside="clickOutside" flex="main:center cross:center"
        style="width: 200px;height:100px;background: #2a85e4;color:#fff;font-size: 20px;">
    Click outside me
  </div>
</div>

<script lang="ts" setup>
const repeatClick = ()=> console.log('Repeat click event firing...')
const clickOutside = ()=> console.log('Clicked outside...')
</script>
