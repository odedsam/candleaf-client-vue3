import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "./assets/globals.css"
import GoogleSignInPlugin from "vue3-google-signin"
const app = createApp(App)

app.use(GoogleSignInPlugin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,});


app.use(createPinia())
app.use(router)  
app.mount('#app')
