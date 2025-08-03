<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Toaster } from 'vue-sonner'
import ThemeToggle from './components/shared/ThemeToggle.vue';
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'

// const auth = useAuthStore()

// onMounted(async () => {
//   if (!auth.user && document.cookie.split('; ').some(c => c.startsWith('candleaf_token='))) {
//     await auth.fetchCurrentUser()
//   }
// })
</script>

<template>
  <Toaster position="top-right" />
  <ThemeToggle />
  <RouterView />
</template>


