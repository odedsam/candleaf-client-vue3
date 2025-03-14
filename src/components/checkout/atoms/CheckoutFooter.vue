<script setup lang="ts">
import { computed } from 'vue';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';

const checkoutStore = useCheckoutStore();
const { step } = storeToRefs(checkoutStore);

const buttonTexts = computed(() => {
  const texts = [
    { primary: 'Go to Details', secondary: 'Back To Shopping' },
    { primary: 'Go to Shipping', secondary: 'Back to Cart' },
    { primary: 'Go to Payment', secondary: 'Back to Details' },
    { primary: 'Pay Now', secondary: 'Back to Shipping' },
    { primary: 'Finish & Return', secondary: 'Save Payment Receipt' },
  ];
  return texts[step.value] || { primary: 'Continue', secondary: 'Back' };
});
</script>

<template>
  <div class="text-center py-8  pt-4 flex flex-col justify-center items-center gap-3">

    <button
      class="w-full bg-[#56B280] max-w-[21.875rem] text-white text-lg font-medium py-3 rounded-md hover:bg-green-600 transition-all"
      @click="checkoutStore.nextStep">
      {{ buttonTexts.primary }}
    </button>

    <button
      class="w-full text-[#56B280] max-w-[21.875rem] text-lg font-medium py-3 rounded-md border border-green-500 hover:bg-green-100 transition-all"
      @click="checkoutStore.prevStep">
      {{ buttonTexts.secondary }}
    </button>
    
  </div>
</template>