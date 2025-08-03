<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <h1 class="text-9xl font-extrabold text-[#56B280]">404</h1>
    <p class="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
    <p class="text-gray-500 mt-2">The page you are looking for doesn't exist or has been moved.</p>

    <router-link
      to="/"
      class="mt-6 px-6 py-3 bg-[#56B280] text-white font-bold rounded-lg shadow-md hover:bg-[#46956F] transition duration-300">
      Back to Home
    </router-link>
  </div>
</template>
