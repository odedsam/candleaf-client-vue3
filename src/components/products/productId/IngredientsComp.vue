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
  <div
    class="grid grid-rows-3 py-4 max-sm:py-2 pl-4 max-sm:pl-2 ml-auto border-2 border-gray-400 rounded-xl w-full"
  >
    <span class="break-after-all">
      <strong class="text-black text-base font-normal max-sm:text-xs">Wax:</strong>
      <small class="text-haki text-base max-sm:text-xs">{{ ingredients?.wax }}</small>
    </span>
    <span class="break-after-all">
      <strong class="text-black text-base font-normal max-sm:text-xs">Fragrance:</strong>
      <small class="text-haki text-base max-sm:text-xs">{{ ingredients?.fragrance }}</small>
    </span>
    <span class="sp-group">
      <strong class="text-black text-base font-normal max-sm:text-xs">BurningTime:</strong>
      <small class="text-haki text-base max-sm:text-xs">{{ ingredients?.burningTime }}</small>
      <strong class="text-black text-base font-normal max-sm:text-xs">Dimension:</strong>
      <small class="text-haki text-base max-sm:text-xs">{{ ingredients?.dimensions }}</small>
      <strong class="text-black text-base font-normal max-sm:text-xs">Weight:</strong>
      <small class="text-haki text-base max-sm:text-xs">{{ ingredients?.weight }}</small>
    </span>
  </div>
</template>
