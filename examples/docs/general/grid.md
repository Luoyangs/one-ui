## Grid
将信息聚合在卡片容器中展示。

### Basic
包含标题，内容
:::demo 这里还有描述

```html
<div class="grid-example">
  <one-row>
    <one-col span="24"><div>24：100%</div></one-col>
  </one-row>
  <one-row>
    <one-col span="12"><div>12：50%</div></one-col>
    <one-col span="12"><div>12：50%</div></one-col>
  </one-row>
  <one-row>
    <one-col span="8"><div>8：33.33%</div></one-col>
    <one-col span="8"><div>8：33.33%</div></one-col>
    <one-col span="8"><div>8：33.33%</div></one-col>
  </one-row>
  <one-row>
    <one-col span="6"><div>6：25%</div></one-col>
    <one-col span="6"><div>6：25%</div></one-col>
    <one-col span="6"><div>6：25%</div></one-col>
    <one-col span="6"><div>6：25%</div></one-col>
  </one-row>
</div>
```
:::

### 区块间隔(gutter)
包含标题，内容
:::demo 这里还有描述

```html
<div class="grid-example">
  <one-row>
    <one-col span="8"><div>8：33.33%</div></one-col>
    <one-col span="8"><div>8：33.33%</div></one-col>
    <one-col span="8"><div>8：33.33%</div></one-col>
  </one-row>
  <one-row gutter="16">
    <one-col span="8"><div>8：33.33%</div></one-col>
    <one-col span="8"><div>8：33.33%</div></one-col>
    <one-col span="8"><div>8：33.33%</div></one-col>
  </one-row>
</div>
```
:::


### 栅格排序(pull & push)
通过设置push和pull来改变栅格的顺序。
:::demo 

```html
<div class="grid-example">
  <one-row gutter="16" type="flex">
    <one-col span="18" push="6"><div>col-18 | push-6</div></one-col>
    <one-col span="6" pull="18"><div>col-6 | pull-18</div></one-col>
  </one-row>
</div>
```


### 左右偏移(offset)
通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值
:::demo 

```html
<div class="grid-example">
  <one-row>
    <one-col span="8"><div>col-8</div></one-col>
    <one-col span="8" offset="8"><div>col-8 | offset-8</div></one-col>
  </one-row>
  <one-row>
    <one-col span="6" offset="8"><div>col-6 | offset-8</div></one-col>
    <one-col span="6" offset="4"><div>col-6 | offset-4</div></one-col>
  </one-row>
  <one-row>
    <one-col span="12" offset="8"><div>col-12 | offset-8</div></one-col>
  </one-row>
</div>
```
:::

### 栅格顺序(order)
包含标题，内容
:::demo 这里还有描述

```html
<div class="grid-example">
  <one-row gutter="16" type="flex">
    <one-col span="8" order="1"><div>1</div></one-col>
    <one-col span="8" order="2"><div>2</div></one-col>
    <one-col span="8" order="3"><div>3</div></one-col>
  </one-row>
  <one-row gutter="16" type="flex">
    <one-col span="8" order="3"><div>3</div></one-col>
    <one-col span="8" order="2"><div>2</div></one-col>
    <one-col span="8" order="1"><div>1</div></one-col>
  </one-row>
</div>
```
:::

:::
### 栅格Flex排列
通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效
:::demo 

```html
<div class="grid-example">
  <p>子元素向左排列</p>
  <one-row type="flex" justify="start">
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
  </one-row>
  <p>子元素向右排列</p>
  <one-row type="flex" justify="end">
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
  </one-row>
  <p>子元素居中排列</p>
  <one-row type="flex" justify="center">
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
  </one-row>
  <p>子元素等宽排列</p>
  <one-row type="flex" justify="space-between">
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
  </one-row>
  <p>子元素分散排列</p>
  <one-row type="flex" justify="space-around">
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
    <one-col span="4"><div>col-4</div></one-col>
  </one-row>
  <p>顶部对齐</p>
  <one-row type="flex" justify="center" align="top" class="row-bg">
    <one-col span="4"><div style="height: 80px"></div></one-col>
    <one-col span="4"><div style="height: 30px"></div></one-col>
    <one-col span="4"><div style="height: 100px"></div></one-col>
    <one-col span="4"><div style="height: 60px"></div></one-col>
  </one-row>
  <p>底部对齐</p>
  <one-row type="flex" justify="center" align="bottom" class="row-bg">
    <one-col span="4"><div style="height: 80px"></div></one-col>
    <one-col span="4"><div style="height: 30px"></div></one-col>
    <one-col span="4"><div style="height: 100px"></div></one-col>
    <one-col span="4"><div style="height: 60px"></div></one-col>
  </one-row>
  <p>居中对齐</p>
  <one-row type="flex" justify="center" align="middle" class="row-bg">
    <one-col span="4"><div style="height: 80px"></div></one-col>
    <one-col span="4"><div style="height: 30px"></div></one-col>
    <one-col span="4"><div style="height: 100px"></div></one-col>
    <one-col span="4"><div style="height: 60px"></div></one-col>
  </one-row>
</div>
```
:::
