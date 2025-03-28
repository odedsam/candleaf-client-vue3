<script setup lang="ts">
import {useCartStore} from '@/stores/cartStore'
import {storeToRefs} from 'pinia'

const cartStore = useCartStore()
const {cartAmount} = storeToRefs(cartStore)

</script>

<template>
  <div class="relative">
    <i-tabler-shopping-cart class="w-6 h-6 cursor-pointer relative" />
    <span v-if="cartAmount > 0" class="absolute -top-4 -right-4 bg-[#56B280] text-white text-xs font-bold px-2 py-1 rounded-full">
    {{ cartAmount}}
    </span>
  </div>
</template>
