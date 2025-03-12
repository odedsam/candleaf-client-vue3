<script setup lang="ts">
import CatalogGrid from '@/components/ui/CatalogGrid.vue'

defineProps<{ 
  isLoading: boolean; 
  error: string | null | boolean; 
  data: any | boolean | null; 
}>();
</script>

<template>
  <div v-if="isLoading" class="text-center py-4 text-blue-500">
    <p>Loading products...</p>
  </div>

  <div v-else-if="error" class="text-center py-4 text-red-500">
    <p>{{ error }}</p>
  </div>

  <div v-else-if="!data" class="text-center py-4 text-gray-500">
    <p>No products found.</p>
  </div>

  <div v-else>
    <CatalogGrid :products="data" /> 
    <slot />  <!-- rest of the content like FeaturesProduct, TestimonialsComp, etc.. -->
  </div>
</template>
