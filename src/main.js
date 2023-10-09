import "@/assets/scss/main.scss";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

Object.values(import.meta.glob('./plugins/*.js', { eager: true }))
      .forEach(i => i.install?.(app))

app.use(router)

app.mount('#app')
