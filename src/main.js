import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import './../node_modules/Bulma/CSS/bulma.css'

// when no name is specified index.js is the default
import router from '@/router'
import { createPinia } from 'pinia'

createApp(App)
	.use(createPinia())
	.use(router)
	.mount('#app')
