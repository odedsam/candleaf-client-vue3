<script setup lang="ts">
import { defineProps, ref } from 'vue'

// Define Props
const props = defineProps<{
  modelValue: string
  placeholder: string
  icon?: string // Optional icon (emoji or image path)
  size?: 'full' | 'half' // Default: full-width
}>()

// Emits `update:modelValue` to enable `v-model`
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div :class="['relative', size === 'half' ? 'w-1/2' : 'w-full']">
    <input
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
    />
    
    <!-- Optional Icon -->
    <span v-if="icon" class="absolute right-3 top-2.5 text-gray-400">
      <img v-if="icon.startsWith('/')" :src="icon" alt="icon" class="w-5 h-5" />
      <span v-else>{{ icon }}</span> <!-- Emoji Support -->
    </span>
  </div>
</template>

<style scoped>
input {
  outline: none;
  transition: 0.2s ease-in-out;
}

input:focus {
  border-color: #56b280;
  box-shadow: 0 0 4px rgba(86, 178, 128, 0.5);
}
</style>