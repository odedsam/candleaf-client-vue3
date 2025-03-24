<script setup lang="ts">
import {useCheckoutStore} from '@/stores/checkoutStore'
import {storeToRefs} from 'pinia'
import BaseInput from '@/components/base/BaseInput.vue'
import RadioInput from '@/components/products/atoms/RadioInput.vue'

const checkoutStore = useCheckoutStore()
const {billingAddress} = storeToRefs(checkoutStore)
</script>

<template>
  <div>
    <h1 class="text-lg font-semibold mt-6 mb-3">Billing Address</h1>

    <!-- Billing Address Selection -->
    <div class="border border-gray-300 rounded-md p-4 flex flex-col">
      <RadioInput
        v-model="billingAddress.sameAsShipping"
        :value="true"
        radio-label="Same As Shipping Address"
        :label-style="'max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'"
        @change="checkoutStore.updateBillingAddress(true)"
      />
      <hr class="border-gray-200 my-3" />
      <RadioInput
        v-model="billingAddress.sameAsShipping"
        :value="false"
        radio-label="Use a different address for billing"
        :label-style="'max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'"
        @change="checkoutStore.updateBillingAddress(false)"
      />
    </div>

    <!-- Billing Address Form (Only if different from Shipping) -->
    <div v-if="!billingAddress.sameAsShipping" class="mt-4">
      <BaseInput v-model="billingAddress.name" placeholder="Name" />
      <BaseInput v-model="billingAddress.secondName" placeholder="Second Name" />
      <BaseInput v-model="billingAddress.address" placeholder="Address and number" />
      <BaseInput v-model="billingAddress.city" placeholder="City" />
      <BaseInput v-model="billingAddress.postalCode" placeholder="Postal Code" />
      <BaseInput v-model="billingAddress.province" placeholder="Province" />
      <BaseInput v-model="billingAddress.country" placeholder="Country" />
    </div>
  </div>
</template>
