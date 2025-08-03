import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authMiddleware } from '@/router/router.middleware';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
      { path: 'about', name: 'about', component: () => import('@/views/AboutView.vue') },
      { path: 'contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
      { path: 'products', name: 'product-view', component: () => import('@/views/products/ProductsView.vue') },
      { path: 'products/:id', name: 'product-id-view', component: () => import('@/views/products/ProductIdView.vue') },
      { path: 'user/:id', name: 'user-profile', component: () => import('@/views/user/UserProfileView.vue') },
      { path: 'user/:id/orders/:orderId', name: 'order-details', component: () => import('@/views/user/UserOrderDetailsView.vue') },
      { path: 'test', name: 'test', component: () => import('@/views/TestView.vue') },
    ],
  },

  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: 'login', name: 'login-view', component: () => import('@/views/auth/LoginView.vue') },
      { path: 'login/success', name: 'login-success', component: () => import('@/views/auth/LoginSuccess.vue') },
      { path: 'signup', name: 'signup-view', component: () => import('@/views/auth/LoginView.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('@/views/auth/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('@/views/auth/ResetPassword.vue') },
    ],
  },

  {
    path: '/track-order',
    name: 'track-order',
    component: () => import('@/views/orders/OrderTrackingView.vue'),
  },

  {
    path: '/checkout',
    component: () => import('@/layouts/CheckoutLayout.vue'),
    children: [
      { path: '', redirect: '/checkout/cart' },
      { path: 'cart', component: () => import('@/views/checkout/CartView.vue') },
      { path: 'details', component: () => import('@/views/checkout/DetailsView.vue') },
      { path: 'shipping', component: () => import('@/views/checkout/ShippingView.vue') },
      { path: 'payment', component: () => import('@/views/checkout/PaymentView.vue') },
      { path: 'confirmation', component: () => import('@/views/checkout/ConfirmationView.vue') },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

authMiddleware(router);

export default router;
