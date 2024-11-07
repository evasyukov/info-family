import { createRouter, createWebHistory } from 'vue-router';

import FillingForm from './components/FillingForm.vue';
import PreviewInfo from './components/PreviewInfo.vue';

const routes = [
  {
    path: '/info-family',
    name: 'Home',
    component: FillingForm
  },
  {
    path: '/preview',
    name: 'Preview',
    component: PreviewInfo
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
