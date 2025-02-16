<script lang="ts" setup>
import { ref } from 'vue'
const errorMessage = ref<string | null>(null)
const setError = (message: string) => {
  errorMessage.value = message
}

const clearError = () => {
  errorMessage.value = null
}
</script>

<template>
  <div v-if="errorMessage" class="bg-red-500 text-white p-4 rounded relative">
    <p>{{ errorMessage }}</p>
    <button @click="clearError" class="absolute top-2 right-2 text-white">
      X
    </button>
  </div>
</template>

<style scoped>
</style>
