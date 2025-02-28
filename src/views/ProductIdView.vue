
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import DetailsSection from '@/components/products/productId/DetailsSection.vue'
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue'
import { ingredients, descriptionSection } from '@/constants'
import { useProductStore } from '@/stores/productStore'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const route = useRoute()
const productId = computed(() => route.params.id)

const store = useProductStore();
const {mergedProducts} =storeToRefs(store);
console.log(" mergedProducts:", mergedProducts.value)

const selectedProduct = computed(() => {
  return mergedProducts.value.find(
    (product) => product.id.toString() === productId.value
  ) || null
});
const priceNormalizer = computed(() => {
  return selectedProduct.value?.price ? parseFloat(selectedProduct.value.price.toFixed(2)) : 0
})


</script>

<template>
  <main v-if="selectedProduct" class="grid grid-flow-row h-full w-full max-sm:py-12 items-center">
    <DetailsSection 
      :selectedProduct="selectedProduct" 
      :priceNormalizer="priceNormalizer" 
      :ingredients="ingredients"
      :description="descriptionSection"
    />
  </main>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>
