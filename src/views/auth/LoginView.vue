<script setup lang="ts">
import { showToast } from '@/utils/toaster'
import { RouterLink } from 'vue-router'
import LogoImage from '@/assets/icons/HeaderLogo.svg'
import LoginForm from '@/components/forms/LoginForm.vue'

const loginSuccessToast = () => {
  showToast({
    ToastMessage: 'Login Success!',
    bgColor: '#56B280',
    textColor: '#fff',
    borderColor: '#ccc',
    position: 'top-right',
  })
}
</script>

<template>
  <div class="container fade-in-login py-12">
    <div className="flex flex-col items-center mb-6 fade-in">
     <RouterLink to="/" class="cursor-pointer"> <img :src="LogoImage" alt="Logo" className="w-14 h-14 mb-2" /></RouterLink>
      <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
      <p className="text-sm text-gray-500">Please sign in to your account</p>
    </div>
    <LoginForm />
  </div>
</template>

