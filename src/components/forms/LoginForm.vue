<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/base/BaseInput.vue';
import GoogleLogin from '@/components/features/auth/GoogleLogin.vue';
import BaseError from '@/components/base/BaseError.vue';
import PasswordInput from '@/components/base/PasswordInput.vue';

const authStore = useAuthStore();
const router = useRouter();

const isSignUp = ref(false);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);
const validationErrors = ref<Record<string, string[]>>({});

const form = ref({
  name: '',
  email: '',
  password: '',
});

const handleSubmit = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  validationErrors.value = {};

  try {
    if (isSignUp.value) {
      await authStore.register({
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
      });
    // } else {
    //   await authStore.login({
    //     email: form.value.email,
    //     password: form.value.password,
    //   });
    }
  } catch (err: any) {
    if (err?.validationErrors) {
      validationErrors.value = err.validationErrors;
      errorMessage.value = 'Validation failed. Please correct the errors below.';
    } else {
      errorMessage.value = err.message || 'Something went wrong on the server.';
    }
  } finally {
    isLoading.value = false;
  }
};
</script>


<!-- fragylarence
 fragglarence26@gmail.com
makorewe423145 -->







<template>
  <div class="container text-center p-5 border border-emerald-500 py-12 rounded-3xl">
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <BaseError v-if="errorMessage" :message="errorMessage" />

      <BaseInput
        v-if="isSignUp"
        type="text"
        class="dark:text-gray-300"
        v-model="form.name"
        placeholder="Full Name"
        autocomplete="name"
        required
        :invalid="!!validationErrors.name"
        />
      <BaseError v-if="validationErrors.name" :message="validationErrors.name" />

      <BaseInput class="dark:text-gray-300" v-model="form.email" type="email" placeholder="Email" :autocomplete="'email'" required :invalid="!!validationErrors.email" />
      <BaseError v-if="validationErrors.email" :message="validationErrors.email" />

      <PasswordInput
        v-model="form.password"
        placeholder="Password"
        :autocomplete="'current-password'"
        :is-error="validationErrors.password ? validationErrors.password : null" />
      <BaseError v-if="validationErrors.password" :message="validationErrors.password" />

      <button class="bg-[#56B280] cursor-pointer w-full max-w-[13.375rem] text-white p-2 rounded-md" type="submit" :disabled="isLoading">
        {{ isLoading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In' }}
      </button>
    </form>

    <div class="my-4">
      <GoogleLogin :text="!isSignUp ? 'Sign In With Google' : 'Sign Up With Google'" />

      <p class="text-[#56B280] underline font-sans text-sm my-5">
        <RouterLink class="underline" to="/auth/forgot-password">
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
