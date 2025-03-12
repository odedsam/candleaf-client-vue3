import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authMiddleware } from "@/router/router.middleware"

// Layouts
const DefaultLayout = () => import('@/layouts/DefaultLayout.vue');
const AuthLayout = () => import('@/layouts/AuthLayout.vue');
const CheckoutLayout = () => import('@/layouts/CheckoutLayout.vue')

// Checkout Steps
const CheckoutDetails = () => import('@/components/checkout/CheckoutDetails.vue');
const CheckoutShipping = () => import("@/components/checkout/CheckoutShipping.vue");
const CheckoutPayment = () => import('@/components/checkout/CheckoutPayment.vue');
const ConfirmationStep = () => import('@/components/checkout/CheckoutConfirmation.vue');


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
      { path: 'about', name: 'about', component:  () => import('@/views/AboutView.vue')},
      { path: 'contact', name: 'contact', component:() => import('@/views/ContactView.vue') },
      { path: 'products', name: 'product-view', component:  () => import('@/views/products/ProductsView.vue')},
      { path: 'products/:id', name: 'product-id-view', component: () => import('@/views/products/ProductIdView.vue') },
      { path: 'user/:id', name: 'user-profile', component: () => import('@/views/user/UserProfileView.vue') },
      { path: 'user/:id/orders', name: 'user-orders', component: () => import('@/views/user/UserOrdersView.vue') },
      { path: 'user/:id/orders/:orderId', name: 'order-details', component: () => import('@/views/user/OrderDetailsView.vue') },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'login-view', component: () => import('@/views/auth/LoginView.vue') },
      { path: 'login/success', name: 'login-success', component:()=>import('@/views/auth/LoginSuccess.vue')},
      { path: 'signup', name: 'signup-view', component: () => import('@/views/auth/SignupView.vue') },
    ],
  },
  {
    path: '/track-order',
    name: 'track-order',
    component:  () => import('@/views/orders/OrderTrackingView.vue'),
  },
  {
    path: '/checkout',
    component: CheckoutLayout, 
    children: [
      { path: 'details', name: 'checkout-details', component: CheckoutDetails },
      { path: 'shipping', name: 'checkout-shipping', component: CheckoutShipping },
      { path: 'payment', name: 'checkout-payment', component: CheckoutPayment },
      { path: 'confirmation', name: 'checkout-confirmation', component: ConfirmationStep },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// navigation guard for checkout
// router.beforeEach(async (to, from, next) => {
//   if (to.path.startsWith('/checkout')) {
//     const { useCartStore } = await import('@/stores/cartStore');
//     const cartStore = useCartStore();

//     if (to.path === '/checkout/shipping' && cartStore.cartItems.length === 0) {
//       return next('/checkout/details');
//     } else if (to.path === '/checkout/payment' && !cartStore.shippingInfo) {
//       return next('/checkout/shipping');
//     } else if (to.path === '/checkout/confirmation' && !cartStore.paymentConfirmed) {
//       return next('/checkout/payment');
//     }
//   }

//   next();
// });

authMiddleware(router);








export default router;