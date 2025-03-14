<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCheckoutStore } from '@/stores/checkoutStore'
import PaymentMethods from './atoms/PaymentMethods.vue'
import InfoDisplay from '@/components/checkout/atoms/InfoDisplay.vue'
import BaseInput from '@/components/shared/BaseInput.vue'
import BillingAddress from '@/components/checkout/atoms/BillingAddress.vue'

const checkoutStore = useCheckoutStore()

// Extract necessary refs from the store
const { shipping, contactInformation, payment, shippingOptions, formattedShippingAddress } = storeToRefs(checkoutStore)

// Edit Handlers
const editContact = () => console.log('Edit Contact Clicked')
const editShipping = () => console.log('Edit Shipping Clicked')
const editMethod = () => console.log('Edit Shipping Method Clicked')

// Find the selected shipping method (assume first one by default)
const selectedShippingMethod = shippingOptions.value[0]
</script>

<template>
  <div>
    <!-- Contact & Shipping Details -->
    <InfoDisplay label="Contact" :value="contactInformation.email" @edit="editContact" />
    <hr class="border-gray-200" />

    <InfoDisplay label="Ship to" :value="formattedShippingAddress" @edit="editShipping" />
    <hr class="border-gray-200" />

    <InfoDisplay
      label="Method"
      :value="`${selectedShippingMethod.label} - ${selectedShippingMethod.price === 0 ? 'FREE' : `$${selectedShippingMethod.price.toFixed(2)}`}`"
      @edit="editMethod"
    />

    <!-- Payment Method -->
    <PaymentMethods />

    <!-- Tax Information -->
    <div>
      <h1 class="text-lg font-semibold mt-6 mb-3">Tax Information</h1>
      <BaseInput v-model="payment.vatNumber" size="full" placeholder="VAT number (optional)" />
      <BaseInput v-model="payment.pec" size="full" placeholder="PEC (optional)" />
    </div>

    <!-- Billing Address Selection -->
    <BillingAddress />
  </div>
</template>