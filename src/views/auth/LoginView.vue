<script setup lang="ts">
import { showToast } from '@/utils/toaster'
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
  <div class="container py-12">
    <LoginForm />
  </div>
</template>
