<script setup lang="ts">
defineProps<{ message?: null | string }>()
</script>

<template>
  <p v-if="message" class="text-red-500 text-sm mt-1 transition-all duration-200">
    {{ message }}
  </p>
</template>
