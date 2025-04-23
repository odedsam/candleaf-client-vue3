<script setup lang="ts">
defineProps<{
  image: string;
  description: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3 max-h-[700px]">
    <img
      :src="image"
      alt="prod-image"
      class="w-[90%] h-full max-h-[700px] object-cover rounded-lg md:w-full md:h-full md:object-contain"
      draggable="false" />
    <p class="text-black text-base font-sans font-semibold text-center dark:text-white">{{ description }}</p>
    <p class="text-green text-base font-sans font-semibold text-center text-[#56B280]">🚚 FREE SHIPPING</p>
  </div>
</template>
