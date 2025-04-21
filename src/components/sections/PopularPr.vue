<script lang="ts" setup>
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
  <section class="text-center py-12 px-4">
    <h2 class="text-4xl font-medium font-poppins text-black dark:text-white">Popular</h2>
    <p class="text-gray-500 font-poppins font-medium pt-4 text-lg">Our top selling product that you may like</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="popular in props.popularProducts" :key="popular.id">
        <div class="bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg p-4 text-center">
          <img :src="popular.image" :alt="popular.title"
           @click="navigateToProduct(popular)"
          class=" w-full h-full object-cover"  />
        </div>
        <div class="bg-white dark:bg-gray-300 shadow-lg rounded-xl pt-4 pl-3">
          <h3 class="text-start text-black font-poppins font-medium pt-2.5">{{ popular.title }}</h3>
          <p class="text-start text-xl text-primary font-roboto font-medium mt-2 pb-4">${{ popular.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
