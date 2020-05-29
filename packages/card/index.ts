import Card from './src/card';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { CardOptions } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<CardOptions>;
}

(Card as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Card.name, Card);
};

export default Card;
