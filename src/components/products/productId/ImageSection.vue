<script lang="ts" setup>
defineProps<{ image: string | any, description: string }>()
</script>

<template>
  <div class="p-4 mx-auto">
    <img :src="image" alt="prod-image" class="w-full h-full object-fit" />
    <div class="space-y-2 py-2 px-3 mx-auto md:mt-6">
      <p class="text-black text-base font-roboto font-semibold text-center">{{ description }}</p>
      <p class="text-green text-base font-roboto font-semibold text-center text-[#56B280]">🚚 FREE SHIPPING</p>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
