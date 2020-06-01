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
  },
  {
    path: '/button',
    component: () => import(/* webpackChunkName: "button" */ '../docs/general/button.md')
  },
  {
    path: '/icon',
    component: () => import(/* webpackChunkName: "icon" */ '../docs/general/icon.md')
    // <% component temp position %>
  }
];
