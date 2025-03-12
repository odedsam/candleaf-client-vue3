<script setup lang="ts">
import {ref} from 'vue'
import InfoDisplay from './atoms/InfoDisplay.vue'
import ShippingMethod from './atoms/ShippingMethod.vue'

// Contact & Shipping Data
const contactInfo = ref('joe.spagnuolo@uxbly.com')
const shippingAddress = ref('Via Firenze 23, 92023, Campobello di Licata AG, Italia')
const selectedMethod = ref('Standard Shipping')

// Shipping options
const shippingMethods = [
  {id: 'standard', label: 'Standard Shipping', price: 'Free'},
  {id: 'express', label: 'Express Shipping', price: '$9.99'},
]
// Edit Handlers (Modify as needed)
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
      <InfoDisplay label="Contact" :value="contactInfo" @edit="editContact" />
      <hr class="border-gray-200" />
      <InfoDisplay label="Ship to" :value="shippingAddress" @edit="editShipping" />
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold mb-3">Shipping method</h2>

      <div v-for="method in shippingMethods" :key="method.id" class="mb-2">
        <ShippingMethod
          :label="method.label"
          :price="method.price"
          :selected="selectedMethod === method.label"
          @update:selected="selectedMethod = method.label"
        />
      </div>
    </div>
  </div>
</template>
