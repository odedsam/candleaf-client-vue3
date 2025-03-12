<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';

// Checkout Store (to track steps)
const checkoutStore = useCheckoutStore();
const { currentStep, steps } = storeToRefs(checkoutStore);

// ✅ Dynamic button text state
const buttonTexts = ref({ primary: 'Continue', secondary: 'Back' });

// ✅ Watch `currentStep` and update button texts dynamically
watchEffect(() => {
  if (currentStep.value === 0) {
    buttonTexts.value = { primary: 'Go to Shipping', secondary: 'Back to Cart' };
  } else if (currentStep.value === 1) {
    buttonTexts.value = { primary: 'Go to Payment', secondary: 'Back to Details' };
  } else if (currentStep.value === 2) {
    buttonTexts.value = { primary: 'Pay Now', secondary: 'Back to Shipping' };
  } else if (currentStep.value === steps.value.length - 1) {
    buttonTexts.value = { primary: 'Finish & Return', secondary: 'Save Payment Receipt' };
  } else {
    buttonTexts.value = { primary: 'Continue', secondary: 'Back' };
  }
});
</script>

<template>
  <div class="text-center py-8 border-t border-gray-200 pt-4 flex flex-col gap-3">
    <!-- ✅ Primary Button (Next Step) -->
    <button
      @click="checkoutStore.nextStep()"
      class="w-full bg-green-500 text-white text-lg py-3 rounded-md hover:bg-green-600 transition-all"
    >
      {{ buttonTexts.primary }}
    </button>

    <!-- ✅ Secondary Button (Always Visible, Disabled on Step 0) -->
    <button
      @click="checkoutStore.prevStep()"
      :disabled="currentStep === 0"
      class="w-full text-green-600 text-lg py-3 rounded-md border border-green-500 hover:bg-green-100 transition-all"
      :class="{ 'opacity-50 cursor-not-allowed': currentStep === 0 }"
    >
      {{ buttonTexts.secondary }}
    </button>
  </div>
</template>

<style scoped>
button {
  font-weight: 500;
}
</style>