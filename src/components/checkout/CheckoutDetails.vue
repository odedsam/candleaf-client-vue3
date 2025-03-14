<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';
import { useValidation } from '@/composables/useValidation';
import { shippingValidationSchema } from '@/utils/formValidations';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import BaseInput from '@/components/shared/BaseInput.vue';
import BaseError from '@/components/shared/BaseError.vue';
import CheckoutNewsLetter from "@/components/checkout/atoms/CheckoutNewsLetter.vue"

// Pinia Store
const checkoutStore = useCheckoutStore();
const { shipping } = storeToRefs(checkoutStore);

// Validation
const { formErrors, validateForm } = useValidation(shippingValidationSchema, shipping);

// Dropdown Options
const provinces = ['Rome', 'Milan', 'Naples', 'Turin', 'Florence'];
const countries = ['Italy', 'France', 'Germany', 'Spain'];

// Handle Form Submission & Validation & Next Step
const handleSubmit = () => {
  if (validateForm()) {
    checkoutStore.nextStep();
  }
};


</script>

<template>
  <div class="p-6 bg-white shadow-md rounded-lg">
   <CheckoutNewsLetter />
    <h2 class="text-lg font-semibold mb-3">Shipping Address</h2>

    <form @submit.prevent="handleSubmit" class="grid gap-2.5">
      <div>
        <BaseInput v-model="shipping.name" placeholder="Name" />
        <BaseError v-if="formErrors.name" :message="formErrors.name" />
      </div>

      <div>
        <BaseInput v-model="shipping.secondName" placeholder="Second Name" />
        <BaseError v-if="formErrors.secondName" :message="formErrors.secondName" />
      </div>

      <div>
        <BaseInput v-model="shipping.address" placeholder="Address and number" />
        <BaseError v-if="formErrors.address" :message="formErrors.address" />
      </div>

      <div>
        <BaseInput v-model="shipping.shippingNote" placeholder="Shipping note (optional)" />
      </div>

      <div>
        <BaseInput v-model="shipping.postalCode" placeholder="Postal Code" />
        <BaseError v-if="formErrors.postalCode" :message="formErrors.postalCode" />
      </div>

      <div>
        <BaseInput v-model="shipping.city" placeholder="City" />
        <BaseError v-if="formErrors.city" :message="formErrors.city" />
      </div>

      <div>
        <CustomSelect v-model="shipping.province" :options="provinces" label="Province" placeholder="Select Province" />
        <BaseError v-if="formErrors.province" :message="formErrors.province" />
      </div>

      <div>
        <CustomSelect v-model="shipping.country" :options="countries" label="Country" placeholder="Select Country" />
        <BaseError v-if="formErrors.country" :message="formErrors.country" />
      </div>

  
    </form>
  </div>
</template>