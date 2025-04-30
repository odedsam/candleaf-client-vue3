<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import { BASE_URL } from '@/utils'
import BaseInput from '../base/BaseInput.vue'
import GoogleLogin from '@/components/features/auth/GoogleLogin.vue'

const authStore = useAuthStore()
const router = useRouter()

const isSignUp = ref(false)
const isLoading = ref(false)
const errorMessage = ref<string | null>(null)

const form = ref({
  name: '',
  email: '',
  password: '',
})



const registerUrl =`${BASE_URL}/api/auth/register`;
const loginUrl = `${BASE_URL}/api/auth/login`;

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = null
  try {
    const endpoint = isSignUp.value ? registerUrl : loginUrl
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode:'no-cors',
      body: JSON.stringify(form.value),
    })

    if (!res.ok) {
      const { message } = await res.json().catch(() => ({ message: 'Something went wrong' }))
      throw new Error(message)
    }
    await authStore.fetchCurrentUser()
    router.push('/auth/login/success')
  } catch (err: any) {
    errorMessage.value = err.message || 'Login failed'
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="container text-center p-5 border border-emerald-500 py-12 rounded-3xl">
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <BaseInput v-if="isSignUp" v-model="form.name" placeholder="Full Name" />
      <BaseInput v-model="form.email" type="email" placeholder="Email" />
      <BaseInput v-model="form.password" type="password" placeholder="Password" class="mb-12" />

      <button
        class="bg-[#56B280] cursor-pointer w-full
        max-w-[13.375rem] text-white p-2 rounded-md"
        type="submit"
        :disabled="isLoading">
        {{ isLoading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In' }}
      </button>
         <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
    </form>

    <div class="my-4">
      <GoogleLogin :text="!isSignUp ? 'Sign In With Google': 'Sign Up With Google' " />
    </div>

    <p class="text-sm text-gray-500 text-center mt-2">
        {{ isSignUp ? 'Already have an account?' : "Don't have an account?" }}
        <span class="text-[#56B280] cursor-pointer underline ml-1" @click="isSignUp = !isSignUp">
          {{ isSignUp ? 'Sign in' : 'Sign up' }}
        </span>
    </p>

  </div>
</template>
