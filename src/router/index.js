import Vue from 'vue';
import Router from 'vue-router';
import NotFoundPage from '@/views/NotFoundPage';
import Lecture1 from '@/views/Lecture1';
import Lecture2 from '@/views/Lecture2';
import Lecture3 from '@/views/Lecture3';
import Lecture4 from '@/views/Lecture4';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Lecture1',
			component: Lecture1
		},
		{
			path: '/lecture1',
			name: 'Lecture1',
			component: Lecture1
		},
		{
			path: '/lecture2',
			name: 'Lecture2',
			component: Lecture2
		},
		{
			path: '/lecture3',
			name: 'Lecture3',
			component: Lecture3
		},
		{
			path: '/lecture4',
			name: 'Lecture4',
			component: Lecture4
		},
		{
			path: '*',
			name: 'NotFound',
			component: NotFoundPage
		}
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});
