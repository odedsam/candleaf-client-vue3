<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseError from '@/components/base/BaseError.vue';
import LocationSelector from '@/components/features/checkout/AddressAutoComplete.vue';
import CheckoutNewsLetter from '@/components/features/checkout/CheckoutNewsLetter.vue';
import StepButtons from '@/components/features/checkout/StepButtons.vue';
import AddressAutoComplete from '@/components/features/checkout/AddressAutoComplete.vue';

const checkoutStore = useCheckoutStore();
const { shipping, shippingErrors } = storeToRefs(checkoutStore);


</script>

<template>
  <div class=" bg-white dark:bg-gray-500 shadow-md rounded-lg">
    <form @submit.prevent="checkoutStore.validateDetails" class="grid gap-2.5 px-2">
      <CheckoutNewsLetter
        v-model:email="shipping.email"
        v-model:subscribe="shipping.subscribe"
        :invalid="!!shippingErrors.email"
        :errMessage="shippingErrors.email"
      />

      <!-- <AddressAutoComplete v-model="shipping.address" /> -->

      <h2 class="text-base md:text-lg font-poppins font-semibold my-4">Shipping Address</h2>

      <BaseInput v-model="shipping.name" placeholder="Name" :invalid="!!shippingErrors.name" />
      <BaseError v-if="shippingErrors.name" :message="shippingErrors.name" />

      <BaseInput v-model="shipping.lastName" placeholder="Second Name" :invalid="!!shippingErrors.lastName" />
      <BaseError v-if="shippingErrors.lastName" :message="shippingErrors.lastName" />

      <BaseInput v-model="shipping.address" placeholder="Address and number" :invalid="!!shippingErrors.address" />
      <BaseError v-if="shippingErrors.address" :message="shippingErrors.address" />

      <BaseInput v-model="shipping.shippingNote" placeholder="Shipping note (optional)" />

      <BaseInput v-model="shipping.postalCode" placeholder="Postal Code" :invalid="!!shippingErrors.postalCode" />
      <BaseError v-if="shippingErrors.postalCode" :message="shippingErrors.postalCode" />


      <BaseInput v-model="shipping.country" placeholder="Country" :invalid="!!shippingErrors.country" />
      <BaseError v-if="shippingErrors.country" :message="shippingErrors.country" />

      <BaseInput v-model="shipping.province" placeholder="Province" :invalid="!!shippingErrors.province" />
      <BaseError v-if="shippingErrors.province" :message="shippingErrors.province" />

      <BaseInput v-model="shipping.city" placeholder="City" :invalid="!!shippingErrors.city" />
      <BaseError v-if="shippingErrors.city" :message="shippingErrors.city" />

      <!-- <AddressAutoComplete
        v-model:country="shipping.country"
        v-model:province="shipping.province"
        v-model:city="shipping.city"
        :errors="shippingErrors"
      /> -->

      <div class="flex items-center">
        <input type="checkbox" v-model="shipping.saveInfo" />
        <span class="ml-3">Save this information for a future fast checkout</span>
      </div>

      <StepButtons
        primaryText="Go To Shipping"
        secondaryText="Back to Cart"
        primaryRoute="/checkout/shipping"
        secondaryRoute="/checkout/cart"
        :validate="()=>true"
      />
    </form>
  </div>
</template>
