## Avatar
我们定义了用于规范展示图片的组件——Avatar，当图片不足以撑起整个区域，我们会展示一个淡淡的背景帮助用户区分界限

### Basic
包含标题，内容
:::demo Avatar同时支持svg & image

```html
<one-avatar :icon="autoReplyIcon"></one-avatar>
<one-avatar :icon="userIcon"></one-avatar>
<one-avatar :src="imgSrc"></one-avatar>

<script lang="ts">
  const { autoReplyIcon, userIcon } = require('one-svgs/svg');
  export default {
    data() {
      return {
        autoReplyIcon,
        userIcon,
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591019580087&di=49ab2f132d1a3c163f58c0bb0dc7bddb&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Df954a08bafefce1bea7ec0ce9a61dfe8%2Ff31fbe096b63f62402dbda7e8f44ebf81b4ca3cd.jpg'
      }
    }
  }
</script>
```
:::

### Support Size
Enable avatar with different size
:::demo We do apply size to thus avatar types like you want, and you cannot apply thus to link or text avatar。We have four basic size : small、 normal、 large、 x-large。

```html
<one-avatar :src="imgSrc" size="small"></one-avatar>
<one-avatar :src="imgSrc" size="normal"></one-avatar>
<one-avatar :src="imgSrc" size="large"></one-avatar>
<one-avatar :src="imgSrc" size="x-large"></one-avatar>

<script lang="ts">
  export default {
    data() {
      return {
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591019580087&di=49ab2f132d1a3c163f58c0bb0dc7bddb&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Df954a08bafefce1bea7ec0ce9a61dfe8%2Ff31fbe096b63f62402dbda7e8f44ebf81b4ca3cd.jpg'
      }
    }
  }
</script>
```
:::

### Circle
Enable avatar with circle
:::demo 

```html
<one-avatar :src="imgSrc" circle></one-avatar>

<script lang="ts">
  export default {
    data() {
      return {
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591019580087&di=49ab2f132d1a3c163f58c0bb0dc7bddb&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Df954a08bafefce1bea7ec0ce9a61dfe8%2Ff31fbe096b63f62402dbda7e8f44ebf81b4ca3cd.jpg'
      }
    }
  }
</script>
```
:::
