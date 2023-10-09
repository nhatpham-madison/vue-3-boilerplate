import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Main CSS
import "@/assets/scss/main.scss";

const app = createApp(App)

Object.values(import.meta.glob('./plugins/*.js', { eager: true }))
      .forEach(i => i.install?.(app))

app.use(router)

app.mount('#app')
