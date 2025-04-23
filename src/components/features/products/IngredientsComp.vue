<script setup lang="ts">
defineProps<{
  ingredients: {
    wax: string
    fragrance: string
    burningTime: string
    dimensions: string
    weight: string
  }
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
    <div class="flex flex-col">
      <span class="text-sm text-gray-500 dark:text-gray-400">Wax</span>
      <span class="font-semibold text-gray-800 dark:text-white">{{ ingredients.wax }}</span>
    </div>
    <div class="flex flex-col">
      <span class="text-sm text-gray-500 dark:text-gray-400">Fragrance</span>
      <span class="font-semibold text-gray-800 dark:text-white">{{ ingredients.fragrance }}</span>
    </div>
    <div class="flex flex-col">
      <span class="text-sm text-gray-500 dark:text-gray-400">Burning Time</span>
      <span class="font-semibold text-gray-800 dark:text-white">{{ ingredients.burningTime }}</span>
    </div>
    <div class="flex flex-col">
      <span class="text-sm text-gray-500 dark:text-gray-400">Dimensions</span>
      <span class="font-semibold text-gray-800 dark:text-white">{{ ingredients.dimensions }}</span>
    </div>
    <div class="flex flex-col">
      <span class="text-sm text-gray-500 dark:text-gray-400">Weight</span>
      <span class="font-semibold text-gray-800 dark:text-white">{{ ingredients.weight }}</span>
    </div>
  </div>
</template>
