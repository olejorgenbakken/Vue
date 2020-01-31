import Vue from 'vue';
import Router from 'vue-router';
import Lecture1 from '@/lecture1/Main.vue';
import Lecture2 from '@/lecture2/Main.vue';
import Lecture3 from '@/lecture3/Main.vue';
import Lecture4 from '@/lecture4/Main.vue';

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
		}
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});
