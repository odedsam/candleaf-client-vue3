<script setup lang="ts">
import {RouterView, useRoute, useRouter} from 'vue-router'
import {useCheckoutStore} from '@/stores/checkoutStore'
import {nextTick} from 'vue'
import CheckoutHeader from '@/components/checkout/atoms/CheckoutHeader.vue'
import CheckoutFooter from '@/components/checkout/atoms/CheckoutFooter.vue'

// Store & Router
const checkoutStore = useCheckoutStore()
const route = useRoute()
const router = useRouter()

// Map steps to routes
const stepRoutes = [
  {step: 0, name: 'checkout-details'},
  {step: 1, name: 'checkout-shipping'},
  {step: 2, name: 'checkout-payment'},
  {step: 3, name: 'checkout-confirmation'},
]

// Ensure navigation happens *after* currentStep updates
const goToNextStep = async () => {
  checkoutStore.nextStep()
  await nextTick() // Wait until the DOM updates
  navigateToStep(checkoutStore.currentStep)
}

const goToPreviousStep = async () => {
  checkoutStore.prevStep()
  await nextTick() // Wait until the DOM updates
  navigateToStep(checkoutStore.currentStep)
}

//  Navigate to the correct step route after updating the step
const navigateToStep = (step: number) => {
  const targetRoute = stepRoutes.find((s) => s.step === step)
  if (targetRoute) router.push({name: targetRoute.name})
}
</script>

<template>
  <div>
    <CheckoutHeader />

    <div class="flex-1 px-4 md:px-6 lg:px-8 pb-20">
      <RouterView />
    </div>
    <!-- Dynamic Checkout Content -->

    <!-- Footer Navigation -->
    <CheckoutFooter />
  </div>
</template>
