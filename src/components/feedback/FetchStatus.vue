<script setup lang="ts">
import CatalogGrid from '@/components/sections/CatalogGrid.vue'

defineProps<{
  isLoading: boolean;
  error: string | null | boolean;
  data: any | boolean | null;
}>();
</script>

<template>
  <div class="min-h-[600px] w-full">
    <template v-if="isLoading">
      <div class="flex h-[600px] justify-center items-center">
        <i-tabler-loader-2 class="w-10 h-10 text-[#56B280] animate-spin" />
      </div>
    </template>

    <template v-else-if="error">
      <div class="flex h-[600px] justify-center items-center text-center text-red-500">
        <p>{{ error }}</p>
      </div>
    </template>

    <template v-else-if="!data">
      <div class="flex h-[600px] justify-center items-center text-center text-gray-500">
        <p>No products found.</p>
      </div>
    </template>

    <template v-else>
      <CatalogGrid :products="data" />
      <slot />
    </template>
  </div>
</template>
