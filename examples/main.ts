import Vue from 'vue';

import router from './router';
import App from './App.vue';

import OneUI from 'one-ui';
Vue.use(OneUI);
import '@src/styles/index.scss';
import 'highlight.js/scss/a11y-light.scss';

import { DemoBlock } from './common';
Vue.component(DemoBlock.name, DemoBlock);

const _ = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
