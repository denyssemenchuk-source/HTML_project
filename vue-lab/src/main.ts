import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Якщо у вас є роутер
import "./assets/index.css"; // Лише наш Tailwind файл!

const app = createApp(App)
app.use(router)
app.mount('#app')
