import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

Object.values(import.meta.glob('./plugins/*.js', { eager: true }))
      .forEach(i => i.install?.(app))

app.use(createPinia())
app.use(router)

app.mount('#app')
