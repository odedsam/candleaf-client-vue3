<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import CartItem from '@/components/shared/CartItem.vue';

const router = useRouter();
const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);
const navigateTo = (path: string) => {
  router.push(`${path}`);
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="cartItems.length > 0">
      <h2 class="text-2xl text-center font-helvetica text-gray-500 dark:text-white">Your Cart Items</h2>
      <button class="w-full font-poppins text-green-600 text-center mt-2 cursor-pointer hover:underline" @click="navigateTo('/products')">
        Back to shopping
      </button>
      <div class="mt-6">
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @remove="cartStore.removeFromCart"
          @increase="cartStore.increaseQuantity"
          @decrease="cartStore.decreaseQuantity" />

        <div class="py-6 text-right font-poppins">
          <p class="text-lg font-semibold dark:text-white">
            Sub-total:
            <span class="ml-4">$ {{ cartStore.subTotal.toFixed(2) }}</span>
          </p>
          <p class="text-gray-500 mt-1">Tax and shipping cost will be calculated later</p>
          <button
            class="mt-4 px-6 py-2 font-poppins bg-[#56B280] text-white rounded-lg cursor-pointer"
            @click="navigateTo('/checkout/details')">
            Check-out
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <h2 class="text-2xl text-center font-sans font-semibold">No items In Cart</h2>
      <button class="w-full text-green-600 font-sans hover:underline text-center mt-2" @click="navigateTo('/products')">
        Back to Shopping
      </button>
    </div>
  </div>
</template>
