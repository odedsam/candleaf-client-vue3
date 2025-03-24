<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteHeader from '@/components/layout/SiteHeader.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import CartModal from '@/components/shared/CartModal.vue'
</script>

<template>
  <div class="relative flex flex-col min-h-screen bg-white text-black
   dark:bg-zinc-900 dark:text-white transition-colors duration-300">
    <SiteHeader />
    <main class="flex-1 container mx-auto p-3 relative z-0">
      <ThemeToggle />
      <RouterView />
      <slot />
    </main>
    <CartModal />
    <SiteFooter />
  </div>
</template>
