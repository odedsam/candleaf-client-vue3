<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  isConfirmed: boolean;
  orderId?: string;
  userName?: string;
}>();

const confirmationMessage = computed(() => {
  return props.isConfirmed
    ? `Thank you ${props.userName} for buying Candleaf. The nature is grateful to you. Now that your order is confirmed, it will be ready to ship in 2 days. Please check your inbox in the future for order updates.`
    : 'Your payment is being processed. Please wait...';
});
</script>

<template>
  <div class="flex flex-col items-center text-center p-6 max-w-md mx-auto">
    <div
      v-if="isConfirmed"
      class="flex justify-center opacity-60 items-cente w-[6.25rem] h-[6.25rem] bg-green-white border-6 border-[#56B280] rounded-full mb-4">
      <img src="/order-confirmed.svg" alt="" class="" />
    </div>

    <h2 class="text-3xl font-medium text-gray-900">Payment {{ isConfirmed ? 'Confirmed' : 'Pending' }}</h2>

    <p v-if="isConfirmed" class="text-[#56B280] font-semibold mt-1">ORDER #{{ orderId }}</p>

    <p class="text-gray-600 text-sm mt-4 leading-relaxed">
      {{ confirmationMessage }}
    </p>
  </div>
</template>
