<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { normalizeTitle } from "@/utils/formatters"

const props = defineProps<{
  item: {
    id: string | number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  };
}>();
const cartStore = useCartStore()

const remove = () => cartStore.removeFromCart(props.item.id as number);
const increase = () => cartStore.increaseQuantity(props.item.id as number);
const decrease = () => cartStore.decreaseQuantity(props.item.id as number);
</script>

<template>
  <div class="border-t border-gray-300 py-4 grid grid-cols-5 items-center text-center">
    <div class="flex items-center col-span-2 text-left">
      <img :src="item.image" alt="Product-Image" class="w-24 h-24 object-cover" />
      <div class="ml-4">
        <p class="text-lg font-semibold dark:text-white">{{ normalizeTitle(item.title) }}</p>
        <button class="text-green-600 cursor-pointer" @click="remove">
          Remove
        </button>
      </div>
    </div>
    <span class="text-center dark:text-white">$ {{ item.price.toFixed(2) }}</span>
    <div class="flex items-center justify-center border rounded w-24 mx-auto dark:text-white">
      <button @click="decrease" class="px-2 border-r dark:text-white">-</button>
      <span class="px-4 dark:text-white">{{ item.quantity }}</span>
      <button @click="increase" class="px-2 border-l dark:text-white">+</button>
    </div>
    <span class="text-center dark:text-white">$ {{ (item.price * item.quantity).toFixed(2) }}</span>
  </div>
</template>
