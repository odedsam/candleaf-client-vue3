
<script setup lang="ts">
import {RouterLink} from 'vue-router'
const props = defineProps<{
  isOpen: boolean
  close: () => void
}>()
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center gap-8 text-white text-xl font-semibold transition-opacity duration-200">
    <RouterLink to="/products" @click="close" class="font-sans font-medium text-sm text-black dark:text-white  hover:underline">Discovery</RouterLink>
    <RouterLink to="/about" @click="close" class="font-sans font-medium text-sm text-black dark:text-white hover:underline">About</RouterLink>
    <RouterLink to="/contact" @click="close" class="font-sans font-medium text-sm text-black dark:text-white  hover:underline">Contact Us</RouterLink>
  </div>
</template>

