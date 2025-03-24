// src/router/router.middleware.ts
import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCheckoutStore } from '@/stores/checkoutStore'
import { useAuthStore } from '@/stores/authStore'

const publicRoutes = ['/auth/login', '/auth/register']
const checkoutRoutes = [
  '/cart',
  '/checkout/details',
  '/checkout/shipping',
  '/checkout/payment',
  '/checkout/confirmation'
]

export const authMiddleware = (router: Router) => {
  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const checkoutStore = useCheckoutStore()
    const { step } = storeToRefs(checkoutStore)
    const expectedRoute = checkoutRoutes[step.value]




   // checkout step protection
   if (to.path.startsWith('/checkout') && to.path !== expectedRoute) {
    console.warn(`🛑 Checkout step mismatch! Redirecting to: ${expectedRoute}`)
    return next(expectedRoute)
  }

  const auth = useAuthStore()

  // only try fetching user if there's a token cookie
  const hasToken = document.cookie.includes('token=')
  if (!auth.user && hasToken && to.path !== '/auth/login/success') {
    await auth.fetchCurrentUser()
  }

  // block authenticated users from visiting auth pages
  const isPublic = publicRoutes.includes(to.path)
  if (auth.user && isPublic) {
    return next('/')
  }

  next()
})
}
