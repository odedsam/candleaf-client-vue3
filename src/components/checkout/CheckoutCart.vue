<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";
import CartItem from "@/components/shared/CartItem.vue";

const cartStore = useCartStore();
const router = useRouter();

const goToDetails = () => {
  router.push('/products'); 
};

</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 text-center">Your Cart Items</h1>

    <div v-if="cartStore.cartItems.length > 0">
      <div class="mt-6 border-t border-gray-300">
        <div class="grid grid-cols-5 py-4 font-semibold text-gray-600 text-center">
          <span class="text-left col-span-2">Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        <CartItem
          v-for="item in cartStore.cartItems"
          :key="item.id"
          :item="item"
          @remove="cartStore.removeFromCart"
          @increase="cartStore.increaseQuantity"
          @decrease="cartStore.decreaseQuantity"
        />

        <div class="border-t border-gray-300 py-6 text-right">
          <p class="text-lg font-semibold">
            Sub-total:
            <span class="ml-4">$ {{ cartStore.subTotal.toFixed(2) }}</span>
          </p>
          <p class="text-gray-500 mt-1">Tax and shipping cost will be calculated later</p>
          <button class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg" @click="goToDetails">
            Check-out
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center text-lg">No items in cart</p>
    </div>
  </div>
</template>