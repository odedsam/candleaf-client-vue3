<script lang="ts" setup>
import DetailsSection from '../components/products/productId/DetailsSection.vue'
import ImageSection from '@/components/products/productId/ImageSection.vue'
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue'
import { ingredients, descriptionSection } from '@/constants/index'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'

import { computed } from 'vue'

/* ProductStore */
const { selectedProduct } = storeToRefs(useProductStore())

const priceNormalizer = computed(() => {
  return selectedProduct.value && selectedProduct.value.price ? parseFloat(selectedProduct.value.price.toFixed(2)) : 0
})
</script>

<template>
  <main v-if="selectedProduct" class="grid grid-flow-row h-full w-full max-sm:py-12 items-center">
    <ImageSection :image="selectedProduct.image" :description="descriptionSection" />
    <DetailsSection :selectedProduct="selectedProduct" :priceNormalizer="priceNormalizer" :ingredients="ingredients" />
  </main>
  <div v-else="">
    <LoadingSpinner />
  </div>
</template>
