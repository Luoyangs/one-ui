
## Card
将信息聚合在卡片容器中展示。

### Basic
包含标题，内容
:::demo 使用`shadow`: `hover`、`always`和`never`来描述card的不同样式。

```html
<one-card title="Shadow Always Card">
  This is a card exmaple which display shadow always, like you want。
</one-card>
<one-card title="Shadow Hover Card" shadow="hover">
  This is a card exmaple which display shadow just when you hover it, yes like you want。
</one-card>
<one-card title="Shadow Never Card" shadow="never">
  This is a card exmaple which not display shadow anytime, yes like you want。
</one-card>

<script lang="ts">
  export default {
    methods: {
      handleClick() {
        console.log('handle click');
      }
    }
  }
</script>
```
:::


### Small
使用`small`来描述small card的样式。

::: demo
```html
<one-card title="Shadow Always Card" small>
  This is a card exmaple which display shadow always, like you want。
</one-card>
<one-card title="Shadow Hover Card" shadow="hover" small>
  This is a card exmaple which display shadow just when you hover it, yes like you want。
</one-card>
<one-card title="Shadow Never Card" shadow="never" small>
  This is a card exmaple which not display shadow anytime, yes like you want。
</one-card>

<script lang="ts">
  export default {
    methods: {
      handleClick() {
        console.log('handle click');
      }
    }
  }
</script>
```
:::



### Pure
card允许我们不展示标题的纯粹内容

::: demo
```html
<one-card>
  卡片共分为 3 中类型，一般情况下首选用「白色卡片」，其它情况根据相应的条件进行卡片的样式的选择。
</one-card>

<one-card shadow="hover">
  卡片共分为 3 中类型，一般情况下首选用「白色卡片」，其它情况根据相应的条件进行卡片的样式的选择。
</one-card>

<one-card shadow="never">
  卡片共分为 3 中类型，一般情况下首选用「白色卡片」，其它情况根据相应的条件进行卡片的样式的选择。
</one-card>

```
:::

