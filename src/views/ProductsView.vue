<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'

const store = useProductStore()
const { products, isLoading, error } = storeToRefs(store)
const { fetchProducts } = useProductStore()

setTimeout(() => {
  fetchProducts()
}, 500)
</script>

<template>
  <div class="p-6">
    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="p-4 bg-white shadow-lg rounded-xl">
        <img :src="product.image" alt="Product" class="w-full h-40 object-cover rounded-lg mb-4" />
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600">${{ product.price }}</p>

        <!-- Add to Cart Button with Motion -->
        <button
          ref="cartRef"
          class="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
          @click="addToCart(product, $event)"
          v-motion="{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
            tap: { scale: 0.9 },
          }"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Flying Animation -->
    <img
      v-if="flyingItem"
      :src="flyingItem.image"
      class="absolute w-16 h-16 rounded-full"
      v-motion="{
        initial: { opacity: 1, scale: 1, x: flyingItem.x, y: flyingItem.y },
        enter: {
          opacity: 0,
          scale: 0.5,
          x: '90vw',
          y: 20,
          transition: { duration: 0.6, ease: 'easeInOut' },
        },
      }"
    />

    <!-- Cart Icon with Badge Animation -->
    <div class="fixed top-4 right-4">
      <div class="relative">
        <div class="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full">
          🛒
        </div>
        <div
          v-if="showCartBadge"
          class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
          v-motion="{
            initial: { scale: 0 },
            enter: { scale: 1, transition: { type: 'spring', stiffness: 300 } },
          }"
        >
          {{ cartStore.cartCount }}
        </div>
      </div>
    </div>
  </div>
</template>
