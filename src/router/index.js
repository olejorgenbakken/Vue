import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigation'
    },
    {
      path: '/lecture/1',
      name: 'Lecture1',
      component: () => import(/* webpackChunkName: 'Lecture1' */ '../lecture1/Lecture1')
    },
    {
      path: '/lecture/2',
      name: 'Lecture2',
      component: () => import(/* webpackChunkName: 'Lecture2' */ '../lecture2/Lecture2')
    },
    {
      path: '/lecture/3',
      name: 'Lecture3',
      component: () => import(/* webpackChunkName: 'Lecture3' */ '../lecture3/Lecture3')
    },
    {
      path: '/lecture/4',
      name: 'Lecture4',
      component: () => import(/* webpackChunkName: 'Lecture4' */ '../lecture4/Lecture4')
    },
    {
      path: '/lecture/5',
      name: 'Lecture5',
      component: () => import(/* webpackChunkName: 'Lecture5' */ '../lecture5/Lecture5')
    },
    {
      path: '/lecture/6',
      name: 'Lecture6',
      component: () => import(/* webpackChunkName: 'Lecture6' */ '../lecture6/Lecture6')
    },
    {
      path: '/lecture/10',
      name: 'Lecture10',
      component: () => import(/* webpackChunkName: 'Lecture10' */ '../lecture10/Lecture10')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: 'NotFoundPage' */ '../views/NotFoundPage')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
