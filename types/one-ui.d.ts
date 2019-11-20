import Vue from 'vue';
import { OneCard } from './card';

export interface InstallationOptions {
  store?: any;
  i18n?: any;
}

/**
 * Install all one-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(OneUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

export class Card extends OneCard { }