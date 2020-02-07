import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/lecture1',
			name: 'Lecture1',
			component: () => import(/* webpackChunkName: 'Lecture1' */ '../views/lectures/Lecture1')
		},
		{
			path: '/lecture2',
			name: 'Lecture2',
			component: () => import(/* webpackChunkName: 'Lecture2' */ '../views/lectures/Lecture2')
		},
		{
			path: '/lecture3',
			name: 'Lecture3',
			component: () => import(/* webpackChunkName: 'Lecture3' */ '../views/lectures/Lecture3')
		},
		{
			path: '/lecture4',
			name: 'Lecture4',
			component: () => import(/* webpackChunkName: 'Lecture4' */ '../views/lectures/Lecture4')
		},
		{
			path: '/lecture5',
			name: 'Lecture4',
			component: () => import(/* webpackChunkName: 'Lecture4' */ '../views/lectures/Lecture5')
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
