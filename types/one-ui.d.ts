import Vue from 'vue';
// <% combination temp start %>
export { default as Avatar } from './avatar';
export { default as Button } from './button';
export { default as Card } from './card';
export { default as Grid } from './grid';
export { default as Icon } from './icon';
export { default as Input } from './input';
// <% combination temp end %>

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
