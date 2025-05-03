<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Toaster } from 'vue-sonner'
import ThemeToggle from './components/shared/ThemeToggle.vue';
</script>

<template>
  <Toaster position="top-right" />
  <ThemeToggle />
  <RouterView />
</template>


