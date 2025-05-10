<script setup lang="ts">
import { ref } from 'vue';
import PaymentConfirmation from '@/components/features/checkout/PaymentConfirmation.vue';

const isPaymentConfirmed = ref(true);
const orderId = ref("2039");
const userName = ref("Joe");
</script>

<template>
  <PaymentConfirmation :isConfirmed="isPaymentConfirmed" :orderId="orderId" :userName="userName" />
</template>
