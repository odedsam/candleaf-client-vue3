<script setup lang="ts">
import { ref } from 'vue'
import InfoDisplay from './atoms/InfoDisplay.vue'
import ShippingMethod from './atoms/ShippingMethod.vue'
import { useCheckoutStore } from '@/stores/checkoutStore'
import { storeToRefs } from 'pinia'

const checkoutStore = useCheckoutStore()
const { shipping, contactInformation, formattedShippingAddress, shippingOptions } = storeToRefs(checkoutStore)

const selectedShippingMethod = ref(shippingOptions.value[0]) // Default to first method

// Edit Handlers
const editContact = () => {
  console.log('Edit Contact Clicked')
}

const editShipping = () => {
  console.log('Edit Shipping Clicked')
}
</script>

<template>
  <div>
    <div class="border border-green-300 rounded-md p-4">
      <InfoDisplay label="Contact" :value="contactInformation.email" @edit="editContact" />
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
  </div>
</template>