import { createRouter, createWebHistory } from 'vue-router';
import { authMiddleware } from "@/router/router.middleware";
var routes = [
    {
        path: '/',
        component: function () { return import('@/layouts/DefaultLayout.vue'); },
        children: [
            { path: '/', name: 'home', component: function () { return import('@/views/HomeView.vue'); } },
            { path: 'about', name: 'about', component: function () { return import('@/views/AboutView.vue'); } },
            { path: 'contact', name: 'contact', component: function () { return import('@/views/ContactView.vue'); } },
            { path: 'products', name: 'product-view', component: function () { return import('@/views/products/ProductsView.vue'); } },
            { path: 'products/:id', name: 'product-id-view', component: function () { return import('@/views/products/ProductIdView.vue'); } },
            { path: 'user/:id', name: 'user-profile', component: function () { return import('@/views/user/UserProfileView.vue'); } },
            { path: 'user/:id/orders', name: 'user-orders', component: function () { return import('@/views/user/UserOrdersView.vue'); } },
            { path: 'user/:id/orders/:orderId', name: 'order-details', component: function () { return import('@/views/user/OrderDetailsView.vue'); } },
            { path: 'test', name: 'test', component: function () { return import('@/views/TestView.vue'); } },
        ],
    },
    {
        path: '/auth',
        component: function () { return import('@/layouts/AuthLayout.vue'); },
        children: [
            { path: 'login', name: 'login-view', component: function () { return import('@/views/auth/LoginView.vue'); } },
            { path: 'login/success', name: 'login-success', component: function () { return import('@/views/auth/LoginSuccess.vue'); } },
            { path: 'signup', name: 'signup-view', component: function () { return import('@/views/auth/LoginView.vue'); } },
        ],
    },
    {
        path: '/track-order',
        name: 'track-order',
        component: function () { return import('@/views/orders/OrderTrackingView.vue'); },
    },
    {
        path: '/checkout',
        component: function () { return import('@/layouts/CheckoutLayout.vue'); },
        children: [
            { path: '', redirect: '/checkout/cart' },
            { path: 'cart', component: function () { return import('@/views/checkout/CartView.vue'); } },
            { path: 'details', component: function () { return import('@/views/checkout/DetailsView.vue'); } },
            { path: 'shipping', component: function () { return import('@/views/checkout/ShippingView.vue'); } },
            { path: 'payment', component: function () { return import('@/views/checkout/PaymentView.vue'); } },
            { path: 'confirmation', component: function () { return import('@/views/checkout/ConfirmationView.vue'); } },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: function () { return import('@/views/NotFoundView.vue'); },
    }
];
var router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});
authMiddleware(router);
export default router;
