
import { VueConstructor } from 'vue';
import {
  Card
} from '../packages';
import { InstallFunctionOptions } from 'one-ui/card';

export {
  Card
};

const components = [
  Card
];

const install = (Vue: VueConstructor, option?: any) => {
  components.forEach((component: any) => {
    if (component.install) {
      component.install(Vue, option);
    }
  });
};

export default {
  install
} as InstallFunctionOptions;
