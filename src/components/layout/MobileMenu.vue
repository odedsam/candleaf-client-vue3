
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{
  isOpen: boolean
  close: () => void
}>()
</script>

<template>
  <div v-if="props.isOpen"
    class="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center gap-8 text-white text-xl font-semibold transition-opacity duration-200">
    <div class="absolute top-4 right-4">
      <i-tabler-x class="w-6 h-6 text-white cursor-pointer" @click="props.close" />
    </div>
    <RouterLink to="/" @click="props.close" class="font-poppins font-medium text-xl text-white  hover:underline">Home</RouterLink>
    <RouterLink to="/products" @click="props.close" class="font-poppins font-medium text-xl text-white  hover:underline">Discovery</RouterLink>
    <RouterLink to="/about" @click="props.close" class="font-poppins font-medium text-xl text-white hover:underline">About</RouterLink>
    <RouterLink to="/contact" @click="props.close" class="font-poppins font-medium text-xl text-white  hover:underline">Contact Us</RouterLink>
  </div>
</template>

