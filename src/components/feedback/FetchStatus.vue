<script setup lang="ts">
import CatalogGrid from '@/components/sections/CatalogGrid.vue'

defineProps<{
  isLoading: boolean;
  error: string | null | boolean;
  data: any | boolean | null;
}>();
</script>

<template>
   <div v-if="isLoading" class="flex h-[600px] justify-center items-center py-20">
    <div class="relative w-16 h-16">
      <div class="absolute inset-0 rounded-full border-4 border-t-transparent border-green-500 animate-spin"></div>
      <div class="absolute inset-2 rounded-full border-4 border-t-transparent border-green-300 animate-[spin_3s_linear_infinite]"></div>
      <span class="absolute inset-0 flex items-center justify-center text-sm font-medium text-green-400 animate-pulse">
        Loading...
      </span>
    </div>
  </div>



  <div v-else-if="error" class="text-center py-4 text-red-500">
    <p>{{ error }}</p>
  </div>

  <div v-else-if="!data" class="text-center py-4 text-gray-500">
    <p>No products found.</p>
  </div>

  <div v-else>
    <CatalogGrid :products="data" />
    <slot />

  </div>
</template>
