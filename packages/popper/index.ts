import Popper from './src/popper';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { PopperOptions } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<PopperOptions>;
}

(Popper as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Popper.name, Popper);
};

export default Popper;
