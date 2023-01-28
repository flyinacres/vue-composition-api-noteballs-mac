import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// when no name is specified index.js is the default
import router from '@/router'

createApp(App)
	.use(router)
	.mount('#app')
