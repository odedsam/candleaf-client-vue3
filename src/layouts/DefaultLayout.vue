<script setup lang="ts">
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import ToastManager from '@/components/shared/ToastManager.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Header />
    <main class="flex-1 container mx-auto p-6">
      <RouterView />
      <slot />
    </main>
    <Footer />
    <ToastManager />
  </div>
</template>

