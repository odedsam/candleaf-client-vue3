<script lang="ts" setup>
import { onMounted } from "vue"
import { useCartStore } from "@/stores/cartStore"
import CartModal from "@/components/shared/CartModal.vue"

/*
hybrid approach 
cross device syncing
*/


const cartStore = useCartStore()

onMounted(cartStore.loadCart)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">Your Cart</h1>
    <ul v-if="cartStore.items.length" class="space-y-4">
      <li v-for="item in cartStore.items" :key="item.productId" class="p-4 border rounded-lg shadow">
        <p>Product ID: {{ item.productId }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <button @click="cartStore.removeFromCart(item.productId)" class="bg-red-500 text-white px-4 py-1 rounded-md">
          Remove
        </button>
      </li>
    </ul>
    <p v-else>
      <CartModal />
      Your cart is empty.</p>
  </div>
</template>