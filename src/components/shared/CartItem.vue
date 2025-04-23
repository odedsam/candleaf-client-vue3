<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { normalizeTitle } from '@/utils/formatters'
import QuantityInput from '@/components/shared/QuantityInput.vue'

const props = defineProps<{
  item: {
    id: string | number
    image: string
    title: string
    price: number
    quantity: number
  }
}>()
const cartStore = useCartStore()

const remove = () => cartStore.removeFromCart(props.item.id as number)
const increase = () => cartStore.increaseQuantity(props.item.id as number)
const decrease = () => cartStore.decreaseQuantity(props.item.id as number)
</script>

<template>
  <div class="border-y border-gray-300 py-4 flex items-start gap-2">


      <div class="flex shrink-0">
        <img :src="item.image" alt="product-Image" class="w-40 h-40 md:w-44 md:h-44 object-fit" />
      </div>


      <div class=" flex flex-col items-start gap-2 text-left text-base md:text-lg font-poppins">
        <p class="font-semibold dark:text-white">{{ normalizeTitle(item.title) }}</p>
        <p class="font-semibold dark:text-white">$ {{ item.price.toFixed(2) }}</p>
        <button class="text-green-600 font-roboto cursor-pointer hover:underline" @click="remove">Remove</button>
        <p class="text-gray-800 dark:text-white">Quantity</p>
        <QuantityInput :quantity="item.quantity" :increaseQty="increase" :decreaseQty="decrease" :wrapperClass="'text-start'"/>
      </div>




  </div>
</template>
