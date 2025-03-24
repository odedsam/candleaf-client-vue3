<script lang="ts" setup>
import { useNavigateToProduct } from '@/composables/useNavigateToProduct';
import { type PropType } from 'vue';

interface CatalogProduct {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
    basePrice: number;
}

const { navigateToProduct } = useNavigateToProduct()
const props = defineProps({
  products: {
    type: Array as PropType<CatalogProduct[]>,
    required: true
  }
});

</script>

<template>
  <section class="text-center py-12">
    <h2 class="text-3xl font-poppins font-medium dark:text-white text-gray-900">Products</h2>
    <p class="text-mgr font-poppins font-medium mt-4">Order it for you or for your beloved ones</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="cat in props.products" 
        :key="cat.id" 
        class="cursor-pointer"
        @click="navigateToProduct(cat)">
     
        <div class="bg-gray-200 shadow-lg rounded-lg p-4 text-center">
          <img :src="cat.image" :alt="cat.title" class="mx-auto w-30 h-30 object-cover" />
        </div>

        <div class="bg-white shadow-lg rounded-xl pl-4">
          <h3 class="font-poppins font-medium text-[#1D293F] text-base text-start pt-2.5">{{ cat.title }}</h3>
          <p class="text-primary text-xl font-roboto font-medium text-start pt-2.5 pb-2">{{ cat.price }}</p>
        </div>
      </div>
    </div>
  </section> 
</template>

