
import { VueConstructor } from 'vue';
import {
  Card,
  Button,
  Icon
} from '../packages';
import { InstallFunctionOptions } from 'one-ui/card';

export {
  Card,
  Button,
  Icon
};

const components = [
  Card,
  Button,
  Icon
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
