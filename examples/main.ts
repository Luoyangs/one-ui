import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import OneUI from 'one-ui';
Vue.use(OneUI);
import '@src/styles/index.scss';

Vue.use(VueRouter);
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '',
//       component: Home
//     }
//   ]
// });

const _ = new Vue({
  el: '#app',
  // router,
  render: h => h(App)
});
