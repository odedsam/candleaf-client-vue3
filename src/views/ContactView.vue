<script lang="ts" setup>
import { API, errorToast, successToast } from '@/utils';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = async () => {
  try {
    const response = await fetch(`${API}/api/v1/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error sending message:', errorData);
      errorToast(errorData?.message || 'Something went wrong.');
      return;
    }

    const responseData = await response.json();
    console.log('Message sent successfully:', responseData);
    successToast('Message sent successfully!');
    name.value = '';
    email.value = '';
    message.value = '';

  } catch (error) {
    console.error('Fetch error:', error);
    errorToast('Network error. Please try again.');
  }
};

</script>

<template>
  <div class="container mx-auto px-24 py-12">
    <div class="text-center font-poppins">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p class="text-gray-600 mt-4 dark:text-gray-300">
        Have any questions? Fill in the form below and we'll get back to you as soon as possible.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto mt-8 space-y-6">
      <div>
        <label class="block text-gray-700 font-semibold mb-2 font-poppins dark:placeholder:text-gray-200 dark:text-gray-400">Full Name</label>
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
