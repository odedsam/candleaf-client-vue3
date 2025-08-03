<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { ref } from 'vue';
import InfoDisplay from '@/components/features/checkout/InfoDisplay.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import TablerLock from '~icons/tabler/lock';
import TablerCreditCard from '~icons/tabler/credit-card';
import TablerCalendar from '~icons/tabler/calendar';
import TablerUser from '~icons/tabler/user';
import BillingAddress from '@/components/features/checkout/BillingAddress.vue';
import StepButtons from '@/components/features/checkout/StepButtons.vue';

const checkoutStore = useCheckoutStore();

const { shipping, formattedShippingAddress, paymentData, shippingOptions } = storeToRefs(checkoutStore);

const newInfo = ref({
  newContact: '',
  newShippingInfo: '',
  newMethod: '',
});

const selectedShippingMethod = shippingOptions.value[0];
const editContact = (contact?: any) => {
  if (contact) newInfo.value.newContact = contact;
};
const editShipping = (newShipping?: any) => {
  if (shipping) newInfo.value.newShippingInfo = newShipping;
};
const editMethod = (method?: any) => {
  if (method) newInfo.value.newMethod = method;
};

const submitted = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  submitted.value = true;
  try {
    checkoutStore.submitFormData();
  } catch (err: any) {
    console.log(err);
    submitted.value = false;
    errorMessage.value = err;
  } finally {
    submitted.value = false;
  }
};
</script>

<template>
  <div class="dark:bg-gray-400 dark:border-2">
    <InfoDisplay label="Contact" :value="shipping.email" @edit-content="editContact" />
    <hr class="border-gray-200" />

    <InfoDisplay label="Ship to" :value="formattedShippingAddress" @edit-content="editShipping" />
    <hr class="border-gray-200" />

    <InfoDisplay
      label="Method"
      :value="`${selectedShippingMethod.label} - ${selectedShippingMethod.price === 0 ? 'FREE' : `$${selectedShippingMethod.price.toFixed(2)}`}`"
      @edit-content="editMethod" />

    <div class="font-poppins my-4">
      <h2 class="text-lg font-semibold mb-3">Payment method</h2>
      <BaseInput v-model="paymentData.cardNumber" placeholder="Card Number" :icon="TablerCreditCard" />
      <BaseInput v-model="paymentData.holderName" placeholder="Holder Name" :icon="TablerUser" />

      <div class="flex gap-2">
        <BaseInput v-model="paymentData.expiration" placeholder="EXP (MM/YY)" :icon="TablerCalendar" size="half" />
        <BaseInput v-model="paymentData.cvv" placeholder="CVV" :icon="TablerLock" size="half" />
      </div>
    </div>

    <div>
      <p class="text-lg font-semibold mt-6 mb-3 font-poppins text-center">Tax Information</p>
      <!-- <BaseInput v-model="payment.vatNumber" size="full" placeholder="VAT number (optional)" />
      <BaseInput v-model="payment.pec" size="full" placeholder="PEC (optional)" /> -->
    </div>

    <BillingAddress />
    <StepButtons
      primaryText="Confirmation"
      secondaryText="Back To Shipping"
      primaryRoute="/checkout/confirmation"
      secondaryRoute="/checkout/shipping"
      :validate="() => true"
      @click="handleSubmit" />
  </div>
</template>
