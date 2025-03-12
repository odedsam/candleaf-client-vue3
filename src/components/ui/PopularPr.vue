<script lang="ts" setup>
import blueBerries from '@/assets/catalog/blueberriesCup.svg'
import lemon from '@/assets/catalog/lemonCup.svg'
import spiced from '@/assets/catalog/spicedCup.svg'
import strawberry from '@/assets/catalog/strawberryCup.svg'
import { useNavigateToProduct } from '@/composables/useNavigateToProduct'
import { type PropType } from 'vue'

interface PopularProducts {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity?: number;
    basePrice?: number;
}

const { navigateToProduct} = useNavigateToProduct()

const props = defineProps({
  popularProducts: {
    type: Array as PropType<PopularProducts[]>,
  }
});


</script>
<template>
  <section class="text-center py-12">
    <h2 class="text-3xl font-bold text-gray-900">Popular</h2>
    <p class="text-gray-500">Our top selling product that you may like</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="popular in props.popularProducts" :key="popular.id">
        <div class="bg-gray-200 shadow-lg rounded-lg p-4 text-center">
          <img :src="popular.image" :alt="popular.title" 
           @click="navigateToProduct(popular)"
          class="mx-auto w-30 h-30 object-cover"  />
        </div>
        <div class="bg-white shadow-lg rounded-xl">
          <h3 class="text-gray-900 font-medium">{{ popular.title }}</h3>
          <p class="text-green-600 font-semibold mt-2">{{ popular.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
