import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/assets/css/all.css"
import getVant from './plugins'
import store from './store'
const app = createApp(App)
getVant(app);
app.use(store).use(router).mount('#app')
