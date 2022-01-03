import { createRouter, createWebHistory  } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/scss',
      component: () => import('@/views/scss/index.vue'),
    },
    {
      path: '/plugin',
      component: () => import('@/views/plugin/index.vue'),
    }
  ]
})