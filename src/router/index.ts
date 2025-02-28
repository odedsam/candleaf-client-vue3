import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
     { path: '/', name: 'home', component:HomeView },
     { path: '/about', name: 'about', component: () => import('../views/AboutView.vue')  },
     { path: '/contact', name: 'contact',component: () => import('../views/ContactView.vue') },
     
     { path: '/login', name: 'login-view', component: () => import('../views/LoginView.vue') },
     { path: '/signup', name: 'signup-view', component: () => import('../views/SignupView.vue') },

     { path: '/cart', name: 'Cart-view', component: () => import('../views/CartView.vue') },
     { path: '/products', name: 'product-view', component: () => import('../views/ProductsView.vue') },
     { path: '/products/:id', name: 'product-id-view', component: () => import('../views/ProductIdView.vue') },

     { path: '/user/:id', name: 'user-profile', component: () => import('../views/UserProfileView.vue') },
     { path: '/user/:id/orders', name: 'user-orders', component: () => import('../views/UserOrdersView.vue') },
     { path: '/user/:id/orders/:orderId', name: 'order-details', component: () => import('../views/OrderDetailsView.vue') }
]

const router = createRouter({
     history: createWebHistory(),
     routes,
})

export default router