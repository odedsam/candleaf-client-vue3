<script setup lang="ts">
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'

const router = useRouter()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

onMounted(() => {
  if (user) {
    console.log(user.value);
    setTimeout(()=>{
      router.push('/')
    },3000)

  }
})
</script>

<template>
  <div v-if="user?.name" class="flex flex-col justify-center items-center gap-3">
    <h1 class="font-poppins font-semibold text-base sm:text-xl text-emerald-400">Welcome, {{ user.name.split(' ')[0] }}! Logging you in...</h1>
    <i-tabler-loader class="w-8 h-8 sm:w-10 sm:h-10 animate-spin text-emerald-500" />
  </div>
  <div v-else>
    <p> Logging you in...</p>
  </div>
</template>





