import { createApp, markRaw } from 'vue'
import App from './App.vue'

import './assets/main.css'
//

// when no name is specified index.js is the default
import router from '@/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(({ store }) => {
	store.router = markRaw(router)
  })

createApp(App)
	.use(pinia)
	.use(router)
	.mount('#app')
