import { VueConstructor } from 'vue';

export type InstallFunction<T> = (Vue: VueConstructor, options?: T) => void;
