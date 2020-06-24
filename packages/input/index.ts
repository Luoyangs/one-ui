import Input from './src/input';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { InputOptions } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<InputOptions>;
}

(Input as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Input.name, Input);
};

export default Input;
