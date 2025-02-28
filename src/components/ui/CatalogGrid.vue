<script lang="ts" setup>
import { productCatalog } from '@/constants';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateAction = (product:any)=>{
  router.push({
      name: `product-id-view`,
      params: {id: product.id.toString()},
    })
}


</script>

<template>
  <section class="text-center py-12">
    <h2 class="text-3xl font-bold text-gray-900">Products</h2>
    <p class="text-gray-500">Order it for you or for your beloved ones</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div 
        v-for="cat in productCatalog" 
        :key="cat.id" 
        class="cursor-pointer"
        @click="navigateAction(cat)"
      >
        <div class="bg-gray-200 shadow-lg rounded-lg p-4 text-center">
          <img :src="cat.image" :alt="cat.title" class="mx-auto w-30 h-30 object-cover" />
        </div>
        <div class="bg-white shadow-lg rounded-xl pl-4">
          <h3 class="text-gray-900 font-medium text-start pt-2">{{ cat.title }}</h3>
          <p class="text-green-600 font-semibold text-start py-4">{{ cat.price }}</p>
        </div>
      </div>
    </div>
  </section>      
</template>

<style scoped></style>
