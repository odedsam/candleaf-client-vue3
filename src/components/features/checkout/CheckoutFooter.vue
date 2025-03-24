<script setup lang="ts">
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import { useCheckoutStore } from '@/stores/checkoutStore'

const checkoutStore = useCheckoutStore()
const {step} = storeToRefs(checkoutStore)

const buttonTexts = computed(() => {
  const texts = [
    {primary: 'Go to Details', secondary: 'Back To Cart'},
    {primary: 'Go to Shipping', secondary: 'Back to Shopping'},
    {primary: 'Go to Payment', secondary: 'Back to Shipping'},
    {primary: 'Pay Now', secondary: 'Back to Payment'},
    {primary: 'Finish & Return', secondary: 'Save Payment Receipt'},
  ]
  return texts[step.value] || {primary: 'Continue', secondary: 'Back'}
})

const stepTwo =localStorage.getItem('checkout_payment')

const handleNextStep = () => {
  let isValid = true

  // Perform validation based on the current step
  switch (step.value) {
    case 1: // Shipping Information
      isValid = checkoutStore.validateShipping()
      // isValid = checkoutStore.validateContact();
      break
    case 2: // Shipping Information
   isValid=true;
      break
    case 3: // Payment Information
      isValid = checkoutStore.validatePayment()
      break
    default:
      isValid = true // No validation needed for other steps
  }

  // Proceed to the next step if validation passes
  if (isValid) {
    checkoutStore.nextStep()
  } else {
    console.error('Validation failed for step', step.value)
  }
}


</script>

<template>
  <div class="text-center py-8 pt-4 flex flex-col justify-center items-center gap-3">
    <button
      class="w-full bg-[#56B280] max-w-[21.875rem] text-white text-lg font-medium py-3 rounded-md hover:bg-green-600 transition-all"
      @click="handleNextStep"
    >
      {{ buttonTexts.primary }}
    </button>

    <button
      class="w-full text-[#56B280] max-w-[21.875rem] text-lg font-medium py-3 rounded-md border border-green-500 hover:bg-green-100 transition-all"
      @click="checkoutStore.prevStep"
    >
      {{ buttonTexts.secondary }}
    </button>
  </div>
</template>






