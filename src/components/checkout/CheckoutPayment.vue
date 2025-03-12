<script setup lang="ts">
import PaymentMethods from './atoms/PaymentMethods.vue'
import InfoDisplay from '@/components/checkout/atoms/InfoDisplay.vue'
import BaseInput from '@/components/checkout/atoms/BaseInput.vue'
import {useCheckoutStore} from '@/stores/checkoutStore'
import {storeToRefs} from 'pinia'
import BillingAddress from '@/components/checkout/atoms/BillingAddress.vue'
import {ref} from 'vue'

const checkoutStore = useCheckoutStore()
const {contactInfo, formattedShippingAddress, shippingData, taxInfo} = storeToRefs(checkoutStore)

// Edit Handlers
const editContact = () => console.log('Edit Contact Clicked')
const editShipping = () => console.log('Edit Shipping Clicked')
const editMethod = () => console.log('Edit Shipping Method Clicked')
</script>

<template>
  <div>
    <!-- Contact & Shipping Details -->
    <InfoDisplay label="Contact" :value="contactInfo.email" @edit="editContact" />
    <hr class="border-gray-200" />
    <InfoDisplay label="Ship to" :value="formattedShippingAddress" @edit="editShipping" />
    <hr class="border-gray-200" />
    <InfoDisplay
      label="Method"
      :value="
        shippingData.selectedShipping +
        (shippingData.shippingCost === 0 ? ' - FREE' : ` - $${shippingData.shippingCost}`)
      "
      @edit="editMethod"
    />

    <!-- Payment Method -->
    <PaymentMethods />

    <!-- Tax Information -->
    <div>
      <h1 class="text-lg font-semibold mt-6 mb-3">Tax Information</h1>
      <BaseInput v-model="taxInfo.vatNumber" :size="'full'" placeholder="VAT number (optional)" />
      <BaseInput v-model="taxInfo.pec" :size="'full'" placeholder="PEC (optional)" />
    </div>

    <!-- Billing Address Selection -->
    <BillingAddress />
  </div>
</template>
