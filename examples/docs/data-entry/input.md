## Input
将信息聚合在卡片容器中展示。

### Basic
包含标题，内容
:::demo 

```html
<one-input type="input" v-model="input"></one-input>
<one-input type="textarea" v-model="input2" :rows="3"></one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
        input2: '',
      }
    }
  }
</script>
```
:::


### Password
密码输入框
:::demo 

```html
<one-input type="password" v-model="input"></one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
      }
    }
  }
</script>
```
:::


### Disabled
禁止输入框输入
:::demo 

```html
<one-input type="input" v-model="input" disabled></one-input>
<one-input type="textarea" v-model="input2" :rows="3" disabled></one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
        input2: '',
      }
    }
  }
</script>
```
:::


### Clearable
清除输入框输入
:::demo 

```html
<one-input type="input" v-model="input" clearable></one-input>
<one-input type="textarea" v-model="input2" :rows="3" clearable></one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
        input2: '',
      }
    }
  }
</script>
```
:::


### Size
不同尺寸的输入框
:::demo 

```html
<one-input type="input" v-model="input" size="small"></one-input>
<one-input type="input" v-model="input" size="normal"></one-input>
<one-input type="input" v-model="input" size="large"></one-input>
<one-input type="input" v-model="input" size="x-large"></one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
      }
    }
  }
</script>
```
:::


### Prefix & Suffix
输入框前置和后置内容
:::demo 有`prefixLabel`、`prefixIcon`、`prefix slot`和`suffixLabel`、`suffixIcon`、`suffix slot`几种使用方式

```html
<one-input type="input" v-model="input" prefix-label="Name"></one-input>
<one-input type="input" v-model="input" :prefix-icon="userIcon"></one-input>
<one-input type="input" v-model="input" suffix-label="days"></one-input>
<one-input type="input" v-model="input" :suffix-icon="calendarIcon"></one-input>

<script lang="ts">
  const userIcon = require('one-svgs/svg/user.svg');
  const calendarIcon = require('one-svgs/svg/calendar.svg');
  export default {
    data() {
      return {
        input: '',
        userIcon,
        calendarIcon
      }
    }
  }
</script>
```
:::

### showWordLimit
显示输入框长度限制
:::demo 

```html
<one-input type="input" v-model="input" :max-length="40" show-word-limit></one-input>
<one-input type="textarea" v-model="input2" :rows="3" :max-length="120" show-word-limit></one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
        input2: '',
      }
    }
  }
</script>
```
:::

### Help
显示输入框帮助文案
:::demo 

```html
<one-input type="input" v-model="input">
  <span slot="help">这是帮助文案</span>
</one-input>
<one-input type="textarea" v-model="input2" :rows="3">
  <span slot="help">这是帮助文案</span>
</one-input>

<script lang="ts">
  export default {
    data() {
      return {
        input: '',
        input2: '',
      }
    }
  }
</script>
```
:::
