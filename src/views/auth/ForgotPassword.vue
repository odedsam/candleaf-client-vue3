<script setup lang="ts">
import { API } from '@/utils';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LogoImage from '@/assets/icons/HeaderLogo.svg'
const email = ref('');
const loading = ref(false);
const message = ref('');
const isSuccess = ref(false);
const router = useRouter();
const forgotUrl = `${API}/api/v1/auth/forgot-password`;

const requestReset = async () => {
  loading.value = true;
  message.value = '';
  isSuccess.value = false;

  try {
    const response = await fetch(forgotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await response.json();

    if (response.ok) {
      message.value = data.message || 'A password reset link has been sent to your email address.';
      isSuccess.value = true;
      email.value = '';
    } else {
      message.value = data.error || 'Failed to send reset link. Please try again.';
    }
  } catch (error) {
    message.value = 'An unexpected error occurred.';
    console.error('Forgot password request error:', error);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
 <div>
   <div className="flex flex-col items-center mb-6 fade-in">
     <RouterLink to="/" class="cursor-pointer"> <img :src="LogoImage" alt="Logo" className="w-14 h-14 mb-2" /></RouterLink>
      <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
      <p className="text-sm text-gray-500 text-center">Enter your email address below and we'll send you a link to reset your password.</p>
    </div>
    <div class="border-2 border-[#56B280] rounded-xl grid justify-center items-center gap-4 py-12 px-3">
      <h2 class="text-center dark:text-white font-poppins text-gray-600 font-semibold">Forgot Your Password?</h2>
      <p class="text-center dark:text-white text-sm tracking-tight font-poppins text-gray-600">
        Enter your email address below
      </p>
      <form @submit.prevent="requestReset">
        <div class="flex flex-col gap-3 justify-center items-center ">
          <label for="email" class="text-gray-500 font-poppins block text-center dark:text-white">Email:</label>
          <input type="email" class="text-lg border-2 border-gray-400 rounded-lg dark:border-white dark:text-white" id="email" v-model="email" required />
        </div>

      <div class="flex justify-center items-center py-6">
          <button type="submit" :disabled="loading" class="bg-[#56B280] hover:bg-[#7ed6a3] cursor-pointer px-4 py-3 text-center border-none text-white rounded-xl font-poppins">
            <span v-if="loading">Sending...</span>
            <span v-else>Send Reset Link</span>
          </button>
      </div>

        <p v-if="message" :class="{ success: isSuccess, error: !isSuccess }">{{ message }}</p>
      </form>
      <p class="dark:text-white text-center font-poppins">
        Remember your password?
        <router-link class="block text-[#56B280] my-2 text-center underline" to="/auth/login">Log In</router-link>
      </p>
    </div>
 </div>

</template>
