<script setup lang="ts">
import {ref} from 'vue'
import InfoDisplay from '@/components/features/checkout/InfoDisplay.vue'
import ShippingMethod from '@/components/features/checkout/ShippingMethod.vue'
import {useCheckoutStore} from '@/stores/checkoutStore'
import {storeToRefs} from 'pinia'
import StepButtons from '@/components/features/checkout/StepButtons.vue'

const checkoutStore = useCheckoutStore()
const {shipping, formattedShippingAddress, shippingOptions} = storeToRefs(checkoutStore)

const selectedShippingMethod = ref(shippingOptions.value[0])

const editContact = () => {
  console.log('Edit Contact Clicked')
}

const editShipping = () => {
  console.log('Edit Shipping Clicked')
}
</script>

<template>
  <div>
    <div class="border border-green-300  dark:bg-gray-400 rounded-md p-4">
      <InfoDisplay label="Contact" :value="shipping.email" @edit="editContact" />
      <hr class="border-gray-200" />
      <InfoDisplay label="Ship to" :value="formattedShippingAddress" @edit="editShipping" />
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold mb-3">Shipping method</h2>

      <div v-for="method in shippingOptions" :key="method.id" class="mb-2">
        <ShippingMethod
          :label="method.label"
          :price="method.price"
          :selected="selectedShippingMethod.id === method.id"
          @update:selected="selectedShippingMethod = method"
        />
      </div>
    </div>

    <StepButtons
      primaryText="Go to Payment"
      secondaryText="Back to Details"
      primaryRoute="/checkout/payment"
      secondaryRoute="/checkout/details"
    />


  </div>
</template>
