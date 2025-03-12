<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useAuthStore} from '@/stores/authStore'
import {fetchProfile} from '@/services/authService'

const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUserProfile()

  if (!authStore.user) {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }
})
</script>

<template>
  <div v-if="authStore.user?.name">
    <h1>מתחבר... ברוך הבא, {{ authStore.user.name }}</h1>
  </div>
  <div v-else>
    <p>מתחבר...</p>
  </div>
</template>
