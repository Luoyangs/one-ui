import { VueConstructor } from 'vue';

import Card from './card';

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

export {
  Card,
  install
};

export default {
  install
};
