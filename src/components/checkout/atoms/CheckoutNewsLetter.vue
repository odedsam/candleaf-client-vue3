<script setup lang="ts">
import {ref} from 'vue'
import {RouterLink} from 'vue-router'
import {useCheckoutStore} from '@/stores/checkoutStore'
import {storeToRefs} from 'pinia'

const checkoutStore = useCheckoutStore()
const {contactInfo} = storeToRefs(checkoutStore)
const setContactInfo = checkoutStore.setContactInfo
</script>

<template>
  <div class="w-full grid mb-12 py-1">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg font-semibold">Contact</h2>
      <p class="text-sm text-gray-500">
        Do you have an account?
        <RouterLink to="/login" class="text-green-600 hover:underline">Login</RouterLink>
      </p>
    </div>

    <input
      :value="contactInfo.email"
      @input="setContactInfo({email: ($event.target as HTMLInputElement).value})"
      type="email"
      placeholder="Email"
      class="w-full p-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
    />

    <div class="flex items-center gap-2 mt-3">
      <input
        :checked="contactInfo.newsletter"
        @change="setContactInfo({newsletter: ($event.target as HTMLInputElement).checked})"
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
