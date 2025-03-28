<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkoutStore'
import { PaymentInfo, paymentValidationSchema } from '@/utils/formValidations'
import { ref } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import RadioInput from '@/components/features/products/RadioInput.vue'
const payment = ref({
  cardNumber: '',
  holderName: '',
  expiration: '',
  cvv: '',
  vatNumber: '',
  pec: '',
  billingSameAsShipping: true,
  billingAddress: {
    address: '',
    postalCode: '',
    city: '',
    province: '',
    country: '',
  },
})
const checkoutStore = useCheckoutStore()
const paymentErrors = ref<Partial<Record<keyof PaymentInfo, string>>>({})
const validatePayment = () => {
  const result = paymentValidationSchema.safeParse(payment.value)
  if (!result.success) {
    paymentErrors.value = Object.fromEntries(
      Object.entries(result.error.format()).map(([key, value]) => [
        key,
        (value as { _errors?: string[] })?._errors?.[0] ?? 'Unknown validation error',
      ]),
    )
    return false
  }
  paymentErrors.value = {}
  return true
}
</script>

<template>
  <div>
    <h1 class="text-lg font-semibold mt-6 mb-3">Billing Address</h1>

    <!-- Billing Address Selection -->
    <div class="border border-gray-300 rounded-md p-4 flex flex-col">
      <RadioInput
        v-model="payment.billingSameAsShipping"
        :value="true"
        radio-label="Same As Shipping Address"
        :label-style="'max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'"
      />
      <hr class="border-gray-200 my-3" />
      <RadioInput
        v-model="payment.billingSameAsShipping"
        :value="false"
        radio-label="Use a different address for billing"
        :label-style="'max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'"
      />
    </div>

    <!-- Billing Address Form (Only if different from Shipping) -->
    <div v-if="!payment.billingSameAsShipping" class="mt-4">
      <BaseInput v-model="payment.billingAddress.address" placeholder="Address and number" />
      <BaseInput v-model="payment.billingAddress.city" placeholder="City" />
      <BaseInput v-model="payment.billingAddress.postalCode" placeholder="Postal Code" />
      <BaseInput v-model="payment.billingAddress.province" placeholder="Province" />
      <BaseInput v-model="payment.billingAddress.country" placeholder="Country" />
    </div>
  </div>
</template>
