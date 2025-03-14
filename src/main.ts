import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "./assets/globals.css"
import StripeTest from './components/shared/StripeTest.vue'


const app = createApp(App)
// app.component("StripeTest", StripeTest); 
app.use(createPinia())
app.use(router)  



app.mount('#app')

