import Icon from './src/icon';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { IconOptions } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<IconOptions>;
}

(Icon as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Icon.name, Icon);
};

export default Icon;
