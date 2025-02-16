<script lang="ts" setup>
import { ref } from 'vue';

const quantity = ref(1);
const price = 9.99;
const subtotal = ref(price);

const increaseQuantity = () => {
  quantity.value++;
  subtotal.value = quantity.value * price;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
    subtotal.value = quantity.value * price;
  }
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl text-center font-semibold">Your cart items</h2>
    <a href="#" class="text-green-600 block text-center mt-2">Back to shopping</a>

    <div class="mt-6 border-t border-gray-300">
      <div class="grid grid-cols-5 py-4 font-semibold text-gray-600">
        <span class="col-span-2">Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      <div class="border-t border-gray-300 py-4 flex items-center">
        <img src="@/assets/catalog/spicedCup.svg" alt="Product Image" class="w-24 h-24 object-cover" />
        <div class="ml-4 flex-1">
          <p class="text-lg font-semibold">Spiced Mint Candleaf®</p>
          <a href="#" class="text-green-600">Remove</a>
        </div>
        <span class="w-20 text-center">$ {{ price.toFixed(2) }}</span>
        <div class="flex items-center border rounded">
          <button @click="decreaseQuantity" class="px-2 border-r">-</button>
          <span class="px-4">{{ quantity }}</span>
          <button @click="increaseQuantity" class="px-2 border-l">+</button>
        </div>
        <span class="w-20 text-center">$ {{ subtotal.toFixed(2) }}</span>
      </div>
    </div>

    <div class="border-t border-gray-300 py-4 text-right">
      <p class="text-lg font-semibold">Sub-total: $ {{ subtotal.toFixed(2) }}</p>
      <p class="text-gray-500">Tax and shipping cost will be calculated later</p>
      <button class="mt-4 px-6 py-2 bg-green-600 text-white rounded">Check-out</button>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: #f3f4f6;
}
button:hover {
  background-color: #e5e7eb;
}
</style>
