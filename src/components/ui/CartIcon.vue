<script setup lang="ts">
import {useCartStore} from '@/stores/cartStore'
import {storeToRefs} from 'pinia'

const cartStore = useCartStore()
const {totalItems} = storeToRefs(cartStore)

</script>

<template>
  <div class="relative">
    <img
      src="/cartHeader.svg"
      alt="cart-white-icon"
      class="w-5 h-5 cursor-pointer"
    />
    <span
      v-if="totalItems > 0"
      class="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full"
    >
      {{ totalItems }}
    </span>
  </div>
</template>
