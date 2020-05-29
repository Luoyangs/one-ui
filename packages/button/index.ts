import Button from './src/button';
import { VueConstructor } from 'vue';
import { ButtonOptions } from './src/types';
import { InstallFunction } from '@src/core';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<ButtonOptions>;
}

(Button as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Button.name, Button);
};

export default Button;
