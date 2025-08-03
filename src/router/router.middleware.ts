import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { CheckoutStepRoutes } from "@/types"
import { useMultiStep } from '@/composables/useMultiStep'



const publicRoutes = ['/auth/login', '/auth/register']
const checkoutRoutes = [
  '/cart',
  '/checkout/details',
  '/checkout/shipping',
  '/checkout/payment',
  '/checkout/confirmation'
]

const { step, nextStep, prevStep } = useMultiStep("checkout_step",Object.values(CheckoutStepRoutes),"/products")
const expectedRoute = checkoutRoutes[step.value]


export const authMiddleware = (router: Router) => {
  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {






   // checkout step protection
  //  if (to.path.startsWith('/checkout') && to.path !== expectedRoute) {
  //   console.warn(` Checkout step mismatch! Redirecting to: ${expectedRoute}`)
  //   return next(expectedRoute)
  // }

  const auth = useAuthStore()

 const hasToken = document.cookie.split('; ').some(c => c.startsWith('candleaf_token='))

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
