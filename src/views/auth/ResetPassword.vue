<script setup lang="ts">
import { API } from '@/utils';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LogoImage from '@/assets/icons/HeaderLogo.svg'

const route = useRoute();
const router = useRouter();

const token = ref(route.query.token);
const newPassword = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const message = ref('');
const isSuccess = ref(false);
const tokenValid = ref(false);
const resestUrl = `${API}/api/v1/auth/reset-password`;

onMounted(async () => {
  if (token.value) {
    tokenValid.value = true;
  } else {
    message.value = 'Invalid or missing reset token.';
  }
});

const resetPassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    message.value = 'Passwords do not match.';
    isSuccess.value = false;
    return;
  }

  loading.value = true;
  message.value = '';
  isSuccess.value = false;

  try {
    const response = await fetch(resestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token.value,
        newPassword: newPassword.value,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      message.value = data.message || 'Password reset successfully. You can now log in.';
      isSuccess.value = true;
      setTimeout(() => {
        router.push('/auth/login');
      }, 1500);
    } else {
      message.value = data.error || 'Failed to reset password. The reset link may be invalid or expired.';
    }
  } catch (error) {
    message.value = 'An unexpected error occurred.';
    console.error('Password reset error:', error);
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
      <p className="text-sm text-gray-500 text-center">Enter your New Password below </p>
    </div>
    <div class="border-2 border-[#56B280] rounded-xl grid justify-center items-center gap-4 py-12 px-3">
      <h2 class="text-center dark:text-white font-poppins text-gray-600 font-semibold">Reset Your Password</h2>
      <form v-if="tokenValid" @submit.prevent="resetPassword" class="">
        <div class="flex flex-col">
          <div class="flex flex-col gap-3 my-4">
            <label for="newPassword" class="text-start text-gray-500 font-poppins">New Password:</label>
            <input
              type="password"
              class="text-2xl border-2 rounded-lg border-gray-400 dark:border-white"
              id="newPassword"
              v-model="newPassword"
              required />
          </div>
          <div class="flex flex-col gap-3 my-4">
            <label for="confirmPassword" class="text-start text-gray-500 font-poppins">Confirm New Password:</label>
            <input
              type="password"
              class="text-2xl border-2 border-gray-400 rounded-lg dark:border-white"
              id="confirmPassword"
              v-model="confirmPassword"
              required />
          </div>
        </div>
        <div class="flex justify-center items-center my-4">
          <button type="submit" :disabled="loading">
            <pan v-if="loading">Resetting...</pan>
            <button
              class="bg-[#56B280] hover:bg-[#7ed6a3] cursor-pointer px-4 py-3 text-center border-none text-white rounded-xl font-poppins"
              v-else>
              Reset Password
            </button>
          </button>
        </div>
        <p v-if="message" :class="{ success: isSuccess, error: !isSuccess }">{{ message }}</p>
      </form>
      <p v-else class="dark:text-white font-poppins text-md">{{ message }}</p>
      <div class="flex justify-center items-center">
        <router-link
          class="bg-gray-200 hover:bg-[#56B280] hover:text-gray-200 text-[#56B280] text-center border-none py-3 px-4 rounded-xl font-poppins"
          to="/auth/login">
          Back to Log In
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
.success {
  color: green;
}
.error {
  color: red;
}
</style>
