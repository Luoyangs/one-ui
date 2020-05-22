## Icon

### All Icons Display
We prefer to minilize our ui package, which promots the independent one-svgs package.
:::demo Click to copy icon name as you want, then import it from `one-svgs`.

```html
<div class="icon-example">
  <one-icon
    :svg="require(`one-svgs/svg/${icon}.svg`)"
    :key="index"
    :value="icon"
    copy="Copied !"
    @click="onClick(icon)"
    v-for="(icon, index) in icons"/>
</div>

<script lang="ts">
  function copyToClipboard(s) {
    if (window.clipboardData) {
      window.clipboardData.setData('text', s);
    } else {
      document.oncopy = function (e) {
        e.clipboardData.setData('text', s);
        e.preventDefault();
        document.oncopy = null;
      }
      document.execCommand('Copy');
    }
  }

  export default {
    data() {
      return {
        icons: require('one-svgs/module.json').filter(item => !item.startsWith('no-')),
      }
    },
    methods: {
      onClick(name) {
        copyToClipboard(name);
      }
    }
  }
</script>
```
