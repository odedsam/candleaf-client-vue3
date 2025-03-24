<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseError from '@/components/base/BaseError.vue';


const props = defineProps<{
  email: string
  subscribe: boolean
  invalid: boolean | string
  errMessage?: string
}>()

const emit = defineEmits(['update:email', 'update:subscribe'])
</script>

<template>
  <div class="w-full grid mb-12 py-1">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg font-semibold">Contact</h2>
      <p class="text-sm text-gray-500">
        Do you have an account?
        <RouterLink to="/auth/login" class="text-green-600 hover:underline">Login</RouterLink>
      </p>
    </div>

    <input
      :value="email"
      @input="emit('update:email', ($event.target as HTMLInputElement).value)"
      type="email"
      placeholder="Email"
      :class="[
        'w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500',
        props.invalid ? 'border-red-500' : 'border-green-300'
      ]"
    />

    <BaseError v-if="props.invalid" :message="props.errMessage" />


    <div class="flex items-center gap-2 mt-3">
      <input
        :checked="subscribe"
        @change="emit('update:subscribe', ($event.target as HTMLInputElement).checked)"
        type="checkbox"
        id="newsletter"
        class="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
      />
      <label for="newsletter" class="text-gray-700">Add me to Candleaf newsletter for a 10% discount</label>
    </div>
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