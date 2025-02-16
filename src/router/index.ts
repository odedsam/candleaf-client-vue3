import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'product-view',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/products/:id',
      name: 'product-id-view',
      component: () => import('../views/ProductIdView.vue'),
    },


    {
      path: '/user',
      name: 'user-view',
      component: () => import('@/components/ui/UserProfile.vue'),
    },


    {
      path: '/cart',
      name: 'cart-view',
      component: () => import('@/components/ui/CartDrawer.vue'),
    },
    {
      path: '/orderList',
      name: 'order-view',
      component: () => import('@/components/ui/OrdersList.vue'),
    },

    {
      path: '/wish',
      name: 'wishlist-view',
      component: () => import('@/components/ui/WishList.vue'),
    },


  ],
})

export default router
