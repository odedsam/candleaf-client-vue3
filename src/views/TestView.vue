<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import useDebouncer from '@/composables/useDebouncer';
import BaseInput from '@/components/base/BaseInput.vue';

interface Address {
  country?: string;
  city?: string;
  road?: string;
  postcode?: string;
}

interface NominatimResponse {
  address?: Address;
}

const country = defineModel<string>('country', { default: '' });
const city = defineModel<string>('city', { default: '' });
const street = defineModel<string>('street', { default: '' });
const zip = defineModel<string>('zip', { default: '' });
</script>

<template>
  <div class="h-screen">
    <div class="grid gap-2.5">
      <BaseInput v-model="street" placeholder="Street" />
      <BaseInput v-model="zip" placeholder="Zip" />
      <BaseInput v-model="city" placeholder="City" />
      <BaseInput v-model="country" placeholder="Country" />
    </div>
  </div>
</template>
