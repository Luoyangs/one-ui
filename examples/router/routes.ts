import { RouteConfig } from 'vue-router';

export const componentsRouterConfig: RouteConfig[] = [
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../docs/install/about.md')
  },
  {
    path: '/color',
    component: () => import(/* webpackChunkName: "color" */ '../docs/general/color.md')
  },
  {
    path: '/card',
    component: () => import(/* webpackChunkName: "card" */ '../docs/general/card.md')
  }
];
