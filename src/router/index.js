import {createRouter, createWebHashHistory} from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
	{
		path: '/',
		name: 'notes',
		component: ViewNotes
	},
	{
		path: '/editNote/:id',
		name: 'edit-note',
		component: ViewEditNote
	},
	{
		path: '/stats',
		name: 'stats',
		component: ViewStats
	},
	{
		path: '/auth',
		name: 'auth',
		component: ViewAuth
	}
]


const router = createRouter({
	history: createWebHashHistory(),
	routes
})

// A hook which is fired everytime a user tries to go to a new route
router.beforeEach( async (to, from) => {
	console.log('to: ', to)
})

export default router