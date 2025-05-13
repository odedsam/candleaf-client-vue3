<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import { API } from '@/utils';
import BaseInput from '@/components/base/BaseInput.vue';
import GoogleLogin from '@/components/features/auth/GoogleLogin.vue';
import BaseError from '@/components/base/BaseError.vue';

const authStore = useAuthStore();
const router = useRouter();
const isSignUp = ref(false);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);
const validationErrors = ref<Record<string, string[]>>({});
const loginUrl = `${API}/api/v1/auth/login`;
const registerUrl = `${API}/api/v1/auth/register`;

const form = ref({
  name: '',
  email: '',
  password: '',
  authMethod: 'local',
});

const handleSubmit = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  validationErrors.value = {};

  try {
    const endpoint = isSignUp.value ? registerUrl : loginUrl;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form.value),
    });

    if (!res.ok) {
      try {
        const errorData = await res.json();
        if (errorData?.errors) {
          validationErrors.value = errorData.errors;
          errorMessage.value = 'Validation failed. Please correct the errors below.';
        } else if (errorData?.message) {
          errorMessage.value = errorData.message;
        } else {
          errorMessage.value = 'Something went wrong on the server.';
        }
      } catch (parseError) {
        errorMessage.value = 'Failed to parse error response.';
      }
      return;
    }

    await authStore.fetchCurrentUser();
    router.push('/auth/login/success');
  } catch (err: any) {
    console.error('Fetch error:', err);
    errorMessage.value = err.message || 'Login/Registration failed due to network issues.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="container text-center p-5 border border-emerald-500 py-12 rounded-3xl">
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <BaseError v-if="errorMessage" :message="errorMessage" />
      <BaseInput
        v-if="isSignUp"
        class="dark:text-gray-300"
        v-model="form.name"
        placeholder="Full Name"
        :invalid="!!validationErrors.name" />
      <BaseError v-if="validationErrors.name" :message="validationErrors.name" />

      <BaseInput class="dark:text-gray-300" v-model="form.email" type="email" placeholder="Email" :invalid="!!validationErrors.email" />
      <BaseError v-if="validationErrors.email" :message="validationErrors.email" />

      <BaseInput
        class="dark:text-gray-300 mb-12"
        v-model="form.password"
        type="password"
        placeholder="Password"
        :invalid="!!validationErrors.password" />
      <BaseError v-if="validationErrors.password" :message="validationErrors.password" />

      <button class="bg-[#56B280] cursor-pointer w-full max-w-[13.375rem] text-white p-2 rounded-md" type="submit" :disabled="isLoading">
        {{ isLoading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In' }}
      </button>
    </form>

    <div class="my-4">
      <GoogleLogin :text="!isSignUp ? 'Sign In With Google' : 'Sign Up With Google'" />
      <p class="text-[#56B280] underline font-sans text-sm my-5">
        <RouterLink class="underline" :to="`/auth/forgot-password`">
            {{ !isSignUp ? 'Forgot Password? ' : '' }}
        </RouterLink>
      </p>
    </div>

    <p class="text-sm text-gray-500 text-center mt-2">
      {{ isSignUp ? 'Already have an account?' : "Don't have an account?" }}
      <span class="text-[#56B280] cursor-pointer underline ml-1" @click="isSignUp = !isSignUp">
        {{ isSignUp ? 'Sign in' : 'Sign up' }}
      </span>
    </p>
  </div>
</template>
