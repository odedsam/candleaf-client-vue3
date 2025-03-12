<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/components/checkout/atoms/BaseInput.vue'

// Reactive form data
const paymentData = ref({
  cardNumber: '',
  holderName: '',
  expiration: '',
  cvv: ''
})
</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-semibold mb-3">Payment method</h2>

    <!-- Card Number -->
    <BaseInput v-model="paymentData.cardNumber" placeholder="Card Number" icon="🔒" />

    <!-- Holder Name -->
    <BaseInput v-model="paymentData.holderName" placeholder="Holder Name" />

    <!-- Expiration & CVV Row -->
    <div class="flex gap-2">
      <BaseInput v-model="paymentData.expiration" placeholder="Expiration (MM/YY)" size="half" />
      <BaseInput v-model="paymentData.cvv" placeholder="CVV" icon="ℹ️" size="half" />
    </div>
  </div>
</template>