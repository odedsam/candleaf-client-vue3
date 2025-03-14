<script setup lang="ts">
import PaymentConfirmation from '@/components/checkout/atoms/PaymentConfirmation.vue';
import { ref } from 'vue';

// Dynamic data
const isPaymentConfirmed = ref(true); // Toggle this for testing
const orderId = ref("2039");
const userName = ref("Joe");
</script>

<template>
  <PaymentConfirmation :isConfirmed="isPaymentConfirmed" :orderId="orderId" :userName="userName" />
</template>