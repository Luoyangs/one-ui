exports.entry = {
  path: 'packages/<%component%>/index.ts',
  temp:
`import <%COMPONENT%> from './src/<%component%>';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { <%COMPONENT%>Options } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<<%COMPONENT%>Options>;
}

(<%COMPONENT%> as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(<%COMPONENT%>.name, <%COMPONENT%>);
};

export default <%COMPONENT%>;
`
}

exports.entryTypes = {
  path: 'packages/<%component%>/src/types.ts',
  temp:
`export interface <%COMPONENT%>Options {
  xx: string;
}
`
}

exports.entryStyle = {
  path: 'packages/<%component%>/style/<%component%>.scss',
  temp:
`.one-<%component%> {

}
`
}

exports.entryStyleIndex = {
  path: 'packages/<%component%>/style/index.scss',
  temp:
`@import "./<%component%>.scss";
`
}

exports.page = {
  path: 'packages/<%component%>/src/<%component%>.tsx',
  temp:
`import { Component, Prop, Vue } from 'vue-property-decorator';
import { <%COMPONENT%>Options } from './types';

@Component({
  name: 'One<%COMPONENT%>'
})
export default class One<%COMPONENT%> extends Vue {
  @Prop(String)
  private xx: Pick<<%COMPONENT%>Options, 'xx'>;

  render() {

  }
}
`
}

exports.readme = {
  path: 'packages/<%component%>/README.md',
  temp:
`## <%COMPONENT%>

a brief description of the component

### Depends
| Sources           | Assets               |
| ----------------- | -------------------- |
|  |  |

### Props
| Property    | Description              | Type   | Accepted Values | Default |
| ----------- | ------------------------ | ------ | --------------- | ------- |
|  |  |  |  |  |

### Events
| Event       | Description              | Parameters        |
| ----------- | ------------------------ | ----------------- |
|  |  |  |

### Slots
| Name       | Description              | Parameters        |
| ---------- | ------------------------ | ----------------- |
|  |  |  |

### Exports
`
}

exports.example = {
  path: 'examples/docs/<%component%>.md',
  temp:
`## <%COMPONENT%>
将信息聚合在卡片容器中展示。

### Basic
包含标题，内容
:::demo 这里还有描述
`+
'\n```html\n\
<one-<%component%>></one-<%component%>>\n\n\
<script lang="ts">\n\
  export default {\n\
  }\n\
</script>\n\
```' + `
:::
`
}

exports.types = {
  path: 'types/<%component%>.d.ts',
  temp:
`import Vue from 'vue';
import { OneUIComponent } from './common';

declare class One<%COMPONENT%> extends OneUIComponent {
  xx?: string;
}

export default One<%COMPONENT%>;
`
}

exports.exampleRouter = {
  type: 'update',
  path: 'examples/router/routes.ts',
  temp:
`
}, {
  path: '/<%component%>',
  component: () => import(/* webpackChunkName: "<%component%>" */ '../docs/<%component%>.md')`
}
