import { VueConstructor } from 'vue';

import Card from './card';
import Button from './button';
import Icon from './icon/index';

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

export {
  Card,
  Button,
  Icon,
  install
};

export default {
  install
};
