#  cart modal store : 

<script lang="ts" setup>
import {RouterLink} from 'vue-router'
import {ref} from 'vue'
import {onMounted} from 'vue'
import {useCartStore} from '@/stores/cartStore'
import CartModal from '@/components/shared/CartModal.vue'
import {storeToRefs} from 'pinia'

/*
hybrid approach 
cross device syncing
*/

const cartStore = useCartStore()

const {cartItems} = storeToRefs(cartStore)



onMounted(cartStore.loadCart)
const quantity = ref(1)
const price = 9.99
const subtotal = ref(price)

const increaseQuantity = () => {
  quantity.value++
  subtotal.value = quantity.value * price
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
    subtotal.value = quantity.value * price
  }
}
console.log("cartItems : ",cartItems);
</script>

<template>
  <div class="p-10 max-w-4xl mx-auto h-screen">
    <h2 class="text-2xl text-center font-semibold">Your cart items</h2>
    <RouterLink to="/" class="text-green-600 block text-center mt-2">
      Back to shopping
    </RouterLink>
    <div class="mt-6 border-t border-gray-300">
      <div
        class="grid grid-cols-5 py-4 font-semibold text-gray-600 text-center"
      >
        <span class="text-left col-span-2">Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      <!-- product-section -->

      <div
        class="border-t border-gray-300 py-4 grid grid-cols-5 items-center text-center"
      >
        <div class="flex items-center col-span-2 text-left">
          <img
            :src="@/assets/catalog/blueberriesCup.svg"
            alt="Product Image"
            class="w-24 h-24 object-cover"
          />
          <div class="ml-4">
            <p class="text-lg font-semibold">Spiced Mint Candleaf®</p>
            <a href="#" class="text-green-600">Remove</a>
          </div>
        </div>
        <span class="text-center">$ {{ price.toFixed(2) }}</span>
        <div
          class="flex items-center justify-center border rounded w-24 mx-auto"
        >
          <button @click="decreaseQuantity" class="px-2 border-r">-</button>
          <span class="px-4">{{ quantity }}</span>
          <button @click="increaseQuantity" class="px-2 border-l">+</button>
        </div>
        <span class="text-center">$ {{ subtotal.toFixed(2) }}</span>
      </div>
    </div>

    <div class="border-t border-gray-300 py-6 text-right">
      <p class="text-lg font-semibold">
        Sub-total:
        <span class="ml-4">$ {{ subtotal.toFixed(2) }}</span>
      </p>
      <p class="text-gray-500 mt-1">
        Tax and shipping cost will be calculated later
      </p>
      <button class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">
        Check-out
      </button>
    </div>
  </div>
</template>

<style scoped></style>
