import Icon from './src/icon';
import { VueConstructor } from 'vue';
import { IconOptions } from './src/types';

export type InstallFunction = (Vue: VueConstructor, options?: IconOptions) => void;

export interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction;
}

(Icon as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Icon.name, Icon);
};

export default Icon;
