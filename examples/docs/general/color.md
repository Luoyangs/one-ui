## Color

### Basic
There are listing four different categories colors used in our components, we prefer to use it as you like 
:::demo

```html
<table class="color-table">
  <tr>
    <th>Main Colors</th>
    <th>Pastel Colors</th>
    <th>Grey Colors</th>
    <th>Shadows</th>
  </tr>
  <tr>
    <td v-for="(item, index) in list" :key="index">
      <div class="color-box" v-for="(it, id) in item" :key="id">
        <div class="color" :style="computedStyle(it)"></div>
        <div class="text">{{ it.color || it.shadow }}</div>
        <div class="text2">{{ it.text }}</div>
      </div>
    </td>
  </tr>
</table>

<script>
export default {
  data() {
    return {
      list: [
        [
          {
            color: '#009688',
            text: 'Primary'
          },
          {
            color: '#FF4742',
            text: 'Error'
          },
          {
            color: '#55CC77',
            text: 'Success'
          },
          {
            color: '#FFBF00',
            text: 'Warning'
          },
          {
            color: '#2673DD',
            text: 'Information / Blue-Light'
          }
        ],
        [
          {
            color: '#FFE9E8',
            text: 'Error-Tag-BG'
          },
          {
            color: '#EBF9EF',
            text: 'Success-Tag-BG'
          },
          {
            color: '#FFF7E0',
            text: 'Warning-Tag-BG'
          },
          {
            color: '#E5EEFB',
            text: 'Information-Tag-BG'
          }
        ],
        [
          {
            color: '#333333',
            text: '标题 / 正文'
          },
          {
            color: '#666666',
            text: '次级文本'
          },
          {
            color: '#999999',
            text: '辅助文本'
          },
          {
            color: '#E5E5E5',
            text: '分割线 / 边框'
          },
          {
            color: '#F6F6F6',
            text: '全局⻚面背景色'
          },
          {
            color: '#FAFAFA',
            text: '表格斑⻢纹'
          }
        ],
        [
          {
            shadow: '0 6px 16px rgba(0,0,0,0.12)',
            text: '下拉菜单'
          },
          {
            shadow: '0 2px 6px rgba(0,0,0,0.12)',
            text: 'Toolbar'
          },
          {
            shadow: '0 1px 4px rgba(0,0,0,0.12)',
            text: '模块卡片'
          }
        ]
      ]
    };
  },
  methods: {
    computedStyle(item) {
      if ('color' in item) {
        return { 'background-color': item.color };
      } else if ('shadow' in item) {
        return { 'box-shadow' : item.shadow };
      }
    }
  }
}
</script>
```
:::


### Text Font
There are listing eight different categories font styles used in our components, we prefer to use it as you like 
::: demo
```html
<table class="font-table">
  <tr>
    <th>Category</th>
    <th>Font Styles</th>
    <th>Used Example</th>
  </tr>
  <tr v-for="(item, index) in fontList" :key="index">
    <td v-for="(key, id) in Object.keys(item)" :key="id">
      <div class="font" :style="computedStyle(item, id)">{{item[key]}}</div>
    </td>
  </tr>
</table>

<script>
export default {
  data() {
    return {
      fontList: [
        {
          text: 'Headline 1',
          style: ` font-family: 'Roboto'; font-size: 30px; font-weight: 600; line-height: 32px; color: #333333`,
          used: '超级大标题'
        },
        {
          text: 'Headline 2',
          style: ` font-family: 'Roboto'; font-size: 26px; font-weight: 600; line-height: 28px; color: #333333`,
          used: '大标题'
        },
        {
          text: 'Headline 3',
          style: ` font-family: 'Roboto'; font-size: 22px; font-weight: 600; line-height: 24px; color: #333333`,
          used: '主标题 / 常用于模块⻚面标题'
        },
        {
          text: 'Headline 4',
          style: ` font-family: 'Roboto'; font-size: 20px; font-weight: 600; line-height: 22px; color: #333333`,
          used: '标题 / 常用语弹窗标题'
        },
        {
          text: 'Subtitle 1',
          style: ` font-family: 'Roboto'; font-size: 18px; font-weight: 600; line-height: 20px; color: #333333`,
          used: '模块卡片一级标题'
        },
        {
          text: 'Subtitle 2',
          style: ` font-family: 'Roboto'; font-size: 16px; font-weight: 600; line-height: 18px; color: #333333`,
          used: '模块卡片二级级标题'
        },
        {
          text: 'Body 1',
          style: ` font-family: 'Roboto'; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333`,
          used: '常用于正文 / 按钮 / 小字号商品标题'
        },
        {
          text: 'Body 2',
          style: ` font-family: 'Roboto'; font-size: 12px; font-weight: normal; line-height: 14px; color: #999999`,
          used: '辅助文字'
        }
      ]
    };
  },
  methods: {
    computedStyle(item, index) {
      if (index === 0) {
        return item.style;
      }
    }
  }
}
</script>
```
:::
