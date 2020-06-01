
import Avatar from './src/avatar';
import { VueConstructor } from 'vue';
import { InstallFunction } from '@src/core';
import { AvatarOptions } from './src/types';

interface InstallFunctionOptions {
  [key: string]: any;
  install?: InstallFunction<AvatarOptions>;
}

(Avatar as InstallFunctionOptions).install = (Vue: VueConstructor) => {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar;
