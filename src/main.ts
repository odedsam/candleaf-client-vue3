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
const rootCookie = document.cookie;
 console.log(" rootCookie:", rootCookie)
 const hasToken = document.cookie.split('; ').some(c => c.startsWith('candleaf_token='))

console.log("hasToken? ",hasToken);
console.log(document.cookie.includes('candleaf_token='));
authStore.fetchCurrentUser().catch(() => {
  console.warn('Failed to fetch current user')
})

app.mount('#app')

