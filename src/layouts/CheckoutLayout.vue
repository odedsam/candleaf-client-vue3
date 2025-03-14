<script setup lang="ts">
import {RouterView } from 'vue-router'
import CheckoutHeader from '@/components/checkout/atoms/CheckoutHeader.vue'
import CheckoutFooter from '@/components/checkout/atoms/CheckoutFooter.vue'
</script>

<template>
  <div>
    <CheckoutHeader />
     <!-- Dynamic Checkout Content -->
    <div class="flex-1 px-4 md:px-6 lg:px-8 pb-8">
      <RouterView />
    </div>
    <!-- Footer Navigation -->
    <CheckoutFooter />
  </div>
</template>
