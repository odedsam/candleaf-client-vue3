<script setup lang="ts">
import { watch, ref } from 'vue'
import { useCheckoutStore } from '@/stores/checkoutStore'
import { storeToRefs } from 'pinia'

const checkoutStore = useCheckoutStore()
const { shipping, formattedShippingAddress, shippingOptions } = storeToRefs(checkoutStore)

const selectedShippingMethod = ref(shippingOptions.value.find(opt => opt.id === shipping.value.shippingMethod) || shippingOptions.value[0])

watch(
  () => shipping.value.shippingMethod,
  (newMethod) => {
    const found = shippingOptions.value.find(opt => opt.id === newMethod)
    if (found) selectedShippingMethod.value = found
  },
  { immediate: true }
)

const updateSelectedShippingMethod = (method: typeof shippingOptions.value[0]) => {
  checkoutStore.selectShippingMethod(method.id)
  selectedShippingMethod.value = method
}

const editContact = (edit?: any) => {
  if (edit) {
    shipping.value = edit
  }
}

const editShipping = (editShipping?: any) => {
  if (editShipping) {
    shipping.value = editShipping
  }
}
</script>

<template>
  <div>
    <div class="border border-green-300 dark:bg-gray-400 rounded-md p-4">
      <InfoDisplay label="Contact" :value="shipping.email" @edit-content="editContact" />
      <hr class="border-gray-200" />
      <InfoDisplay label="Ship to" :value="formattedShippingAddress" @edit-content="editShipping" />
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold mb-3">Shipping method</h2>

      <div v-for="method in shippingOptions" :key="method.id" class="mb-2">
        <ShippingMethod
          :label="method.label"
          :price="method.price"
          :selected="selectedShippingMethod.id === method.id"
          @update:selected="updateSelectedShippingMethod(method)" />
      </div>
    </div>

    <StepButtons
      primaryText="Go to Payment"
      secondaryText="Back to Details"
      primaryRoute="/checkout/payment"
      secondaryRoute="/checkout/details" />
  </div>
</template>
