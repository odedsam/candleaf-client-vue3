<script setup lang="ts">
import {ref, watch, onMounted} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import BaseInput from '@/components/shared/BaseInput.vue'
import GoogleLogIn from '@/components/ui/GoogleLogIn.vue'

const isSignUp = ref(false)
const isLoading = ref(false)
const errorMessage = ref<string | null>(null)

const form = ref({
  name: '',
  email: '',
  password: '',
})


</script>

<template>
  <div class="container text-center mx-auto p-5 border border-emerald-500 rounded-3xl">
    <h2 class="mb-6">{{ isSignUp ? 'Sign Up' : 'Sign In' }}</h2>

    <form @submit.prevent="" class="space-y-3">
      <BaseInput v-if="isSignUp" v-model="form.name" placeholder="Full Name" />
      <BaseInput v-model="form.email" type="email" placeholder="Email" />
      <BaseInput
        v-model="form.password"
        type="password"
        placeholder="Password"
      />

      <button
        class="bg-[#56B280] cursor-pointer max-w-[13.375rem] text-white p-2 rounded-md w-full"
        type="submit"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In' }}
      </button>
    </form>

    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

    <div class="my-4">
      <GoogleLogIn />
    </div>
  </div>
</template>
