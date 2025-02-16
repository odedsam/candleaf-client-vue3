<script lang="ts" setup>
import blueBerries from '@/assets/catalog/blueberriesCup.svg'
import cherries from '@/assets/catalog/cherriesCup.svg'
import cinnamon from '@/assets/catalog/cinnamonCup.svg'
import lemon from '@/assets/catalog/lemonCup.svg'
import levander from '@/assets/catalog/levanderCup.svg'
import orange from '@/assets/catalog/orangeCup.svg'
import spiced from '@/assets/catalog/spicedCup.svg'
import strawberry from '@/assets/catalog/strawberryCup.svg'

const catalog = [
  { id: 1, name: 'Spiced Mint', price: '9.99$', image: spiced },
  { id: 2, name: 'Sweet Strawberry', price: '9.99$', image: strawberry },
  { id: 3, name: 'Cool Blueberries', price: '9.99$', image: blueBerries },
  { id: 4, name: 'Juicy Lemon', price: '9.99$', image: lemon },
  { id: 5, name: 'Orange Cup', price: '9.99$', image: orange },
  { id: 6, name: 'Fragrant Cinnamon', price: '9.99$', image: cinnamon },
  { id: 7, name: 'Summer Cherries', price: '9.99$', image: cherries },
  { id: 8, name: 'Clean Lavander', price: '9.99$', image: levander },
]
</script>
<template>
  <section class="text-center py-12">
    <h2 class="text-3xl font-bold text-gray-900">Products</h2>
    <p class="text-gray-500">Order it for you or for your beloved ones</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="cat in catalog" :key="cat.id">
        <div class="bg-gray-200 shadow-lg rounded-lg p-4 text-center">
          <img :src="cat.image" :alt="cat.name" class="mx-auto w-30 h-30 object-cover" />
        </div>
        <div class="bg-white shadow-lg rounded-xl">
          <h3 class="text-gray-900 font-medium ">{{ cat.name }}</h3>
          <p class="text-green-600 font-semibold mt-2">{{ cat.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
