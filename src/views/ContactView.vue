<script lang="ts" setup>
import { ref } from "vue"

const name = ref("")
const email = ref("")
const message = ref("")
</script>

<template>
  <div class="container mx-auto px-24 py-12">
    <div class="text-center font-poppins">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p class="text-gray-600 mt-4 dark:text-gray-300">
        Have any questions? Fill in the form below and we'll get back to you as soon as possible.
      </p>
    </div>

    <form class="max-w-lg mx-auto mt-8 space-y-6">
      <div>
        <label class="block text-gray-700 font-semibold mb-2 font-poppins dark:text-gray-400">Full Name</label>
        <input v-model="name" type="text" class="w-full border rounded-md p-3 font-poppins" placeholder="Enter your name" />
      </div>

      <div>
        <label class="block text-gray-700 font-semibold mb-2 font-poppins dark:text-gray-400">Email</label>
        <input v-model="email" type="email" class="w-full border rounded-md p-3 font-poppins" placeholder="Enter your email" />
      </div>

      <div>
        <label class="block text-gray-700 font-semibold mb-2 font-poppins dark:text-gray-400">Message</label>
        <textarea v-model="message" class="w-full border rounded-md p-3 font-poppins" rows="4" placeholder="Your message..."></textarea>
      </div>

      <button type="submit" class="w-full bg-[#56B280] text-white font-semibold py-3 font-poppins rounded-md">
        Send Message
      </button>
    </form>
  </div>
</template>
