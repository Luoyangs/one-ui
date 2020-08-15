## Popper
将信息聚合在卡片容器中展示。


### Basic
基础用法
:::demo placement 可选类型'auto'、'auto-start'、'auto-end'、'top'、'top-start'、'top-end'、'bottom'、'bottom-start'、'bottom-end'、'right'、'right-start'、'right-end'、'left'、'left-start'、'left-end'

```html

<one-button @click="changePlacement('top')">top</one-button>
<one-button @click="changePlacement('top-start')">top start</one-button>
<one-button @click="changePlacement('top-end')">top end</one-button>
<one-button @click="changePlacement('bottom-start')">bottom start</one-button>
<one-button @click="changePlacement('bottom')">bottom</one-button>
<one-button @click="changePlacement('bottom-end')">bottom end</one-button>
<one-button @click="changePlacement('left-start')">left start</one-button>
<one-button @click="changePlacement('left')">left</one-button>
<one-button @click="changePlacement('left-end')">left end</one-button>
<one-button @click="changePlacement('right-start')">right start</one-button>
<one-button @click="changePlacement('right')">right</one-button>
<one-button @click="changePlacement('right-end')">right end</one-button>

<div class="box" ref="popperRef">
  <one-popper :visible="visible" light :placement="placement">
  this is popper
  </one-popper>
</div>


<script lang="ts">
  export default {
    data() {
      return {
        visible: false,
        placement: 'top'
      }
    },
    methods: {
      changePlacement(placement) {
        this.visible = true;
        this.placement = placement;
      }
    }
  }
</script>
```
:::

### Theme
目前支持两种主题：light(默认)和dark(暗黑)
:::demo 支持light和dark两种主题，以及是否展示箭头

```html
<div class="box" ref="popperRef">
  <one-popper :visible="true" light placement="top">
  this is popper
  </one-popper>
  <one-popper :visible="true" :show-arrow="false" placement="bottom">
  this is popper
  </one-popper>
</div>
```
:::
