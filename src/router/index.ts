import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '',
    redirect: '/hello-word'
  }, {
    path: '/todo-list',
    component: () => import('../views/todo-list.vue')
  }, {
    path: '/hello-word',
    component: () => import('../components/HelloWorld.vue')
  }]
});