<script setup lang="ts">
import {useCartStore} from '@/stores/cartStore'
import {useRouter} from 'vue-router'
import CartItem from '@/components/shared/CartItem.vue'
import {storeToRefs} from 'pinia'

const cartStore = useCartStore()
const {cartItems} = storeToRefs(cartStore)
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(`${path}`)
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <div v-if="cartItems.length > 0">
      <h2 class="text-2xl text-center font-semibold dark:text-white">Your Cart items</h2>
      <button class="w-full text-green-600 text-center mt-2 cursor-pointer" @click="navigateTo('/products')">Back to shopping</button>
      <div class="mt-6 border-t border-gray-300">
        <div class="grid grid-cols-5 py-4 font-semibold text-gray-600 text-center">
          <span class="text-left col-span-2">Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @remove="cartStore.removeFromCart"
          @increase="cartStore.increaseQuantity"
          @decrease="cartStore.decreaseQuantity"
        />

        <div class="border-t border-gray-300 py-6 text-right">
          <p class="text-lg font-semibold dark:text-white">
            Sub-total:
            <span class="ml-4">$ {{ cartStore.subTotal.toFixed(2) }}</span>
          </p>
          <p class="text-gray-500 mt-1">Tax and shipping cost will be calculated later</p>
          <button class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg cursor-pointer" @click="navigateTo('/checkout/details')">
            Check-out
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <h2 class="text-2xl text-center font-semibold">No items in cart</h2>
      <button class="w-full text-green-600 text-center mt-2" @click="navigateTo('/products')">Back to shopping</button>
    </div>
  </div>
</template>
