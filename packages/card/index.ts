import Card from './src/card.vue';
import { VueConstructor } from 'vue';

export type InstallFunction = (Vue: VueConstructor, options?: any) => void;

export interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction;
}

(Card as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Card.name, Card);
};

export default Card;
// export default install(Card);
