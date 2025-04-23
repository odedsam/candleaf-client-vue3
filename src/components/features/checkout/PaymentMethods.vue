<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import TablerLock from '~icons/tabler/lock'
import TablerCreditCard from '~icons/tabler/credit-card'
import TablerCalendar from '~icons/tabler/calendar'
import TablerUser from '~icons/tabler/user'


const paymentData = ref({
  cardNumber: '',
  holderName: '',
  expiration: '',
  cvv: ''
})
</script>

<template>
  <div class="font-poppins my-4">
    <h2 class="text-lg font-semibold mb-3">Payment method</h2>
    <BaseInput v-model="paymentData.cardNumber" placeholder="Card Number" :icon="TablerCreditCard" />
    <BaseInput v-model="paymentData.holderName" placeholder="Holder Name" :icon="TablerUser" />

    <div class="flex gap-2">
      <BaseInput v-model="paymentData.expiration" placeholder="EXP (MM/YY)" :icon="TablerCalendar" size="half" />
      <BaseInput v-model="paymentData.cvv" placeholder="CVV" :icon="TablerLock" size="half" />
    </div>
  </div>
</template>
