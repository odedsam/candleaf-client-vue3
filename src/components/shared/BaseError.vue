  
  <script setup lang="ts">
  defineProps<{ message?: string }>()
  </script>

<template>
    <p v-if="message" class="text-red-500 text-sm mt-1">
      {{ message }}
    </p>
  </template>
