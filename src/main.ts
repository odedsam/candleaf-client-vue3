// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'
// import "./assets/globals.css"
// import VueSonner from 'vue-sonner'
// import StripeTest from './components/shared/StripeTest.vue'
// app.component("StripeTest", StripeTest); 


// const app = createApp(App)
// const pinia = createPinia()
// app.use(VueSonner)
// pinia.use(() => {
//     return {
//       $onAction: () => {}, // אופציונלי
//     }
//   })
// app.use(pinia)
// app.use(router)  



// app.mount('#app')


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/globals.css'
import VueSonner from 'vue-sonner'

// 👇 חוסם הודעות pinia מהקונסול
// if (import.meta.env.DEV) {
//   const originalLog = console.log
//   const originalInfo = console.info

//   console.log = (...args) => {
//     if (
//       typeof args[0] === 'string' &&
//       args[0].includes('store installed')
//     ) return
//     originalLog(...args)
//   }

//   console.info = (...args) => {
//     if (
//       typeof args[0] === 'string' &&
//       args[0].includes('store installed')
//     ) return
//     originalInfo(...args)
//   }
// }

const app = createApp(App)
const pinia = createPinia()

app.use(VueSonner)
app.use(pinia)
app.use(router)

app.mount('#app')
