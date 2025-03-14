<script lang="ts" setup>
import {useCartStore} from '@/stores/cartStore'
import {storeToRefs} from 'pinia'
import CartIcon from '@/components/ui/CartIcon.vue'
import {ref} from 'vue'

const cartStore = useCartStore()
const {cartItems, subTotal} = storeToRefs(cartStore)

const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
  console.log('Details Toggled:', showDetails.value)
}
</script>

<template>
  <div class="bg-[#f2f2f2] rounded-lg shadow-md overflow-hidden">
    <div class="flex justify-between items-center bg-[#f2f2f2] py-5 px-6">
      <CartIcon />
      <div class="flex gap-3 cursor-pointer items-center" @click="toggleDetails">
        <p class="text-[#56B280] text-lg font-semibold">See Your Details</p>
        <img
          src="/chev-down.svg"
          alt="chevron-down"
          class="w-5 h-5 transition-transform duration-300"
          :class="{'rotate-180': showDetails}"
        />
      </div>

      <p class="text-lg font-semibold text-gray-700">$ {{ subTotal.toFixed(2) }}</p>
    </div>

    <div v-show="showDetails" class="p-6 border-t bg-[#f2f2f2]">
      <div v-if="cartItems.length > 0" class="grid gap-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm"
        >
          <img :src="item.image" :alt="item.title" class="w-20 h-20 object-cover rounded-lg" />

          <div class="flex-1">
            <p class="font-semibold text-gray-900">{{ item.title }}</p>
            <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
          </div>

          <p class="text-lg font-semibold text-green-600">$ {{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-6">
        <p>Your cart is empty</p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
