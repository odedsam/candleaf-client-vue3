<script lang="ts" setup>
import blueBerries from '@/assets/catalog/blueberriesCup.svg'
import lemon from '@/assets/catalog/lemonCup.svg'
import spiced from '@/assets/catalog/spicedCup.svg'
import strawberry from '@/assets/catalog/strawberryCup.svg'

const catalog = [
  { id: 1, name: 'Spiced Mint', price: '9.99$', image: spiced },
  { id: 2, name: 'Sweet Strawberry', price: '9.99$', image: strawberry },
  { id: 3, name: 'Cool Blueberries', price: '9.99$', image: blueBerries },
  { id: 4, name: 'Juicy Lemon', price: '9.99$', image: lemon },
]
</script>
<template>
  <section class="text-center py-12">
    <h2 class="text-3xl font-bold text-gray-900">Popular</h2>
    <p class="text-gray-500">Our top selling product that you may like</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="cat in catalog" :key="cat.id">
        <div class="bg-gray-200 shadow-lg rounded-lg p-4 text-center">
          <img :src="cat.image" :alt="cat.name" class="mx-auto w-30 h-30 object-cover" />
        </div>
        <div class="bg-white shadow-lg rounded-xl">
          <h3 class="text-gray-900 font-medium">{{ cat.name }}</h3>
          <p class="text-green-600 font-semibold mt-2">{{ cat.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
