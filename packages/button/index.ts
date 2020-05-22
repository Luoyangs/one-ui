import Button from './src/button';
import { VueConstructor } from 'vue';
import { ButtonOptions } from './src/types';

export type InstallFunction = (Vue: VueConstructor, options?: ButtonOptions) => void;

export interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction;
}

(Button as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Button.name, Button);
};

export default Button;
