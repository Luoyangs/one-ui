
import Row from './src/row';
import Col from './src/col';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { GridOptions } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<GridOptions>;
}

const Grid: InstallFunctionOptions = {};

Grid.install = (Vue: VueConstructor) => {
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
};

export default Grid;
