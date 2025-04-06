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
  <div class="grid grid-rows-3 py-4 max-sm:py-2 pl-4 max-sm:pl-2 ml-auto border-2 border-gray-400 rounded-xl w-full">


    <span class="break-after-all">
      <strong class="text-black text-base font-normal max-sm:text-xs dark:text-white">Wax:</strong>
      <small class="text-haki text-base max-sm:text-xs ml-[0.3rem]">{{ ingredients?.wax }}</small>
    </span>
    <span class="break-after-all">
      <strong class="text-black text-base font-normal max-sm:text-xs dark:text-white">Fragrance:</strong>
      <small class="text-haki text-base max-sm:text-xs ml-[0.3rem]">{{ ingredients?.fragrance }}</small>
    </span>
    <span class="sp-group">
      <strong class="text-black text-base font-normal max-sm:text-xs dark:text-white">BurningTime:</strong>
      <small class="text-haki text-base max-sm:text-xs ml-[0.3rem]">{{ ingredients?.burningTime }}</small>
      <strong class="text-black text-base font-normal mx-1.5 max-sm:text-xs dark:text-white">Dimension:</strong>
      <small class="text-haki text-base max-sm:text-xs">{{ ingredients?.dimensions }}</small>
      <strong class="text-black text-base font-normal mx-1.5 max-sm:text-xs dark:text-white">Weight:</strong>
      <small class="text-haki text-base max-sm:text-xs dark:text-white">{{ ingredients?.weight }}</small>
    </span>
  </div>
</template>

