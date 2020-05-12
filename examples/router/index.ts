import Vue from 'vue';
import Router from 'vue-router';
import hljs from 'highlight.js';
import { componentsRouterConfig } from './routes';

Vue.use(Router);
const router = new Router({
  mode: 'hash',
  routes: componentsRouterConfig
});

router.afterEach((to: any, from: any) => {
  router.app.$nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router;
