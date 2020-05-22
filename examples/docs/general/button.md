## Button
将信息聚合在卡片容器中展示。

### Basic Type
Support 7 types for all use
:::demo 使用`type`: `default(or null)`、`primary`、`outline`、`dashed`、`ghost`、`text`、`href & target`来描述button的不同类型。

```html
<div class="button-example">
  <one-button>Default</one-button>
  <one-button type="primary">Primary</one-button>
  <one-button type="outline">Outline</one-button>
  <one-button type="dashed">Dashed</one-button>
  <span class="btn-wrap">
    <one-button type="ghost">Ghost</one-button>
  </span>
  <one-button type="text">Text</one-button>
  <one-button href="/" target="_blank">Link</one-button>
</div>
```

:::
### Disabled
Enable disabled a button as you like
:::demo Once a button is set `disabled`, we cannot trigger click event anymore

```html
<div class="button-example">
  <one-button disabled>Default</one-button>
  <one-button type="primary" disabled>Primary</one-button>
  <one-button type="outline" disabled>Outline</one-button>
  <one-button type="dashed" disabled>Dashed</one-button>
  <span class="btn-wrap">
    <one-button type="ghost" disabled>Ghost</one-button>
  </span>
  <one-button type="text" disabled>Text</one-button>
  <one-button href="/" target="_blank" disabled>Link</one-button>
</div>
```
:::

### Full Width
Enable button with full width of block

:::demo We prefer to apply `full-width` to thus four types like you want
```html
<div class="button-example">
  <one-button full-width>Default</one-button>
  <one-button type="primary" full-width>Primary</one-button>
  <one-button type="outline" full-width>Outline</one-button>
  <one-button type="dashed" full-width>Dashed</one-button>
</div>
```
:::

### Support Size
Enable button with different size
:::demo We do apply `size` to thus `button` types like you want, and you cannot apply thus to `link` or `text` button。We have four basic size : `small`、 `normal`、 `large`、 `x-large`。
```html
<div class="button-example">
  <one-button type="primary" size="small">Small</one-button>
  <one-button type="primary" size="normal">Default</one-button>
  <one-button type="primary" size="large">Large</one-button>
  <one-button type="primary" size="x-large">X-Large</one-button>
</div>
```
:::

### With Icon
Enable button with icon

:::demo you can use `icon` or `suffix-icon` to beautify your button
```html
<div class="button-example">
  <one-button type="primary" :icon="editIcon">Edit</one-button>
  <one-button type="outline" :icon="downloadIcon">Add</one-button>
  <one-button type="dashed" :icon="addIcon">Dashed</one-button>
  <one-button :suffix-icon="searchIcon">Search</one-button>
  <one-button type="text" :icon="addIcon">Add</one-button>
</div>
<div class="button-example">
  <one-button :icon="searchIcon" circle></one-button>
  <one-button type="primary" :icon="editIcon" circle></one-button>
  <one-button type="outline" :icon="downloadIcon" circle></one-button>
  <one-button type="dashed" :icon="searchIcon" circle></one-button>
</div>

<script lang="ts">
  const { searchIcon, editIcon, addIcon, downloadIcon } = require('one-svgs/svg');
  export default {
    data() {
      return {
        searchIcon,
        editIcon,
        addIcon,
        downloadIcon
      }
    }
  }
</script>
```
:::
