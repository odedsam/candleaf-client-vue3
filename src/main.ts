// import StripeTest from './components/shared/StripeTest.vue'
// app.component("StripeTest", StripeTest);
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/authStore'
import './assets/globals.css'
import App from './App.vue'
import router from './router'
import VueSonner from 'vue-sonner'

const app = createApp(App)
const pinia = createPinia()

app.use(VueSonner)
app.use(pinia)
app.use(router)
const authStore = useAuthStore()

authStore.fetchCurrentUser().catch(() => {
  console.warn('Failed to fetch current user')
})

app.mount('#app')

